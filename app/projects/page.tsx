"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Projects = () => {
    const projects = [
        {
            title: "Job Portal Platform",
            category: "Full Stack Application",
            description:
                "A comprehensive job board featuring dedicated portals. The Admin panel allows recruiters to seamlessly create and manage job postings, while the User panel provides candidates with an intuitive interface to browse and apply for jobs instantly.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/kgarg5783-2004/JobPortal-0108",
            
            // 1. Point to your unique page routes
            detailsLink: "/jobportal", 
            
            bgGradient: "from-blue-600/30 via-blue-500/20 to-purple-600/20",
            icon: "💼",
            stats: { lines: "5k+", updates: "Real-time" },
        },
        {
            title: "Cinedreams Productions",
            category: "Talent Management System",
            description:
                "A complete end-to-end talent management and audition platform. Designed the complete UI and built a robust admin panel. Features include an interactive 'Artist Profile' submission module for users and a comprehensive 'Talent Pool' administration dashboard.",
            techStack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind"],
            github: "https://github.com/kgarg5783-2004/cinedreams",
            
            // 1. Point to your unique page routes
            detailsLink: "/cinedream", 
            
            bgGradient: "from-[rgb(100,154,255)]/30 to-cyan-500/20",
            icon: "🎬",
            stats: { users: "200+", auditions: "50+" },
        },
        {
            title: "TATVARESEARCH",
            category: "Data Strategy Platform",
            description:
                "Designed and developed the UI and admin panel for a data research and strategy solutions company. Integrated AI capabilities and achieved a 70% improvement in advanced client updates.",
            techStack: ["PHP", "AI Integration", "HTML/CSS", "JavaScript"],
            github: "https://github.com/kgarg5783-2004/TatvaResearch2004",
            
            // 1. Point to your unique page routes
            detailsLink: "/tatvaresearch", 
            
            bgGradient: "from-emerald-500/30 to-teal-600/20",
            icon: "📊",
            stats: { improvement: "70%", clients: "Enterprise" },
        },
    ];

    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isGlowActive, setIsGlowActive] = useState(false);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cardIndex = parseInt(entry.target.getAttribute("data-index") || "0");
                        setVisibleCards((prev) => new Set(prev).add(cardIndex));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "50px" }
        );

        const cards = document.querySelectorAll(".project-card-observe");
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    // Mouse move effect for dynamic spotlight
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
        <Navbar/>
        <section
            id="projects"
            ref={sectionRef}
            className="relative min-h-screen bg-[rgb(1,6,23)] text-white py-24 md:py-32 overflow-hidden font-sans"
        >
            {/* Dynamic Spotlight Effect */}
            <div
                className="fixed pointer-events-none z-0 transition-opacity duration-300"
                style={{
                    left: mousePosition.x - 300,
                    top: mousePosition.y - 300,
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(100,154,255,0.08) 0%, transparent 70%)",
                    opacity: isGlowActive ? 0.6 : 0,
                    transition: "opacity 0.5s ease",
                }}
            />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 -right-48 w-[600px] h-[600px] bg-[rgb(100,154,255)]/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none" />

            {/* Mesh Gradient Overlay */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 20% 50%, rgba(100,154,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(100,154,255,0.05) 0%, transparent 50%)",
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 ">
                                Featured{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(100,154,255)] via-blue-400 to-indigo-400">
                                    Projects
                                </span>
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                A curated selection of my recent work, demonstrating full-stack
                                expertise, innovative problem-solving, and user-centric design
                                philosophy.
                            </p>
                            <div className="w-20 h-0.5 bg-gradient-to-r from-[rgb(100,154,255)] to-transparent mt-5 rounded-full" />
                        </div>
                        <div className="md:text-right">
                            <a
                                href="https://github.com/kgarg5783-2004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[rgb(100,154,255)]/10 hover:border-[rgb(100,154,255)]/40 transition-all duration-300 font-medium text-gray-300 hover:text-white"
                                onMouseEnter={() => setIsGlowActive(true)}
                                onMouseLeave={() => setIsGlowActive(false)}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>View all on GitHub</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className="project-card-observe group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[rgb(100,154,255)]/15"
                            style={{
                                animation: visibleCards.has(index)
                                    ? "cardReveal 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards"
                                    : "none",
                                opacity: 0,
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className={`relative h-52 w-full overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.bgGradient}`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                                <div className="relative h-full w-full flex items-center justify-center">
                                    <span
                                        className="text-7xl filter drop-shadow-2xl transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                                        style={{
                                            filter: hoveredCard === index ? "drop-shadow(0 0 20px rgba(100,154,255,0.5))" : "none",
                                        }}
                                    >
                                        {project.icon}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(1,6,23)] via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-6 md:p-7 flex flex-col flex-grow relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-[rgb(100,154,255)] tracking-wider uppercase bg-[rgb(100,154,255)]/10 px-2.5 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-2 text-[10px] text-gray-400">
                                        {Object.entries(project.stats).map(([key, val]) => (
                                            <span key={key} className="flex items-center gap-1">
                                                <span className="w-1 h-1 rounded-full bg-[rgb(100,154,255)]" />
                                                {val}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[rgb(100,154,255)] transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-[rgb(1,6,23)]/80 border border-gray-800 text-gray-300 rounded-md text-xs font-medium transition-all duration-300 hover:border-[rgb(100,154,255)]/50 hover:text-[rgb(100,154,255)] hover:scale-105"
                                            style={{ transitionDelay: `${techIndex * 30}ms` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Dual Action Buttons */}
                                <div className="mt-auto pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
                                    
                                    {/* 2. ROUTE TO THE DYNAMIC PATH */}
                                    <Link
                                        href={project.detailsLink} 
                                        className="group/btn relative overflow-hidden flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-[rgb(100,154,255)] to-blue-500 text-white hover:shadow-lg hover:shadow-[rgb(100,154,255)]/30 transition-all duration-300 font-semibold text-sm"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Full Details
                                            <svg
                                                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-[rgb(100,154,255)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                    </Link>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 transition-all duration-300 font-semibold text-sm group/github"
                                    >
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/github:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[rgb(100,154,255)]/40 rounded-tr-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes cardReveal {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                .project-card-observe {
                    animation-fill-mode: forwards;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
        </>
    );
};

export default Projects;