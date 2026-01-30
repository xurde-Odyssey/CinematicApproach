import React, { useState } from 'react';
import { MapPin, Mountain, Compass } from 'lucide-react';
import adventureHighlight from '../assets/adventure_highlight.png';

const AdventureCard = ({ title, location, description, icon: Icon, delay, image, link }) => (
    <div
        style={{
            animation: `fadeInUp 0.8s ease forwards ${delay}s`,
            opacity: 0,
            transform: 'translateY(20px)'
        }}
        className="adventure-card group"
    >
        <div
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '30px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden'
            }}
            className="hover:translate-y-[-5px] hover:bg-white/[0.06] hover:border-white/10"
        >
            {image ? (
                <div className="mb-6 rounded-lg overflow-hidden h-48 w-full relative group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            ) : (
                <div className="mb-6 text-white/80 group-hover:text-amber-400 transition-colors">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
            )}

            <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl text-white mb-2">
                <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    {title}
                </a>
            </h3>

            <p className="text-gray-400 text-sm mb-6 flex-grow font-sans leading-relaxed">
                {description}
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/80 uppercase tracking-widest font-mono">
                <MapPin size={12} />
                {location}
            </div>
        </div>
    </div>
);



const Adventures = () => {
    const adventures = [
        {
            title: "Tilicho Lake",
            location: "Manang, Nepal",
            description: "The highest altitude lake in the world, an ethereal beauty at 4,919m.",
            icon: Mountain,
            image: null,
            delay: 0.1,
            link: "https://youtu.be/VCi7YtzQnyg"
        },
        {
            title: "Shey Phoksundo Lake",
            location: "Dolpo, Nepal",
            description: "A turquoise gem hidden in the Dolpo region, untouched and serene.",
            icon: Compass,
            image: null,
            delay: 0.2,
            link: "https://youtu.be/PcWaedaynvE"
        },
        {
            title: "Mardi Himal",
            location: "Kaski, Nepal",
            description: "A short but intense trek offering breathtaking views of Machhapuchhre.",
            icon: Mountain,
            image: null,
            delay: 0.3,
            link: "https://youtu.be/WoC192K03z8"
        },
        {
            title: "Annapurna Base Camp",
            location: "Kaski, Nepal",
            description: "Walking into the sanctuary of the giants, surrounded by 8,000m peaks.",
            icon: Mountain,
            image: null,
            delay: 0.4,
            link: "https://youtu.be/6gZdW6itYdc"
        },
        {
            title: "Rara Lake",
            location: "Mugu, Nepal",
            description: "The queen of lakes in Nepal, a peaceful blue expanse in the wild west.",
            icon: MapPin,
            image: null,
            delay: 0.5,
            link: "https://youtu.be/ryH-3E3kyAY"
        },
        {
            title: "Langtang Village",
            location: "Rasuwa, Nepal",
            description: "A journey of resilience and beauty through the valley of glaciers.",
            icon: Compass,
            image: null,
            delay: 0.6,
            link: "https://youtu.be/_ea2p5z8IGE"
        }
    ];

    return (
        <section
            id="adventures"
            style={{
                padding: '120px 5vw',
                position: 'relative',
                backgroundColor: 'var(--bg-color)'
            }}
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16">
                    <span className="block text-amber-400 font-mono text-sm tracking-[0.2em] mb-4 uppercase">
                        Exploration Log
                    </span>
                    <h2
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-5xl md:text-7xl text-white mb-4"
                    >
                        Adventures
                    </h2>
                    <p className="text-gray-400 text-lg font-sans max-w-xl mb-8">
                        Memorable journeys through the heart of the Himalayas.
                    </p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {adventures.map((adventure, index) => (
                        <AdventureCard key={index} {...adventure} />
                    ))}
                </div>


            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Adventures;
