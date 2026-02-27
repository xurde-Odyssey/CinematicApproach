import React from 'react';
import {
    ArrowRight,
    Camera,
    Scissors,
    Send,
    MessageCircle,
    Twitter,
    Linkedin,
    Youtube,
    Mail
} from 'lucide-react';

const howItWorks = [
    {
        title: 'Record',
        description: 'I cover your full function in a natural, raw vlog style without staged cinematic setups.',
        icon: Camera
    },
    {
        title: 'Edit',
        description: 'Quick and clean edits focused on real moments, story flow, and watchable pacing.',
        icon: Scissors
    },
    {
        title: 'Upload',
        description: 'I publish your function vlog on my YouTube channel and share the final link with you.',
        icon: Send
    }
];

const packages = [
    {
        name: 'Weddings & Marriages',
        description: 'YouTube vlogger creating raw, natural coverage of weddings and marriage functions.',
        points: ['Full function moments', 'Family + ritual coverage', 'Natural storytelling style']
    },
    {
        name: 'Birthdays & Parties',
        description: 'YouTube vlogger creating raw, natural coverage of birthday parties and celebrations.',
        points: ['Entry to ending highlights', 'Guest interactions', 'Edited vlog for channel upload']
    },
    {
        name: 'Trekking & Religious Occasions',
        description: 'YouTube vlogger creating raw, natural coverage of trekking trips and religious occasions.',
        points: ['Journey and key moments', 'Real atmosphere capture', 'Simple and authentic final vlog']
    }
];

const featuredRawVlogs = [
    {
        id: 'A1',
        title: 'Sample Wedding Function vlog',
        description: 'Description coming soon.',
        youtubeUrl: 'https://www.youtube.com/@xurde-Odyssey/videos'
    },
    {
        id: 'A2',
        title: 'Sample Birthday Party vlog',
        description: 'Description coming soon.',
        youtubeUrl: 'https://www.youtube.com/@xurde-Odyssey/shorts'
    },
    {
        id: 'A3',
        title: 'Sample Religious Occasion vlog',
        description: 'Description coming soon.',
        youtubeUrl: 'https://www.youtube.com/@xurde-Odyssey/playlists'
    }
];

const HireMePage = () => {
    return (
        <main className="relative min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-fuchsia-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <section className="relative min-h-[80vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-black to-[var(--bg-color)]" />
                <div className="absolute top-[-18%] left-[-6%] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-8%] h-[520px] w-[520px] rounded-full bg-amber-400/15 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.035]" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-18 h-full flex flex-col justify-end gap-6">
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState({}, '', '/');
                            window.dispatchEvent(new PopStateEvent('popstate'));
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-[0.2em] text-white/85 hover:bg-white/15 transition-colors w-fit">
                        <ArrowRight className="rotate-180" size={14} /> Back to Portfolio
                    </a>
                    <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-4 md:gap-6 max-w-6xl items-start">
                        <div className="bg-black/35 border border-white/10 rounded-3xl p-6 md:p-9 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                            <p className="inline-flex items-center rounded-full bg-amber-300 text-black px-3 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.28em] mb-5 border border-amber-200">
                                Raw event vlog service
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.94] tracking-tight">
                                <span className="text-amber-300">Capture The Real Vibe.</span>
                                <span className="block text-white/70">Share Your Story On YouTube.</span>
                            </h1>
                            <p className="mt-6 text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
                                I&apos;m not your professional videographer, I&apos;m your behind-the-scenes guy. Startup YouTube vlogger for weddings, birthday parties, trekking trips, and religious occasions. I document your complete function in a natural raw style and deliver a story-driven vlog ready for publishing.
                            </p>
                            <p className="mt-4 text-amber-200/90 text-sm md:text-base font-medium">
                                Trusted by real families and events across Nepal.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="#book-event" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-amber-300 transition-colors">
                                    Book Your Event <ArrowRight size={16} />
                                </a>
                                <a href="#how-it-works" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors">
                                    How It Works
                                </a>
                                <a href="https://wa.me/9779812345679?text=Hi%2C%20I%20want%20to%20book%20an%20event%20vlog." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-300/50 text-emerald-200 font-semibold hover:bg-emerald-300/10 transition-colors">
                                    WhatsApp <MessageCircle size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="bg-black/30 border border-white/10 rounded-3xl p-5 md:p-7 backdrop-blur-sm">
                            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/45 mb-5">Service Highlights</p>
                            <div className="space-y-3 text-sm text-white/80">
                                <div className="border border-white/10 rounded-xl p-3.5 bg-black/20">
                                    <p className="text-white font-semibold">Complete Function Coverage</p>
                                    <p className="text-white/60 mt-1">From key rituals to crowd moments and ending highlights.</p>
                                </div>
                                <div className="border border-white/10 rounded-xl p-3.5 bg-black/20">
                                    <p className="text-white font-semibold">Raw, Natural Storytelling</p>
                                    <p className="text-white/60 mt-1">No staged cinematic setup, just real moments and energy.</p>
                                </div>
                                <div className="border border-white/10 rounded-xl p-3.5 bg-black/20">
                                    <p className="text-white font-semibold">YouTube-Ready Output</p>
                                    <p className="text-white/60 mt-1">Edited in vlog format and shared through my channel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-mono">Featured Samples</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3">Raw vlog samples from real functions</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {featuredRawVlogs.map((vlog) => (
                        <article key={vlog.id} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-7">
                            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/45 mb-3">Card {vlog.id}</p>
                            <h3 className="text-xl font-semibold text-white mb-3">{vlog.title}</h3>
                            <p className="text-white/65 text-sm leading-relaxed mb-6">{vlog.description}</p>
                            <a
                                href={vlog.youtubeUrl}
                                className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition-colors"
                            >
                                    Watch Sample <ArrowRight size={14} />
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            <section id="how-it-works" className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-mono">How It Works</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {howItWorks.map((step) => (
                        <article key={step.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-7">
                            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 mb-5">
                                <step.icon size={22} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-white/65 leading-relaxed text-sm">{step.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24">
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-mono">Packages</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3">Simple vlog services for events</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {packages.map((pack, index) => (
                        <article
                            key={pack.name}
                            className={`rounded-2xl border p-6 md:p-7 ${index === 1 ? 'border-amber-300/60 bg-amber-100/5' : 'border-white/15 bg-white/[0.03]'}`}
                        >
                            <h3 className="text-xl font-semibold">{pack.name}</h3>
                            <p className="text-white/65 text-sm leading-relaxed mt-4">{pack.description}</p>
                            <ul className="mt-6 space-y-3 text-sm text-white/80">
                                {pack.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2">
                                        <span className="text-amber-400">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <footer id="book-event" className="relative z-10 border-t border-white/10 bg-black/30">
                <div className="max-w-6xl mx-auto px-6 py-14 md:py-16 grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-mono">Book Your Event</p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">Let&apos;s Make It Unforgettable</h2>
                        <p className="text-white/65 leading-relaxed mt-4 max-w-md">
                            Hire me for vlog creation of your marriage, party, trekking journey, or religious event.
                            Send your details and I will confirm availability and the right package.
                        </p>
                        <p className="text-white/65 leading-relaxed mt-3 max-w-md">
                            Based in Dharan, Nepal. Available across Nepal (travel charges apply).
                        </p>
                        <p className="text-amber-200/90 leading-relaxed mt-2 max-w-md font-medium">
                            Delivery timeline: draft in 48-72 hours, based on event length.
                        </p>

                        <div className="mt-7 bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                            <p className="text-xs uppercase tracking-[0.3em] text-amber-300 font-mono mb-4">What You Get</p>
                            <ul className="space-y-2 text-sm text-white/85">
                                <li className="flex items-start gap-2"><span className="text-amber-300">•</span><span>Full vlog edit</span></li>
                                <li className="flex items-start gap-2"><span className="text-amber-300">•</span><span>1 thumbnail</span></li>
                                <li className="flex items-start gap-2"><span className="text-amber-300">•</span><span>YouTube upload support</span></li>
                                <li className="flex items-start gap-2"><span className="text-amber-300">•</span><span>2 short clips</span></li>
                            </ul>
                        </div>
                        <div className="flex gap-3 mt-8">
                            <a href="https://x.com/Xurde5Odyssey" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/dipesh-bhandari-898721243/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.youtube.com/@xurde-Odyssey" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                <Youtube size={18} />
                            </a>
                            <a href="mailto:chipmunk.py@gmail.com" className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <form action="https://formsubmit.co/chipmunk.py@gmail.com" method="POST" className="space-y-4 bg-gradient-to-b from-[#14171f] to-[#0f1118] border border-amber-200/20 rounded-2xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] [color-scheme:light]">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="Raw event vlog booking request" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="booking-field w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-black placeholder:text-black/45 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="booking-field w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-black placeholder:text-black/45 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                        />
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="event_type"
                                placeholder="Event Type (Wedding, Birthday, Trek...)"
                                className="booking-field w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-black placeholder:text-black/45 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                            />
                            <input
                                type="date"
                                name="event_date"
                                className="booking-field w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-amber-400 focus:bg-white transition-colors [color-scheme:light]"
                            />
                        </div>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Tell me your event plan, location, date, and what coverage you want."
                            className="booking-field w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-black placeholder:text-black/45 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors resize-none"
                        />
                        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-amber-300 border border-amber-300/70 font-semibold hover:bg-amber-300 hover:text-black transition-colors">
                            Book Your Event <ArrowRight size={16} />
                        </button>
                    </form>
                </div>
            </footer>
            <style>{`
                .booking-field {
                    color: #111111;
                    -webkit-text-fill-color: #111111;
                    caret-color: #111111;
                }
                .booking-field::placeholder {
                    color: rgba(17, 17, 17, 0.45);
                    -webkit-text-fill-color: rgba(17, 17, 17, 0.45);
                }
                .booking-field:-webkit-autofill,
                .booking-field:-webkit-autofill:hover,
                .booking-field:-webkit-autofill:focus {
                    -webkit-text-fill-color: #111111;
                    box-shadow: 0 0 0px 1000px #fffbeb inset;
                    -webkit-box-shadow: 0 0 0px 1000px #fffbeb inset;
                    transition: background-color 5000s ease-in-out 0s;
                }
                input[type="date"].booking-field::-webkit-calendar-picker-indicator {
                    filter: none;
                    opacity: 0.9;
                }
            `}</style>
        </main>
    );
};

export default HireMePage;
