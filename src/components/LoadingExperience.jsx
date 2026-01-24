import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingExperience = ({ onComplete }) => {
    const containerRef = useRef(null);
    const pixelRef = useRef(null);
    const textRef = useRef(null);
    const counterRef = useRef(null);
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    onComplete: onComplete,
                });
            },
        });

        const ctx = gsap.context(() => {
            // 1. Initial State
            gsap.set(pixelRef.current, { scale: 0, opacity: 0 });
            gsap.set(textRef.current, { opacity: 0, y: 20 });
            gsap.set(counterRef.current, { opacity: 0 });

            // 2. The Birth of a Pixel (Pulse)
            tl.to(pixelRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: 'power4.out',
            })
                // Counter Animation (0 to 100)
                .to(counterRef.current, { opacity: 1, duration: 0.5 }, "-=1")
                .to({}, {
                    duration: 2.5,
                    onUpdate: function () {
                        const progress = this.progress();
                        setCount(Math.round(progress * 100));
                    }
                }, "-=0.5")
                // 3. Pixel Expansion (Horizon Line)
                .to(pixelRef.current, {
                    width: '100vw',
                    height: '1px',
                    borderRadius: 0,
                    duration: 1.2,
                    ease: 'expo.inOut',
                })
                // Hide Counter
                .to(counterRef.current, { opacity: 0, duration: 0.5 }, "-=0.8")
                // 4. Horizon Open
                .to(pixelRef.current, {
                    height: '100vh',
                    opacity: 0.05,
                    duration: 1.5,
                    ease: 'expo.inOut',
                })
                // 5. Text Reveal
                .to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                }, '-=1.2')
                // 6. Final Hold
                .to({}, { duration: 1 });
        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white overflow-hidden z-[10000]"
        >
            {/* Cinematic Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* The Pixel / Horizon Line */}
            <div
                ref={pixelRef}
                className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)]"
            />

            {/* Loading Counter */}
            <div
                ref={counterRef}
                className="absolute text-xs font-mono tracking-widest text-gray-500 mt-12"
            >
                INITIALIZING... {count}%
            </div>

            {/* Revealed Text */}
            <div
                ref={textRef}
                className="relative z-10 text-center pointer-events-none mix-blend-difference"
            >
                <h1 className="text-3xl md:text-5xl font-italic font-serif tracking-widest mb-2">
                    XURDE'S UNIVERSE
                </h1>
                <p className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-[0.3em]">
                    Digital Experience Loaded
                </p>
            </div>
        </div>
    );
};

export default LoadingExperience;
