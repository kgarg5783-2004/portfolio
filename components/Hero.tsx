'use client';
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-[rgb(1,6,23)] text-white font-sans overflow-x-hidden">
            <Navbar />
            
            {/* --- 1. HERO BODY SECTION --- */}
            <section className="container mx-auto px-4 sm:px-6 pt-24 lg:pt-10 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 lg:mt-30">
                {/* Text Content Column */}
                <div className="w-full lg:w-4/5 space-y-6 lg:p-12 order-2 lg:order-1 text-left">
                    
                    {/* Bouncing Headline Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[rgb(100,154,255)] text-[rgb(100,154,255)] text-sm font-bold bg-[rgb(100,154,255)]/5 animate-bounce max-w-full break-words">
                        <span className="inline-block mr-2">👨‍💻</span> Software developer | full stack enthusiast @ Apricorn Solutions
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                        Hello! I'm <span className="text-[rgb(100,154,255)]">Khushi</span>
                    </h1>
                    
                    <h2 className="text-xl sm:text-2xl text-slate-300 font-bold mt-0 p-0">
                        Passionate about clean code, performance, and user-focused design.
                    </h2>
                    
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                        I’m a full stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), with additional experience in building robust web applications using PHP and Laravel. I enjoy turning complex problems into simple, efficient, and scalable solutions.
                        <br className="hidden sm:inline" />
                        I’ve worked on developing responsive web applications, RESTful APIs, and dynamic websites, focusing on performance, clean architecture, and seamless user experience. Whether it’s building from scratch or improving existing systems, I aim to deliver reliable and maintainable code.
                    </p>
                    
                    {/* Focus Checklist Container Box */}
                    <div className="border border-blue-400/40 rounded-xl p-4 sm:p-5 bg-white/5 backdrop-blur-sm w-full max-w-xl">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white text-sm sm:text-base">
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span> Project Management
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span> Team Collaboration
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span> UI Development
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">✔</span> MERN, PHP, Laravel Expertise
                            </li>
                        </ul>
                    </div>
                    
                    {/* Action Hub */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button 
                            onClick={() => router.push('/projects')} 
                            className="w-full sm:w-auto bg-[rgb(100,154,255)] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all text-center shadow-lg shadow-[rgb(100,154,255)]/20"
                        >
                            View Projects
                        </button>
                        <a
                            href='/contact'
                            className="w-full sm:w-auto text-center border border-gray-700 hover:border-[rgb(100,154,255)] px-8 py-3 rounded-lg font-semibold transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Profile Graphics Column */}
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-2/5 mt-6 lg:mt-0 relative order-1 lg:order-2 mx-auto">
                    <div className="relative z-10 border-2 border-gray-800 rounded-2xl p-3 bg-gray-900/50 backdrop-blur-sm shadow-2xl">
                        <Image 
                            src="/hero.JPG" 
                            alt="Profile Picture" 
                            width={500} 
                            height={500} 
                            className="rounded-xl object-cover w-full h-auto transition duration-500 hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* --- 2. STATISTICS METRICS HOUSING --- */}
            <section className="relative overflow-hidden border-y border-white/5 bg-slate-950 py-16">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-8">
                        {/* College CGPA */}
                        <div className="group relative text-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-2">
                                9.0
                            </h3>
                            <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-slate-500">
                                College CGPA
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>

                        {/* Daily Resolutions */}
                        <div className="group relative text-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-2">
                                50<span className="text-2xl ml-1 text-blue-400/60">+</span>
                            </h3>
                            <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-slate-500">
                                Daily Resolutions
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>

                        {/* Efficiency Boost */}
                        <div className="group relative text-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-2">
                                90<span className="text-2xl ml-1 text-blue-400/60">%</span>
                            </h3>
                            <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-slate-500">
                                Efficiency Boost
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>

                        {/* B.Tech Graduation */}
                        <div className="group relative text-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-2">
                                2026
                            </h3>
                            <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-slate-500">
                                B.Tech Graduate
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </section>

            {/* --- 3. TIMELINE & SKILLS MATRIX --- */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 font-sans">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 max-w-6xl mx-auto p-2 sm:p-6 lg:p-8">
                    
                    {/* Left Column: Professional Experience */}
                    <div className="w-full">
                        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[rgb(100,154,255)]/30 text-[rgb(100,154,255)] text-xs font-bold tracking-widest uppercase bg-[rgb(100,154,255)]/5">
                            Career Path
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(100,154,255)] to-blue-400">Experience</span>
                        </h3>
                        
                        <div className="space-y-10 relative before:absolute before:inset-0 before:left-[7px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[rgb(100,154,255)] before:via-white/10 before:to-transparent">
                            
                            {/* Apricorn Solutions Card */}
                            <div className="relative pl-8 group">
                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[rgb(1,6,23)] border-2 border-[rgb(100,154,255)] group-hover:bg-[rgb(100,154,255)] group-hover:shadow-[0_0_15px_rgba(100,154,255,0.6)] transition-all duration-300 z-10" />
                                <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-5 sm:p-6 rounded-2xl hover:bg-white/[0.04] hover:border-[rgb(100,154,255)]/30 transition-all duration-300 lg:hover:-translate-y-1">
                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Internship - Apricorn Solutions</h4>
                                    <p className="text-[rgb(100,154,255)] text-xs sm:text-sm font-semibold tracking-wide mb-3">Feb 2025 - Present</p>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Developing robust and scalable websites utilizing PHP, Next.js, and WordPress architecture.
                                    </p>
                                </div>
                            </div>

                            {/* KPRS Private Ltd Card */}
                            <div className="relative pl-8 group">
                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[rgb(1,6,23)] border-2 border-gray-600 group-hover:border-[rgb(100,154,255)] group-hover:bg-[rgb(100,154,255)] group-hover:shadow-[0_0_15px_rgba(100,154,255,0.6)] transition-all duration-300 z-10" />
                                <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-5 sm:p-6 rounded-2xl hover:bg-white/[0.04] hover:border-[rgb(100,154,255)]/30 transition-all duration-300 lg:hover:-translate-y-1">
                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Internship - KPRS Private Ltd</h4>
                                    <p className="text-gray-400 text-xs sm:text-sm font-medium mb-4 group-hover:text-[rgb(100,154,255)] transition-colors duration-300">Feb 2025 - Present</p>
                                    <ul className="text-gray-400 text-sm space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[rgb(100,154,255)] mt-1 text-xs shrink-0">◆</span>
                                            <span>Developed frontend interfaces for school applications using React JS.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[rgb(100,154,255)] mt-1 text-xs shrink-0">◆</span>
                                            <span>Improved system response efficiency by 30%.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Toolkit Matrix & Education Summary */}
                    <div className="w-full space-y-12">
                        <div>
                            <div className="inline-block px-4 py-1 mb-4 rounded-full border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase bg-white/5">
                                Expertise
                            </div>
                            <h3 className="text-3xl font-bold mb-8 text-white">Technical Toolkit</h3>
                            
                            <div className="flex flex-wrap gap-2.5">
                                {["React JS", "Next JS", "JavaScript", "HTML/CSS", "Tailwind", "C#", "SQL", "PHP"].map((skill) => (
                                    <span 
                                        key={skill} 
                                        className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded-xl text-xs sm:text-sm font-medium text-gray-300 cursor-default
                                        hover:-translate-y-1 hover:text-white hover:bg-[rgb(100,154,255)]/10 hover:border-[rgb(100,154,255)]/50 hover:shadow-[0_4px_15px_rgba(100,154,255,0.15)] transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="inline-block px-4 py-1 mb-4 rounded-full border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase bg-white/5">
                                Academic Background
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-white">Education</h3>
                            
                            {/* Frosted Glass Education Showcase Card */}
                            <div className="group relative bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-sm hover:bg-white/[0.04] hover:border-[rgb(100,154,255)]/30 hover:shadow-[0_10px_40px_rgba(100,154,255,0.05)] transition-all duration-500 lg:hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[rgb(100,154,255)]/5 rounded-bl-full pointer-events-none transition-colors duration-500 group-hover:bg-[rgb(100,154,255)]/10" />
                                
                                <div className="relative z-10">
                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[rgb(100,154,255)] transition-colors duration-300">
                                        B. Tech - Computer Science & Engineering
                                    </h4>
                                    <p className="text-gray-400 text-sm sm:text-base mb-4 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                        DCRUST University, Murthal
                                    </p>
                                    <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-[rgb(100,154,255)]/10 border border-[rgb(100,154,255)]/20 text-[rgb(100,154,255)] text-xs sm:text-sm font-bold tracking-wide">
                                        2022 - 2026
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;