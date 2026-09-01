"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    // Har card ko humne Link me wrap kar diya hai
    <Link href={`/projects/${project._id}`} style={{ textDecoration: "none" }}>
      <div
        className="project-card"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition:
            "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          height: "100%",
          cursor: "pointer", // Cursor pointer
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px -10px rgba(59, 130, 246, 0.2)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* PROJECT SCREENSHOT */}
        <div
          style={{
            width: "100%",
            height: "210px",
            position: "relative",
            backgroundColor: "#0f172a",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Image
            src={project.imageUrl || "/placeholder.jpg"}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* TEXT CONTENT */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "0.6rem",
              lineHeight: "1.4",
            }}
          >
            {project.title}
          </h3>

          <p
            className="hero-desc"
            style={{
              fontSize: "0.95rem",
              color: "#94a3b8",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
