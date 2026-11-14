export type ProjectDomain =
  | "software-engineering"
  | "machine-learning"
  | "quantitative-finance"
  | "systems"
  | "research";

export interface Project {
  title: string;
  domain: ProjectDomain;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}
