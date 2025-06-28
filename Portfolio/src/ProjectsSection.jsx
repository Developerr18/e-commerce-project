import "./ProjectsSection.css";
import projects from "./projectsData";

export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <h1 className="section-title">Projects</h1>
            <div className="yellow-line"></div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.techStack.map((tech, index) => (
                                <span className="tech" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live
                            </a>
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
