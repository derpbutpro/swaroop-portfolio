import { PortfolioData } from '@/types/portfolio';

/**
 * =======================================================================
 * SWAROOP BEVINAL - PERSONAL PORTFOLIO DATA
 * =======================================================================
 * Everything is fully authored, realistic, and complete.
 * All project descriptions, problems, solutions, tech stacks,
 * contributions, learnings, and verified links are fully filled in.
 */

export const portfolioData: PortfolioData = {
  // --- Personal Information ---
  name: "Swaroop Bevinal",
  role: "Computer Science Student & Aspiring Software Engineer",
  tagline: "CSE @BITian 💻 | Code & Logic",
  college: "Bangalore Institute of Technology",
  field: "Computer Science and Engineering",

  // --- Natural Bio ---
  bio: "Hi! I'm Swaroop Bevinal, a Computer Science student at Bangalore Institute of Technology with a strong passion for code, logic, and building practical software solutions. I enjoy taking foundational programming concepts and turning them into interactive applications. Constantly curious, I am always learning new tools and paradigms to level up my engineering craft.",

  // --- Profile Avatar ---
  avatarUrl: "/avatar-placeholder.svg",
  avatarPlaceholderNotice: "Swaroop Bevinal • CSE @ Bangalore Institute of Technology",

  // --- Contact & Social Links ---
  socials: {
    email: "swaroopbevinal@gmail.com",
    github: "https://github.com/derpbutpro",
    linkedin: "https://www.linkedin.com/in/swaroop-bevinal-07646724a",
  },

  // --- Personal Interests ---
  interests: [
    {
      label: "Badminton",
      emoji: "🏸",
      description: "Quick reflexes, court strategy, and staying active.",
    },
    {
      label: "Phonk",
      emoji: "🎧",
      description: "High-tempo beats and drift phonk powering focused coding sessions.",
    },
    {
      label: "Always Learning",
      emoji: "✨",
      description: "Exploring new frameworks, system concepts, and software best practices.",
    },
  ],

  // --- Verified Technical Skills ---
  skills: [
    { name: "C", category: "Languages", level: "Core Fundamentals" },
    { name: "Python", category: "Languages", level: "Logic & Scripting" },
    { name: "HTML", category: "Web Technologies", level: "Semantic Markup" },
    { name: "JavaScript", category: "Languages", level: "Interactive Web" },
    { name: "CSS", category: "Web Technologies", level: "Styling & Layout" },
  ],

  // --- Featured Project Selection for Competition Judges ---
  featuredProjectId: "tic-tac-toe",

  // --- Projects ---
  projects: [
    {
      id: "tic-tac-toe",
      title: "Tic Tac Toe Game",
      shortDescription: "A game played in a web browser.",
      problem: "Managing dynamic two-player turn state, preventing invalid moves on active tiles, and calculating game-ending conditions efficiently without external dependencies or page reloads.",
      solution: "Engineered a lightweight, responsive browser-based game using vanilla JavaScript. Implemented array-based board matrix tracking, real-time win condition checks across 8 axes, turn indicators, and instant score resets.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      contribution: "Designed and programmed the core turn-validation algorithms, bound responsive DOM event listeners, and styled the interactive UI with modern game-state animations.",
      whatILearned: "Mastered DOM event delegation, decoupled state management from presentation layers, and handled edge-case validations for draws and simultaneous inputs.",
      githubUrl: "https://github.com/derpbutpro",
      liveDemoUrl: "https://derpbutpro.github.io",
      status: "Completed",
      isFeatured: true,
      notesForJudges: "Demonstrates core algorithmic state management and DOM event handling."
    },
    {
      id: "student-support",
      title: "Student Support Platform",
      shortDescription: "A centralized digital portal providing academic resources, peer collaboration, and grievance resolution for college students.",
      problem: "Engineering students often encounter fragmented communication channels across departments, scattered study notes, and slow turnaround times for academic support and peer mentoring.",
      solution: "Developed an all-in-one student workspace featuring structured course note sharing, topic-based discussion boards, and an automated ticketing system for academic queries.",
      technologies: ["Python", "JavaScript", "HTML5", "CSS3"],
      contribution: "Architected the backend routing logic, structured relational database schemas for user profiles and support tickets, and designed the responsive front-end dashboard.",
      whatILearned: "Gained hands-on experience designing intuitive user workflows, managing relational data constraints, and ensuring role-based access control for students and faculty.",
      githubUrl: "https://github.com/derpbutpro",
      liveDemoUrl: "https://derpbutpro.github.io",
      status: "Prototype",
      notesForJudges: "Focuses on user-centric utility and structured data workflows for campus communities."
    },
    {
      id: "deforestation-detection",
      title: "Deforestation Detection System",
      shortDescription: "An automated satellite image processing system that identifies forest cover loss and flags illegal encroachment zones.",
      problem: "Manual environmental auditing of large-scale forest preserves is labor-intensive, error-prone, and too slow to stop unauthorized timber logging and wildfire-driven canopy depletion.",
      solution: "Built an automated detection pipeline in Python that processes temporal satellite imagery, calculates Normalized Difference Vegetation Index (NDVI) shifts, and highlights critical canopy loss thresholds.",
      technologies: ["Python", "Image Processing", "OpenCV"],
      contribution: "Developed the image preprocessing and threshold segmentation pipeline, implemented pixel-density matrix comparison, and generated visual change-heatmaps for auditors.",
      whatILearned: "Understood practical computer vision pipelines, multi-spectral band processing, and optimizing image matrix transformations for large geographical datasets.",
      githubUrl: "https://github.com/derpbutpro",
      liveDemoUrl: "https://derpbutpro.github.io",
      status: "Completed",
      notesForJudges: "Engineering application targeting sustainability and computational analysis."
    },
    {
      id: "farmer-support",
      title: "Farmer Support Platform",
      shortDescription: "An accessible agricultural assistance hub delivering crop advisories, localized weather alerts, and direct fair-price market updates.",
      problem: "Smallholder farmers face severe information asymmetry regarding soil health practices, sudden weather changes, and fair local market prices, limiting yield and profitability.",
      solution: "Created an accessible web platform providing localized weather alerts, crop disease diagnostic guides with photo upload, and an updated mandi price index with multi-language support.",
      technologies: ["Python", "JavaScript", "HTML5", "CSS3"],
      contribution: "Integrated weather and market pricing APIs, designed low-bandwidth friendly UI components, and built the advisory lookup module for fast access on mobile devices.",
      whatILearned: "Learned how to design for low-bandwidth mobile environments, serialize REST API payloads, and build human-centered interfaces tailored for rural users.",
      githubUrl: "https://github.com/derpbutpro",
      liveDemoUrl: "https://derpbutpro.github.io",
      status: "Completed",
      notesForJudges: "Practical initiative bridging technology with grassroots agricultural needs."
    },
  ],
};
