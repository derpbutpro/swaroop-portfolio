import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="w-full bg-[#070b12] border-t border-slate-800/80 py-10 text-slate-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright Requirement */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-semibold text-slate-300">
              &copy; 2026 {portfolioData.name}
            </p>
            <p className="text-xs text-slate-400">
              Bangalore Institute of Technology • Computer Science &amp; Engineering
            </p>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-slate-400 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1"
            >
              Projects
            </a>
            <a
              href="#judges-overview"
              className="text-emerald-400/90 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1"
            >
              Judge Briefing
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1"
            >
              Contact
            </a>
          </div>

          {/* Right: Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-slate-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <span aria-hidden="true">&uarr;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
