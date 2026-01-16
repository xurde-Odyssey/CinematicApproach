import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    { era: 'Curiosity', year: '2015', text: 'The first time I touched a computer...' },
    { era: 'Creation', year: '2018', text: 'My first design...' },
    { era: 'Code', year: '2020', text: 'When I realized code is art...' },
    { era: 'Cinema', year: '2022', text: 'When visuals became stories...' },
    { era: 'Now', year: '2026', text: 'Building immersive digital worlds.' },
];

const Timeline = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollWidth = scrollRef.current.offsetWidth;
        const amountToScroll = scrollWidth - window.innerWidth;

        gsap.to(scrollRef.current, {
            x: -amountToScroll,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${amountToScroll}`,
                pin: true,
                scrub: 1,
                // markers: true,
            },
        });
    }, []);

    return (
        <div ref={containerRef} style={{ overflow: 'hidden' }}>
            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    width: 'max-content',
                    height: '100vh',
                    alignItems: 'center',
                    padding: '0 5vw',
                }}
            >
                <div style={{ paddingRight: '20vw' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 8rem)',
                            fontFamily: 'var(--font-serif)',
                            whiteSpace: 'nowrap',
                            opacity: 0.1,
                            lineHeight: 1,
                        }}
                    >
                        EVOLUTION
                    </h2>
                </div>

                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width: '100vw',
                            maxWidth: '600px',
                            padding: '0 50px',
                            flexShrink: 0,
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1rem',
                                color: 'var(--accent-color)',
                                marginBottom: '10px',
                            }}
                        >
                            {item.year}
                        </div>
                        <h3
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                marginBottom: '20px',
                            }}
                        >
                            {item.era}
                        </h3>
                        <p
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.5,
                                color: 'var(--text-secondary)',
                                fontFamily: 'var(--font-sans)',
                            }}
                        >
                            {item.text}
                        </p>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-10vh',
                                left: '20px',
                                fontSize: '10rem',
                                opacity: 0.03,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                        >
                            0{index + 1}
                        </div>
                    </div>
                ))}

                <div style={{ width: '40vw' }} />
            </div>
        </div>
    );
};

export default Timeline;
