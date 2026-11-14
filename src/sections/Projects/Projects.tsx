import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects across disciplines</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-domain">{project.domain.replace("-", " ")}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
