import { skills } from "../data/projects";

const timeline = [
  ["Now", "Independent systems work", "Physical AI, verification, accelerators, product engineering, and applied research."],
  ["2026", "Atlas and ACEK", "Control, safety, and verification for sensor-driven systems."],
  ["2025", "Backend engineering", "Backend logic, security components, and low-latency workflows."],
  ["2024", "Product and launch work", "Product, interface, sales, marketing, brand, and campaign work."],
  ["Earlier", "Robotics and IoT", "Robotics pilot work, smart-city IoT, and technical competitions."],
];

export function Resume() {
  return <section className="page-section"><header className="page-hero"><p className="section-label">Resume</p><h1>A building record.</h1><p>Work, tools, recognition, and technical direction.</p></header><div className="resume-grid"><div className="resume-column"><h2>Experience timeline</h2><ol className="timeline">{timeline.map(([period, title, detail]) => <li key={`${period}-${title}`}><span>{period}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol></div><div className="resume-column"><h2>Technical toolkit</h2><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="resume-note"><p className="section-label">Recognition</p><p>District Science and Innovation winner. State and South India zonal second-place recognition. IIT Hyderabad Elan &amp; nVision robotics winner. Accepted into NVIDIA Inception.</p></div><div className="resume-note"><p className="section-label">Research direction</p><p>Embedded systems, digital design, RTL verification, accelerator architecture, physical AI, control, neuromorphic computing, optimization, and semiconductor systems.</p></div></div></div></section>;
}
