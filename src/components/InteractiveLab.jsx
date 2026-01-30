import React, { useState, useEffect, useRef } from 'react';
import { Disc3, Type, Split, Glasses, X, ChevronRight, ChevronLeft, BookOpen, Sparkles, Zap, Aperture } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LabCard = ({ title, icon, color, onClick, description, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Check if device supports hover to enable tilt effect
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

        if (isTouchDevice) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            gsap.to(card, {
                '--mouse-x': `${x * 100}%`,
                '--mouse-y': `${y * 100}%`,
                duration: 0.5,
                ease: 'power2.out'
            });

            // subtle tilt
            const rotateX = (y - 0.5) * -10;
            const rotateY = (x - 0.5) * 10;
            gsap.to(card.querySelector('.card-inner'), {
                rotateX,
                rotateY,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card.querySelector('.card-inner'), { rotateX: 0, rotateY: 0, duration: 1 });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            onClick={onClick}
            className="prismatic-card group perspective-1000 select-none touch-manipulation"
            style={{
                height: '320px',
                cursor: 'pointer',
                '--accent-inner': color,
                WebkitTapHighlightColor: 'transparent', // Remove tap highlight on mobile
            }}
        >
            <div className="card-inner relative w-full h-full transition-all duration-500 preserve-3d">
                <div className="absolute inset-0 bg-[var(--text-primary)]/[0.03] backdrop-blur-xl border border-[var(--text-primary)]/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:bg-[var(--text-primary)]/[0.07] group-hover:border-[var(--text-primary)]/20 active:scale-95 md:active:scale-100 transition-transform">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${color}20, transparent)`
                        }} />

                    <div className="absolute top-6 left-6 w-8 h-[1px] bg-[var(--text-primary)]/20 transition-all group-hover:w-12 group-hover:bg-[var(--text-primary)]/40" />
                    <div className="absolute top-6 left-6 h-8 w-[1px] bg-[var(--text-primary)]/20 transition-all group-hover:h-12 group-hover:bg-[var(--text-primary)]/40" />

                    <div className="p-10 h-full flex flex-col items-center justify-center text-center space-y-6">
                        <div className="p-5 rounded-2xl bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner" style={{ color: color }}>
                            {React.cloneElement(icon, { size: 40, strokeWidth: 1.5 })}
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-serif text-[var(--text-primary)] tracking-wide">{title}</h3>
                            <div className="flex items-center justify-center gap-2">
                                <span className="h-[1px] w-4 bg-[var(--text-primary)]/10" />
                                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--text-primary)]/40 group-hover:text-[var(--text-primary)]/60 transition-colors">
                                    0x{index + 1}A
                                </span>
                                <span className="h-[1px] w-4 bg-[var(--text-primary)]/10" />
                            </div>
                        </div>

                        <p className="text-xs text-[var(--text-primary)]/40 leading-relaxed font-sans max-w-[180px] opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            {description}
                        </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--text-primary)]/[0.02] to-transparent h-[10%] w-full top-[-10%] group-hover:animate-scan-slow pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

const Book = ({ title, author, content, onClose, type, onNext }) => {
    const bookRef = useRef(null);

    useEffect(() => {
        if (bookRef.current) {
            gsap.fromTo(bookRef.current,
                { opacity: 0, scale: 0.9, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'expo.out' }
            );
        }
    }, []);

    return (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 md:p-6">
            <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={onClose} />

            <div ref={bookRef} className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] h-[85vh] md:h-[80vh] flex flex-col md:flex-row">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/30 hover:text-white transition-colors p-2 bg-black/20 rounded-full md:bg-transparent">
                    <X size={24} />
                </button>

                {/* Left Side: Meta */}
                <div className="w-full md:w-1/3 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/5 p-6 md:p-12 flex flex-col justify-center shrink-0">
                    <div className="space-y-4 md:space-y-8">
                        <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-500">Archives / {type}</div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">{title}</h2>
                        <div className="h-px w-12 bg-white/20 hidden md:block" />
                        <p className="text-white/40 font-mono text-xs md:text-sm tracking-widest italic">by {author}</p>

                        <div className="pt-4 md:pt-12 flex justify-between md:block items-center">
                            <button
                                onClick={onNext}
                                className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-white hover:text-amber-400 transition-colors"
                            >
                                Fetch Next <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-2/3 p-6 md:p-12 lg:p-20 overflow-y-auto custom-scrollbar flex-grow">
                    <div className="max-w-prose mx-auto">
                        <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed font-serif whitespace-pre-wrap italic">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FavoritesView = () => {
    const data = {
        books: [
            { title: "Karnali Blues", author: "Buddhi Sagar" },
            { title: "Summer Love", author: "Subin Bhattarai" },
            { title: "Seto Dharti", author: "Amar Neupane" },
            { title: "Bhagavad Gita", author: "Prabhupada" }
        ],
        artists: ["Eminem", "Bartika Eam Rai", "Charlie Puth", "Dua Lipa"],
        movies: ["The Shawshank Redemption", "A Beautiful Mind", "The Dark Knight"]
    };

    return (
        <div className="w-full max-w-5xl space-y-12 md:space-y-20 py-6 md:py-10 px-4 md:px-0 h-full overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-10">
                <div className="space-y-6 md:space-y-10">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4 sticky top-0 bg-[#070707] z-10">
                        <BookOpen size={20} className="text-amber-500" />
                        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">Literature</h3>
                    </div>
                    <ul className="space-y-6 md:space-y-8">
                        {data.books.map((b, i) => (
                            <li key={i} className="group cursor-default">
                                <div className="text-white group-hover:text-amber-500 transition-colors font-serif text-lg">{b.title}</div>
                                <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mt-1">Ref: {b.author.split(' ')[0]}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6 md:space-y-10">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4 sticky top-0 bg-[#070707] z-10">
                        <Disc3 size={20} className="text-blue-500" />
                        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">Acoustics</h3>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        {data.artists.map((a, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-blue-500 transition-all" />
                                <span className="text-white/80 group-hover:text-white transition-colors uppercase text-xs tracking-widest font-mono">{a}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6 md:space-y-10">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4 sticky top-0 bg-[#070707] z-10">
                        <Aperture size={20} className="text-purple-500" />
                        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">Cinematics</h3>
                    </div>
                    <ul className="space-y-4 md:space-y-6">
                        {data.movies.map((m, i) => (
                            <li key={i} className="text-white/70 hover:text-white transition-colors flex items-start gap-3">
                                <span className="text-purple-500/50 mt-1 font-mono text-[10px]">0{i + 1}</span>
                                <span className="font-serif italic text-lg">{m}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const InteractiveLab = () => {
    const [activeTool, setActiveTool] = useState(null);
    const [poem, setPoem] = useState(null);
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.lab-heading > *', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            gsap.from('.lab-grid-item', {
                scale: 0.9,
                opacity: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: '.lab-grid',
                    start: 'top 70%',
                }
            });

            // Ambient breathing light leaks or background effects
            gsap.to('.ambient-light-1', {
                x: '+=100',
                y: '+=50',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            gsap.to('.ambient-light-2', {
                x: '-=150',
                y: '-=100',
                duration: 25,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const fetchRandomPoem = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://poetrydb.org/random/1');
            const data = await response.json();
            setPoem(data[0]);
        } catch (error) {
            setPoem(null);
        } finally {
            setLoading(false);
        }
    };

    const fetchRandomStory = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://openlibrary.org/random.json');
            const data = await response.json();
            setStory({
                title: data.title,
                author: data.authors?.[0]?.name || 'Unknown Author',
                description: data.description?.value || 'A fascinating story from the collection.',
            });
        } catch (error) {
            setStory(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeTool?.id === 'poem') fetchRandomPoem();
        else if (activeTool?.id === 'mood') fetchRandomStory();
    }, [activeTool]);

    const tools = [
        { id: "wheel", title: "Decision Wheel", icon: <Zap />, description: "Neutralize overthinking. Let logic or chance decide the next path.", color: "#3B82F6" },
        { id: "poem", title: "Digital Echoes", icon: <Type />, description: "Curated literary sparks. Random poems and profound quotes.", color: "#10B981" },
        { id: "mood", title: "Atmosphere", icon: <Sparkles />, description: "Generates a micro-narrative synchronized with current visuals.", color: "#A855F7" },
        { id: "visual", title: "The Archives", icon: <Glasses />, description: "A curation of books, artists, and adventures that shape the creator.", color: "#F59E0B" }
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen py-20 md:py-40 px-4 md:px-6 flex flex-col items-center bg-[var(--bg-color)] overflow-hidden transition-colors duration-700">
            {/* High-End Ambient Lighting */}
            <div className="ambient-light-1 absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
            <div className="ambient-light-2 absolute bottom-1/4 right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-500/5 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="lab-heading text-center mb-16 md:mb-32 z-10 space-y-4 md:space-y-6">
                <div className="flex items-center justify-center gap-4 text-[var(--text-primary)]/30">
                    <div className="w-8 md:w-12 h-[1px] bg-current" />
                    <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em]">// Experimental_Subsystem</span>
                    <div className="w-8 md:w-12 h-[1px] bg-current" />
                </div>

                <h2 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[var(--text-primary)] uppercase leading-none px-2">
                    Prismatic Lab <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)]/30 to-[var(--text-primary)]/5 font-serif italic font-normal"></span>
                </h2>

                <p className="text-[var(--text-secondary)] max-w-xl mx-auto font-serif italic text-base md:text-lg leading-relaxed pt-2 md:pt-4 px-4">
                    Where abstract concepts meet digital interaction. A curated space for experiments and creative detours.
                </p>
            </div>

            <div className="lab-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl z-10 px-2 md:px-4">
                {tools.map((tool, idx) => (
                    <div key={tool.id} className="lab-grid-item">
                        <LabCard
                            {...tool}
                            index={idx}
                            onClick={() => setActiveTool(tool)}
                        />
                    </div>
                ))}
            </div>

            {/* Modals */}
            {activeTool && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveTool(null)} />

                    {(activeTool.id === 'poem' && poem) && (
                        <Book {...poem} content={poem.lines.join('\n')} type="poem" onClose={() => setActiveTool(null)} onNext={fetchRandomPoem} />
                    )}
                    {(activeTool.id === 'mood' && story) && (
                        <Book {...story} content={story.description} type="story" onClose={() => setActiveTool(null)} onNext={fetchRandomStory} />
                    )}
                    {['wheel', 'visual'].includes(activeTool.id) && (
                        <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center bg-[#070707] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <button onClick={() => setActiveTool(null)} className="absolute top-4 right-4 md:top-8 md:right-8 z-[3000] text-white/30 hover:text-white transition-colors p-2 bg-black/20 rounded-full md:bg-transparent">
                                <X size={24} md:size={32} />
                            </button>

                            {activeTool.id === 'visual' ? <FavoritesView /> : (
                                <div className="text-center space-y-6 md:space-y-12 p-4">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl animate-pulse" />
                                        <div className="relative z-10 h-full w-full rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            {React.cloneElement(activeTool.icon, { size: 36, className: "text-blue-500 md:text-[48px]" })}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Under Calibration</h2>
                                        <p className="font-mono text-[8px] md:text-[10px] text-blue-500/50 uppercase tracking-[0.5em]">[ Code_Status: Refactoring_In_Progress ]</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {loading && (
                <div className="fixed inset-0 z-[5000] bg-black/98 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin" />
                        <div className="text-white/40 font-mono text-[10px] uppercase tracking-[1em]">Synchronizing_Signal...</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InteractiveLab;
