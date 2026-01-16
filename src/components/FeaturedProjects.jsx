import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        title: "Dipak Suppliers | Digital Transformation",
        category: "Web Development",
        year: "2024",
        video: "https://dipaksuppliers.com.np", // Placeholder for logic
        image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        description: "Engineered a robust digital platform that modernized the brand's local market presence. Implemented a responsive architecture that improved user engagement.",
        tech: ["React", "Transformation", "Responsive"],
        link: "https://dipaksuppliers.com.np"
    },
    {
        id: 2,
        title: "Portfolio Ecosystem",
        category: "Interactive Design",
        year: "2024",
        video: "https://www.bhandaridipesh.com.np/",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        description: "An advanced digital asset featuring custom CSS frameworks, interactive decision systems (Tone.js), and a performance-tuned light theme.",
        tech: ["Custom CSS", "Tone.js", "Performance"],
        link: "https://www.bhandaridipesh.com.np/"
    },
    {
        id: 3,
        title: "Xurde Odyssey",
        category: "Cinematography",
        year: "Ongoing",
        video: "https://www.youtube.com/@xurde-Odyssey",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        description: "Documenting raw journeys and natural beauty through a professional lens in the Himalayas. Exploring the connection between silence and solitude.",
        tech: ["Vlogging", "Storytelling", "Himalayas"],
        link: "https://www.youtube.com/@xurde-Odyssey"
    },
    {
        id: 4,
        title: "Blood Nation",
        category: "Social Impact",
        year: "Academic",
        video: "#",
        image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        description: "Architected a donor-linkage system to streamline emergency blood mobilization. Focused on UX accessibility and real-time data integrity.",
        tech: ["Healthcare", "UX", "Data Integrity"],
        link: "#"
    },
];

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.3, 1)',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Media */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${project.preview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.8s ease',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
            />

            {/* Dark Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)',
                    opacity: isHovered ? 0.9 : 0.6,
                    transition: 'opacity 0.4s ease',
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    padding: '40px',
                    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                    transition: 'transform 0.4s ease',
                }}
            >
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--accent-color)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '10px',
                        opacity: isHovered ? 1 : 0.7,
                        transition: 'opacity 0.4s ease',
                    }}
                >
                    {project.genre}
                </div>
                <h3
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: '10px',
                        fontFamily: 'var(--font-serif)',
                    }}
                >
                    {project.title}
                </h3>
                <p
                    style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '100%',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.4s ease',
                    }}
                >
                    {project.description}
                </p>
            </div>

            {/* Play Button Icon on Hover */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: isHovered ? 1 : 0,
                    transition: 'all 0.4s ease',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
            >
                <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid #fff', marginLeft: '8px' }} />
            </div>
        </div>
    );
};

const FeaturedProjects = () => {
    return (
        <section
            style={{
                padding: '100px 5vw',
                minHeight: '100vh',
            }}
        >
            <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '10px' }}>
                    FEATURED PROJECTS
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    /Selected works from the pixel universe
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '40px',
                }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <button
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-mono)',
                        cursor: 'pointer',
                        padding: '10px 20px',
                        textDecoration: 'underline',
                        textUnderlineOffset: '8px',
                    }}
                >
                    View Full Archive →
                </button>
            </div>
        </section>
    );
};

export default FeaturedProjects;
