'use client';

import Link from 'next/link';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-content">

          {/* Left — logo + email */}
          <div className="footer-left">
            <Link href="/" className="logo-container">
              <span className="logo-text" style={{ fontSize: '1.8rem' }}>
                Jisu
                <svg
                  className="logo-underline"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 5 Q 25 0, 50 5 T 100 5 T 150 5 T 200 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </Link>
            <a href="mailto:jisukumar@gmail.com" className="footer-email">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              jisukumar@gmail.com
            </a>
          </div>

          {/* Right — role + copyright */}
          <div className="footer-right">
            <p className="footer-role">MERN Developer · Full Stack Developer · Problem Solver</p>
            <p className="footer-copyright">Copyright © 2026 Jisu Kumar. All rights reserved.</p>
          </div>

        </div>
      </div>

      {/* Scroll to top button */}
      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
