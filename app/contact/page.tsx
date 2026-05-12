"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
const Contact = () => {
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

        const cards = document.querySelectorAll(".contact-card");
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

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const contactCards = [
        {
            id: 1,
            title: "Email",
            value: "Kgarg5783@gmail.com",
            link: "mailto:Kgarg5783@gmail.com",
            icon: "📧",
            gradient: "from-blue-500/20 to-indigo-500/20",
            borderHover: "hover:border-blue-500/50",
            glow: "hover:shadow-blue-500/20",
            color: "blue"
        },
        {
            id: 2,
            title: "Phone",
            value: "+91 97299 98761",
            link: "tel:+919729998761",
            icon: "📱",
            gradient: "from-purple-500/20 to-pink-500/20",
            borderHover: "hover:border-purple-500/50",
            glow: "hover:shadow-purple-500/20",
            color: "purple"
        },
        {
            id: 3,
            title: "Location",
            value: "Sonepat, Haryana, India",
            link: null,
            icon: "📍",
            gradient: "from-emerald-500/20 to-teal-500/20",
            borderHover: "hover:border-emerald-500/50",
            glow: "hover:shadow-emerald-500/20",
            color: "emerald"
        }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/khushigarg39",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
            gradient: "from-gray-700/20 to-gray-600/20",
            color: "gray"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/khushigarg39",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.207 0 22.225 0z" />
                </svg>
            ),
            gradient: "from-blue-600/20 to-blue-500/20",
            color: "linkedin"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/khushigarg39",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.385-5.016c1.197-2.617 1.824-5.593 1.824-8.616 0-.482-.011-.964-.032-1.446A9.99 9.99 0 0024 4.557z"/>
                </svg>
            ),
            gradient: "from-sky-500/20 to-blue-500/20",
            color: "sky"
        },
        {
            name: "GitLab",
            url: "https://gitlab.com/khushigarg39",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.955 13.587L22.4 9.201 20.849 4.809c-.089-.266-.324-.443-.588-.443a.623.623 0 00-.588.443l-1.553 4.392H6.887L5.334 4.809a.623.623 0 00-.588-.443c-.264 0-.499.177-.588.443L2.6 9.201.045 13.587a.914.914 0 00.376 1.111l10.893 6.964a1.206 1.206 0 001.373 0l10.893-6.964a.914.914 0 00.375-1.111z"/>
                </svg>
            ),
            gradient: "from-orange-500/20 to-red-500/20",
            color: "orange"
        }
    ];

    const workingHours = [
        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", icon: "💼" },
        { day: "Saturday", hours: "10:00 AM - 4:00 PM", icon: "🌤️" },
        { day: "Sunday", hours: "Closed", icon: "🌙" }
    ];

    return (
      <>
      <Navbar/>
        <section
            id="contact"
            ref={sectionRef}
            className="relative min-h-screen bg-[rgb(1,6,23)] text-white py-24 md:py-32 overflow-hidden font-sans"
        >
            {/* Dynamic Spotlight Cursor Effect */}
            <div
                className="fixed pointer-events-none z-0 transition-opacity duration-500"
                style={{
                    left: mousePosition.x - 300,
                    top: mousePosition.y - 300,
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(100,154,255,0.08) 0%, transparent 70%)",
                }}
            />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] -left-32 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[10%] -right-32 w-[450px] h-[450px] bg-purple-600/6 rounded-full blur-[140px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/4 rounded-full blur-[160px]" />
            </div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30h30v30H30zM0 30h30v30H0z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 bg-white/[0.03] backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10 mb-6">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                        <span className="text-xs uppercase tracking-wider font-semibold text-gray-300">
                            Let's Connect
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                        Get In{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Touch
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                      I specialize in turning complex requirements into seamless digital products. If you’re looking for a developer who understands both the frontend aesthetics and backend architecture, let’s connect.
                    </p>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6 mx-auto" />
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {contactCards.map((card, idx) => (
                        <div
                            key={card.id}
                            data-index={idx}
                            className={`contact-card group relative bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${card.glow} ${card.borderHover}`}
                            style={{
                                animation: visibleCards.has(idx)
                                    ? "cardReveal 0.6s ease-out forwards"
                                    : "none",
                                opacity: 0,
                            }}
                        >
                            {/* Gradient Background Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

                            <div className="relative z-10 text-center">
                                {/* Icon */}
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                                    {card.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                                    {card.title}
                                </h3>

                                {/* Value / Link */}
                                {card.link ? (
                                    <a
                                        href={card.link}
                                        className="text-lg md:text-xl font-semibold text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 inline-block"
                                    >
                                        {card.value}
                                    </a>
                                ) : (
                                    <p className="text-lg md:text-xl font-semibold text-gray-200">
                                        {card.value}
                                    </p>
                                )}

                                {/* Copy Button (for email and phone) */}
                                {card.link && (
                                    <button
                                        onClick={() => copyToClipboard(card.value, card.title)}
                                        className="mt-3 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-400 transition-colors duration-300 group/copy"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                        </svg>
                                        {copiedField === card.title ? "Copied!" : "Copy"}
                                    </button>
                                )}
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/30 rounded-tr-xl" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Two Column Layout: Social Links + Working Hours */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Social Links Section */}
                    <div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-xl">
                                🌐
                            </div>
                            <h3 className="text-xl font-bold text-white">Connect Digitally</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Find me on these platforms for professional networking and collaboration.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br ${social.gradient} border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {social.icon}
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Working Hours Section */}
                    <div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-xl">
                                ⏰
                            </div>
                            <h3 className="text-xl font-bold text-white">Availability</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            I typically respond within 24 hours during business days.
                        </p>
                        <div className="space-y-4">
                            {workingHours.map((schedule, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">{schedule.icon}</span>
                                        <span className="text-sm font-medium text-gray-300">{schedule.day}</span>
                                    </div>
                                    <span className={`text-sm font-semibold ${schedule.hours === "Closed" ? "text-red-400" : "text-green-400"}`}>
                                        {schedule.hours}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

       
            </div>

            {/* Keyframe Animations */}
            <style jsx>{`
                @keyframes cardReveal {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-in {
                    animation: fade-in 0.7s ease-out forwards;
                }
                .contact-card {
                    animation-fill-mode: forwards;
                }
            `}</style>
        </section>
        <Footer/>
        </>
    );
};

export default Contact;