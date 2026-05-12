"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[rgb(1,6,23)]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20'
            : 'bg-[rgb(1,6,23)]/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          {/* Logo Section with Glow Effect */}
          <Link href="/" className="group relative flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              <Image
                src='/logo.png'
                alt='logo'
                width={150}
                height={120}
                className='rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-105'
              />
            </div>
           
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.path;
              const isHovered = activeHover === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onMouseEnter={() => setActiveHover(link.path)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`relative px-5 py-2.5 rounded-full transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  )}
                  
                  <span className="relative z-10 text-sm font-medium tracking-wide uppercase">
                    {link.name}
                  </span>
                  
                  {/* Hover Background Effect */}
                  {!isActive && (
                    <span
                      className={`absolute inset-0 rounded-full bg-white/5 transition-all duration-300 ${
                        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                    />
                  )}
                  
                  {/* Active Underline Glow */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-[0_0_8px_rgba(100,154,255,0.6)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side: Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold tracking-wide hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <span>Hire Me</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'mb-1.5'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[rgb(1,6,23)]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-400 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col py-4 px-6 space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-wide uppercase">
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    )}
                  </div>
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/10">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span>Hire Me</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}