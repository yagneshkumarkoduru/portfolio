import { skills } from "../data/projects";

const timeline = [
  ["Now", "Independent systems work", "ES-FA neuromorphic accelerator, CCE-QOS QUBO scheduling, Limen safety architecture, CertGuard conformal-risk actuation control. CGPA 3.76, on approved leave."],
  ["2026", "Safety and verification depth", "Limen confidence-coupled safety envelope with C firmware conformance. CertGuard certificate governor with RTL and conformal risk control. CCE-QOS QPU experiments on Amazon Braket."],
  ["2025", "Accelerator and scheduling research", "ES-FA event-driven SNN accelerator on vendor-neutral FPGA hardware. CCE-QOS QUBO NPU scheduling with Adaptive Penalty Refinement. VLSI and digital design coursework completed."],
  ["2024", "Product and launch work", "Product, interface, sales, marketing, brand, and campaign work at Fluidity and Vyntt."],
  ["2023", "IIIT Sri City ECE", "B.Tech ECE entry at age 16, core courses: Digital Logic Design, Signals and Systems, Embedded Systems."],
];

export function Resume() {
  return <section className="page-section"><header className="page-hero"><p className="section-label">Resume</p><h1>A building record.</h1><p>Work, tools, recognition, and technical direction.</p></header><div className="resume-grid"><div className="resume-column"><h2>Experience timeline</h2><ol className="timeline">{timeline.map(([period, title, detail]) => <li key={`${period}-${title}`}><span>{period}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol></div><div className="resume-column"><h2>Technical toolkit</h2><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="resume-note"><p className="section-label">Recognition</p><p>District Science and Innovation winner. State and South India zonal second-place recognition. IIT Hyderabad Elan &amp; nVision robotics winner. Accepted into NVIDIA Inception.</p></div><div className="resume-note"><p className="section-label">Research direction</p><p>Embedded systems, digital design, RTL verification, accelerator architecture, physical AI, control, neuromorphic computing, optimization, and semiconductor systems.</p></div></div></div></section>;
}
