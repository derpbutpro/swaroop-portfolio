import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Swaroop Bevinal"
      className="py-16 md:py-24 border-b border-slate-800 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Background &amp; Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            A look into my academic journey, core programming foundation, and the personal interests that keep me energized.
          </p>
        </div>

        {/* Dashboard Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Bio & Philosophy (8 cols on desktop) */}
          <div className="md:col-span-7 rounded-2xl bg-[#0f172a] border border-slate-800 p-6 md:p-8 space-y-4 shadow-lg hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                01 // Student Bio
              </span>
              <span className="text-xs font-mono text-slate-400">Bangalore, India</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                {portfolioData.bio}
              </p>
              <p className="text-slate-400 text-sm">
                As a student at <span className="text-slate-200 font-semibold">{portfolioData.college}</span> in the{' '}
                <span className="text-slate-200 font-semibold">{portfolioData.field}</span> program, I value understanding what happens beneath high-level abstractions—from data structures and memory in C to interactive experiences in modern web browsers.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">⚡</span>
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">📍</span>
                <span>Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">🎓</span>
                <span>Undergraduate</span>
              </div>
            </div>
          </div>

          {/* Card 2: Academic Profile Summary (5 cols on desktop) */}
          <div className="md:col-span-5 rounded-2xl bg-[#0f172a] border border-slate-800 p-6 space-y-5 shadow-lg hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                02 // Academics
              </span>
              <span className="text-xs font-mono text-slate-400">Engineering</span>
            </div>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">College / Institution</div>
                <div className="text-base font-bold text-white">{portfolioData.college}</div>
                <div className="text-xs text-emerald-400 font-mono">Affiliated to VTU • Bangalore</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">Field of Study</div>
                <div className="text-base font-bold text-white">{portfolioData.field}</div>
                <div className="text-xs text-slate-400">Algorithms • Systems • Software Development</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">Community Identity</div>
                <div className="text-sm font-semibold text-emerald-300 font-mono">
                  {portfolioData.tagline}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Technical Skills (Chips / Tags) */}
          <div className="md:col-span-12 rounded-2xl bg-[#0f172a] border border-slate-800 p-6 md:p-8 space-y-5 shadow-lg hover:border-slate-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  03 // Technical Skills
                </span>
                <h3 className="text-lg font-bold text-white mt-1">Core Competencies &amp; Toolkit</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Small chips / tags • Verified fundamentals
              </span>
            </div>

            <p className="text-sm text-slate-400">
              Foundational languages and technologies practiced through academic lab work, problem-solving, and personal exploratory coding.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {portfolioData.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                  <span className="font-mono text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[11px] font-mono text-slate-400 border-l border-slate-800 pl-2">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Personal Interests (Cards) */}
          <div className="md:col-span-12 rounded-2xl bg-[#0f172a] border border-slate-800 p-6 md:p-8 space-y-6 shadow-lg hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  04 // Personal Interests
                </span>
                <h3 className="text-lg font-bold text-white mt-1">What Keeps Me Going</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Life beyond the terminal</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {portfolioData.interests.map((interest) => (
                <div
                  key={interest.label}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all space-y-2"
                >
                  <div className="text-3xl" aria-hidden="true">
                    {interest.emoji}
                  </div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <span>{interest.label}</span>
                    <span className="text-xs font-mono text-emerald-400 font-normal">
                      {interest.emoji}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
