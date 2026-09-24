import { useEffect, useRef } from "react";
import { projects, skills } from "../data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  ["01", "Early making", "Robotics, sensors, Arduino, IoT, competition builds. District Science and Innovation winner. State and South India zonal second. IIT Hyderabad Elan & nVision robotics winner. Age 16 entry to IIIT Sri City."],
  ["02", "Product depth", "Product, interface, and launch work at Fluidity and Vyntt. Learned to ship, explain, and iterate with users."],
  ["03", "Research depth", "ES-FA neuromorphic accelerator. CertGuard conformal-risk actuation control. CCE-QOS QUBO scheduling on Amazon Braket QPU. Limen safety architecture."],
];

const proofMetrics = [
  ["97.03%", "Best single-seed SHD accuracy", "ES-FA — highest recorded on the SHD benchmark across all runs."],
  ["91%", "Unsafe command reduction", "CertGuard — certificate governor at severe drift (3.0). 61.3% → 5.4%."],
  ["+16.1pp", "Feasibility improvement", "CCE-QOS APR arm over Lookahead baseline. 6-instance statistical sweep."],
  ["98.8%", "Fault-injected accuracy", "Limen — under electrode dropout and motion artifact. 0.0% false activation."],
  ["92.9%", "SOP elimination", "ES-FA — sparse operations vs dense baseline. 890 ECP5 cells, 132.29 MHz."],
];

function Arrow() { return <span aria-hidden="true">&#8599;</span>; }

// Count-up hook
function useCountUp(target: string, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
    const suffix = target.match(/[^0-9.]*$/)?.[0] ?? "";
    let triggered = false;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        if (triggered) return;
        triggered = true;
        gsap.fromTo({ v: 0 }, { v: num },
          { v: num, duration: 1.6, ease: "power2.out",
            onUpdate: function () { el.textContent = prefix + this.targets()[0].v.toFixed(decimals) + suffix; }
          });
      },
    });
    return () => st.kill();
  }, [target, decimals]);
  return ref;
}

function ProofNumber({ value, label, detail }: { value: string; label: string; detail: string }) {
  const decimals = value.includes(".") ? (value.split(".")[1]?.replace(/[^0-9]/g, "").length ?? 0) : 0;
  const countRef = useCountUp(value, decimals);
  return (
    <article className="proof-card">
      <strong ref={countRef}>{value}</strong>
      <h3>{label}</h3>
      <p>{detail}</p>
    </article>
  );
}

export function Record() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>(".record-project").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.65, ease: "power3.out", delay: i * 0.04,
            scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });

      gsap.utils.toArray<HTMLElement>(".log-entry").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", delay: i * 0.07,
            scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return <section className="record-page" ref={root}>

    <header className="record-hero">
      <span className="record-number">02</span>
      <div>
        <p className="section-label">The record</p>
        <h1>Everything<br /><span>is measured.</span></h1>
        <p>Projects, results, boundaries, and what comes next. Every number maps to a source.</p>
      </div>
    </header>

    {/* Systems */}
    <section className="record-systems">
      <header className="record-section-head">
        <p className="section-label">Systems</p>
        <p>Each entry lists what was built, what the evidence supports, and where the boundary is.</p>
      </header>
      <div className="record-project-list">
        {projects.map(project => (
          <article className="record-project" id={project.id} key={project.id}>
            <div className="record-project-id">
              <span>{project.index}</span>
              <small>{project.type}</small>
            </div>
            <div>
              <h2>{project.title}</h2>
              <p>{project.story}</p>
            </div>
            <aside>
              <p><strong>Evidence:</strong> {project.evidence}</p>
              <div className="metric-tags">
                {project.metrics.map(m => <span key={m}>{m}</span>)}
              </div>
              {project.links && (
                <div className="project-links">
                  {project.links.map(l => (
                    <a className="project-link" href={l.href} target="_blank" rel="noreferrer" key={l.href}>
                      {l.label} <Arrow />
                    </a>
                  ))}
                </div>
              )}
            </aside>
          </article>
        ))}
      </div>
    </section>

    {/* Proof metrics — count-up */}
    <section className="proof-section">
      <header>
        <p className="section-label">By the numbers</p>
        <h2>Proof markers.</h2>
      </header>
      <div className="proof-grid">
        {proofMetrics.map(([v, l, d]) => <ProofNumber key={l} value={v} label={l} detail={d} />)}
      </div>
    </section>

    {/* Build log */}
    <section className="record-timeline">
      <header className="record-section-head">
        <p className="section-label">Build log</p>
        <p>A simple path: build, test, explain, then make the proof stronger.</p>
      </header>
      <ol>
        {timeline.map(([index, title, detail]) => (
          <li key={index} className="log-entry">
            <span>{index}</span>
            <div>
              <h2>{title}</h2>
              <p>{detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>

    {/* Toolkit */}
    <section className="record-bottom">
      <div>
        <p className="section-label">Toolkit</p>
        <h2>Tools I use<br />to build.</h2>
        <div className="skill-cloud">
          {skills.map(s => <span key={s}>{s}</span>)}
        </div>
      </div>
      <div className="recognition">
        <p className="section-label">Recognition</p>
        <p>District Science and Innovation winner. State and South India zonal second. IIT Hyderabad Elan &amp; nVision robotics winner. NVIDIA Inception.</p>
        <p className="section-label direction-label">Technical direction</p>
        <p>Embedded systems, digital design, RTL verification, accelerator architecture, physical AI, neuromorphic computing, constrained optimization, semiconductor systems.</p>
      </div>
    </section>

  </section>;
}
