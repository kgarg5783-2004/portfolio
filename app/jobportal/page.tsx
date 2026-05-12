import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function JobPortalProject() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 pt-32 pb-20 transition-colors duration-300 font-sans">
                <div className="container mx-auto px-6 max-w-4xl">
                    
                    {/* --- Back Link --- */}
                    <div className="mb-8">
                        <Link href="/#projects" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1">
                            ← Back to Portfolio
                        </Link>
                    </div>

                    {/* --- Header Section --- */}
                    <header className="border-b border-slate-200 dark:border-slate-800 pb-10 mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-md">
                            MERN Stack Project
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-slate-900 dark:text-white">
                            Job Portal Web Application
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            A complete recruitment platform designed to bridge the gap between job-seeking students and recruiters. Built as a high-performance system, it provides clear and structured spaces for both parties to connect and communicate.
                        </p>
                    </header>

                    {/* --- Project Snapshot / Quick Metadata --- */}
                    <section className="mb-12">
                        <h2 className="text-xl font-bold mb-4 text-slate-950 dark:text-white">Project Quick Facts</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                            <div>
                                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">My Role</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">Full Stack Developer</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Database</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">MongoDB</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Security</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">JWT Token</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Current Status</span>
                                <span className="font-bold text-green-600 dark:text-green-400">Completed</span>
                            </div>
                        </div>
                    </section>

                    {/* --- Detailed Project Description --- */}
                    <section className="space-y-8 mb-16">
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">About the Project</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                Traditional job portals are often cluttered and make it difficult for applicants to keep track of their submittals. To address this, I built a dual-panel web system where recruiters can seamlessly post employment openings, and students can search for jobs and apply instantly. This structure centralizes communication and removes external noise, ensuring candidates and managers are always on the same page.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Technology Stack Used</h2>
                            <div className="space-y-4">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The application is built on top of the robust **MERN (MongoDB, Express, React, Node.js)** framework to handle scaling and fast page updates:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li><strong>React & Next.js:</strong> Used to construct a responsive, fast user interface that lets users navigate dashboards without constant page refreshes.</li>
                                    <li><strong>Node.js & Express.js:</strong> Serves as the backend API to handle data logic, server operations, and routing.</li>
                                    <li><strong>MongoDB:</strong> A flexible NoSQL database storing user profiles, detailed job postings, and application records securely.</li>
                                    <li><strong>Tailwind CSS:</strong> Used for clean, consistent responsive layout alignments and standard theme customization.</li>
                                    <li><strong>JWT (JSON Web Tokens):</strong> Implemented to secure routes, keeping student and recruiter panels strictly isolated.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* --- Module Breakdown: Recruiters vs Students --- */}
                    <section className="mb-16 border-t border-slate-200 dark:border-slate-800 pt-10">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">System Architecture (Two Panels)</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* Recruiter Panel Description */}
                            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                <span className="text-2xl mb-3 block">🏢</span>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Recruiter Panel</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    This dashboard is optimized for hiring managers to build, publish, and supervise job postings.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">✔ Create and edit job posts</li>
                                    <li className="flex items-center gap-2">✔ Set custom job requirements</li>
                                    <li className="flex items-center gap-2">✔ View applicant profile details</li>
                                    <li className="flex items-center gap-2">✔ Accept or decline applications</li>
                                </ul>
                            </div>

                            {/* Student Panel Description */}
                            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                <span className="text-2xl mb-3 block">🎓</span>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Student Panel</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    A direct portal designed for students to explore open careers and track progress.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">✔ Live job search & filter features</li>
                                    <li className="flex items-center gap-2">✔ Direct profile-to-job application</li>
                                    <li className="flex items-center gap-2">✔ Application history logs</li>
                                    <li className="flex items-center gap-2">✔ Real-time status tracker</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* --- Visual Screenshot Area --- */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Project Showcase</h2>
                        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-8 text-center min-h-[250px] flex flex-col items-center justify-center">
                            <span className="text-4xl mb-3">🖥️</span>
                                                  <img src='/projectss.png' alt='Job Portal Screenshots' className="mt-4 rounded-lg shadow-md border border-slate-300 dark:border-slate-700 max-w-full h-auto" />
                                             </div>
                    </section>

                    {/* --- Call to Action --- */}
                    <section className="border-t border-slate-200 dark:border-slate-800 pt-10 text-center">
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="https://github.com/kgarg5783-2004/JobPortal-0108"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
                            >
                                View GitHub Codebase
                            </a>
                            <Link 
                                href="/contact"
                                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold rounded-lg text-sm transition-colors"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </>
    );
}