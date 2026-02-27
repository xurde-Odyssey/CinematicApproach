import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Sliders, Activity, Palette, Camera, Edit3, Trash2, HelpCircle, Play, Pause, VolumeX, Volume2, SkipForward, SkipBack, BookOpen, Heart, Tv, Video } from 'lucide-react';

import btsFinal from '../assets/images/panorama.jpg';
import artVideo from '../assets/Video/Art.MOV';

gsap.registerPlugin(ScrollTrigger);

const BehindTheShot = () => {
    const sectionRef = useRef(null);
    const transformRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [activeColor, setActiveColor] = useState(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
        }
    };

    const skipForward = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.min(
                videoRef.current.currentTime + 10,
                videoRef.current.duration
            );
        }
    };

    const skipBackward = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(
                videoRef.current.currentTime - 10,
                0
            );
        }
    };

    // 1. Layer Reveal State
    const [activeLayer, setActiveLayer] = useState('composition');
    const layers = [
        { id: 'lighting', name: 'Lighting', quote: 'Light is not decoration. It is direction.', color: '#FFD700' },
        { id: 'color', name: 'Color', quote: 'Color doesn’t fill space. It creates emotion.', color: '#00F2FF' },
        { id: 'motion', name: 'Motion', quote: 'Nothing moves by accident.', color: '#FF00FF' },
        { id: 'composition', name: 'Composition', quote: 'Where things sit defines how they speak.', color: '#FFFFFF' },
        { id: 'depth', name: 'Depth', quote: 'Flat is forgettable. Depth is immersive.', color: '#00FF9D' },
    ];

    // 3. Timeline State
    const [timelineStage, setTimelineStage] = useState(0);
    const timelineData = [
        { label: 'Concept', desc: 'A feeling before a form.' },
        { label: 'Sketch', desc: 'Chaos looking for order.' },
        { label: 'Wireframe', desc: 'Skeleton before skin.' },
        { label: 'Motion', desc: 'Breath enters the body.' },
        { label: 'Final', desc: 'The moment it becomes real.' },
    ];

    // 7. Camera State
    const [cameraMode, setCameraMode] = useState('static');

    useEffect(() => {
        // Global section entrance
        gsap.fromTo(sectionRef.current.querySelectorAll('.reveal-section'),
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 20%',
                }
            }
        );
    }, []);

    // Separate useEffect for video auto-pause
    useEffect(() => {
        const videoElement = videoRef.current;
        const videoContainer = sectionRef.current?.querySelector('.video-container');

        if (!videoElement || !videoContainer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Video is in view - play if it was paused
                        if (videoElement.paused && isPlaying) {
                            videoElement.play().catch(err => console.log('Play failed:', err));
                        }
                    } else {
                        // Video is out of view - pause it
                        if (!videoElement.paused) {
                            videoElement.pause();
                            setIsPlaying(false);
                        }
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of video is visible
                rootMargin: '0px'
            }
        );

        observer.observe(videoContainer);

        return () => {
            observer.disconnect();
        };
    }, [isPlaying]);

    // Transformation interactive state
    const [transformX, setTransformX] = useState(50);
    const handleTransformMove = (e) => {
        if (!transformRef.current) return;
        const rect = transformRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setTransformX(Math.min(Math.max(x, 0), 100));
    };

    return (
        <section ref={sectionRef} className="min-h-screen py-24 px-6 md:px-12 bg-black text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Header */}
                <div className="text-center space-y-6 reveal-section">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">THE THEME IS ART</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-serif italic">
                        Art is not decoration. It is direction.
                    </p>
                </div>

                {/* 1. Video Player Section */}
                <div className="reveal-section space-y-8">
                    <div className="video-container w-full aspect-video bg-[#0a0a0a] rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center group cursor-pointer">
                        <video
                            ref={videoRef}
                            src={artVideo}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            loop
                            muted
                            playsInline
                            autoPlay
                            onClick={togglePlay}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20 pointer-events-none" />

                        <div className="absolute bottom-6 left-6 text-left z-10 pointer-events-none">
                            <h3 className="text-xl font-bold text-white drop-shadow-md">Art of Capturing Moments</h3>
                            <p className="text-sm text-gray-200 drop-shadow-md">Watch the creative process</p>
                        </div>

                        {/* Custom Controls */}
                        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={(e) => { e.stopPropagation(); skipBackward(); }}
                                className="p-2.5 bg-black/50 hover:bg-white/20 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-white/30"
                                aria-label="Skip backward 10s"
                                title="-10s"
                            >
                                <SkipBack size={18} className="text-white" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                                className="p-3 bg-black/50 hover:bg-white/20 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-white/30"
                                aria-label={isPlaying ? "Pause" : "Play"}
                            >
                                {isPlaying ? <Pause size={20} className="text-white fill-current" /> : <Play size={20} className="text-white fill-current" />}
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); skipForward(); }}
                                className="p-2.5 bg-black/50 hover:bg-white/20 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-white/30"
                                aria-label="Skip forward 10s"
                                title="+10s"
                            >
                                <SkipForward size={18} className="text-white" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                                className="p-3 bg-black/50 hover:bg-white/20 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-white/30"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
                            </button>
                        </div>

                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                    </div>
                </div>

                {/* 5. Color Emotion Map (Redesigned) */}
                <div className="reveal-section relative">
                    {/* Ambient Glow Background */}
                    <div
                        className="absolute -inset-20 blur-3xl opacity-20 transition-colors duration-700 pointer-events-none"
                        style={{ backgroundColor: activeColor || 'transparent' }}
                    />

                    <div className="relative z-10 flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <Palette size={28} className="text-[#00F2FF]" />
                            <h3 className="text-2xl font-bold">Atmosphere & Emotion</h3>
                        </div>
                        <p className="hidden md:block text-xs text-gray-400 uppercase tracking-widest">
                            {activeColor ? 'Processing Emotion...' : 'Select a Spectrum'}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row h-[600px] md:h-64 lg:h-80 gap-2 w-full">
                        {[
                            { color: '#3B82F6', name: 'Solitude', desc: 'Calm. Distance.', css: 'bg-blue-600' },
                            { color: '#F97316', name: 'Warmth', desc: 'Energy. Impact.', css: 'bg-orange-600' },
                            { color: '#A855F7', name: 'Mystery', desc: 'Future. Depth.', css: 'bg-purple-600' },
                            { color: '#EF4444', name: 'Danger', desc: 'Urgency. Power.', css: 'bg-red-600' },
                            { color: '#10B981', name: 'Growth', desc: 'Life. Breath.', css: 'bg-emerald-600' }
                        ].map((c, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveColor(c.color)}
                                onMouseLeave={() => setActiveColor(null)}
                                onClick={() => setActiveColor(activeColor === c.color ? null : c.color)} // Tap interaction for mobile
                                className={`
                                    relative flex-1 group overflow-hidden rounded-xl border border-white/10 transition-all duration-500 ease-out cursor-pointer
                                    ${activeColor === c.color ? 'flex-[3] md:flex-[2] border-white/40' : 'hover:flex-[1.5] md:hover:flex-[1.5] opacity-60 hover:opacity-100'}
                                `}
                            >
                                <div className={`absolute inset-0 ${c.css} opacity-20 group-hover:opacity-40 transition-opacity`} />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-1 w-8 mb-4 rounded-full" style={{ backgroundColor: c.color }} />
                                    <h4 className="text-xl font-bold text-white mb-1 leading-none">{c.name}</h4>
                                    <p className={`text-xs text-gray-400 uppercase tracking-widest transition-opacity delay-100 ${activeColor === c.color ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                        {c.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. Camera Simulation */}
                <div className="reveal-section text-center space-y-8">
                    <div className="mb-4">
                        <Camera className="mx-auto mb-4" size={32} />
                        <h3 className="text-2xl font-bold">CINEMATIC THINKING</h3>
                        <p className="text-gray-400 text-sm">The web can move like cinema.</p>
                    </div>
                    <div className="relative w-full h-[400px] border border-white/10 rounded-xl overflow-hidden bg-black flex items-center justify-center group overflow-hidden">
                        {/* Viewport content */}
                        <img
                            src={btsFinal}
                            alt="Camera Simulation"
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out"
                            style={{
                                transform: cameraMode === 'push' ? 'scale(1.5)' :
                                    cameraMode === 'parallax' ? 'scale(1.2) translateX(30px)' :
                                        cameraMode === 'focus' ? 'scale(1.1)' : 'scale(1)',
                                filter: cameraMode === 'blur' ? 'blur(8px)' : 'none'
                            }}
                        />

                        {/* Controls */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 z-10">
                            {[
                                { id: 'static', label: 'Static' },
                                { id: 'push', label: 'Slow Push' },
                                { id: 'parallax', label: 'Parallax' },
                                { id: 'blur', label: 'Focus Pull' }
                            ].map(mode => (
                                <button
                                    key={mode.id}
                                    onClick={() => setCameraMode(mode.id)}
                                    className={`px-4 py-1 rounded-full text-xs font-mono uppercase transition-colors ${cameraMode === mode.id ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                                >
                                    {mode.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 8. The Creative Purpose - High Impact Cinematic Section */}
                <div className="reveal-section space-y-12 py-20 relative overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none select-none overflow-hidden">
                        <div className="text-[20rem] font-black text-white whitespace-nowrap leading-none tracking-tighter">
                            PURPOSE
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-baseline gap-6 mb-12 border-b border-white/10 pb-6">
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                            THE WHY<span className="text-[#00F2FF]">.</span>
                        </h3>
                        <p className="text-xs text-gray-500 uppercase tracking-[0.5em] font-mono">
                            Core Creative Philosophy
                        </p>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <div className="space-y-12">
                            <p className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] !italic tracking-tight text-white/90">
                                I love to <span className="text-[#00F2FF] not-italic font-sans font-black">create engaging and fun content</span> to communicate ideas to people.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
                                <div className="space-y-6">
                                    <p className="text-xl md:text-2xl text-gray-400 font-serif leading-relaxed">
                                        Whether it be video, audio, web or whatever may be the best way to get an idea across.
                                    </p>
                                    <div className="flex gap-4 items-center pt-4">
                                        <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                            <Camera size={20} className="text-purple-400" />
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                            <Play size={20} className="text-blue-400" />
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                            <Activity size={20} className="text-emerald-400" />
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                    </div>
                                </div>
                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Layers size={80} />
                                    </div>
                                    <p className="text-lg md:text-xl text-white/80 leading-relaxed font-mono tracking-tight">
                                        I can leverage all of that knowledge to create or manage projects that truly resonate.
                                    </p>
                                    <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-[#00F2FF] font-black">
                                        <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
                                        Strategic Intelligence
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 9. Dual Section: Graveyard & Cosmic Wonder */}
                <div className="reveal-section py-20 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Left Column: The Graveyard */}
                        <div className="relative group p-12 bg-[#050505] rounded-3xl border border-white/5 overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                            {/* Background Effects */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                                <div className="absolute inset-x-0 top-0 h-1 bg-red-500/50 animate-pulse" style={{ top: '20%' }} />
                            </div>

                            <div className="relative z-10 mb-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <Trash2 size={24} className="text-red-500/50" />
                                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">The Graveyard</h3>
                                </div>

                                <h4 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                                    <span className="block text-white">CHASING</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 italic">
                                        PERFECTION
                                    </span>
                                    <span className="block text-white opacity-60 decoration-red-500/50 line-through text-2xl md:text-3xl mt-2">
                                        IS KILLING PROGRESS
                                    </span>
                                </h4>

                                <p className="text-gray-400 font-serif italic leading-relaxed text-lg">
                                    The graveyard of 'almost finished' is where most great ideas go to die.
                                </p>
                            </div>

                            <div className="relative z-10 pt-8 border-t border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                        <Edit3 size={16} className="text-red-400" />
                                    </div>
                                    <div>
                                        <div className="text-[0.6rem] uppercase tracking-widest text-gray-500">Lesson Learned</div>
                                        <div className="text-sm font-mono text-gray-300">Done {">"} Perfect</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Things That Amaze Me */}
                        <div className="relative group p-12 bg-[#050505] rounded-3xl border border-white/5 overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                            {/* Background Effects */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />
                            </div>

                            <div className="relative z-10 mb-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <BookOpen size={24} className="text-indigo-400/50" />
                                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Things That Amaze Me</h3>
                                </div>

                                <h4 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-6 text-white">
                                    COSMIC <span className="text-indigo-400 italic font-serif">WONDER</span>
                                </h4>

                                <div className="space-y-6">
                                    <p className="text-gray-300 leading-relaxed font-sans text-lg">
                                        What amazes me most is the delicate balance between the measurable and the miraculous. I find myself constantly stuck between the cold, beautiful logic of science and the profound belief that such a vast, intricate cosmos must be a divine creation.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed font-sans text-base">
                                        It’s the silent whisper of the creator hidden within the mathematical laws of the stars.
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-8 border-t border-white/10">
                                <blockquote className="text-lg font-serif italic text-indigo-200/80 leading-relaxed">
                                    "The infinite struggle between the evidence of the eyes and the intuition of the soul."
                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 10. Hobbies & Passions - Cinematic Interest Section */}
                <div className="reveal-section py-24 space-y-16">
                    <div className="text-center space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Hobbies & Passions</h3>
                        <p className="text-gray-400 font-serif italic text-lg max-w-xl mx-auto">
                            The activities that keep me inspired and energized.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Reading',
                                desc: 'Exploring new worlds and perspectives through the pages of books.',
                                icon: <BookOpen className="text-blue-400" size={24} />,
                                gradient: 'from-blue-500/10 to-transparent'
                            },
                            {
                                title: 'Running',
                                desc: "Chasing the runner's high and staying physically fit and mentally clear.",
                                icon: <Heart className="text-red-400" size={24} />,
                                gradient: 'from-red-500/10 to-transparent'
                            },
                            {
                                title: 'Watching Series',
                                desc: 'Diving into compelling stories and cinematic universes from the couch.',
                                icon: <Tv className="text-purple-400" size={24} />,
                                gradient: 'from-purple-500/10 to-transparent'
                            },
                            {
                                title: 'Content Creation',
                                desc: 'Capturing moments and sharing my journey with the world.',
                                icon: <Video className="text-emerald-400" size={24} />,
                                gradient: 'from-emerald-500/10 to-transparent'
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10 space-y-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed font-serif italic">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Selection indicator */}
                                <div className="absolute top-4 right-4 w-1 h-1 bg-white/20 rounded-full group-hover:w-8 group-hover:bg-[#00F2FF] transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Closing */}
                <div className="reveal-section text-center py-20 space-y-6">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
                        A Cinematic Approach
                    </h2>
                    <p className="text-xl text-gray-400 font-serif italic">
                        Art of capturing moments.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default BehindTheShot;
