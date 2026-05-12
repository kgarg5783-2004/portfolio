import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function CinedreamsProject() {
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
                            Laravel MVC Project
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-slate-900 dark:text-white">
                            Cinedreams Productions Website
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            A professional, fully dynamic web platform designed for a premier film and video production agency. Built using the Laravel MVC architecture, the application serves as an interactive showcase of creative cinematic portfolios and corporate video services.
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
                                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Technology</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">PHP Laravel</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Database</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">MySQL / MariaDB</span>
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
                                Film production agencies require highly visual, well-structured platforms to present high-fidelity reels, pitch decks, and services to global clients. For Cinedreams Productions, I developed both the user-facing frontend and a powerful admin content management backend within a unified Laravel framework. By establishing structured relational databases and native PHP mail integrations, the system bridges corporate storytelling with streamlined client communications.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Technology Stack & Key Features</h2>
                            <div className="space-y-4">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The application leverages Laravel&apos;s built-in services to handle user management, secure file operations, and mailing configurations cleanly:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li><strong>Laravel MVC Architecture:</strong> Utilized to separate business logic, controller endpoints, and responsive HTML-Blade template views for easy maintenance.</li>
                                    <li><strong>Dynamic Admin Dashboard:</strong> Features a fully custom Content Management System (CMS) where administrators can write, edit, publish, or delete blog articles and announcements.</li>
                                    <li><strong>Secure SMTP Mail Integration:</strong> Configured dedicated email routing via SMTP. This ensures contact forms and service requests submit instantly and land directly in the agency&apos;s primary mailbox with robust error-logging.</li>
                                    <li><strong>Eloquent ORM Databases:</strong> Structured database schemas to store media listings, dynamic company blogs, and inquiries securely.</li>
                                    <li><strong>Responsive Frontend UI:</strong> Designed with performance in mind to render visual content and film profiles smoothly on both desktop and mobile platforms.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* --- Module Breakdown: Client-Facing vs Administration --- */}
                    <section className="mb-16 border-t border-slate-200 dark:border-slate-800 pt-10">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">System Architecture</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* Admin Console Description */}
                            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                <span className="text-2xl mb-3 block">⚙️</span>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Admin CMS Control</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    A secure back-office designed for company administrators to update content without editing any code.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">✔ Secure admin login page</li>
                                    <li className="flex items-center gap-2">✔ Create and moderate blog articles</li>
                                    <li className="flex items-center gap-2">✔ Update announcements & tickers</li>
                                    <li className="flex items-center gap-2">✔ Manage and track dynamic user inquiries</li>
                                </ul>
                            </div>

                            {/* Client Portal Description */}
                            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                <span className="text-2xl mb-3 block">🎬</span>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Client Showcase Interface</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    The public interface designed for viewers, filmmakers, and corporate clients looking to hire talent.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">✔ Dynamic production and media lists</li>
                                    <li className="flex items-center gap-2">✔ Interactive contact & hiring form</li>
                                    <li className="flex items-center gap-2">✔ Dynamic company blog section</li>
                                    <li className="flex items-center gap-2">✔ Fully responsive, modern UI design</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* --- Visual Screenshot Area --- */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Project Showcase</h2>
                        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-8 text-center min-h-[250px] flex flex-col items-center justify-center">
                            <span className="text-4xl mb-3">🖥️</span>
                            <img 
                                src="/cinedream.png" 
                                alt="Cinedreams Productions Interface Screenshot" 
                                className="mt-4 rounded-lg shadow-md border border-slate-300 dark:border-slate-700 max-w-full h-auto" 
                            />
                        </div>
                    </section>

                    {/* --- Call to Action --- */}
                    <section className="border-t border-slate-200 dark:border-slate-800 pt-10 text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="https://github.com/kgarg5783-2004/cinedreams" // Replace with your actual project repository
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
                            >
                                View Codebase on GitHub
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