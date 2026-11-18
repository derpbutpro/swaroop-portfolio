import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function JudgesOverview() {
  // Find the featured project configured in portfolioData.ts
  const featuredProject =
    portfolioData.projects.find((p) => p.id === portfolioData.featuredProjectId) ||
    portfolioData.projects.find((p) => p.isFeatured) ||
    portfolioData.projects[0];

  return (
    <section
      id="judges-overview"
      aria-label="Judges Executive Overview"
      className="py-14 border-b border-slate-800 bg-[#0c1222]/90 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Competition Review Panel
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span>Judges&apos; Executive Overview</span>
              <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Evaluation Briefing
              </span>
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              A high-density briefing prepared for student judges and reviewers. Highlights core competencies,
              academic background, and a featured project spotlight.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
          >
            <span>Explore all 4 projects</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Left Column: Quick Candidate Summary & Skills */}
          <div className="lg:col-span-5 space-y-5">
            {/* Candidate Card */}
            <div className="rounded-2xl bg-[#0f172a] border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  01 // Candidate Profile
                </span>
                <span className="text-xs font-mono text-slate-400">BIT-CSE</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">{portfolioData.name}</h3>
                <p className="text-xs font-mono text-emerald-300">{portfolioData.college}</p>
                <p className="text-xs text-slate-400">{portfolioData.field}</p>
              </div>

              <div className="pt-2 text-xs text-slate-300 border-t border-slate-800/80 leading-relaxed">
                &ldquo;Focusing on foundational problem solving, algorithmic logic, and responsive software design.
                Prepared for technical evaluation.&rdquo;
              </div>

              {/* Verified Skills Matrix */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase">Core Skills Stack:</span>
                  <span className="text-[10px] font-mono text-emerald-400">5 Verified</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {portfolioData.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-emerald-900/60 text-emerald-300 text-xs font-mono"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Evaluation Criteria Checklist for Judges */}
            <div className="rounded-2xl bg-[#0f172a] border border-slate-800 p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  02 // Project Portfolio Summary
                </span>
                <span className="text-xs font-mono text-slate-400">4 Items</span>
              </div>

              <ul className="space-y-2 text-xs font-mono">
                {portfolioData.projects.map((proj, idx) => (
                  <li
                    key={proj.id}
                    className={`flex items-center justify-between p-2 rounded-lg border ${
                      proj.id === featuredProject.id
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-[10px] text-slate-400">{idx + 1}.</span>
                      <span className="truncate font-semibold">{proj.title}</span>
                    </div>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        proj.status === 'Completed'
                          ? 'bg-emerald-900/60 text-emerald-300'
                          : 'bg-amber-950/60 text-amber-300'
                      }`}
                    >
                      {proj.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Featured Project Spotlight */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f172a] border-2 border-emerald-500/30 p-6 space-y-5 shadow-xl relative overflow-hidden">
              {/* Corner badge */}
              <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold font-mono uppercase px-3 py-1 rounded-bl-lg tracking-wider">
                Featured For Judges
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Spotlight Evaluation
                  </span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs font-mono text-slate-400">ID: {featuredProject.id}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-slate-300 font-mono">
                  {featuredProject.shortDescription}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase">Technologies:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem & Solution Compact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="font-bold text-rose-300 font-mono">PROBLEM STATEMENT</div>
                  <div className="text-slate-300 leading-relaxed">{featuredProject.problem}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-300 font-mono">ENGINEERED SOLUTION</div>
                  <div className="text-slate-300 leading-relaxed">{featuredProject.solution}</div>
                </div>
              </div>

              {/* What I Learned */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
                <div className="font-bold text-teal-300 font-mono">KEY LEARNING &amp; GROWTH</div>
                <div className="text-slate-300 leading-relaxed">{featuredProject.whatILearned}</div>
              </div>

              {/* Actions & Instructions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                <a
                  href={`#project-${featuredProject.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  <span>View Full Card Breakdown</span>
                  <span aria-hidden="true">&darr;</span>
                </a>

                <p className="text-[11px] font-mono text-emerald-400">
                  Featured project configured in portfolio data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
