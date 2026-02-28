const YOUTUBE_FEED_BASE = 'https://www.youtube.com/feeds/videos.xml?channel_id=';
const ALL_ORIGINS_BASE = 'https://api.allorigins.win/raw?url=';
const RSS2JSON_BASE = 'https://api.rss2json.com/v1/api.json?rss_url=';

function decodeXmlEntities(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseLatestFromFeed(xmlText) {
  const entryMatch = xmlText.match(/<entry[\s\S]*?<\/entry>/i);
  if (!entryMatch) return null;

  const entry = entryMatch[0];
  const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/i);
  const linkMatch = entry.match(/<link[^>]*href="([^"]+)"[^>]*>/i);
  const videoIdMatch = entry.match(/<(?:yt:)?videoId>([^<]+)<\/(?:yt:)?videoId>/i);

  const title = decodeXmlEntities(titleMatch?.[1]?.trim() || '');
  const link = linkMatch?.[1]?.trim() || '';
  const videoId = videoIdMatch?.[1]?.trim() || '';

  if (!title || !link) return null;

  return {
    title,
    link,
    thumbnail: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null
  };
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 Codex'
    }
  });
  if (!response.ok) return null;
  return response.text();
}

async function fetchLatestFromRss2Json(feedUrl) {
  const response = await fetch(`${RSS2JSON_BASE}${encodeURIComponent(feedUrl)}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 Codex'
    }
  });

  if (!response.ok) return null;
  const data = await response.json();
  if (data?.status !== 'ok' || !Array.isArray(data.items) || data.items.length === 0) {
    return null;
  }

  const item = data.items[0];
  if (!item?.title || !item?.link) return null;

  return {
    title: item.title,
    link: item.link,
    thumbnail: item.thumbnail || null
  };
}

export default async function handler(req, res) {
  const channelId = req.query?.channelId?.trim();

  if (!channelId || channelId === 'UC_YOUR_CHANNEL_ID_HERE') {
    return res.status(400).json({ error: 'Missing or invalid channelId' });
  }

  try {
    const feedUrl = `${YOUTUBE_FEED_BASE}${encodeURIComponent(channelId)}`;
    let latest = null;

    // 1) Direct feed
    const directXml = await fetchText(feedUrl);
    if (directXml) {
      latest = parseLatestFromFeed(directXml);
    }

    // 2) allorigins proxy
    if (!latest) {
      const proxiedXml = await fetchText(`${ALL_ORIGINS_BASE}${encodeURIComponent(feedUrl)}`);
      if (proxiedXml) {
        latest = parseLatestFromFeed(proxiedXml);
      }
    }

    // 3) rss2json fallback
    if (!latest) {
      latest = await fetchLatestFromRss2Json(feedUrl);
    }

    if (!latest) {
      return res.status(502).json({ error: 'Unable to resolve latest video from feed providers' });
    }

    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return res.status(200).json(latest);
  } catch {
    return res.status(500).json({ error: 'Failed to fetch latest vlog' });
  }
}
