'use client';
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router=useRouter();
    return (
        <div className="min-h-screen bg-[rgb(1,6,23)] text-white font-sans">
            <Navbar />
            <section className="container mx-auto px-6 pt-10 pb-20 flex flex-col lg:flex-row items-center ">
                <div className="lg:w-4/5 space-y-6 p-30">
                    <div className="inline-block px-4 py-1 rounded-full border border-[rgb(100,154,255)] text-[rgb(100,154,255)] text-md font-bold text-white animate-bounce">
                        <span className="h-20 mr-2"> 👨‍💻 </span> Software developer | full stack enthusiast @ Apricorn Solutions
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Hello! I'm <span className="text-[rgb(100,154,255)]">Khushi</span>
                    </h1>
                    <h2 className="lg:text-2xl text-white-400 font-medium font-bold mt-0 p-0">
                        Passionate about clean code, performance, and user-focused design.
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                        I’m a full stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), with additional experience in building robust web applications using PHP and Laravel. I enjoy turning complex problems into simple, efficient, and scalable solutions.
                        I’ve worked on developing responsive web applications, RESTful APIs, and dynamic websites, focusing on performance, clean architecture, and seamless user experience. Whether it’s building from scratch or improving existing systems, I aim to deliver reliable and maintainable code.
                    </p>
                    <div className="border border-blue-400 rounded-xl p-3 bg-white/5 backdrop-blur-sm w-150 h-25">
                        <ul className="grid grid-cols-2 gap-2 text-white h-18">

                            <li className="flex items-center gap-2 ">
                                <span className="text-green-400">✔</span>
                                Project Management
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✔</span>
                                Team Collaboration
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✔</span>
                                UI Development
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✔</span>
                                MERN , PHP, Laravel Expertise
                            </li>

                        </ul>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button onClick={() => router.push('/projects')} className="bg-[rgb(100,154,255)] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                            View Projects
                        </button>
                        <a
                            href='/contact'
                            className="border border-gray-700 hover:border-[rgb(100,154,255)] px-8 py-3 rounded-lg font-semibold transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>


                <div className="lg:w-2/5 mt-16 lg:mt-0 relative">
                    <div className="relative z-10 border-2 border-gray-800 rounded-2xl p-3 bg-gray-900/50 backdrop-blur-sm  ">
                        <Image src="/hero.JPG" alt="Profile Picture" width={500} height={200} className="rounded-xl object-cover w-full h-full transition duration-500 hover:scale-105" />


                    </div>
                </div>
            </section>

            {/* Stats/Quick Info Section */}
            <section className="relative overflow-hidden border-y border-white/5 bg-slate-950 py-20">
                {/* Optional: Subtle background decorative element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                        {/* Metric 1 */}
                        <div className="group relative text-center">
                            <div className="mb-2 inline-block">
                                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">
                                    9.0
                                </h3>
                            </div>
                            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                                College CGPA
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>

                        {/* Metric 2 */}
                        <div className="group relative text-center">
                            <div className="mb-2 inline-block">
                                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">
                                    50
                                    <span className="text-2xl ml-1 text-blue-400/60">+</span>
                                </h3>
                            </div>
                            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                                Daily Resolutions
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>

                        {/* Metric 3 */}
                        <div className="group relative text-center">
                            <div className="mb-2 inline-block">
                                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">
                                    90<span className="text-2xl ml-1 text-blue-400/60">%</span>
                                </h3>
                            </div>
                            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                                Efficiency Boost
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>

                        {/* Metric 4 */}
                        <div className="group relative text-center">
                            <div className="mb-2 inline-block">
                                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">
                                    2026
                                </h3>
                            </div>
                            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                                B.Tech Graduate
                            </p>
                            <div className="mt-4 h-1 w-8 bg-blue-500/20 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
                        </div>

                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </section>

            {/* Experience & Skills Section */}
       <section className="container mx-auto px-8 py-24 relative z-10 font-sans ">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 p-20 pt-10">
                
                {/* Left Column: Professional Experience */}
                <div>
                    <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[rgb(100,154,255)]/30 text-[rgb(100,154,255)] text-xs font-bold tracking-widest uppercase bg-[rgb(100,154,255)]/5">
                        Career Path
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(100,154,255)] to-blue-400">Experience</span>
                    </h3>
                    
                    <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[7px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[rgb(100,154,255)] before:via-white/10 before:to-transparent">
                        
                        {/* Apricorn Solutions Timeline Item */}
                        <div className="relative pl-8 group">
                            {/* Glowing Node */}
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[rgb(1,6,23)] border-2 border-[rgb(100,154,255)] group-hover:bg-[rgb(100,154,255)] group-hover:shadow-[0_0_15px_rgba(100,154,255,0.6)] transition-all duration-300 z-10"></div>
                            
                            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/[0.04] hover:border-[rgb(100,154,255)]/30 transition-all duration-300 hover:-translate-y-1">
                                <h4 className="text-xl font-bold text-white mb-1">Internship - Apricorn Solutions</h4>
                                <p className="text-[rgb(100,154,255)] text-sm font-semibold tracking-wide mb-3">Feb 2025 - Present</p>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Developing robust and scalable websites utilizing PHP, Next.js, and WordPress architecture.
                                </p>
                            </div>
                        </div>

                        {/* KPRS Private Ltd Timeline Item */}
                        <div className="relative pl-8 group">
                            {/* Glowing Node */}
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[rgb(1,6,23)] border-2 border-gray-600 group-hover:border-[rgb(100,154,255)] group-hover:bg-[rgb(100,154,255)] group-hover:shadow-[0_0_15px_rgba(100,154,255,0.6)] transition-all duration-300 z-10"></div>
                            
                            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/[0.04] hover:border-[rgb(100,154,255)]/30 transition-all duration-300 hover:-translate-y-1">
                                <h4 className="text-xl font-bold text-white mb-1">Internship - KPRS Private Ltd</h4>
                                <p className="text-gray-400 text-sm font-medium mb-4 group-hover:text-[rgb(100,154,255)] transition-colors duration-300">Feb 2025 - Present</p>
                                <ul className="text-gray-400 text-sm space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[rgb(100,154,255)] mt-1 text-xs">◆</span>
                                        Developed frontend interfaces for school applications using React JS.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[rgb(100,154,255)] mt-1 text-xs">◆</span>
                                        Improved system response efficiency by 30%.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Column: Tech Stack & Education */}
                <div>
                    <div className="inline-block px-4 py-1 mb-4 rounded-full border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase bg-white/5">
                        Expertise
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white">Technical Toolkit</h3>
                    
                    {/* Interactive Skill Pills */}
                    <div className="flex flex-wrap gap-3 mb-16">
                        {["React JS", "Next JS", "JavaScript", "HTML/CSS", "Tailwind", "C#", "SQL", "PHP"].map((skill) => (
                            <span 
                                key={skill} 
                                className="px-5 py-2.5 bg-white/[0.02] border border-white/10 rounded-xl text-sm font-medium text-gray-300 cursor-default
                                hover:-translate-y-1 hover:text-white hover:bg-[rgb(100,154,255)]/10 hover:border-[rgb(100,154,255)]/50 hover:shadow-[0_4px_15px_rgba(100,154,255,0.15)] transition-all duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div className="inline-block px-4 py-1 mb-4 rounded-full border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase bg-white/5">
                        Academic Background
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">Education</h3>
                    
                    {/* Glassmorphism Education Card */}
                    <div className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/[0.04] hover:border-[rgb(100,154,255)]/30 hover:shadow-[0_10px_40px_rgba(100,154,255,0.05)] transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(100,154,255)]/5 rounded-bl-full pointer-events-none transition-colors duration-500 group-hover:bg-[rgb(100,154,255)]/10"></div>
                        
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[rgb(100,154,255)] transition-colors duration-300">
                                B. Tech - Computer Science & Engineering
                            </h4>
                            <p className="text-gray-400 text-base mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                </svg>
                                DCRUST University, Murthal
                            </p>
                            <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-[rgb(100,154,255)]/10 border border-[rgb(100,154,255)]/20 text-[rgb(100,154,255)] text-sm font-bold tracking-wide">
                                2022 - 2026
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