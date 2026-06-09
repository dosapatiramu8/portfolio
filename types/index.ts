export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements?: string[];
}

export interface Project {
  title: string;
  description: string;
  impact?: string;
  technologies: string[];
  gradient: string;
  icon: string;
}

export interface Achievement {
  metric: string;
  value: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  experience: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
}
