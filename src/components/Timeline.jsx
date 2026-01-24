import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
    const sectionRef = useRef(null);

    const education = [
        {
            degree: 'Bachelor In Computer Application (BCA)',
            period: '2018 — 2024',
            institution: 'Damak Multiple Campus',
            affiliation: 'Affiliated to Tribhuwan University'
        },
        {
            degree: '+2 Management',
            period: '2016 — 2018',
            institution: 'Siddhartha Boarding Secondary School',
            affiliation: null
        },
        {
            degree: 'SLC',
            period: '2016',
            institution: 'Pashupati Boarding Secondary School',
            affiliation: null
        }
    ];

    const experience = [
        {
            role: 'Strategic Web Developer & Content Strategist',
            period: '2024 — Present',
            description: 'Specializing in the development of conversion-optimized promotional websites. Integrating SEO best practices, modern UI/UX consistency, and engaging digital narratives to drive measurable brand growth for diverse clients.'
        },
        {
            role: 'Technical Support Engineer (L1)',
            period: '2022',
            description: 'Diagnosed and resolved critical network infrastructure issues at Subisu CableNet. Streamlined technical troubleshooting workflows and maintained high service availability for enterprise and retail clients.'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.timeline-item',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen py-24 px-6 md:px-12 bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-700"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--text-secondary)] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="block text-[var(--accent-color)] font-mono text-sm tracking-[0.2em] mb-4 uppercase">
                        The Journey
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[var(--text-primary)] mb-4">
                        Timeline
                    </h2>
                    <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[var(--text-primary)]/20 to-transparent" />
                </div>

                {/* Education Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-[var(--accent-color)]/10 rounded-full border border-[var(--accent-color)]/20 transition-colors duration-500">
                            <GraduationCap className="text-[var(--accent-color)]" size={24} />
                        </div>
                        <h3 className="text-3xl font-serif text-[var(--text-primary)]">Education</h3>
                    </div>

                    <div className="space-y-8">
                        {education.map((item, index) => (
                            <div
                                key={index}
                                className="timeline-item group relative pl-8 md:pl-12 border-l-2 border-[var(--text-primary)]/10 hover:border-[var(--accent-color)]/50 transition-colors duration-500"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-color)] shadow-[0_0_10px_var(--glow-color)] group-hover:scale-125 transition-transform duration-300" />

                                <div className="pb-8">
                                    <span className="text-[var(--accent-color)] font-mono text-sm tracking-widest uppercase">
                                        {item.period}
                                    </span>
                                    <h4 className="text-2xl font-bold text-[var(--text-primary)] mt-2 mb-1 group-hover:text-[var(--accent-color)] transition-colors">
                                        {item.degree}
                                    </h4>
                                    <p className="text-[var(--text-secondary)] text-lg">
                                        {item.institution}
                                    </p>
                                    {item.affiliation && (
                                        <p className="text-[var(--text-secondary)]/80 text-sm mt-1 italic">
                                            {item.affiliation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-[var(--accent-color)]/10 rounded-full border border-[var(--accent-color)]/20 transition-colors duration-500">
                            <Briefcase className="text-[var(--accent-color)]" size={24} />
                        </div>
                        <h3 className="text-3xl font-serif text-[var(--text-primary)]">Experience</h3>
                    </div>

                    <div className="space-y-8">
                        {experience.map((item, index) => (
                            <div
                                key={index}
                                className="timeline-item group relative pl-8 md:pl-12 border-l-2 border-[var(--text-primary)]/10 hover:border-[var(--accent-color)]/50 transition-colors duration-500"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-color)] shadow-[0_0_10px_var(--glow-color)] group-hover:scale-125 transition-transform duration-300" />

                                <div className="pb-8">
                                    <span className="text-[var(--accent-color)] font-mono text-sm tracking-widest uppercase">
                                        {item.period}
                                    </span>
                                    <h4 className="text-2xl font-bold text-[var(--text-primary)] mt-2 mb-3 group-hover:text-[var(--accent-color)] transition-colors">
                                        {item.role}
                                    </h4>
                                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-24 text-center">
                    <p className="text-[var(--text-secondary)] italic font-serif text-lg">
                        "Every step forward is a pixel in the bigger picture."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
