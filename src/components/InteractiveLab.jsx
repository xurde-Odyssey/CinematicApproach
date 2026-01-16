import React, { useState } from 'react';
import { Disc3, Type, Split, Glasses } from 'lucide-react';

const LabCard = ({ title, icon, color, onClick }) => (
    <div
        onClick={onClick}
        style={{
            padding: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.boxShadow = `0 10px 30px ${color}22`;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        <div style={{ color: color }}>{icon}</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', textAlign: 'center' }}>
            {title}
        </div>
    </div>
);

const InteractiveLab = () => {
    const [activeTool, setActiveTool] = useState(null);

    const tools = [
        {
            id: "wheel",
            title: "Decision Wheel",
            icon: <Disc3 size={32} />,
            description: "Stop overthinking. Let the customizable wheel choose your destiny.",
            interactive: true,
            color: "#FF4B4B"
        },
        {
            id: "poem",
            title: "Daily Dose",
            icon: <Type size={32} />,
            description: "Literary sparks and random wisdom for your day. Poems, Essays, and Quotes.",
            interactive: true,
            color: "#4BFF4B"
        },
        {
            id: "mood",
            title: "Mood Story",
            icon: <Split size={32} />,
            description: "Generates a micro-story based on your current selected mood theme.",
            interactive: true,
            color: "#4B4BFF"
        },
        {
            id: "visual",
            title: "Favorites",
            icon: <Glasses size={32} />,
            description: "Books, Artists, Movies, and Himalayan Adventures that inspire me.",
            interactive: false,
            color: "#FFFF4B"
        }
    ];

    return (
        <section
            style={{
                padding: '100px 5vw',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '20px' }}>
                    Interactive Lab
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    A digital playground for experiments, tools, and creative detours.
                    Where ideas take their first steps.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                {tools.map((tool) => (
                    <LabCard
                        key={tool.id}
                        {...tool}
                        onClick={() => setActiveTool(tool)}
                    />
                ))}
            </div>

            {activeTool && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 2000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <button
                        onClick={() => setActiveTool(null)}
                        style={{
                            position: 'absolute',
                            top: '40px',
                            right: '40px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '2rem',
                            cursor: 'pointer',
                        }}
                    >
                        ✕
                    </button>

                    <div style={{ color: activeTool.color, marginBottom: '20px' }}>
                        {activeTool.icon}
                    </div>
                    <h2 style={{ color: '#fff', marginBottom: '40px' }}>{activeTool.title}</h2>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '800px',
                            height: '400px',
                            border: '1px dashed rgba(255, 255, 255, 0.2)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)',
                        }}
                    >
                        [ Tool Interface: {activeTool.title} coming soon ]
                    </div>
                </div>
            )}
        </section>
    );
};

export default InteractiveLab;
