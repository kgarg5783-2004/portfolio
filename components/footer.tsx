import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[rgb(1,6,23)] border-t border-white/10 text-gray-300 py-12 font-sans">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Brand & About Section */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">
                        Khushi<span className="text-[rgb(100,154,255)]">.</span>
                    </h2>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                        Computer Science engineering student and full-stack enthusiast dedicated to building scalable, user-centric web applications.
                    </p>
                </div>

                {/* Quick Navigation */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <Link href="#about" className="hover:text-[rgb(100,154,255)] transition-colors duration-300">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="#experience" className="hover:text-[rgb(100,154,255)] transition-colors duration-300">
                                Work Experience
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="hover:text-[rgb(100,154,255)] transition-colors duration-300">
                                Projects 
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact & Social Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-3">
                            <span className="text-lg">📧</span>
                            <a 
                                href="mailto:Kgarg5783@gmail.com" 
                                className="hover:text-[rgb(100,154,255)] transition-colors duration-300"
                            >
                                Kgarg5783@gmail.com 
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-lg">📞</span>
                            <a 
                                href="tel:+919729998761" 
                                className="hover:text-[rgb(100,154,255)] transition-colors duration-300"
                            >
                                +91 97299 98761 
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-lg">💻</span>
                            <a 
                                href="http://github.com/khushigarg39" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-[rgb(100,154,255)] transition-colors duration-300"
                            >
                                github.com/khushigarg39 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="container mx-auto px-6 mt-12 pt-6 border-t border-white/5 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} KHUSHI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;