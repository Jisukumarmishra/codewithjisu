"use client";

import Image from "next/image";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#0f172a",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "16px",
          maxWidth: "650px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2rem",
          position: "relative",
          boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "none",
            color: "#94a3b8",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* Media Preview (Photo or Video) */}
        <div
          style={{
            width: "100%",
            height: "260px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "1.5rem",
            backgroundColor: "#020617",
          }}
        >
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <Image
              src={project.imageUrl || "/placeholder.jpg"}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        {/* Content */}
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "0.8rem",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "1rem",
            color: "#94a3b8",
            lineHeight: "1.7",
            marginBottom: "1.5rem",
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.technologies && (
          <div style={{ marginBottom: "1.5rem" }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "0.95rem",
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              Tech Stack:
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    color: "#60a5fa",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#1e293b",
                color: "#ffffff",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              GitHub Code ↗
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
