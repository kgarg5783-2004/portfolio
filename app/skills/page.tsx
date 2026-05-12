"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

const TechnicalSkillsGrid = () => {
    const skills = [
        { name: "React.js", yoe: "4 month", level: 85, icon: "⚛️", category: "Frontend" },
        { name: "Next.js", yoe: "4 month", level: 80, icon: "▲", category: "Frontend" },
        { name: "JavaScript", yoe: "3 month", level: 90, icon: "🟨", category: "Core" },
        { name: "TypeScript", yoe: "3 month", level: 78, icon: "📘", category: "Core" },
        { name: "HTML & CSS", yoe: "6 month", level: 95, icon: "🎨", category: "Frontend" },
        { name: "Tailwind CSS", yoe: "6 month", level: 85, icon: "🌊", category: "Frontend" },
        { name: "Node.js", yoe: "6 month", level: 75, icon: "🟢", category: "Backend" },
        { name: "PHP", yoe: "3 month", level: 80, icon: "🐘", category: "Backend" },
        { name: "Laravel", yoe: "3 month", level: 70, icon: "🔥", category: "Backend" },
        { name: "C#", yoe: "2 month", level: 75, icon: "🎯", category: "Backend" },
        { name: "SQL Server", yoe: "6 month", level: 80, icon: "🗄️", category: "Database" },
        { name: "MongoDB", yoe: "6 month", level: 75, icon: "🍃", category: "Database" },
        { name: "PostgreSQL", yoe: "3 month", level: 72, icon: "🐘", category: "Database" },
        { name: "Git/GitHub", yoe: "6 month", level: 85, icon: "🐙", category: "Tools" },
        { name: "Docker", yoe: "6 month", level: 65, icon: "🐳", category: "DevOps" },
        { name: "REST APIs", yoe: "6 month", level: 82, icon: "🔗", category: "Backend" },
    ];

    const [animatedCards, setAnimatedCards] = useState(new Set());
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cardIndex = parseInt(entry.target.getAttribute("data-index") || "0");
                        setAnimatedCards((prev) => new Set(prev).add(cardIndex));
                    }
                });
            },
            { threshold: 0.05 }
        );

        const cards = document.querySelectorAll(".skill-card-observe");
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const categories = ["All", "Frontend", "Backend", "Database", "Core", "Tools", "DevOps"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);

    return (
        <>
            <Navbar />
            <section
                id="skills-grid"
                ref={sectionRef}
                className="relative min-h-screen bg-[rgb(1,6,23)] text-white py-16 md:py-32 overflow-x-hidden font-sans"
            >
                {/* Ambient Background Glows */}
                <div className="absolute top-[10%] -left-32 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[rgb(100,154,255)]/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-[5%] -right-32 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
                        <div className="inline-flex items-center gap-2 bg-white/[0.03] backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-1.5 border border-white/10 mb-4 md:mb-6">
                            <span className="w-2 h-2 rounded-full bg-[rgb(100,154,255)] animate-pulse" />
                            <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-gray-300">
                                Core Competencies
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-5 tracking-tight">
                            Technical{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(100,154,255)] via-blue-400 to-indigo-400">
                                Arsenal
                            </span>
                        </h2>

                        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
                            A comprehensive showcase of my technologies, proficiency levels, and
                            hands-on experience in the modern ecosystem.
                        </p>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-2 mt-8 px-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === cat
                                            ? "bg-[rgb(100,154,255)] text-white shadow-lg shadow-blue-500/25"
                                            : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid - 2 columns on mobile, 4 on desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                        {filteredSkills.map((skill, idx) => (
                            <div
                                key={`${skill.name}-${idx}`}
                                data-index={idx}
                                className="skill-card-observe group relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-[rgb(100,154,255)]/50 transition-all duration-500 md:hover:-translate-y-2 flex flex-col justify-between min-h-[140px] md:min-h-[180px]"
                                style={{
                                    animation: animatedCards.has(idx)
                                        ? "fadeInUp 0.5s ease-out forwards"
                                        : "none",
                                    opacity: 0,
                                }}
                            >
                                <div className="flex justify-between items-start mb-2 md:mb-4">
                                    <span className="text-2xl md:text-4xl group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </span>
                                    <span className="text-[9px] md:text-xs font-bold px-2 py-1 bg-[rgb(100,154,255)]/10 text-[rgb(100,154,255)] rounded-full border border-[rgb(100,154,255)]/20">
                                        {skill.yoe}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-3 truncate group-hover:text-[rgb(100,154,255)] transition-colors">
                                        {skill.name}
                                    </h3>

                                    <div className="w-full h-1.5 md:h-2 bg-gray-800/60 rounded-full overflow-hidden relative">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-[rgb(100,154,255)]/20 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full transition-all duration-700 ease-out origin-left md:scale-x-0 md:group-hover:scale-x-100"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>

                                    <div className="flex justify-between items-center mt-1.5 md:mt-2">
                                        <span className="text-[9px] md:text-[11px] font-mono text-gray-400">Level</span>
                                        <span className="text-[10px] md:text-xs font-bold text-[rgb(100,154,255)]">
                                            {skill.level}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredSkills.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No skills found.</p>
                        </div>
                    )}

                    <style jsx>{`
                        @keyframes fadeInUp {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default TechnicalSkillsGrid;