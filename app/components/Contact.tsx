'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [previewSubmitted, setPreviewSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPreviewSubmitted(true);
  };

  const mailtoHref = `mailto:${portfolioData.socials.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `${formData.message || 'Hello Swaroop,'}\n\n---\nFrom: ${formData.name || 'A visitor'} (${
      formData.email || 'Email not provided'
    })`
  )}`;

  return (
    <section
      id="contact"
      aria-label="Contact Information and Inquiry"
      className="py-16 md:py-24 border-b border-slate-800 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact &amp; Connect
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Have a question about my engineering projects, competition submission, or want to collaborate?
            Reach out through direct links or preview the contact form below.
          </p>
        </div>

        {/* Notice Banner: Frontend Preview Alert */}
        <div className="mb-10 rounded-2xl bg-amber-950/30 border border-amber-500/40 p-4 sm:p-5 flex items-start gap-3.5">
          <div className="text-xl sm:text-2xl mt-0.5 text-amber-400" aria-hidden="true">
            ℹ️
          </div>
          <div className="space-y-1 text-sm">
            <h3 className="font-bold text-amber-200">
              Frontend Preview Notice
            </h3>
            <p className="text-amber-300/90 leading-relaxed text-xs sm:text-sm">
              The contact form below is an interactive <strong>frontend preview</strong>. Until backend form handling is connected, please reach out directly via my verified email address:{' '}
              <a
                href={`mailto:${portfolioData.socials.email}`}
                className="font-bold underline text-white hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1"
              >
                {portfolioData.socials.email}
              </a>
              .
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Direct Channels & Form Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#0f172a] border border-slate-800 p-6 space-y-6 shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Direct Channels
                </span>
                <span className="text-xs font-mono text-slate-400">Verified Links</span>
              </div>

              {/* 1. Email */}
              <a
                href={`mailto:${portfolioData.socials.email}`}
                className="group flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="text-xs font-mono text-slate-400 uppercase">Primary Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">
                    {portfolioData.socials.email}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400/90">
                    Click to send an email &rarr;
                  </div>
                </div>
              </a>

              {/* 2. GitHub */}
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="text-xs font-mono text-slate-400 uppercase">GitHub Profile</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">
                    github.com/derpbutpro
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Repositories &amp; source code &rarr;
                  </div>
                </div>
              </a>

              {/* 3. LinkedIn */}
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-600/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="text-xs font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">
                    swaroop-bevinal-07646724a
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Professional network &rarr;
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form Preview (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f172a] border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Contact Form (Frontend Preview)
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Preview State
                </span>
              </div>

              {previewSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/50 border border-emerald-500/50 space-y-4 text-center">
                  <div className="text-3xl" aria-hidden="true">
                    📬
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Message Draft Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-emerald-300">{formData.name || 'Friend'}</span>! Because this form is currently a frontend preview, please click below to send your draft directly to Swaroop&apos;s email address.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoHref}
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                      Open Email Client with Draft
                    </a>
                    <button
                      type="button"
                      onClick={() => setPreviewSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      Back to Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
                    >
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson (Judge / Colleague)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:border-emerald-500 focus:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
                    >
                      Your Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex.johnson@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:border-emerald-500 focus:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
                    >
                      Message / Feedback <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Share your competition feedback, inquiry, or notes on Swaroop's projects..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:border-emerald-500 focus:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button & Disclaimer */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </button>

                    <p className="text-[11px] font-mono text-slate-400">
                      Frontend preview • Reminds to use direct email link
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
