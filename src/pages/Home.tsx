import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PortraitLens } from "../components/PortraitLens";
import { Marquee } from "../components/Marquee";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

function Arrow() { return <span aria-hidden="true">&#8599;</span>; }

export function Home() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Hero — clip reveal on title lines
      gsap.set(".hero-line", { yPercent: 110, opacity: 0 });
      gsap.set(".hero-kicker, .hero-sub, .hero-actions", { y: 22, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(".hero-kicker", { y: 0, opacity: 1, duration: 0.5 })
        .to(".hero-line", { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.08 }, "-=0.25")
        .to(".hero-sub", { y: 0, opacity: 1, duration: 0.6 }, "-=0.45")
        .to(".hero-actions", { y: 0, opacity: 1, duration: 0.55 }, "-=0.3");

      gsap.fromTo(".portrait-frame",
        { clipPath: "polygon(8% 0,100% 0,100% 70%,70% 100%,0 100%,0 8%)", scale: 0.96 },
        { clipPath: "polygon(8% 0,100% 0,100% 91%,91% 100%,0 100%,0 8%)", scale: 1, duration: 1.3, ease: "power4.out", delay: 0.15 }
      );

      // Instrument rows
      gsap.utils.toArray<HTMLElement>(".instrument-row").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: i * 0.06,
            scrollTrigger: { trigger: el, start: "top 86%" } }
        );
      });

      // Story chapters
      gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%" } }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return <div ref={root}>

    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="hero-v2">
      <div className="hero-v2-copy">
        <p className="hero-kicker">Embedded systems · Physical AI · RTL research</p>
        <h1 className="hero-v2-title">
          <span className="hero-line hero-line-one">Koduru</span>
          <span className="hero-line hero-line-two">Yagnesh <em>Kumar.</em></span>
        </h1>
        <p className="hero-sub">I build systems that prove themselves.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/record">Open the record <Arrow /></Link>
          <a className="button button-quiet" href="#work">See the work <Arrow /></a>
        </div>
      </div>
      <PortraitLens />
    </section>

    {/* ── MARQUEE ──────────────────────────────────────────────── */}
    <Marquee />

    {/* ── INSTRUMENTS ──────────────────────────────────────────── */}
    <section id="work" className="instruments-section">
      <header className="instruments-head reveal">
        <p className="section-label">Selected systems</p>
        <Link className="text-link" to="/record">Full record <Arrow /></Link>
      </header>
      <div className="instruments-list">
        {projects.slice(0, 4).map(p => (
          <Link to={`/record#${p.id}`} className="instrument-row" key={p.id}>
            <span className="inst-index">{p.index}</span>
            <span className="inst-metric">{p.metrics[0].split(" ")[0]}</span>
            <div className="inst-body">
              <h3>{p.title.split(" - ")[0]}</h3>
              <p>{p.summary.split(".")[0]}.</p>
            </div>
            <span className="inst-arrow"><Arrow /></span>
          </Link>
        ))}
      </div>
    </section>

    {/* ── SIGNAL SECTION ───────────────────────────────────────── */}
    <section className="story-chapter reveal">
      <p className="section-label">The approach</p>
      <h2>Every claim<br />has a proof.</h2>
      <div className="story-copy">
        <p>Each project runs against a declared interface, a reproducible test, and a stated boundary. The number either holds or it doesn't.</p>
        <p>ES-FA, CertGuard, CCE-QOS, and Limen each started as a question about how a system should behave when things go wrong. The answers are measured, not described.</p>
      </div>
    </section>

    {/* ── CLOSING ──────────────────────────────────────────────── */}
    <section className="closing reveal">
      <h2>The work keeps<br /><span>improving.</span></h2>
      <p>Each version is clearer, stronger, and more honest than the last.</p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/record">Open the record <Arrow /></Link>
        <Link className="button button-quiet" to="/contact">Start a conversation <Arrow /></Link>
      </div>
    </section>

  </div>;
}
