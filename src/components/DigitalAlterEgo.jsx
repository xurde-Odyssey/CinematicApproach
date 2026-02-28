import React, { useState, useRef, useEffect } from 'react';

const DigitalAlterEgo = () => {
    const [messages, setMessages] = useState([
        { role: 'ego', text: 'Hello, traveler. I am the digital echo of the creator. What draws you to this universe today?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [mode, setMode] = useState('chat'); // 'chat' or 'contact'
    const chatContainerRef = useRef(null);

    const responses = {
        greeting: "Hi! How are you?",
        fine: "That's great to hear 😊",
        howAreYou: "I'm doing well! Thanks for asking.",
        name: "I am your digital assistant.",
        creator: "I was created by my owner.",
        capabilities: "I can chat with you and answer simple questions.",
        goodMorning: "Good morning! Have a nice day.",
        goodNight: "Good night! Sweet dreams.",
        thankYou: "You're welcome!",
        goodbye: "Goodbye! See you later.",
        doing: "I'm here waiting to chat with you.",
        help: "Sure! Tell me how I can help you.",
        inspiration: "I find inspiration in the silence between pixels and the rhythm of logic. Every line of code is a heartbeat of a new world.",
        purpose: "I create to bridge the gap between the seen and the felt. To turn abstract ideas into tangible emotions.",
        future: "I am building bridges to worlds where technology is invisible, yet its impact is profound and human-centered.",
        default: "That is a beautiful thought. In this universe, every detail matters. Tell me more about what you see."
    };

    const normalizeInput = (text) =>
        text
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate "thinking" and poetic response
        setTimeout(() => {
            let egoText = responses.default;
            const normalizedInput = normalizeInput(input);
            if (normalizedInput === 'hello' || normalizedInput === 'hi') egoText = responses.greeting;
            else if (normalizedInput === 'i am fine') egoText = responses.fine;
            else if (normalizedInput === 'how are you') egoText = responses.howAreYou;
            else if (normalizedInput === 'what is your name') egoText = responses.name;
            else if (normalizedInput === 'who created you') egoText = responses.creator;
            else if (normalizedInput === 'what can you do') egoText = responses.capabilities;
            else if (normalizedInput === 'good morning') egoText = responses.goodMorning;
            else if (normalizedInput === 'good night') egoText = responses.goodNight;
            else if (normalizedInput === 'thank you') egoText = responses.thankYou;
            else if (normalizedInput === 'bye' || normalizedInput === 'goodbye') egoText = responses.goodbye;
            else if (normalizedInput === 'what are you doing') egoText = responses.doing;
            else if (normalizedInput === 'help') egoText = responses.help;
            else if (normalizedInput.includes('inspire')) egoText = responses.inspiration;
            else if (normalizedInput.includes('why') || normalizedInput.includes('create')) egoText = responses.purpose;
            else if (normalizedInput.includes('next') || normalizedInput.includes('build')) egoText = responses.future;

            setMessages(prev => [...prev, { role: 'ego', text: egoText }]);
            setIsTyping(false);
        }, 1500);
    };

    useEffect(() => {
        if (messages.length > 1 && mode === 'chat') {
            chatContainerRef.current?.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, mode]);

    useEffect(() => {
        const handleOpenContact = () => setMode('contact');
        window.addEventListener('openContact', handleOpenContact);
        return () => window.removeEventListener('openContact', handleOpenContact);
    }, []);

    return (
        <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center py-24 relative overflow-hidden bg-black/20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

            <div className="text-center mb-12 relative z-10">
                <div className="relative w-23 h-23 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-purple-600 animate-spin-slow shadow-[0_0_30px_rgba(251,191,36,0.4)]" />
                    <div className="absolute inset-0 rounded-full border border-white/10 scale-125 opacity-50" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-wide">
                    Talk to my digital self.
                </h2>
                <p className="text-white/40 font-mono text-sm uppercase tracking-[0.2em]">
                    Echoes from the machine
                </p>
            </div>

            <div className="w-full max-w-2xl h-[650px] bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col overflow-hidden shadow-2xl relative z-10 transition-all duration-500">

                {/* Navigation Tabs */}
                <div className="flex border-b border-white/10">
                    <button
                        onClick={() => setMode('chat')}
                        className={`flex-1 py-4 text-sm font-mono uppercase tracking-widest transition-colors duration-300 ${mode === 'chat' ? 'bg-white/5 text-amber-400' : 'text-white/40 hover:text-white hover:bg-white/[0.02]'}`}
                    >
                        Digital Echo
                    </button>
                    <button
                        onClick={() => setMode('contact')}
                        className={`flex-1 py-4 text-sm font-mono uppercase tracking-widest transition-colors duration-300 ${mode === 'contact' ? 'bg-white/5 text-amber-400' : 'text-white/40 hover:text-white hover:bg-white/[0.02]'}`}
                    >
                        Transmit Signal
                    </button>
                </div>

                {mode === 'chat' ? (
                    <>
                        {/* Chat Window */}
                        <div
                            ref={chatContainerRef}
                            className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                        >
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === 'ego' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                                >
                                    <div
                                        className={`
                                            max-w-[85%] p-4 md:p-6 rounded-2xl text-[15px] leading-relaxed
                                            ${msg.role === 'ego'
                                                ? 'bg-white/5 text-gray-100 font-serif italic border border-white/5'
                                                : 'bg-amber-500/10 text-amber-50 font-sans border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                                            }
                                        `}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                                    <div className="bg-white/5 p-4 rounded-2xl flex gap-1 items-center border border-white/5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50 animate-bounce delay-0" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50 animate-bounce delay-150" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50 animate-bounce delay-300" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Bar */}
                        <form
                            onSubmit={handleSend}
                            className="p-5 border-t border-white/10 flex gap-4 bg-black/20"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all duration-300 font-mono text-sm"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 text-sm uppercase tracking-wider"
                            >
                                Send
                            </button>
                        </form>
                    </>
                ) : (
                    /* Contact Form */
                    <div className="flex-1 p-8 md:p-12 animate-in fade-in zoom-in-95 duration-500 flex flex-col justify-center">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-serif text-white mb-2">Initialize Contact</h3>
                            <p className="text-white/40 text-sm font-mono">Direct transmission to the creator</p>
                        </div>

                        <form action="https://formsubmit.co/chipmunk.py@gmail.com" method="POST" className="space-y-6">
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs text-amber-400/80 uppercase tracking-widest font-mono ml-1">Identity</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder="Full Name"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-amber-400/80 uppercase tracking-widest font-mono ml-1">Frequency</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-amber-400/80 uppercase tracking-widest font-mono ml-1">Transmission</label>
                                <textarea
                                    name="message"
                                    placeholder="Your Message..."
                                    required
                                    rows="5"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors duration-300 text-sm uppercase tracking-wider flex items-center justify-center gap-2 group"
                            >
                                <span>Send Message</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                )}

            </div>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default DigitalAlterEgo;
