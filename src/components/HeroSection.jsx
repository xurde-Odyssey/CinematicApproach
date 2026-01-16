import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Youtube } from 'lucide-react';

const HeroSection = () => {
    const sectionRef = useRef(null);
    const spotlightRef = useRef(null);
    const lineRef = useRef(null);
    const sublineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

        // Ensure elements exist before animating
        if (lineRef.current && sublineRef.current && ctaRef.current) {
            tl.fromTo(
                lineRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, delay: 0.5 }
            )
                .fromTo(
                    sublineRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0 },
                    '-=1'
                )
                .fromTo(
                    ctaRef.current.children,
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, stagger: 0.2 },
                    '-=1'
                );
        }

        const handleMouseMove = (e) => {
            if (!spotlightRef.current) return;
            const { clientX, clientY } = e;
            const x = clientX - sectionRef.current.getBoundingClientRect().left;
            const y = clientY - sectionRef.current.getBoundingClientRect().top;

            gsap.to(spotlightRef.current, {
                x: x,
                y: y,
                duration: 1,
                ease: 'power2.out'
            });
        };

        const sectionElement = sectionRef.current;
        if (sectionElement) {
            sectionElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (sectionElement) {
                sectionElement.removeEventListener('mousemove', handleMouseMove);
            }
            tl.kill();
        };
    }, []);

    const socialLinks = [
        { icon: Twitter, href: "https://x.com/Xurde5Odyssey", label: "Twitter" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/dipesh-bhandari-898721243/", label: "LinkedIn" },
        { icon: Youtube, href: "https://www.youtube.com/@xurde-Odyssey", label: "YouTube" },
        { icon: Mail, href: "mailto:chipmunk.py@gmail.com", label: "Email" },
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background Interactive Elements */}
            <div
                ref={spotlightRef}
                className="pointer-events-none absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--highlight)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 z-0 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-1000"
            />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text Content */}
                <div className="space-y-8">
                    <div className="inline-block px-4 py-2 rounded-full border border-[var(--color-text)]/20 backdrop-blur-md">
                        <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-text)]/80">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                            Available for New Projects
                        </span>
                    </div>

                    <h1 ref={lineRef} className="text-5xl md:text-7xl font-bold leading-tight">
                        Empowering Brands Through <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] to-[var(--highlight)] glitch-text" data-text="Digital Innovation">
                            Digital Innovation
                        </span>
                    </h1>

                    <p ref={sublineRef} className="text-xl md:text-2xl text-[var(--color-text)]/70 max-w-xl leading-relaxed">
                        I'm <strong className="text-[var(--color-text)]">Dipesh Bhandari</strong>. A creator specialized in building modern web applications and cinematic visual content. Crafting the future one pixel at a time.
                    </p>

                    <div ref={ctaRef} className="flex flex-wrap gap-6">
                        <button className="group relative px-8 py-4 bg-[var(--color-text)] text-[var(--color-bg)] font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-[var(--highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference"></div>
                        </button>
                        <button className="px-8 py-4 border border-[var(--color-text)]/30 rounded-full font-bold hover:bg-[var(--color-text)]/5 transition-colors duration-300">
                            View Portfolio
                        </button>
                    </div>

                    <div className="flex gap-6 pt-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="p-3 rounded-full border border-[var(--color-text)]/20 hover:border-[var(--highlight)] hover:text-[var(--highlight)] transition-colors duration-300"
                                aria-label={link.label}
                            >
                                <link.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column: Visual or 3D Element */}
                <div className="relative hidden lg:block h-[600px] w-full">
                    {/* Abstract Floating Cards / Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                        <div className="relative w-80 h-96 border border-[var(--color-text)]/10 rounded-2xl backdrop-blur-sm bg-[var(--color-text)]/5 p-6 transform rotate-6 hover:rotate-0 transition-transform duration-700">
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--highlight)] rounded-full blur-2xl opacity-40"></div>
                            <div className="h-full flex flex-col justify-between">
                                <div className="text-4xl">🎥</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Vlogger</h3>
                                    <p className="opacity-60">20+ Vlogs Produced</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 border border-[var(--color-text)]/10 rounded-2xl backdrop-blur-md bg-[var(--color-bg)]/80 p-6 shadow-2xl">
                            <div className="h-full flex flex-col justify-between">
                                <div className="text-4xl">🏔️</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Passion</h3>
                                    <p className="opacity-60">Himalayan Adventures</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-10 -left-10 w-64 p-4 border border-[var(--color-text)]/10 rounded-xl backdrop-blur-md bg-[var(--color-text)]/5 animate-float-delayed">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[var(--highlight)]/20 rounded-lg text-[var(--highlight)]">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs opacity-50 uppercase tracking-wider">Based in</p>
                                    <p className="font-bold">Nepal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <span className="text-xs uppercase tracking-[0.3em]">Scroll to Explore</span>
            </div>
        </section>
    );
};

export default HeroSection;
