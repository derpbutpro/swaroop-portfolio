export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}

export interface Interest {
  label: string;
  emoji: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Web Technologies' | 'Core';
  level?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  contribution: string;
  whatILearned: string;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  status: 'Completed' | 'In Progress' | 'Prototype' | 'Concept';
  isFeatured?: boolean;
  notesForJudges?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  college: string;
  field: string;
  bio: string;
  avatarUrl: string;
  avatarPlaceholderNotice: string;
  socials: SocialLinks;
  interests: Interest[];
  skills: SkillItem[];
  projects: Project[];
  featuredProjectId: string;
}
