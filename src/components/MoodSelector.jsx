import React from 'react';
import { useMood, moods } from '../context/MoodContext';

const MoodSelector = () => {
    const { currentMood, setCurrentMood } = useMood();

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '15px',
            }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    marginBottom: '-5px',
                }}
            >
                Choose the World
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    padding: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                {moods.map((mood) => (
                    <button
                        key={mood.id}
                        onClick={() => setCurrentMood(mood.id)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: currentMood === mood.id ? 'var(--accent-color)' : 'transparent',
                            color: currentMood === mood.id ? 'var(--bg-color)' : 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            transform: currentMood === mood.id ? 'scale(1.1)' : 'scale(1)',
                        }}
                        title={mood.name}
                    >
                        {mood.icon}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoodSelector;
