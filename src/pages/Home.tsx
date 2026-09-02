import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PortraitLens } from "../components/PortraitLens";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

function Arrow() { return <span aria-hidden="true">&#8599;</span>; }

export function Home() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
      hero.fromTo(".hero-kicker", { y: 16 }, { y: 0, duration: 0.55, ease: "power3.out", clearProps: "transform" })
        .fromTo(".hero-title-line", { yPercent: 18 }, { yPercent: 0, duration: 0.88, stagger: 0.1, ease: "power4.out", clearProps: "transform" }, "-=0.18")
        .fromTo(".hero-copy, .hero-actions", { y: 18 }, { y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out", clearProps: "transform" }, "-=0.35");
      gsap.fromTo(".portrait-frame", { clipPath: "polygon(8% 0,100% 0,100% 70%,70% 100%,0 100%,0 8%)", scale: 0.96, rotate: -1.2 }, { clipPath: "polygon(8% 0,100% 0,100% 91%,91% 100%,0 100%,0 8%)", scale: 1, rotate: 0, duration: 1.2, ease: "power4.out", delay: 0.12, clearProps: "transform" });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => gsap.fromTo(element, { y: 26 }, { y: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%" }, clearProps: "transform" }));
      gsap.utils.toArray<HTMLElement>(".home-project").forEach((element) => gsap.fromTo(element, { y: 28 }, { y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%" }, clearProps: "transform" }));
    }, root);
    return () => ctx.revert();
  }, []);

  return <div ref={root}>
    <section className="hero">
      <div className="hero-copy-wrap">
        <p className="hero-kicker">Machines, control, proof</p>
        <h1 className="hero-title"><span className="hero-title-line">Yagnesh</span><span className="hero-title-line title-outline">Kumar Koduru.</span></h1>
        <p className="hero-copy">I build robotics, embedded systems, and physical AI with a focus on control, reliability, and proof.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Follow the work <Arrow /></a><Link className="button button-quiet" to="/record">The record <Arrow /></Link></div>
      </div>
      <PortraitLens />
    </section>

    <section className="story-chapter reveal"><p className="section-label">The beginning</p><h2>It started with motion.</h2><div className="story-copy"><p>Early builds taught me to turn rough ideas into working machines. That path led to robotics, sensors, Arduino, and IoT competitions.</p><p>The habit stayed simple: build first, watch closely, and make the proof stronger.</p></div></section>

    <section className="story-chapter story-dark reveal"><p className="section-label">The shift</p><h2>Motorsport shaped my lens.</h2><div className="story-copy"><p>Racing makes engineering visible. Behind the speed are timing, feedback, limits, and trust.</p><p>That is how I look at systems now: make the idea work, then make it reliable enough to test.</p></div></section>

    <section id="work" className="work-section"><header className="section-head reveal"><div><p className="section-label">Selected work</p><h2>Proof through projects.</h2></div><Link className="text-link" to="/record">Open the record <Arrow /></Link></header><div className="home-project-list">{projects.slice(0, 3).map((project) => <article className="home-project" key={project.id}><span>{project.index}</span><div><p className="section-label">{project.type}</p><h3>{project.title}</h3><p>{project.summary}</p></div><Link to={`/record#${project.id}`} aria-label={`Read ${project.title}`}><Arrow /></Link></article>)}</div></section>

    <section className="story-chapter reveal"><p className="section-label">The present</p><h2>I build systems with limits.</h2><div className="story-copy"><p>Atlas applies that mindset to physical intelligence. The goal is simple: make smart systems safer, clearer, and easier to verify.</p><p>I want to keep growing this work in embedded systems, digital design, verification, and physical AI.</p></div></section>

    <section className="record-preview reveal"><p className="section-label">The record</p><h2>Built work, clear proof.</h2><p>Projects, results, and limits, written clearly.</p><Link className="button button-primary" to="/record">Open the record <Arrow /></Link></section>

    <section className="closing reveal"><p className="section-label">Still building</p><h2>The work keeps <span>improving.</span></h2><p>Each version should be clearer, stronger, and more useful.</p><Link className="button button-quiet" to="/contact">Start a conversation <Arrow /></Link></section>
  </div>;
}
