import React, { useState } from 'react';

const visions = [
    { id: 1, title: 'Long Road Trip', text: 'Completed. A journey of freedom with friends.' },
    { id: 2, title: 'Start YouTube Channel', text: 'Completed. Xurde Odyssey - Sharing the journey.' },
    { id: 3, title: 'Solo Trip', text: 'Pending. To somewhere unknown.' },
    { id: 4, title: 'Master Videography', text: 'Pending. Capturing the world in cinema quality.' },
    { id: 5, title: 'Run a Marathon', text: 'Pending. Pushing physical limits.' },
    { id: 6, title: 'Read 100 Books', text: 'Pending. Expanding the mind, one page at a time.' },
];

const VisionCard = ({ vision }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            style={{
                padding: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.5s cubic-bezier(0.2, 1, 0.3, 1)',
                transform: isExpanded ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                boxShadow: isExpanded ? '0 20px 40px rgba(0,0,0,0.5)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                minHeight: '200px',
                animation: `float ${Math.random() * 2 + 3}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
            }}
        >
            <h3
                style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: isExpanded ? 'var(--accent-color)' : '#fff',
                    transition: 'color 0.3s ease',
                }}
            >
                {vision.title}
            </h3>
            <p
                style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)',
                    opacity: isExpanded ? 1 : 0.5,
                    transition: 'opacity 0.3s ease',
                }}
            >
                {vision.text}
            </p>

            {isExpanded && (
                <div
                    style={{
                        marginTop: 'auto',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-color)',
                        letterSpacing: '0.1em'
                    }}
                >
                    [ VIEW VISION ]
                </div>
            )}

            {/* Glow Effect on Hover */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    boxShadow: isExpanded ? 'inset 0 0 20px var(--glow-color)' : 'none',
                    borderRadius: '15px',
                    pointerEvents: 'none',
                    transition: 'box-shadow 0.3s ease',
                }}
            />
        </div>
    );
};

const FutureVision = () => {
    return (
        <section
            style={{
                padding: '100px 5vw',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '20px' }}>
                    Bucket List
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    My dreams, goals, and the adventures I'm chasing.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                {visions.map((vision) => (
                    <VisionCard key={vision.id} vision={vision} />
                ))}
            </div>

            <style>
                {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
            </style>
        </section>
    );
};

export default FutureVision;
