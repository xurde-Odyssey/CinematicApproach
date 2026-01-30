import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CreditRow = ({ role, name, isTitle = false }) => (
    <div className="credit-item w-full grid grid-cols-[1fr_auto_1fr] items-center gap-8 mb-6 md:mb-10 last:mb-0">
        <div className={`text-right ${isTitle ? 'text-sm md:text-base opacity-40' : 'text-xs md:text-sm text-[var(--text-secondary)]'}`}>
            <span className="uppercase tracking-[0.3em] font-mono leading-none">{role}</span>
        </div>
        <div className="w-[1px] h-full bg-[var(--text-primary)]/10 hidden md:block self-stretch" />
        <div className={`text-left ${isTitle ? 'text-2xl md:text-4xl' : 'text-lg md:text-2xl'} font-serif`}>
            <span className="leading-tight block">{name}</span>
        </div>
    </div>
);

const EndCredits = () => {
    const containerRef = useRef(null);
    const creditsRef = useRef(null);
    const bgRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        if (!creditsRef.current || !containerRef.current) return;

        const ctx = gsap.context(() => {
            // Main Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=4000', // Scroll distance to complete credits
                    pin: true,
                    scrub: 1.5,
                    // snap: 1, // Optional: snap to end
                }
            });

            // 1. Background subtle movement
            gsap.to(bgRef.current, {
                y: '-15%',
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=4000',
                    scrub: true,
                }
            });

            // 2. Credits Scroll
            // Start: pushed down (visible at bottom or just below)
            // End: moved up completely
            tl.fromTo(creditsRef.current,
                { y: '100vh' },
                {
                    y: '-100%',
                    ease: 'none',
                    duration: 10
                }
            );

            // 3. Footer Reveal (fades in at the end)
            tl.fromTo(footerRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' },
                '-=1' // Overlay slightly with end of credits
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-[var(--bg-color)] text-[var(--text-primary)] overflow-hidden flex flex-col items-center justify-start h-screen w-full transition-colors duration-700"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }}
        >
            {/* Deep Space Background */}
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-[120%] pointer-events-none opacity-40 z-0"
                style={{
                    backgroundImage: `
                        radial-gradient(1.5px 1.5px at 15% 15%, #fff, transparent),
                        radial-gradient(1px 1px at 45% 35%, #fff, transparent),
                        radial-gradient(2px 2px at 75% 65%, #fff, transparent),
                        radial-gradient(1.5px 1.5px at 25% 85%, #fff, transparent),
                        radial-gradient(1px 1px at 85% 15%, #fff, transparent),
                        radial-gradient(2px 2px at 10% 45%, #fff, transparent),
                        radial-gradient(1.5px 1.5px at 65% 95%, #fff, transparent)
                    `,
                    backgroundSize: '300px 300px',
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

            {/* Scrolling Credits Container */}
            <div
                ref={creditsRef}
                className="relative z-20 w-full max-w-4xl px-6 flex flex-col items-center text-center pb-[50vh]"
            >
                {/* Spacer to ensuring starting position logic holds if needed, 
                    but y:100vh handles entry. We add padding to ensure breathing room. */}

                {/* Opening Sequence */}
                <div className="credit-item mb-[30vh] mt-[10vh] text-center">
                    <h2 className="text-6xl md:text-9xl font-serif tracking-widest mb-6 opacity-90 animate-pulse-slow">THE END</h2>
                    <div className="text-sm md:text-base uppercase tracking-[0.6em] text-[var(--text-secondary)]">A Digital Journey by Dipesh Bhandari</div>
                </div>

                {/* Main Cast / Roles */}
                <div className="w-full flex flex-col gap-2 mb-[20vh]">
                    <CreditRow role="Written & Directed by" name="Dipesh Bhandari" isTitle />
                    <CreditRow role="Creative Direction" name="Xurde Designs" />
                    <CreditRow role="Technical Lead" name="Antigravity AI" />
                </div>

                {/* Tech Stack */}
                <div className="credit-item mb-[20vh] w-full max-w-2xl">
                    <div className="text-xs uppercase tracking-[0.5em] text-[var(--text-secondary)] mb-12">Built with Cinema in Mind</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase tracking-widest">Engine</span>
                            <span className="text-sm font-mono">React / Vite</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase tracking-widest">Motion</span>
                            <span className="text-sm font-mono">GSAP / ScrollTrigger</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase tracking-widest">Design</span>
                            <span className="text-sm font-mono">Tailwind CSS</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase tracking-widest">Typeface</span>
                            <span className="text-sm font-mono">Playfair / Inter</span>
                        </div>
                    </div>
                </div>

                {/* Special Thanks */}
                <div className="credit-item mb-[30vh]">
                    <h3 className="text-xs uppercase tracking-[0.8em] text-secondary mb-16 px-4">Special Thanks to the Innovators, Creators & Dreamers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-xl md:text-2xl font-serif">
                        <p className="opacity-80">Open Source Community</p>
                        <p className="opacity-80">The Digital Renaissance</p>
                        <p className="opacity-80">Coffee & Late Nights</p>
                        <p className="opacity-80">The Infinite Horizon</p>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="credit-item max-w-xl">
                    <p className="text-xl md:text-3xl font-serif italic leading-relaxed opacity-70">
                        "Every universe begins with a single pixel, and every journey ends with a new perspective."
                    </p>
                </div>
            </div>

            {/* Final Interactive Footer - Appears at end */}
            <div
                ref={footerRef}
                className="absolute bottom-20 z-30 w-full max-w-4xl px-6 flex flex-col items-center gap-12 opacity-0"
            >
                <div className="w-px h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group relative px-10 py-5 bg-transparent border border-white/20 hover:border-white transition-all duration-700 pointer-events-auto"
                >
                    <span className="relative z-10 text-xs md:text-sm uppercase tracking-[0.4em] group-hover:tracking-[0.6em] transition-all duration-900">
                        Restart Experience
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-900" />
                </button>
                <div className="text-[10px] uppercase tracking-[0.5em] text-white/30">
                    © 2026. Xurde Designs | CINEMATIC APPROACH
                </div>
            </div>
        </section>
    );
};

export default EndCredits;
