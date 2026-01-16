import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingExperience = ({ onComplete }) => {
    const containerRef = useRef(null);
    const pixelRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Delay slightly before transitioning to the home page
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    onComplete: onComplete,
                });
            },
        });

        // Safety fallback: If animation hangs for any reason, force completion after 10s
        const safetyTimer = setTimeout(() => {
            if (containerRef.current) {
                onComplete();
            }
        }, 12000); // 12 seconds to cover total animation time

        return () => clearTimeout(safetyTimer);

        // 1. Initial State
        gsap.set(pixelRef.current, { scale: 0, opacity: 0 });
        gsap.set(textRef.current, { opacity: 0, y: 20 });

        // 2. The Birth of a Pixel
        tl.to(pixelRef.current, {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: 'power4.out',
        })
            // 3. Pixel Expansion / Pulse
            .to(pixelRef.current, {
                width: '100vw',
                height: '1px',
                borderRadius: 0,
                duration: 1.5,
                ease: 'expo.inOut',
            })
            .to(pixelRef.current, {
                height: '100vh',
                opacity: 0.1,
                duration: 1.5,
                ease: 'expo.inOut',
            })
            // 4. Text Reveal
            .to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
            }, '-=1')
            // 5. Final Hold
            .to({}, { duration: 2 });

    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                zIndex: 10000,
                overflow: 'hidden',
            }}
        >
            <div
                ref={pixelRef}
                style={{
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px #fff',
                    position: 'absolute',
                }}
            />
            <div
                ref={textRef}
                style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    letterSpacing: '0.2em',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            >
                <p>Every universe begins with a single pixel.</p>
                <p style={{ marginTop: '10px', fontSize: '0.8rem', opacity: 0.5 }}>FROM PIXEL TO UNIVERSE</p>
            </div>
        </div>
    );
};

export default LoadingExperience;
