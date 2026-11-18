'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'For Judges', href: '#judges-overview' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-emerald-900/40 shadow-lg shadow-black/30'
          : 'bg-[#090d16]/60 backdrop-blur-sm border-slate-800/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-100 hover:text-emerald-400 font-semibold text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg px-2 py-1 transition-colors"
            aria-label="Swaroop Bevinal Portfolio Home"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-sm font-bold shadow-inner shadow-emerald-500/20">
              SB
            </span>
            <span className="font-bold tracking-tight text-slate-100">
              {portfolioData.name}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-emerald-400/80 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
              CS @ BIT
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {link.label}
              </a>
            ))}

            <div className="h-4 w-px bg-slate-800 mx-2" aria-hidden="true" />

            {/* Quick Action Button for Judges */}
            <a
              href="#judges-overview"
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-all shadow-sm shadow-emerald-950 hover:border-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Judge Briefing
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#judges-overview"
              className="px-2.5 py-1 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 rounded-md"
            >
              Judges
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c1220]/95 backdrop-blur-md px-4 pt-2 pb-5 space-y-1.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#judges-overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2 px-3 text-sm font-semibold rounded-lg text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors"
            >
              ⚡ View Judge Briefing
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
