import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Youtube, MapPin } from 'lucide-react';
import PhotoImg from '../assets/images/photo.png';

const HeroSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const shapesRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // 1. Initial State (Hidden)
            gsap.set('.hero-text-line', { y: 100, opacity: 0, skewY: 5 });
            gsap.set('.hero-image-container', { scale: 0.8, opacity: 0, filter: 'blur(10px)' });
            gsap.set('.hero-meta', { opacity: 0, x: -20 });

            // 2. Sequence
            tl.to('.hero-image-container', {
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: 'expo.out'
            })
                .to('.hero-text-line', {
                    y: 0,
                    opacity: 1,
                    skewY: 0,
                    stagger: 0.1,
                    duration: 1
                }, '-=1')
                .to('.hero-meta', {
                    opacity: 1,
                    x: 0,
                    stagger: 0.1,
                    duration: 0.8
                }, '-=0.5');

            // 3. Mouse Parallax Effect
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 20;
                const y = (clientY / window.innerHeight - 0.5) * 20;

                gsap.to(imageRef.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: 'power2.out'
                });

                gsap.to(shapesRef.current, {
                    x: x * -1.5,
                    y: y * -1.5,
                    duration: 1.2,
                    ease: 'power2.out'
                });
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

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center bg-[var(--bg-color)] text-[var(--text-primary)] overflow-hidden transition-colors duration-700">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[80vh] h-[80vh] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[80vh] h-[80vh] bg-blue-900/10 rounded-full blur-[120px]" />
                <div ref={shapesRef} className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center h-screen">

                {/* Text Content (Left - Spans 7 cols) */}
                <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center space-y-12">

                    {/* Meta Header */}
                    <div className="hero-meta flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            System Online
                        </span>
                        <span>//</span>
                        <span>27.7172° N, 85.3240° E</span>
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

                    {/* Actions */}
                    <div className="hero-text-line flex flex-wrap gap-6 items-center">
                        <button className="group relative px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-color)] font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
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
                                    className="p-3 border border-[var(--text-primary)]/10 rounded-full hover:bg-[var(--text-primary)]/10 hover:border-[var(--text-primary)]/30 transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                    aria-label={link.label}
                                >
                                    <link.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visual Content (Right - Spans 5 cols) */}
                <div className="lg:col-span-5 relative h-[60vh] lg:h-full flex items-center justify-center lg:justify-end">
                    <div className="hero-image-container relative w-full max-w-md aspect-[3/4] group">

                        {/* Frame/Border Elements */}
                        <div className="absolute -inset-4 border border-[var(--text-primary)]/10 rounded-xl z-0 scale-95 group-hover:scale-100 transition-transform duration-700" />
                        <div className="absolute -inset-4 border border-[var(--text-primary)]/5 rounded-xl z-0 rotate-2 scale-95 group-hover:rotate-0 transition-transform duration-700 delay-75" />

                        {/* Main Image */}
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#111] z-10">
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/80 via-transparent to-transparent z-20" />
                            <img
                                ref={imageRef}
                                src={PhotoImg}
                                alt="Dipesh Bhandari"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 z-30 bg-[var(--text-primary)]/10 backdrop-blur-md border border-[var(--text-primary)]/20 px-4 py-2 rounded-lg flex items-center gap-3">
                                <MapPin size={16} className="text-[var(--text-primary)]" />
                                <div>

                                    <p className="text-xs font-bold text-[var(--text-primary)]">Nepal</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative 'Film' Strip or Code Elements could go here */}
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="hero-meta absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--text-primary)] to-transparent" />
            </div>
        </section>
    );
};

export default HeroSection;
