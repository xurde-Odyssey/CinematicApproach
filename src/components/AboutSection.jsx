import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Camera, ShieldCheck, Film } from 'lucide-react';
import profilePhoto from '../assets/images/photo.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    const specializations = [
        {
            title: 'Web Development',
            desc: 'Building responsive, high-performance web applications using modern frameworks and standard practices.',
            icon: Code2,
            gradient: 'from-blue-500/20 to-cyan-500/20',
            border: 'group-hover:border-blue-500/50',
            iconColor: 'text-blue-400',
            bgGlow: 'bg-blue-500'
        },
        {
            title: 'Content Creation',
            desc: 'Mastering the art of cinematic storytelling and video production to engage global audiences.',
            icon: Camera,
            gradient: 'from-orange-500/20 to-red-500/20',
            border: 'group-hover:border-orange-500/50',
            iconColor: 'text-orange-400',
            bgGlow: 'bg-orange-500'
        },
        {
            title: 'Quality Assurance',
            desc: 'Ensuring software excellence through rigorous testing strategies and precise bug reporting.',
            icon: ShieldCheck,
            gradient: 'from-green-500/20 to-emerald-500/20',
            border: 'group-hover:border-green-500/50',
            iconColor: 'text-green-400',
            bgGlow: 'bg-green-500'
        },
        {
            title: 'Travel Filmmaking',
            desc: 'Documenting raw journeys and natural beauty through a professional lens in the Himalayas.',
            icon: Film,
            gradient: 'from-yellow-500/20 to-amber-500/20',
            border: 'group-hover:border-yellow-500/50',
            iconColor: 'text-yellow-400',
            bgGlow: 'bg-yellow-500'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.about-header',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Cards Animation (Staggered Grid)
            // Using fromTo ensures we have a definitive start and end state
            gsap.fromTo('.spec-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 95%', // Starts earlier to ensure visibility
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-24 px-6 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-20 relative z-10">

                {/* Header */}
                <div className="about-header text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Core Specializations
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Bridging the gap between technology and creativity
                    </p>
                </div>

                {/* Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {specializations.map((spec, index) => (
                        <div
                            key={index}
                            className={`spec-card group relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/[0.07] ${spec.border}`}
                        >
                            {/* Inner Glow Gradient */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${spec.bgGlow}`} />

                            <div className="relative z-10 space-y-6">
                                {/* Icon Box */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${spec.gradient} flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                                    <spec.icon size={32} className={spec.iconColor} />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {spec.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {spec.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center pt-12 opacity-50 about-header">
                    <p className="text-sm font-mono uppercase tracking-widest text-gray-500">
                        Based in Nepal // Available Worldwide
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
