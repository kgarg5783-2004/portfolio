import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function TatvaResearchProject() {
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
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-md">
                            Core PHP Project
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-slate-900 dark:text-white">
                            Tatva Research Platform
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            A highly professional and clean web platform built for a data strategy and research solutions company. The application focuses on showcasing complex data insights, research papers, and predictive market reach while offering a custom-built administration console.
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
                                <span className="font-bold text-slate-800 dark:text-slate-200">Core PHP</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Database</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">MySQL</span>
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
                                Data strategy agencies require specialized, fast-loading digital interfaces to convey heavy analysis reports, predictive data models, and reach statistics without overwhelming prospective enterprise clients. For Tatva Research, I built a lightweight, hand-crafted web application using Core PHP to maintain optimal performance. The site houses complex research databases and features an admin-controlled environment to coordinate corporate publications and capture inbound client leads.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Backend Architecture & Key Features</h2>
                            <div className="space-y-4">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The website uses a native, object-oriented Core PHP backend integrated cleanly with custom database schemas:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                    <li><strong>Core PHP Performance:</strong> Avoided heavy framework overhead by developing customized server logic directly in native PHP, ensuring lightning-fast page response times.</li>
                                    <li><strong>Secure Admin Panel:</strong> Built a custom administrative system to control user access, preventing unauthorized modifications to proprietary company research documents.</li>
                                    <li><strong>Dynamic Research & Publications Engine:</strong> Allows administrators to upload, categorize, and schedule industry reports, white papers, and data reach findings smoothly.</li>
                                    <li><strong>Integrated Blog Module:</strong> Supports writing, editing, and publishing news updates and articles to improve the site&apos;s educational value and search engine ranking.</li>
                                    <li><strong>Lead Capture & Inquiry Tracking:</strong> Processes public feedback and consultation requests instantly, storing structured client contact information inside the database for admin review.</li>
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
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Admin Management Panel</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    The control room where company analysts manage public content and track business leads safely.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">✔ Secure admin session management</li>
                                    <li className="flex items-center gap-2">✔ Add, edit, and archive research posts</li>
                                    <li className="flex items-center gap-2">✔ Create and structure blog updates</li>
                                    <li className="flex items-center gap-2">✔ Access and export captured contact leads</li>
                                </ul>
                            </div>

                            {/* Public Interface Description */}
                            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                <span className="text-2xl mb-3 block">📊</span>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Client-Facing Interface</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    The public platform showcasing analytical services, active insights, and educational write-ups.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">✔ Clean layouts for analytical research lists</li>
                                    <li className="flex items-center gap-2">✔ Dynamic reach prediction display blocks</li>
                                    <li className="flex items-center gap-2">✔ Comprehensive company blogs catalog</li>
                                    <li className="flex items-center gap-2">✔ Lightweight, responsive contact form</li>
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
                                src="/tatva.png" 
                                alt="Tatva Research Platform Screenshots" 
                                className="mt-4 rounded-lg shadow-md border border-slate-300 dark:border-slate-700 max-w-full h-auto" 
                            />
                        </div>
                    </section>

                    {/* --- Call to Action --- */}
                    <section className="border-t border-slate-200 dark:border-slate-800 pt-10 text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="https://github.com/kgarg5783-2004/TatvaResearch2004" // Replace with your actual project repository
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