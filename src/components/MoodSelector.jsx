import React from 'react';
import { useMood, moods } from '../context/MoodContext';

const MoodSelector = () => {
    const { currentMood, setCurrentMood } = useMood();

    return (
        <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-3 pointer-events-auto">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-1">
                Choose the Theme
            </div>
            <div className="flex gap-2 p-2 bg-[var(--color-text)]/5 backdrop-blur-md rounded-full border border-[var(--color-text)]/10 shadow-lg">
                {moods.map((mood) => (
                    <button
                        key={mood.id}
                        onClick={() => setCurrentMood(mood.id)}
                        className={`
                            w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-out
                            hover:scale-110 active:scale-95
                            ${currentMood === mood.id
                                ? 'bg-[var(--highlight)] text-[var(--color-bg)] shadow-[0_0_20px_var(--highlight)] scale-110'
                                : 'text-[var(--text-primary)] hover:bg-[var(--color-text)]/10 hover:text-[var(--highlight)]'
                            }
                        `}
                        title={mood.name}
                        aria-label={`Switch to ${mood.name} mood`}
                    >
                        {mood.icon}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoodSelector;
