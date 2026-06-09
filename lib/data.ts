import { PersonalInfo, Skill, Experience, Project, Achievement, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Ramu Dosapati",
  title: "Senior Backend Engineer | Java | Spring Boot | Kafka | GenAI Engineer",
  location: "Hyderabad, India",
  experience: "5+",
  summary:
    "Software Engineer with 5+ years of experience building enterprise-grade applications using Java, Spring Boot, Spring WebFlux, Kafka, MongoDB, GraphQL, Microservices, AWS, and Generative AI solutions.",
  email: "ramu.dosapati@example.com",
  linkedin: "https://linkedin.com/in/ramudosapati",
  github: "https://github.com/ramudosapati",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "Java 8/21", level: 95, category: "Backend" },
  { name: "Spring Boot", level: 95, category: "Backend" },
  { name: "Spring WebFlux", level: 88, category: "Backend" },
  { name: "Spring MVC", level: 92, category: "Backend" },
  { name: "Hibernate", level: 85, category: "Backend" },
  { name: "MongoDB", level: 90, category: "Databases" },
  { name: "MySQL", level: 85, category: "Databases" },
  { name: "Oracle", level: 78, category: "Databases" },
  { name: "Astra DB", level: 75, category: "Databases" },
  { name: "AWS", level: 82, category: "Cloud & DevOps" },
  { name: "Docker", level: 85, category: "Cloud & DevOps" },
  { name: "Jenkins", level: 80, category: "Cloud & DevOps" },
  { name: "SonarQube", level: 78, category: "Cloud & DevOps" },
  { name: "Grafana", level: 75, category: "Cloud & DevOps" },
  { name: "CI/CD", level: 85, category: "Cloud & DevOps" },
  { name: "Apache Kafka", level: 90, category: "Messaging" },
  { name: "REST APIs", level: 95, category: "API Technologies" },
  { name: "GraphQL", level: 85, category: "API Technologies" },
  { name: "API Gateway", level: 80, category: "API Technologies" },
  { name: "JUnit 5", level: 90, category: "Testing" },
  { name: "Mockito", level: 88, category: "Testing" },
  { name: "Postman", level: 85, category: "Testing" },
  { name: "Generative AI", level: 82, category: "AI & Modern Tech" },
  { name: "RAG", level: 78, category: "AI & Modern Tech" },
  { name: "Vector Databases", level: 75, category: "AI & Modern Tech" },
  { name: "Agentic Workflows", level: 72, category: "AI & Modern Tech" },
  { name: "MCP", level: 70, category: "AI & Modern Tech" },
];

export const experiences: Experience[] = [
  {
    company: "Nisum",
    role: "Software Engineer",
    duration: "Feb 2021 – Present",
    responsibilities: [
      "Developed scalable microservices using Spring Boot and Spring WebFlux",
      "Built enterprise retail systems handling high-throughput traffic",
      "Implemented Kafka event-driven architectures for real-time data processing",
      "Designed MongoDB data models optimized for complex queries",
      "Built GraphQL APIs for flexible data retrieval",
      "Implemented CI/CD pipelines reducing deployment cycles",
      "Worked on Generative AI solutions for customer intelligence",
    ],
    achievements: [
      "Improved API throughput by 30%",
      "Increased data accuracy by 40%",
      "Reduced deployment time by 25%",
      "Reduced post-release defects by 60%",
      "Achieved 85%+ unit test coverage",
      "Contributed to $1.3M annual business savings",
    ],
  },
  {
    company: "Tech Mahindra",
    role: "Associate Software Engineer",
    duration: "Mar 2020 – Jan 2021",
    responsibilities: [
      "Application development using Java and enterprise frameworks",
      "Bug fixing and code optimization for production systems",
      "Production support and incident resolution",
      "Agile development following Scrum methodology",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Sentilytics",
    description:
      "An AI-powered customer review intelligence platform using Generative AI to analyze customer sentiment and provide actionable business insights.",
    technologies: ["Generative AI", "Spring Boot", "MongoDB", "REST APIs"],
    gradient: "from-violet-600 to-indigo-600",
    icon: "brain",
  },
  {
    title: "Cost Management Platform",
    description:
      "Enterprise platform for vendor cost approvals and cost management workflows, streamlining financial operations.",
    impact: "Contributed to $1.3M annual savings",
    technologies: ["Java", "Spring Boot", "Kafka", "MongoDB", "Microservices"],
    gradient: "from-emerald-600 to-teal-600",
    icon: "dollar-sign",
  },
  {
    title: "Base Pricing Platform",
    description:
      "Dynamic pricing engine that optimizes pricing across product lifecycle using real-time business data and reactive streams.",
    technologies: ["Spring WebFlux", "GraphQL", "MongoDB", "Java"],
    gradient: "from-orange-600 to-rose-600",
    icon: "trending-up",
  },
];

export const achievements: Achievement[] = [
  {
    metric: "30%",
    value: "API Throughput",
    description: "Improved API response times and throughput",
    icon: "zap",
  },
  {
    metric: "$1.3M",
    value: "Annual Savings",
    description: "Business cost reduction through engineering",
    icon: "dollar-sign",
  },
  {
    metric: "85%+",
    value: "Test Coverage",
    description: "Unit test coverage across all services",
    icon: "shield-check",
  },
  {
    metric: "60%",
    value: "Fewer Defects",
    description: "Reduced post-release defects",
    icon: "bug",
  },
  {
    metric: "25%",
    value: "Faster Deploys",
    description: "Reduced deployment time with CI/CD",
    icon: "rocket",
  },
  {
    metric: "40%",
    value: "Data Accuracy",
    description: "Improved data processing accuracy",
    icon: "database",
  },
];

export const skillCategories = [
  "Backend",
  "Databases",
  "Cloud & DevOps",
  "Messaging",
  "API Technologies",
  "Testing",
  "AI & Modern Tech",
];
