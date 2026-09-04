"use client";

export default function AboutPage() {
  const currentFocus = [
    "Full-stack web development",
    "Data Structures & Algorithms",
    "Open Source Contribution",
    "Building and deploying real-world projects",
    "Improving problem-solving and software engineering skills",
  ];

  const technicalSkills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Material-UI",
    "Node.js",
    "Express.js",
    // "Spring Boot",
    "CS-fundamental",
    "System Design",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "API Integration",
    "Git",
    "GitHub",
    "Postman",
    "Visual Studio Code",
    "AWS",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS Fundamentals",
    "Authentication & Authorization",
    "Problem Solving",
    "Responsive Web Development",
    "MERN Stack",
  ];

  return (
    // 1. POORA COMPONENT UPAR KARNE KE LIYE: marginTop aur paddingTop adjust kiya hai
    <section
      id="about"
      className="contribution-section"
      style={{ marginTop: "-1rem", paddingTop: "1rem" }}
    >
      <div className="section-inner">
        <div className="section-heading fade-in-up">
          <h2 className="section-title">About Me</h2>
        </div>

        <div
          className="contribution-content fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Main About Card (Flexbox for Text + Image) */}
          <div
            className="contribution-card"
            style={{
              display: "flex",
              flexWrap: "wrap-reverse",
              gap: "3rem",
              alignItems: "center",
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              padding: "2.5rem",
              boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Left Side: Text Content */}
            <div style={{ flex: "1 1 500px" }}>
              <p
                className="hero-desc"
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                Hi, I'm{" "}
                <strong style={{ color: "#ffffff", fontWeight: "600" }}>
                  Jisu Kumar
                </strong>
                , a passionate developer who enjoys turning ideas into real,
                working applications.
              </p>

              <p
                className="hero-desc"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "1.2rem",
                }}
              >
                I’m currently focused on strengthening my skills in{" "}
                <strong style={{ color: "#3b82f6", fontWeight: "500" }}>
                  Java, Data Structures & Algorithms, MERN Stack
                </strong>
                , and full-stack development. I enjoy understanding how things
                work under the hood and solving problems by breaking them down
                into smaller, logical steps.
              </p>

              <p
                className="hero-desc"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "1.2rem",
                }}
              >
                Alongside DSA and development, I’m building projects to gain
                practical experience and improve my ability to design, develop,
                and deploy complete applications. I’m always learning,
                experimenting with new technologies, and looking for
                opportunities to build things that are useful, simple, and
                impactful.
              </p>

              {/* "What I'm currently working on" Section */}
              <div style={{ marginTop: "2.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    marginBottom: "1.2rem",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  What I’m currently working on:
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {currentFocus.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        background: "rgba(255, 255, 255, 0.03)",
                        padding: "0.8rem 1rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.03)",
                        transition: "all 0.3s ease",
                        cursor: "default",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background =
                          "rgba(59, 130, 246, 0.08)";
                        e.currentTarget.style.borderColor =
                          "rgba(59, 130, 246, 0.3)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <span style={{ color: "#3b82f6", marginTop: "2px" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </span>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "0.95rem",
                          lineHeight: "1.5",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Profile Image */}
            <div
              style={{
                flex: "0 0 auto",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  // 2. PHOTO KO AUR UPAR KARNE KE LIYE
                  transform: "translateY(-5.5rem)",
                }}
              >
                {/* Background Glow behind the image */}
                <div
                  style={{
                    position: "absolute",
                    inset: -20,
                    background: "rgba(59, 130, 246, 0.4)",
                    filter: "blur(40px)",
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <img
                  src="https://res.cloudinary.com/dgy7w5mo5/image/upload/v1787813652/WhatsApp_Image_20212.56.35_AM_sjlp4x.jpg"
                  alt="Jisu Kumar"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: "340px",
                    height: "340px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* New Technical Skills Section - Cloud Style */}
          <div style={{ marginTop: "4.5rem", paddingBottom: "2rem" }}>
            <h2
              className="section-title"
              style={{
                fontSize: "2rem",
                textAlign: "left",
                marginBottom: "2.5rem",
              }}
            >
              Technical Skills
            </h2>

            {/* Tag Cloud Container */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.85rem",
                justifyContent: "center",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="floating-skill-pill"
                  style={{
                    padding: "0.65rem 1.4rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "50px",
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    transition:
                      "background 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
                    cursor: "default",
                    // Bina hover kiye hamesha float karega
                    animation: `autoFloat ${2.5 + (index % 4) * 0.5}s ease-in-out infinite`,
                    // Har pill ka time alag rakha hai taaki real wave lage
                    animationDelay: `${(index % 5) * 0.3}s`,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONTINUOUS FLOATING ANIMATION CSS */}
      <style>{`
        /* Default floating animation without hover */
        @keyframes autoFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        
        /* Hover pe mast blue glow effect aayega bina float roke */
        .floating-skill-pill:hover {
          background: rgba(59, 130, 246, 0.15) !important;
          color: #ffffff !important;
          border-color: rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 6px 15px rgba(59, 130, 246, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
