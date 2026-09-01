"use client";

import Link from "next/link";

const DSA_PLATFORMS = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/JisuKumar/",
    username: "@jisu_kumar",
    stats: "350+ Problems Solved",
    color: "#ffa116",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.833-1.452l2.697-2.607c.514-.515.497-1.366-.038-1.901-.536-.535-1.387-.552-1.902-.038zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
      </svg>
    ),
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/jisukd5k6",
    username: "@jisu_kumar",
    stats: "150+ Problems Solved",
    // badge: "5 Star",
    color: "#2f8d46",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
        <path d="M11.968 11.233L16.275 6.94l.019.018a1.697 1.697 0 0 1 0 2.4l-4.307 4.293zm0 2.4l-4.307-4.293a1.697 1.697 0 0 0-2.4 0l-.019-.018 4.307-4.294zM16.275 16.06a1.697 1.697 0 0 0 2.4 0l.019-.018-4.307-4.293zM5.26 13.66a1.697 1.697 0 0 1 0-2.4l4.307-4.293zm6.708-2.4l4.307 4.293a1.697 1.697 0 0 1 0 2.4z" />
      </svg>
    ),
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/jisu_kumar",
    username: "@jisu_kumar",
    stats: "Giving Contest Regurlay",
    // badge: "Knight",
    color: "#5B4638", // Codechef Brown Theme
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
        <path d="M2 4v16h20V4H2zm2 2h16v12H4V6zm2 3v2h2V9H6zm0 3v2h2v-2H6zm0 3v2h2v-2H6zm4 0v2h8v-2h-8z" />
      </svg>
    ),
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/JisuKumarMishra",
    username: "@jisu_kumar",
    // stats: "Practise Standard Questions",
    stats:
      "Still struggling with dynamic programming, but getting better every day.",
    // badge: "Specialist",
    color: "#1F8ACB", // Codeforces Blue Theme
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
        {/* Codeforces iconic 3 bars */}
        <rect x="3" y="13" width="4" height="8" fill="#1F8ACB" />
        <rect x="10" y="5" width="4" height="16" fill="#FFC107" />
        <rect x="17" y="9" width="4" height="12" fill="#F44336" />
      </svg>
    ),
  },
  {
    name: "CSES Problem Set",
    url: "https://cses.fi/user/418216",
    username: "@jisu_kumar",
    stats:
      "I solve algorithms daily. Sometimes it takes 10 minutes, sometimes 3 days.",
    color: "#e11d48", // Rose/Red theme for CSES
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Graph/Node Icon representing algorithmic problems */}
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/JisuKumar",
    username: "@JisuKumar",
    stats: "Standard Graph & DP Set",
    color: "#000000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="40"
        height="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        {/* AtCoder 'A' style polygon outline */}
        <polygon points="12 2 2 22 22 22 12 2" strokeLinejoin="round" />
        <line x1="7" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    name: "SPOJ",
    url: "https://www.spoj.com/users/jisu_kumar/", // Public user page format
    username: "@jisu_kumar",
    stats: "Classic Algorithmic Challenges",
    color: "#2C3E50",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
        {/* Terminal/Code Execution Icon */}
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-14-9l4 4-4 4-1.4-1.4L7.2 13 4.6 10.4 6 9zm5 7h6v2h-6v-2z" />
      </svg>
    ),
  },
];

export default function DSAPage() {
  return (
    <section
      className="contribution-section fade-in-up"
      style={{ minHeight: "80vh", paddingTop: "6rem" }}
    >
      <div
        className="section-inner"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        {/* Page Title */}
        <div className="section-heading">
          <h2 className="section-title">
            <span style={{ color: "#ffffff" }}>Data Structures </span>
            <span style={{ color: "#3b82f6" }}>& Algorithms</span>
          </h2>
          <p
            className="hero-desc"
            style={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            A collection of my coding profiles, demonstrating my problem-solving
            skills, algorithmic thinking, and consistency in competitive
            programming.
          </p>
        </div>

        {/* DSA Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
            paddingBottom: "4rem",
          }}
        >
          {DSA_PLATFORMS.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${platform.color}40`;
                e.currentTarget.style.borderColor = `${platform.color}80`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ color: platform.color, marginBottom: "1.5rem" }}>
                {platform.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                {platform.name}
              </h3>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                {platform.username}
              </p>

              <div style={{ marginTop: "auto", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: "600" }}>
                    {platform.stats}
                  </span>
                </div>
                {platform.badge && (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      backgroundColor: `${platform.color}20`,
                      color: platform.color,
                    }}
                  >
                    {platform.badge}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
