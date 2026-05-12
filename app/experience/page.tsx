import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Frontend Developer Intern",
            company: "KPRS PRIVATE LTD",
            location: "Sonepat, Haryana",
            duration: "April 2025 - Present",
            description: [
                "Assisted in developing frontend web applications for school management systems utilizing React JS.",
                "Resolved 50+ functional and technical queries daily for in-school employees, improving response efficiency by 30%.",
                "Managed and documented 70+ customer IT support queries and feedback records, streamlining reference data for faster resolution.",
                "Performed comprehensive testing and validation to ensure the delivery of 100% working models to the market.",
                "Engaged in team management activities, leading to a 25% increase in collaborative work output."
            ],
            icon: "💻"
        },
        {
            id: 2,
            role: "Web Developer Intern",
            company: "APRICORN SOLUTIONS",
            location: "Sonepat, Haryana",
            duration: "January-2026 Present",
            description: [
                "Developing and maintaining responsive websites based on PHP, Next.js, and WordPress architectures.",
                "Handling functional and technical queries to enhance overall operational efficiency.",
                "Conducting rigorous testing and validation processes to ensure seamless market deployment.",
                "Participating in team management and collaborative development cycles."
            ],
            icon: "🚀"
        }
    ];

    return (
        <>
        <Navbar/>
        <section id="experience" className="min-h-screen bg-[rgb(1,6,23)] text-white py-16 md:py-24 relative overflow-x-hidden font-sans">
            {/* Ambient Background Glows */}
            <div className="absolute top-40 right-[-10%] md:right-20 w-64 md:w-96 h-64 md:h-96 bg-[rgb(100,154,255)]/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-20 left-[-10%] md:left-10 w-48 md:w-72 h-48 md:h-72 bg-[rgb(100,154,255)]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                
                {/* Section Header */}
                <div className="mb-12 md:mb-20 mt-10 text-left">
                    <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[rgb(100,154,255)]/30 text-[rgb(100,154,255)] text-xs md:text-sm font-bold tracking-widest uppercase bg-[rgb(100,154,255)]/5">
                        Career Path
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(100,154,255)] to-blue-400">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                        A timeline of my professional roles, responsibilities, and the impact I've made through code and collaboration.
                    </p>
                </div>

                {/* Timeline Layout */}
                <div className="relative border-l-2 border-white/10 ml-2 md:ml-6 space-y-10 md:space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-6 md:pl-12 group">
                            
                            {/* Glowing Timeline Dot */}
                            <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-[rgb(1,6,23)] border-4 border-white/20 group-hover:border-[rgb(100,154,255)] group-hover:bg-[rgb(100,154,255)]/20 transition-colors duration-500 shadow-[0_0_10px_rgba(100,154,255,0)] group-hover:shadow-[0_0_15px_rgba(100,154,255,0.6)]"></div>

                            {/* Experience Card */}
                            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-5 md:p-8 hover:bg-white/[0.04] hover:border-[rgb(100,154,255)]/30 hover:shadow-[0_10px_40px_rgba(100,154,255,0.05)] transition-all duration-500 md:hover:-translate-y-1">
                                
                                {/* Updated Header: Responsive Layout */}
                                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                                    
                                    {/* Left Side: Role, Company, Location */}
                                    <div className="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                                            {exp.role} 
                                            <span className="text-lg filter drop-shadow-md">{exp.icon}</span>
                                        </h3>
                                        
                                        <span className="text-gray-600 hidden md:inline">|</span>
                                        
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-[rgb(100,154,255)] font-semibold text-base md:text-lg tracking-wide">
                                                {exp.company}
                                            </h4>
                                            
                                            <span className="text-gray-600 md:hidden">|</span>
                                            
                                            <p className="text-gray-400 text-xs md:text-sm flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                {exp.location}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Side: Duration Pill */}
                                    <div className="self-start xl:self-center shrink-0 inline-flex items-center px-3 md:px-4 py-1 rounded-lg bg-[rgb(100,154,255)]/10 border border-[rgb(100,154,255)]/20 text-[rgb(100,154,255)] text-xs md:text-sm font-bold">
                                        {exp.duration}
                                    </div>
                                </div>

                                {/* Achievements & Responsibilities List */}
                                <ul className="space-y-3 text-gray-300">
                                    {exp.description.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 leading-relaxed text-sm md:text-base">
                                            <span className="text-[rgb(100,154,255)] mt-1.5 text-[10px]">◆</span>
                                            <span className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
        <Footer/>
        </>
    );
};

export default Experience;