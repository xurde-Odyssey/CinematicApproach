import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowUpRight, Play, Github } from 'lucide-react';

import dipakImg from '../assets/images/dipaksup.png';
import portfolioImg from '../assets/images/Nishan.png';
import YatharoopImg from '../assets/images/yatharoop.png';
import xurdeImg from '../assets/images/youtube.png';
import bloodNationImg from '../assets/images/bloodnation.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Dipak Suppliers",
        subtitle: "Digital Transformation",
        category: "Web Development",
        year: "2024",
        image: dipakImg,
        description: "Engineered a robust digital platform that modernized the brand's local market presence. Implemented a responsive architecture that improved user engagement by 40%.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://dipaksuppliers.com.np",
        github: "https://github.com/cyberholic-dips/DipakSup.git"
    },
    {
        id: 2,
        title: "Yatharoop",
        subtitle: "Realstate and Construction",
        category: "Web Design",
        year: "2024",
        image: YatharoopImg,
        description: "Yatharoop Realstate and Construction Pvt.Ltd brings you premium living spaces and commercial landmarks designed for the modern world.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://yatharoop.com.np/",
        github: "https://github.com/cyberholic-dips/Yatharoop.com.np.git"
    },
    {
        id: 3,
        title: "Portfolio Ecosystem",
        subtitle: "Interactive Experience",
        category: "Creative Dev",
        year: "2024",
        image: portfolioImg,
        description: "An advanced digital asset featuring custom CSS frameworks, interactive decision systems, and a performance-tuned light/dark theme system.",
        tech: ["TailwindCSS", "JavaScript", "GSAP", "React", "WebGL"],
        link: "https://www.nishanp.com.np",
        github: "https://github.com/cyberholic-dips/NishanPortfolio.git"
    },
    {
        id: 4,
        title: "Xurde Odyssey",
        subtitle: "Visual Storytelling",
        category: "Cinematography",
        year: "Ongoing",
        image: xurdeImg,
        description: "Documenting raw journeys and natural beauty through a professional lens in the Himalayas. Exploring the connection between silence and solitude.",
        tech: ["Capcut", "Sound Design"],
        link: "https://www.youtube.com/@xurde-Odyssey",
        github: null
    },
    {
        id: 5,
        title: "Blood Nation",
        subtitle: "Emergency Response",
        category: "Social Impact",
        year: "2023",
        image: bloodNationImg,
        description: "To develop an online platform for the donors to make their donations to be utilized efficiently.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        link: "https://drive.google.com/file/d/1GtnOws41oYBTSd4flxEeXJAa7SDDwSHt/view?usp=sharing",
        github: null
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <div className="project-card group relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900 border border-white/10">
            {/* Image container with scale effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
            </div>

            {/* Hover Reveal Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-black/40 backdrop-blur-[2px]">
                <div className="flex justify-between items-start translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <span className="font-mono text-xs text-[#00F2FF] tracking-widest uppercase border border-[#00F2FF]/30 px-2 py-1 rounded">
                        {project.category}
                    </span>
                    <div className="flex gap-3">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all">
                                <Github size={18} />
                            </a>
                        )}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#00F2FF] text-black rounded-full hover:scale-110 transition-transform">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-xs font-mono text-gray-400">#{t}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Default Static Content (Visible when not hovered) */}
            <div className="absolute bottom-0 left-0 w-full p-8 group-hover:opacity-0 transition-opacity duration-500 delay-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                    <div>
                        <span className="block font-mono text-xs text-gray-400 mb-1">0{index + 1} — {project.year}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{project.title}</h3>
                    </div>
                    <ArrowUpRight className="text-gray-500 mb-2" size={32} />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-400 font-serif italic text-sm md:text-base">{project.subtitle}</p>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{project.category}</span>
                </div>
            </div>
        </div>
    );
};

const FeaturedProjects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.section-header', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from('.project-card', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-12 min-h-screen bg-[#050505] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="section-header mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                            SELECTED<br />WORKS
                        </h2>
                    </div>
                    <div className="text-right pb-2">
                        <p className="font-mono text-gray-500 text-sm mb-2">/ ARCHIVE 2023-2024</p>
                        <p className="max-w-md text-gray-400 text-lg font-light leading-relaxed">
                            A curation of digital experiences, visual storytelling, and technical engineering.
                        </p>
                    </div>
                </div>

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono uppercase tracking-widest text-sm group">
                        <span>View Full Archive</span>
                        <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;

