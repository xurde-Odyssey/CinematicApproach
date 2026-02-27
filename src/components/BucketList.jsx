import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const visions = [
    { id: 1, title: 'Long Road Trip', status: 'pending', description: 'Embarking on a limitless journey across the country, feeling the wind and freedom of the open road. It\'s about creating unforgettable memories with friends while discovering hidden gems along the way.' },
    { id: 2, title: 'Start YouTube Channel', status: 'completed', description: 'Launching "Xurde Odyssey" to document and share every step of my creative journey with the world. This platform will serve as a visual diary, inspiring others to chase their own artistic dreams.' },
    { id: 3, title: 'Solo Trip', status: 'pending', description: 'Venturing into the unknown completely alone to test my resilience and discover my true self. It\'s a quest for silence and clarity, away from the noise of everyday life.' },
    { id: 4, title: 'Master Videography', status: 'pending', description: 'Dedicating myself to the art of visual storytelling, mastering light, composition, and movement. My goal is to capture the world\'s beauty in cinematic quality that evokes deep emotion.' },
    { id: 5, title: 'Run a Marathon', status: 'completed', description: 'Completed on February 21, 2026 at the Dharan 10K Run (14th Newa Charity Run) with a finish time of 1 hour 18 minutes.' },
    { id: 6, title: 'Read 100 Books', status: 'pending', description: 'Expanding my intellectual horizons by diving into a hundred different worlds and perspectives. Each book offers a new piece of wisdom, slowly building a library of knowledge within my mind.' },
    { id: 7, title: 'Complete 10 trek', status: 'pending', description: 'As i love to travel and hike in Nepal, i want to complete 10 trek in Nepal. I have already completed 5 trek so far.' },
];

const VisionCard = ({ vision }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isCompleted = vision.status === 'completed';

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
            style={{
                perspective: '1000px',
                height: '220px'
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(20, 20, 20, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '24px',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: isHovered
                        ? `0 20px 40px -10px ${isCompleted ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)'}`
                        : '0 10px 20px -10px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                }}
            >
                {/* Status Badge */}
                <div
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                    style={{
                        backgroundColor: isCompleted ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                        color: isCompleted ? '#34D399' : '#60A5FA', // Light luxury green / light blue
                        border: `1px solid ${isCompleted ? 'rgba(16, 185, 129, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                    }}
                >
                    {isCompleted ? <CheckCircle2 size={12} /> : <Circle size={12} />}
                    {isCompleted ? 'Completed' : 'Not Yet'}
                </div>

                <div>
                    <h3
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.5rem',
                            color: '#fff',
                            marginBottom: '12px',
                            paddingRight: '80px', // Space for badge
                            textShadow: isHovered
                                ? `0 0 20px ${isCompleted ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                                : 'none',
                            transition: 'text-shadow 0.3s ease'
                        }}
                    >
                        {vision.title}
                    </h3>
                    <p
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            color: 'rgba(255, 255, 255, 0.6)',
                            transition: 'color 0.3s ease',
                        }}
                        className="group-hover:text-white/80"
                    >
                        {vision.description}
                    </p>
                </div>

                {/* Bottom decorative line */}
                <div
                    style={{
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        marginTop: 'auto',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '1px'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: '100%',
                            backgroundColor: isCompleted ? '#10B981' : '#3B82F6',
                            transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
                            transition: 'transform 0.5s ease',
                            opacity: 0.6
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const BucketList = () => {
    return (
        <section
            style={{
                padding: '120px 5vw',
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 10 }}>
                <span className="text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                    Life Goals
                </span>
                <h2 style={{
                    fontSize: 'clamp(3rem, 7vw, 5rem)',
                    marginBottom: '20px',
                    background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.4))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Bucket List
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}>
                    A collection of dreams chased and horizons yet to be explored.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '24px',
                    width: '100%',
                    maxWidth: '1200px',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                {visions.map((vision) => (
                    <VisionCard key={vision.id} vision={vision} />
                ))}
            </div>
        </section>
    );
};

export default BucketList;
