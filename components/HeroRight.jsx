"use client";

import { useEffect, useRef } from "react";

const BADGE_DEPTHS = [0.025, -0.02, 0.018, -0.03];

export default function HeroRight() {
  const heroRightRef = useRef(null);
  const heroSvgRef = useRef(null);
  const glowOrbRef = useRef(null);
  const glowOrbSecRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const badge3Ref = useRef(null);
  const badge4Ref = useRef(null);

  const badgeRefs = [badge1Ref, badge2Ref, badge3Ref, badge4Ref];

  useEffect(() => {
    const heroRight = heroRightRef.current;
    if (!heroRight) return;

    let targetX = 50,
      targetY = 50;
    let currentX = 50,
      currentY = 50;
    let currentXS = 50,
      currentYS = 50;
    let rafId;

    function animateOrbs() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      currentXS += (targetX - currentXS) * 0.055;
      currentYS += (targetY - currentYS) * 0.055;

      if (glowOrbRef.current) {
        glowOrbRef.current.style.left = currentX + "%";
        glowOrbRef.current.style.top = currentY + "%";
      }
      if (glowOrbSecRef.current) {
        glowOrbSecRef.current.style.left = currentXS + "%";
        glowOrbSecRef.current.style.top = currentYS + "%";
      }
      rafId = requestAnimationFrame(animateOrbs);
    }
    rafId = requestAnimationFrame(animateOrbs);

    function onMouseMove(e) {
      const rect = heroRight.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;

      if (heroSvgRef.current) {
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        heroSvgRef.current.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) scale(1.03)`;
        heroSvgRef.current.style.transition = "transform 0.1s linear";
      }

      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      badgeRefs.forEach((ref, i) => {
        if (ref.current) {
          const d = BADGE_DEPTHS[i];
          ref.current.style.transform = `translate(${cx * d}px, ${cy * d}px)`;
        }
      });
    }

    function onMouseLeave() {
      targetX = 50;
      targetY = 50;
      if (heroSvgRef.current) {
        heroSvgRef.current.style.transform =
          "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
        heroSvgRef.current.style.transition =
          "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)";
      }
      badgeRefs.forEach((ref) => {
        if (ref.current) ref.current.style.transform = "";
      });
    }

    heroRight.addEventListener("mousemove", onMouseMove);
    heroRight.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      heroRight.removeEventListener("mousemove", onMouseMove);
      heroRight.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      className="hero-right fade-in-up"
      style={{
        animationDelay: "0.15s",
        flex: "1",
        width: "100%",
        maxWidth: "450px", // Yaha width fix kar di hai taaki niche na gire
        minWidth: "300px", // Mobile pe gayab na ho
        transform: "scale(0.8)", // Design ko physically chota kar diya
        transformOrigin: "center right",
        marginLeft: "auto", // Pura right side me dhakel diya
        marginTop: "-2rem", // Thoda upar shift kar diya text ke barabar lane ke liye
      }}
      ref={heroRightRef}
    >
      {/* Tech Badges */}
      <div className="tech-badge badge-react" ref={badge1Ref}>
        <span className="badge-dot" />
        <span>Mongodb</span>
      </div>

      <div className="tech-badge badge-node" ref={badge2Ref}>
        <span className="badge-dot" />
        <span>Express.js</span>
      </div>

      <div className="tech-badge badge-spring" ref={badge3Ref}>
        <span className="badge-dot" />
        <span>React</span>
      </div>

      <div className="tech-badge badge-mobile" ref={badge4Ref}>
        <span className="badge-dot" />
        <span>Node.js</span>
      </div>

      {/* Glow orbs */}
      <div className="glow-orb" ref={glowOrbRef} />
      <div className="glow-orb-secondary" ref={glowOrbSecRef} />

      {/* SVG Container */}
      <div className="svg-container">
        {/* Particles */}
        <div
          className="particle"
          style={{
            top: "15%",
            left: "20%",
            animationDelay: "0s",
            animationDuration: "3.2s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "35%",
            left: "70%",
            animationDelay: "0.5s",
            animationDuration: "2.8s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "60%",
            left: "30%",
            animationDelay: "1s",
            animationDuration: "3.5s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "80%",
            left: "60%",
            animationDelay: "1.5s",
            animationDuration: "2.5s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "50%",
            left: "50%",
            animationDelay: "2s",
            animationDuration: "3s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "25%",
            left: "85%",
            animationDelay: "0.8s",
            animationDuration: "4s",
          }}
        />

        {/* 3D Isometric SVG Cube */}
        <svg
          viewBox="0 0 1273 906"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hero-svg"
          ref={heroSvgRef}
          style={{ width: "100%", height: "auto" }}
        >
          <defs>
            <linearGradient
              id="paint-linear"
              x1="1272.23"
              y1="479.474"
              x2="506.242"
              y2="-216.277"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#60a5fa" />
              <stop offset="0.619553" stopColor="#3b82f6" />
              <stop offset="0.93102" stopColor="#1e40af" />
            </linearGradient>
          </defs>

          {/* Static cube geometry */}
          <g className="iso-path-group">
            <path
              className="iso-path"
              d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
              stroke="url(#paint-linear)"
              strokeOpacity="0.6"
              strokeWidth="2"
            />
          </g>

          {/* Wireframe dash-travel overlays */}
          <path
            className="wire-travel"
            strokeDasharray="60 840"
            d="M318.587 315.483V510.936L477.544 431.391V236.949L318.587 158.416L159.63 236.949V79.5451L318.587 1.34863L477.544 79.5451"
          />
          <path
            className="wire-travel"
            strokeDasharray="55 780"
            d="M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L1272.33 473.898M1113.37 552.431V747.882L954.414 668.34"
          />
          <path
            className="wire-travel"
            strokeDasharray="70 860"
            d="M477.544 552.094V746.534L636.5 826.078V630.628M636.5 630.965L795.457 552.768L954.414 630.965M795.457 709.498V904.949"
          />
          <path
            className="wire-travel"
            strokeDasharray="50 800"
            d="M636.5 315.82V472.887M795.457 395.701V237.286L636.5 159.09L477.544 237.286M636.5 473.561L795.457 552.094"
          />
          <path
            className="wire-travel"
            strokeDasharray="65 820"
            d="M159.63 589.469L0.673828 509.925V315.483L159.63 394.016M318.587 315.483L159.63 237.286L0.673828 315.483"
          />

          {/* Glowing nodes */}
          <circle className="iso-node" cx="159" cy="586" r="5" fill="#60a5fa" />
          <circle className="iso-node" cx="159" cy="393" r="5" fill="#60a5fa" />
          <circle className="iso-node" cx="793" cy="551" r="5" fill="#60a5fa" />
          <circle
            className="iso-node"
            cx="1113"
            cy="551"
            r="5"
            fill="#60a5fa"
          />
          <circle
            className="iso-node"
            cx="1113"
            cy="398"
            r="5"
            fill="#60a5fa"
          />
          <circle className="iso-node" cx="793" cy="237" r="5" fill="#60a5fa" />
          <circle
            className="iso-node iso-node--dim"
            cx="477"
            cy="237"
            r="4"
            fill="#60a5fa"
          />
          <circle
            className="iso-node iso-node--dim"
            cx="318"
            cy="315"
            r="4"
            fill="#60a5fa"
          />
          <circle
            className="iso-node iso-node--dim"
            cx="636"
            cy="473"
            r="4"
            fill="#60a5fa"
          />
          <circle
            className="iso-node iso-node--dim"
            cx="954"
            cy="473"
            r="4"
            fill="#60a5fa"
          />
          <circle
            className="iso-node iso-node--dim"
            cx="795"
            cy="709"
            r="4"
            fill="#60a5fa"
          />
          <circle
            className="iso-node iso-node--dim"
            cx="636"
            cy="630"
            r="4"
            fill="#60a5fa"
          />
        </svg>
      </div>

      {/* Available for work chip */}
      <div className="status-chip">
        <span className="status-dot" />
        <span>Available for work</span>
      </div>
    </div>
  );
}
