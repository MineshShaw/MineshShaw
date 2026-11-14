import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "Code Review Copilot",
    domain: "machine-learning",
    summary: "An AI-powered assistant designed to automate and enhance code review.",
    technologies: ["Python", "AI", "LangChain"],
    githubUrl: "https://github.com/MineshShaw/code-review-copilot",
  },
  {
    title: "Search Typeahead System",
    domain: "software-engineering",
    summary: "A scalable backend architecture for fast autocomplete experiences.",
    technologies: ["Java", "Spring Boot", "Redis"],
    githubUrl: "https://github.com/MineshShaw/search_typeahead_system",
  },
  {
    title: "Collaborative Canvas",
    domain: "systems",
    summary: "A real-time whiteboard built for seamless multi-user collaboration.",
    technologies: ["TypeScript", "React", "WebSockets"],
    githubUrl: "https://github.com/MineshShaw/collaborative_canvas",
  },
];
