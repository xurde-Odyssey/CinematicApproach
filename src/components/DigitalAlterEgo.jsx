import React, { useState, useRef, useEffect } from 'react';

const DigitalAlterEgo = () => {
    const [messages, setMessages] = useState([
        { role: 'ego', text: 'Hello, traveler. I am the digital echo of the creator. What draws you to this universe today?' }
    ]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    const responses = {
        inspiration: "I find inspiration in the silence between pixels and the rhythm of logic. Every line of code is a heartbeat of a new world.",
        purpose: "I create to bridge the gap between the seen and the felt. To turn abstract ideas into tangible emotions.",
        future: "I am building bridges to worlds where technology is invisible, yet its impact is profound and human-centered.",
        default: "That is a beautiful thought. In this universe, every detail matters. Tell me more about what you see."
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate "thinking" and poetic response
        setTimeout(() => {
            let egoText = responses.default;
            const lowerInput = input.toLowerCase();
            if (lowerInput.includes('inspire')) egoText = responses.inspiration;
            else if (lowerInput.includes('why') || lowerInput.includes('create')) egoText = responses.purpose;
            else if (lowerInput.includes('next') || lowerInput.includes('build')) egoText = responses.future;

            setMessages(prev => [...prev, { role: 'ego', text: egoText }]);
        }, 1000);
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <section
            style={{
                padding: '100px 5vw',
                minHeight: '80vh',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div
                    style={{
                        fontSize: '3rem',
                        marginBottom: '10px',
                        animation: 'pulse 3s infinite ease-in-out'
                    }}
                >
                    ✨
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Talk to my digital self.</h2>
            </div>

            <div
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: '500px',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                }}
            >
                {/* Chat Window */}
                <div
                    style={{
                        flex: 1,
                        padding: '20px',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                    }}
                >
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            style={{
                                alignSelf: msg.role === 'ego' ? 'flex-start' : 'flex-end',
                                maxWidth: '80%',
                                padding: '12px 18px',
                                borderRadius: '15px',
                                backgroundColor: msg.role === 'ego' ? 'rgba(255, 255, 255, 0.05)' : 'var(--accent-color)',
                                color: msg.role === 'ego' ? '#fff' : 'var(--bg-color)',
                                fontSize: '0.95rem',
                                lineHeight: 1.4,
                                fontFamily: msg.role === 'ego' ? 'var(--font-serif)' : 'var(--font-sans)',
                                fontStyle: msg.role === 'ego' ? 'italic' : 'normal',
                                boxShadow: msg.role === 'user' ? `0 4px 15px ${'var(--accent-color)'}33` : 'none',
                            }}
                        >
                            {msg.text}
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Bar */}
                <form
                    onSubmit={handleSend}
                    style={{
                        padding: '20px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        gap: '10px',
                    }}
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything..."
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px',
                            padding: '12px 15px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            outline: 'none',
                            fontFamily: 'var(--font-mono)',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'var(--accent-color)',
                            color: 'var(--bg-color)',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '0 20px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        Send
                    </button>
                </form>
            </div>

            <style>
                {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 10px #fff); }
            100% { transform: scale(1); opacity: 0.8; }
          }
        `}
            </style>
        </section>
    );
};

export default DigitalAlterEgo;
