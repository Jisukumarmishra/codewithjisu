import Image from "next/image";
import Link from "next/link";
import { FALLBACK_PROJECTS } from "../page";

export const revalidate = 2; // Har 5 second me naya data fetch karega

export default function ProjectDetail({ params }) {
  const { id } = params;

  // Project find kar rahe hain ID ke basis par
  const project = FALLBACK_PROJECTS.find((p) => p._id === id);

  if (!project) {
    return (
      <div style={{ color: "white", padding: "5rem", textAlign: "center" }}>
        Project Not Found
      </div>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "5rem 1.5rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Back Button */}
      <Link
        href="/projects"
        style={{
          color: "#60a5fa",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "1.5rem",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        ← Back to Projects
      </Link>

      {/* Title */}
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          color: "#ffffff",
          marginBottom: "0.8rem",
          letterSpacing: "-0.01em",
        }}
      >
        {project.title}
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "#94a3b8",
          marginBottom: "2rem",
          lineHeight: "1.6",
        }}
      >
        {project.description}
      </p>

      {/* Hero Image/Video Container */}
      <div
        style={{
          width: "100%",
          height: "450px",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          marginBottom: "3rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <Image
          src={project.imageUrl || "/placeholder.jpg"}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 900px) 100vw, 900px"
          priority
        />
      </div>

      {/* Details Section */}
      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.4)",
          padding: "1.8rem",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "1.4rem",
            color: "#ffffff",
            marginBottom: "0.8rem",
            fontWeight: "600",
          }}
        >
          About This Project
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "#94a3b8",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          This is an in-depth view of {project.title}. Built focusing on
          performance, scalability, and an excellent user experience.{" "}
          {project.description}
        </p>

        <h3
          style={{
            fontSize: "1.15rem",
            color: "#ffffff",
            marginBottom: "0.8rem",
            fontWeight: "600",
          }}
        >
          Technologies Used
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "2.5rem",
          }}
        >
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                color: "#60a5fa",
                padding: "0.4rem 0.9rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                border: "1px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons (Ab hamesha show honge) */}
        <div style={{ display: "flex", gap: "29.5rem" }}>
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "0.95rem",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            View Source Code ↗
          </a>

          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "0.95rem",
            }}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </main>
  );
}
