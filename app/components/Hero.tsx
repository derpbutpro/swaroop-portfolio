import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-800/80"
    >
      {/* Background glow highlights */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Engineering Lab Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wide shadow-sm shadow-emerald-950/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>{portfolioData.college}</span>
              <span className="text-emerald-600">•</span>
              <span>{portfolioData.field}</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Hi, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">
                  {portfolioData.name}
                </span>
              </h1>
              {/* Introduction */}
              <p className="text-lg sm:text-xl font-mono text-emerald-300/90 font-medium tracking-tight">
                {portfolioData.tagline}
              </p>
            </div>

            {/* Short Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {portfolioData.bio}
            </p>

            {/* Required Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              {/* 1. View my work */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
                <span>View my work</span>
              </a>

              {/* 2. Contact me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>Contact me</span>
              </a>

              {/* 3. View for Judges */}
              <a
                href="#judges-overview"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/70 text-emerald-300 font-semibold text-sm border border-emerald-500/50 hover:border-emerald-400 shadow-md shadow-emerald-950 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span className="text-base" aria-hidden="true">🎯</span>
                <span>View for Judges</span>
              </a>
            </div>

            {/* Quick Skills Strip */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="font-mono text-slate-400">Core Toolkit:</span>
              {portfolioData.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 font-mono"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Image / Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Ambient Glow */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-700/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0f172a] border border-slate-800 p-5 shadow-2xl space-y-4">
                {/* Window header decoration */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 tracking-wider">
                    PROFILE_CARD.tsx
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                    ONLINE
                  </span>
                </div>

                {/* Profile Avatar Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/60 flex items-center justify-center">
                  <Image
                    src={portfolioData.avatarUrl}
                    alt={`${portfolioData.name} Profile`}
                    width={380}
                    height={380}
                    priority
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Profile title notice */}
                <div className="rounded-lg bg-emerald-950/40 border border-emerald-800/40 p-2.5 text-center">
                  <p className="text-xs font-mono text-emerald-300/90 leading-tight">
                    {portfolioData.avatarPlaceholderNotice}
                  </p>
                </div>

                {/* Quick stats mini-row */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-center font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-xs text-slate-400">Institution</div>
                    <div className="text-xs font-bold text-slate-200 truncate">BIT Bangalore</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-xs text-slate-400">Domain</div>
                    <div className="text-xs font-bold text-emerald-400 truncate">Computer Science</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
