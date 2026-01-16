import React, { useState } from 'react';

const BehindTheShot = () => {
    const [activeLayer, setActiveLayer] = useState(null);

    const layers = [
        { id: 'lighting', name: 'Lighting Layer', color: '#ffcc33', description: 'This shadow creates depth and focuses the eye.' },
        { id: 'color', name: 'Color Grading', color: '#00f2ff', description: 'This color evokes a sense of calm and futuristic stability.' },
        { id: 'motion', name: 'Animation Path', color: '#ff00ff', description: 'This motion path guides the user attention through the interface.' },
    ];

    return (
        <section
            style={{
                padding: '100px 5vw',
                minHeight: '100vh',
                backgroundColor: 'rgba(0,0,0,0.3)',
            }}
        >
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '10px' }}>
                    BEHIND THE SHOT
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    /Interactive process breakdown
                </p>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '1000px',
                        aspectRatio: '16/9',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        backgroundColor: '#111',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        cursor: 'crosshair',
                    }}
                >
                    {/* Base Image Placeholder */}
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '4rem',
                            opacity: 0.5,
                        }}
                    >
                        🎨
                    </div>

                    {/* Interactive Layers Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                        }}
                    >
                        {activeLayer === 'lighting' && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '10%',
                                    right: '10%',
                                    width: '40%',
                                    height: '80%',
                                    boxShadow: 'inset -100px 0 150px rgba(0,0,0,0.8)',
                                    border: '2px solid #ffcc33',
                                    borderRadius: '20px',
                                }}
                            />
                        )}
                        {activeLayer === 'color' && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 242, 255, 0.1)',
                                    mixBlendMode: 'overlay',
                                }}
                            />
                        )}
                        {activeLayer === 'motion' && (
                            <svg
                                style={{ position: 'absolute', width: '100%', height: '100%' }}
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M 100 400 Q 400 100 900 400"
                                    stroke="#ff00ff"
                                    strokeWidth="3"
                                    strokeDasharray="10 10"
                                    fill="none"
                                />
                            </svg>
                        )}
                    </div>

                    {/* Tooltip Overlay */}
                    {activeLayer && (
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '40px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                backdropFilter: 'blur(10px)',
                                padding: '15px 25px',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: '#fff',
                                textAlign: 'center',
                                maxWidth: '80%',
                                zIndex: 10,
                            }}
                        >
                            <div style={{ fontWeight: 'bold', marginBottom: '5px', color: layers.find(l => l.id === activeLayer).color }}>
                                {layers.find(l => l.id === activeLayer).name}
                            </div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                {layers.find(l => l.id === activeLayer).description}
                            </div>
                        </div>
                    )}
                </div>

                {/* Control Buttons */}
                <div style={{ display: 'flex', gap: '20px' }}>
                    {layers.map((layer) => (
                        <button
                            key={layer.id}
                            onMouseEnter={() => setActiveLayer(layer.id)}
                            onMouseLeave={() => setActiveLayer(null)}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: activeLayer === layer.id ? layer.color : 'rgba(255, 255, 255, 0.05)',
                                color: activeLayer === layer.id ? '#000' : '#fff',
                                border: `1px solid ${layer.color}`,
                                borderRadius: '30px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                            }}
                        >
                            {layer.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BehindTheShot;
