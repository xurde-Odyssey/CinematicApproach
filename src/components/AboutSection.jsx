import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const visualRef = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {
        const textLines = textRef.current.querySelectorAll('p');

        // Text Reveal Animation
        gsap.fromTo(
            textLines,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        const skills = [
            { name: "Premium Web Design", level: 92 },
            { name: "Content Strategy", level: 88 },
            { name: "UI/UX Research", level: 85 },
        ];

        // Visual Parallax Effect
        gsap.to(visualRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                position: 'relative',
                padding: '100px 5vw',
                overflow: 'hidden',
            }}
        >
            {/* Left: Cinematic Visual */}
            <div
                style={{
                    flex: '1 1 400px',
                    height: '600px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
            >
                <div
                    ref={visualRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '120%',
                        background: 'linear-gradient(45deg, var(--bg-color), var(--glow-color))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '5rem',
                        opacity: 0.5,
                    }}
                >
                    👤
                </div>
            </div>

            {/* Right: Story-based Text */}
            <div
                ref={textRef}
                style={{
                    flex: '1 1 400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '40px',
                    maxWidth: '600px',
                }}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    Strategic Digital Creator & <br />
                    <span className="text-[var(--highlight)]">Web Developer</span>
                </h2>

                <div className="space-y-6 text-lg text-[var(--color-text)]/80 leading-relaxed max-w-xl">
                    <p ref={(el) => (textRefs.current[0] = el)}>
                        I am dedicated to engineering impactful digital experiences. By synthesizing technical precision in web development with a sophisticated lens for UI/UX design, I deliver solutions that are as functional as they are visually compelling.
                    </p>
                    <p ref={(el) => (textRefs.current[1] = el)}>
                        My professional ethos is rooted in <strong>digital storytelling</strong>—bridging the gap between complex technology and human connection. I empower brands to amplify their presence through modern, conversion-focused design and high-value content strategy.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
