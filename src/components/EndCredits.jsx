import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EndCredits = () => {
    const containerRef = useRef(null);
    const creditsRef = useRef(null);

    useEffect(() => {
        const creditsHeight = creditsRef.current.offsetHeight;

        gsap.fromTo(creditsRef.current,
            { y: '100%' },
            {
                y: `-${creditsHeight}`,
                duration: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <section
            ref={containerRef}
            style={{
                height: '300vh',
                backgroundColor: '#000',
                position: 'relative',
                overflow: 'hidden',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div
                ref={creditsRef}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '60px',
                    padding: '100px 0',
                }}
            >
                <div style={{ marginBottom: '100px' }}>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)' }}>FIN</h2>
                </div>

                <div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Creator</div>
                    <div style={{ fontSize: '1.5rem' }}>Dipesh Bhandari</div>
                </div>

                <div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Design</div>
                    <div style={{ fontSize: '1.5rem' }}>Digital Ego</div>
                </div>

                <div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Code</div>
                    <div style={{ fontSize: '1.5rem' }}>Vite / React / GSAP</div>
                </div>

                <div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Vision</div>
                    <div style={{ fontSize: '1.5rem' }}>The Pixel Universe</div>
                </div>

                <div style={{ marginTop: '200px' }}>
                    <p style={{ fontStyle: 'italic', opacity: 0.7, fontSize: '1.2rem' }}>
                        “Thank you for experiencing my world.”
                    </p>
                </div>

                <div style={{ marginTop: '100px' }}>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            padding: '16px 32px',
                            backgroundColor: 'transparent',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-mono)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            e.target.style.borderColor = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                        }}
                    >
                        Restart Experience
                    </button>
                </div>
            </div>
            <div className="mt-20 text-center opacity-50 text-sm">
                <p>© 2026 Xurde Designs. All rights reserved.</p>
                <p>Designed by <a href="#" className="font-bold hover:text-[var(--highlight)] text-[var(--color-text)] no-underline">Xurde</a></p>
                <p className="mt-2">Every universe begins with a single pixel.</p>
            </div>
        </section>
    );
};

export default EndCredits;
