import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects Showcase"
      className="py-16 md:py-24 border-b border-slate-800 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Work &amp; Implementations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              A detailed breakdown of four core software projects, demonstrating problem formulation,
              modular architecture, and continuous learning.
            </p>
          </div>

          {/* Guide for Competition Reviewers */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 max-w-xs">
            <div className="text-emerald-400 font-bold mb-1">📋 Engineering Review:</div>
            <div>
              Each project features a documented problem, engineered solution, key contribution, and technical growth.
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Card Grid for Scannability & Room */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Repos CTA Banner */}
        <div className="mt-12 rounded-2xl bg-[#0f172a] border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Looking for more code or commit activity?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              Explore my personal repositories, forks, and code experiments on GitHub.
            </p>
          </div>
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold border border-slate-700 hover:border-emerald-500/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shrink-0"
          >
            <span>Visit @derpbutpro on GitHub</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
