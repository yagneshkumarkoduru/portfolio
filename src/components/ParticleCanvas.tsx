import { useEffect, useRef } from "react";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let mouse = { x: W * 0.5, y: H * 0.5 };
    let raf = 0;
    let t = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();

    // Slow background magnetic field nodes
    const nodes = Array.from({ length: 11 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      baseX: Math.random() * W,
      baseY: Math.random() * H,
      r: 1.1 + Math.random() * 1.6,
      phase: i * 0.7,
    }));

    // Active particles
    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: 0.85 + Math.random() * 1.35,
      a: 0.32 + Math.random() * 0.48,
    }));

    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onTouch = (e: TouchEvent) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 1;

      // Background magnetic field
      ctx.strokeStyle = "rgba(110,168,255,0.055)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x = n.baseX + Math.sin(t * 0.0016 + n.phase) * 42;
        n.y = n.baseY + Math.cos(t * 0.00125 + n.phase) * 35;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 240) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(110,168,255,0.08)";
        ctx.fill();
      }

      // Mouse influence glow
      const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 210);
      mg.addColorStop(0, "rgba(110,168,255,0.055)");
      mg.addColorStop(0.5, "rgba(255,135,0,0.022)");
      mg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, W, H);

      // Active particles
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 155 && dist > 0) {
          const force = (155 - dist) / 155 * 0.028;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.983;
        p.vy *= 0.983;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > W) { p.x = W; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > H) { p.y = H; p.vy *= -1; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(246,243,236,${p.a})`;
        ctx.fill();
      }

      // Particle connections
      ctx.strokeStyle = "rgba(110,168,255,0.065)";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 88) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.68,
      }}
    />
  );
}
