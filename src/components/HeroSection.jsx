import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
    ArrowRight,
    Github,
    Twitter,
    Linkedin,
    Mail,
    Youtube,
    MapPin,
    Play,
    Clock,
    Video,
    Mountain,
    Code,
    Locate,
    Smartphone,
    Terminal
} from 'lucide-react';
import PhotoImg from '../assets/images/photo.png';

const HeroSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const shapesRef = useRef(null);
    const hudRef = useRef(null);
    const [daysOnEarth, setDaysOnEarth] = useState(0);
    const [latestVlog, setLatestVlog] = useState(null);
    const [loadingVlog, setLoadingVlog] = useState(true);

    const CHANNEL_ID = 'UC_4Rec2XAGsGRGdNtzY0eew';

    useEffect(() => {
        // 1. Calculate Days on Earth
        const birthDate = new Date('1999-06-26');
        const calculateDays = () => {
            const now = new Date();
            const difference = now - birthDate;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDaysOnEarth(days);
        };
        calculateDays();

        // 2. Fetch Latest Vlog
        const fetchLatestVlog = async () => {
            try {
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`);
                const data = await response.json();
                if (data.status === 'ok' && data.items.length > 0) {
                    setLatestVlog(data.items[0]);
                }
            } catch (error) {
                console.error('Error fetching vlog:', error);
            } finally {
                setLoadingVlog(false);
            }
        };

        if (CHANNEL_ID && CHANNEL_ID !== 'UC_YOUR_CHANNEL_ID_HERE') {
            fetchLatestVlog();
        } else {
            setLoadingVlog(false);
        }

        // 3. Animations
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Initial State
            gsap.set('.hero-text-line', { y: 100, opacity: 0, skewY: 5 });
            gsap.set('.hero-image-container', { scale: 0.9, opacity: 0, filter: 'blur(20px)' });
            gsap.set('.hero-meta', { opacity: 0, x: -20 });
            gsap.set('.vlog-card', { opacity: 0, y: 20 });
            gsap.set('.hud-element', { opacity: 0, scale: 0.8 });
            gsap.set('.identity-tag', { opacity: 0, x: 20 });

            // Entrance Sequence
            tl.to('.hero-image-container', {
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: 'expo.out'
            })
                .to('.hud-element', {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: 'back.out(1.7)'
                }, '-=0.8')
                .to('.identity-tag', {
                    opacity: 1,
                    x: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out'
                }, '-=1')
                .to('.hero-text-line', {
                    y: 0,
                    opacity: 1,
                    skewY: 0,
                    stagger: 0.1,
                    duration: 1
                }, '-=1.2')
                .to('.hero-meta', {
                    opacity: 1,
                    x: 0,
                    stagger: 0.1,
                    duration: 0.8
                }, '-=0.8')
                .to('.vlog-card', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                }, '-=0.5');

            // Mouse Parallax
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 20;
                const y = (clientY / window.innerHeight - 0.5) * 20;

                gsap.to(imageRef.current, { x, y, duration: 1.5, ease: 'power2.out' });
                gsap.to(shapesRef.current, { x: x * -1.5, y: y * -1.5, duration: 2, ease: 'power2.out' });
                gsap.to(hudRef.current, { x: x * 0.5, y: y * 0.5, rotationX: -y * 0.5, rotationY: x * 0.5, duration: 1.5, ease: 'power2.out' });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const socialLinks = [
        { icon: Twitter, href: "https://x.com/Xurde5Odyssey", label: "Twitter" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/dipesh-bhandari-898721243/", label: "LinkedIn" },
        { icon: Youtube, href: "https://www.youtube.com/@xurde-Odyssey", label: "YouTube" },
        { icon: Mail, href: "mailto:chipmunk.py@gmail.com", label: "Email" },
    ];

    const tags = [
        { icon: Video, label: "Vlogger", color: "text-red-400" },
        { icon: Mountain, label: "Trekker", color: "text-emerald-400" },
        { icon: Terminal, label: "Developer", color: "text-cyan-400" },
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center bg-[var(--bg-color)] text-[var(--text-primary)] overflow-hidden transition-colors duration-700">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[80vh] h-[80vh] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[80vh] h-[80vh] bg-blue-900/10 rounded-full blur-[120px]" />
                <div ref={shapesRef} className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center min-h-screen py-24 lg:py-0">

                {/* Left Content: Text & Vlog */}
                <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center space-y-10 order-2 lg:order-1">

                    {/* Meta Header */}
                    <div className="hero-meta flex flex-wrap items-center gap-6 text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            System Online
                        </span>
                        <span className="opacity-30">//</span>
                        <div className="flex items-center gap-2" title="Days since June 26, 1999">
                            <Clock size={12} className="text-[var(--accent-color)]" />
                            <span><span className="text-[var(--text-primary)] font-bold">{daysOnEarth.toLocaleString()}</span> Days on Earth</span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div className="space-y-2 overflow-hidden">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[var(--text-primary)] mix-blend-difference">
                            <div className="hero-text-line text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
                                Content Creator
                            </div>
                            <div className="hero-text-line flex items-center gap-4">
                                <span className="text-2xl md:text-4xl font-serif italic text-[var(--text-secondary)] font-normal tracking-normal self-end mb-2">
                                    & Web Developer
                                </span>
                            </div>
                        </h1>
                    </div>

                    {/* Subline */}
                    <p className="hero-text-line text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed border-l-2 border-[var(--text-primary)]/20 pl-6">
                        I'm <strong className="text-[var(--text-primary)]">Dipesh Bhandari</strong>.
                        Merging cinematic visuals with modern code to build immersive digital universes from the Himalayas.
                    </p>

                    {/* Actions & Links */}
                    <div className="hero-text-line flex flex-wrap gap-6 items-center">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                    window.dispatchEvent(new CustomEvent('openContact'));
                                }
                            }}
                            className="group relative px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-color)] font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-[var(--text-secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </button>

                        <div className="flex gap-4">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border border-[var(--text-primary)]/10 rounded-full hover:bg-[var(--text-primary)]/10 hover:border-[var(--text-primary)]/30 transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                    aria-label={link.label}
                                >
                                    <link.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Latest Vlog Section */}
                    <div className="vlog-card pt-8 border-t border-[var(--text-primary)]/10">
                        <div className="flex items-center gap-2 mb-4">
                            <Youtube size={16} className="text-red-500" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">Latest Transmission</span>
                        </div>

                        {latestVlog ? (
                            <a href={latestVlog.link} target="_blank" rel="noopener noreferrer" className="group flex gap-4 items-center bg-[var(--text-primary)]/5 p-4 rounded-xl hover:bg-[var(--text-primary)]/10 transition-all border border-transparent hover:border-[var(--text-primary)]/20">
                                <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                                    <img src={latestVlog.thumbnail} alt={latestVlog.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play size={12} fill="white" className="text-white ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[var(--text-primary)] line-clamp-1 mb-1 group-hover:text-[var(--accent-color)] transition-colors">
                                        {latestVlog.title}
                                    </h4>
                                    <p className="text-xs text-[var(--text-secondary)]">
                                        Watch on YouTube &rarr;
                                    </p>
                                </div>
                            </a>
                        ) : (
                            <div className="p-4 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 border-dashed text-center">
                                <p className="text-xs text-[var(--text-secondary)] font-mono">
                                    {CHANNEL_ID === 'UC_YOUR_CHANNEL_ID_HERE'
                                        ? "SIGNAL LOST: SYSTEM ID MISSING"
                                        : "NO TRANSMISSION DATA AVAILABLE"}
                                </p>
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Content: Stats & Image with Advanced Effects */}
                <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end order-1 lg:order-2 perspective-1000">
                    <div ref={hudRef} className="hero-image-container relative w-full max-w-sm md:max-w-md aspect-[3/4] group preserve-3d">

                        {/* HUD Elements */}
                        <div className="hud-element absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-[var(--accent-color)]/40 rounded-tl-2xl z-20 pointer-events-none" />
                        <div className="hud-element absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-[var(--accent-color)]/40 rounded-tr-2xl z-20 pointer-events-none" />
                        <div className="hud-element absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-[var(--accent-color)]/40 rounded-bl-2xl z-20 pointer-events-none" />
                        <div className="hud-element absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-[var(--accent-color)]/40 rounded-br-2xl z-20 pointer-events-none" />

                        {/* Interactive Identity Tags */}
                        <div className="absolute -right-12 top-1/4 flex flex-col gap-4 z-40">
                            {tags.map((tag, i) => (
                                <div
                                    key={i}
                                    className="identity-tag flex items-center gap-3 bg-[var(--bg-color)]/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full cursor-default hover:border-[var(--accent-color)]/40 hover:bg-[var(--bg-color)]/60 transition-all group/tag"
                                >
                                    <tag.icon size={16} className={`${tag.color} group-hover/tag:scale-110 transition-transform`} />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 group-hover/tag:text-white transition-colors">{tag.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#080808] z-10 transition-all duration-700 group-hover:translate-y-[-10px] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] group-hover:scale-[1.02]">

                            {/* Chromatic Aberration Layers (only visible on hover through CSS) */}
                            <img
                                src={PhotoImg}
                                alt="RGB Offset"
                                className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-0 group-hover:opacity-40 translate-x-[2px] transition-all duration-300 grayscale group-hover:grayscale-0"
                                style={{ filter: 'hue-rotate(90deg)' }}
                            />
                            <img
                                src={PhotoImg}
                                alt="RGB Offset 2"
                                className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-0 group-hover:opacity-40 -translate-x-[2px] transition-all duration-300 grayscale group-hover:grayscale-0"
                                style={{ filter: 'hue-rotate(-90deg)' }}
                            />

                            {/* Scanline Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-30" />

                            {/* Main Image */}
                            <img
                                ref={imageRef}
                                src={PhotoImg}
                                alt="Dipesh Bhandari"
                                className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 z-10"
                            />

                            {/* Vignette & Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/90 via-transparent to-transparent z-20" />

                            {/* Refined Location Badge */}
                            <div className="absolute bottom-6 left-6 z-30 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3 group/loc hover:bg-white/10 transition-colors">
                                <div className="p-1.5 bg-[var(--accent-color)]/20 rounded-lg group-hover/loc:bg-[var(--accent-color)]/40 transition-colors">
                                    <Locate size={14} className="text-[var(--accent-color)]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono text-white/40 leading-none mb-1">Based On</p>
                                    <p className="text-xs font-bold text-white leading-none tracking-wide">Nepal</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative HUD Data */}
                        <div className="absolute -bottom-12 right-0 flex flex-col items-end gap-1 opacity-20 pointer-events-none font-mono text-[8px] uppercase tracking-[0.2em]">
                            <div className="hud-element">Scan_Ref: 0xFD29</div>
                            <div className="hud-element text-[var(--accent-color)]">Status: Active</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="hero-meta absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden lg:flex">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--text-primary)] to-transparent" />
            </div>

            <style jsx>{`
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
