"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "WinBook", href: "/winbook" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
      <header className="navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="logo-container">
            <span className="logo-text">
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

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <ul>
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`nav-btn ${isActive ? "active" : ""}`}
                      style={{
                        display: "inline-block",
                        color: isActive ? "#3b82f6" : "inherit",
                        fontWeight: isActive ? "bold" : "normal",
                      }}
                    >
                      <span>{label}</span>
                      <span
                        className="nav-underline"
                        style={{ opacity: isActive ? 1 : "" }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            <svg viewBox="0 0 15 15" width="24" height="24">
              <path
                fillRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          <div className="mobile-menu-top">
            <Link
              href="/"
              className="mobile-home-btn"
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 20 20" width="24" height="24">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <button
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="mobile-nav">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="mobile-nav-btn"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
