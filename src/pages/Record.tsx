import { projects, skills } from "../data/projects";

const timeline = [
  ["01", "Early making", "Early builds led me into robotics, sensors, Arduino, IoT, and competitions."],
  ["02", "Learning to ship", "Product work taught me to explain, ship, and improve systems with users in mind."],
  ["03", "Research depth", "I moved into control, SNNs, hardware-aware training, NPU scheduling, and optimization."],
  ["04", "Academic trajectory", "Next, I want a stronger research environment for embedded systems, verification, and physical AI."],
];

const metrics = [
  ["12.7x", "Lower fault commands", "All-channel flatline replay: nonzero command rate dropped from 66.67% to 5.26% with Atlas supervision."],
  ["92.1%", "Command-rate reduction", "Relative reduction in nonzero commands during the same flatline fault simulation."],
  ["94.08%", "Flatline containment", "Atlas-supervised path contained faults across 2,718 fault-exposed windows."],
  ["8.0x", "Feature-stage parallelization", "The 8-channel feature kernel ran in 200 scheduled advances instead of 1,600 serial advances."],
  ["0.946 ms", "P95 replay latency", "All-channel flatline scorecard p95 end-to-end latency on a development workstation."],
];

function Arrow() { return <span aria-hidden="true">&#8599;</span>; }

export function Record() {
  return <section className="record-page">
    <header className="record-hero"><span className="record-number">02</span><div><p className="section-label">The record</p><h1>What I have<br /><span>built so far.</span></h1><p>A clear record of projects, results, limits, and next steps.</p></div></header>

    <section className="record-systems"><header className="record-section-head"><p className="section-label">Selected systems</p><p>Each project lists what was built and what the evidence supports.</p></header><div className="record-project-list">{projects.map((project) => <article className="record-project" id={project.id} key={project.id}><div className="record-project-id"><span>{project.index}</span><small>{project.type}</small></div><div><h2>{project.title}</h2><p>{project.story}</p></div><aside><p><strong>Evidence:</strong> {project.evidence}</p><div className="metric-tags">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>{project.links && <div className="project-links">{project.links.map((link) => <a className="project-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <Arrow /></a>)}</div>}</aside></article>)}</div></section>

    <section className="record-timeline"><header className="record-section-head"><p className="section-label">Build log</p><p>A simple path: build, test, explain, then make the proof stronger.</p></header><ol>{timeline.map(([index, title, detail]) => <li key={index}><span>{index}</span><div><h2>{title}</h2><p>{detail}</p></div></li>)}</ol></section>

    <section className="numbers-section"><header><p className="section-label">By the numbers</p><h2>Atlas proof markers.</h2></header><div className="numbers-grid">{metrics.map(([value, label, detail]) => <article key={label}><strong>{value}</strong><h3>{label}</h3><p>{detail}</p></article>)}</div></section>

    <section className="record-bottom"><div><p className="section-label">Toolkit</p><h2>Tools I use<br />to build.</h2><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="recognition"><p className="section-label">Recognition</p><p>District Science and Innovation winner. State and South India zonal second-place recognition. IIT Hyderabad Elan &amp; nVision robotics winner. Accepted into NVIDIA Inception.</p><p className="section-label direction-label">Technical arc</p><p>Embedded systems, digital design, RTL verification, accelerator architecture, physical AI, control, neuromorphic computing, optimization, and semiconductor systems.</p></div></section>
  </section>;
}
