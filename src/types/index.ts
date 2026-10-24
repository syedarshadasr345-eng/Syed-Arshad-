export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Machine Learning' | 'Full Stack & Software' | 'Data Engineering';
  year: string;
  image: string;
  description: string;
  highlights: string[];
  techStack: string[];
  architecture: string;
  interactiveType?: 'veritas-ai' | 'smart-reminder' | 'data-pipeline';
  role: string;
  outcome: string;
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'AI & Libraries' | 'Frameworks & Tools' | 'Core CS';
  proficiency: number; // 0 - 100
  experience: string;
  context: string;
  codeSnippet: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badge: string;
  date: string;
  skillsAcquired: string[];
  description: string;
  verified: boolean;
}

export interface HackathonActivity {
  id: string;
  title: string;
  role: string;
  venue: string;
  badge: string;
  description: string;
  status: 'Selected' | 'Registered' | 'Participated' | 'Attended';
}

export interface InterviewQA {
  id: string;
  question: string;
  summary: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  keyTakeaway: string;
}
