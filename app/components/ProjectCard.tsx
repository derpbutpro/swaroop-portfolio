import React from 'react';
import { Project } from '@/types/portfolio';
import { portfolioData } from '@/data/portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColors = {
    Completed: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    'In Progress': 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    Prototype: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
    Concept: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
  };

  return (
    <article
      id={`project-${project.id}`}
      className="group relative rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
    >
      {/* Top Banner & Header */}
      <div>
        {/* Card Header Bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-800/80 bg-slate-900/40">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-emerald-400">
              PRJ_{String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-slate-600">|</span>
            <span
              className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                statusColors[project.status] || 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              {project.status}
            </span>
          </div>

          {project.isFeatured && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
              Featured
            </span>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Title & Short Description */}
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 font-mono text-xs">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Technologies Used
              </span>
              <span className="text-[10px] font-mono text-slate-400">Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="space-y-3 pt-1">
            {/* The Problem */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-300 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                Problem Statement
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-300 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Engineered Solution
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Contribution */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              My Contribution
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              {project.contribution}
            </p>
          </div>

          {/* What I Learned */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-teal-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              What I Learned
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              {project.whatILearned}
            </p>
          </div>
        </div>
      </div>

      {/* Footer: Action Links */}
      <div className="p-6 pt-3 border-t border-slate-800/80 bg-slate-950/30 flex flex-wrap items-center justify-between gap-3">
        {/* GitHub Link */}
        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl || portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-semibold text-slate-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <svg className="w-3.5 h-3.5 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Live Demo Link */}
        <div>
          <a
            href={project.liveDemoUrl || portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <span>Live Project Demo</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  );
}
