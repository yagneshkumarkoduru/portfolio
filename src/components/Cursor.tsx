import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let isActive = false;
    let isHidden = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (isHidden) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        isHidden = false;
      }
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isHidden = true;
    };

    const onEnterLink = () => {
      isActive = true;
      ring.style.borderColor = "rgba(110,168,255,0.9)";
      ring.style.transform = `translate(${rx - 22}px,${ry - 22}px) scale(1.45)`;
    };

    const onLeaveLink = () => {
      isActive = false;
      ring.style.borderColor = "rgba(110,168,255,0.45)";
    };

    const links = document.querySelectorAll("a, button");
    links.forEach(el => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      dot.style.transform = `translate(${mx - 3}px,${my - 3}px)`;
      if (!isActive) {
        ring.style.transform = `translate(${rx - 18}px,${ry - 18}px) scale(1)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      links.forEach(el => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
