import React, { useState, useEffect } from 'react';

const EasterEgg = () => {
    const [hoverTime, setHoverTime] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        let interval;
        if (hoverTime > 0 && !isRevealed) {
            interval = setInterval(() => {
                setHoverTime(prev => prev + 100);
            }, 100);
        }

        if (hoverTime >= 3000) {
            setIsRevealed(true);
            setHoverTime(0);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [hoverTime, isRevealed]);

    return (
        <div
            style={{
                position: 'fixed',
                left: '20px',
                bottom: '20px',
                zIndex: 500,
            }}
        >
            <div
                onMouseEnter={() => setHoverTime(100)}
                onMouseLeave={() => setHoverTime(0)}
                style={{
                    width: '4px',
                    height: '4px',
                    backgroundColor: 'var(--accent-color)',
                    opacity: isRevealed ? 1 : 0.2,
                    cursor: 'help',
                    transition: 'opacity 0.5s ease',
                    boxShadow: isRevealed ? '0 0 10px var(--accent-color)' : 'none',
                }}
            />

            {isRevealed && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '0',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        whiteSpace: 'nowrap',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        animation: 'fadeIn 0.5s ease',
                    }}
                >
                    “You see the details. That’s rare.”
                    <button
                        onClick={() => setIsRevealed(false)}
                        style={{
                            marginLeft: '10px',
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        ✕
                    </button>
                </div>
            )}

            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>
        </div>
    );
};

export default EasterEgg;
