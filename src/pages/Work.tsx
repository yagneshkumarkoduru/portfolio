import { projects } from "../data/projects";

function Arrow() { return <span aria-hidden="true">&#8599;</span>; }

export function Work() {
  return <section className="page-section"><header className="page-hero"><p className="section-label">Work archive</p><h1>Projects with proof.</h1><p>What I built, what it shows, and where the limits are.</p></header><div className="project-list">{projects.map((project) => <article className="project-card" id={project.id} key={project.id}><div className="project-topline"><span>{project.index}</span><span>{project.type}</span></div><div className="project-main"><h2>{project.title}</h2><p>{project.story}</p></div><div className="project-detail"><p className="evidence-note"><strong>Evidence:</strong> {project.evidence}</p><ul>{project.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>{project.links && <div className="project-links">{project.links.map((link) => <a className="project-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <Arrow /></a>)}</div>}</div></article>)}</div></section>;
}
