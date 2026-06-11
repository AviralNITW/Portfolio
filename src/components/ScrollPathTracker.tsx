"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionPoint {
  id: string;
  x: number;
  y: number;
}

const sectionIds = ["home", "about", "education", "skills", "projects", "experience", "achievements", "profiles", "contact"];

export default function ScrollPathTracker() {
  const pathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const ballRef = useRef<SVGGElement>(null);
  const [pathD, setPathD] = useState("");
  const [mounted, setMounted] = useState(false);
  const [totalLength, setTotalLength] = useState(0);

  // Recalculate section coordinates and draw the SVG curve path
  const updatePath = () => {
    const points: SectionPoint[] = [];
    const width = window.innerWidth;
    const isMobile = width < 768;

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        // Find center-Y of the section's header or the top of the section
        const header = el.querySelector("[data-path-trigger]") || el;
        const rect = header.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const y = rect.top + scrollTop + rect.height / 2;

        // Determine X position (alternate left and right for an organic luxury wind)
        let x = width / 2; // Default center
        if (!isMobile && index > 0 && index < sectionIds.length - 1) {
          if (index % 2 === 1) {
            x = width * 0.82; // Shift right
          } else {
            x = width * 0.18; // Shift left
          }
        }
        points.push({ id, x, y });
      }
    });

    if (points.length === 0) return;

    // Generate cubic bezier curve path through the points
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const pStart = points[i];
      const pEnd = points[i + 1];
      const dy = pEnd.y - pStart.y;
      
      // Control points to create a smooth S-curve entering/leaving vertically
      const cp1y = pStart.y + dy / 2.2;
      const cp2y = pEnd.y - dy / 2.2;
      
      d += ` C ${pStart.x} ${cp1y}, ${pEnd.x} ${cp2y}, ${pEnd.x} ${pEnd.y}`;
    }

    setPathD(d);
  };

  useEffect(() => {
    setMounted(true);
    
    // Initial path generation
    setTimeout(() => {
      updatePath();
    }, 500); // Small timeout to ensure DOM is fully rendered

    // Event listeners
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  useEffect(() => {
    if (!pathD || !pathRef.current) return;

    // Measure path length
    const len = pathRef.current.getTotalLength();
    setTotalLength(len);

    // Initialize SVG path lengths
    if (glowPathRef.current) {
      glowPathRef.current.style.strokeDasharray = `${len}`;
      glowPathRef.current.style.strokeDashoffset = `${len}`;
    }

    const ball = ballRef.current;
    const path = pathRef.current;

    // GSAP ScrollTrigger to animate progress along path
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    tl.to({}, {
      duration: 1,
      onUpdate: function () {
        const progress = this.progress();
        const pointLength = progress * len;

        // Trace the ball along path coordinates
        if (path && ball) {
          const point = path.getPointAtLength(pointLength);
          gsap.set(ball, { x: point.x, y: point.y });
        }

        // Draw the path glow line
        if (glowPathRef.current) {
          glowPathRef.current.style.strokeDashoffset = `${len - pointLength}`;
        }
      },
    });

    // Section reveal scroll triggers
    sectionIds.forEach((id) => {
      const sectionEl = document.getElementById(id);
      if (!sectionEl) return;

      const revealTargets = sectionEl.querySelectorAll("[data-reveal]");
      
      // Initially hide the targets
      if (revealTargets.length > 0) {
        gsap.set(revealTargets, { opacity: 0, y: 30 });
      }

      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top 65%",
        onEnter: () => {
          // Pulse the ball when entering a section
          if (ball) {
            gsap.timeline()
              .to(ball.querySelector(".glowing-circle"), { scale: 2.2, duration: 0.15 })
              .to(ball.querySelector(".glowing-circle"), { scale: 1.0, duration: 0.4 });
          }

          // Reveal section text elements
          if (revealTargets.length > 0) {
            gsap.to(revealTargets, {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.15,
              ease: "power3.out",
              overwrite: "auto"
            });
          }
        },
        onEnterBack: () => {
          // Stagger reveal on scrolling up too
          if (revealTargets.length > 0) {
            gsap.to(revealTargets, {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.1,
              ease: "power3.out",
              overwrite: "auto"
            });
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathD]);

  if (!mounted || !pathD) return null;

  return (
    <div className="absolute inset-0 w-full pointer-events-none z-10" style={{ height: "100%" }}>
      <svg className="scroll-path-svg">
        <defs>
          {/* Luxury gold gradient for path and light */}
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#c5a880" stopOpacity="1" />
            <stop offset="100%" stopColor="#e6d3ba" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="ball-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e6d3ba" stopOpacity="1" />
            <stop offset="25%" stopColor="#c5a880" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#c5a880" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c5a880" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint base curve path */}
        <path
          ref={pathRef}
          d={pathD}
          className="scroll-path-line"
        />

        {/* Glowing trace curve path */}
        <path
          ref={glowPathRef}
          d={pathD}
          className="scroll-path-glow-line"
        />

        {/* Moving ball with light */}
        <g ref={ballRef} className="origin-center">
          {/* Faux light glow */}
          <circle
            cx="0"
            cy="0"
            r="40"
            fill="url(#ball-glow)"
            className="glowing-circle"
          />
          {/* Center physical bead */}
          <circle
            cx="0"
            cy="0"
            r="5"
            fill="#ffffff"
            className="shadow-lg shadow-white/50"
          />
        </g>
      </svg>
    </div>
  );
}
