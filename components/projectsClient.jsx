"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsClient({ projects }) {
  // Ye state track karegi ki kaunsa project modal me dikhana hai
  // null ka matlab hai koi modal open nahi hai
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      {/* 1. Projects Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          // Card par click karne se selectedProject me wo project set ho jayega
          <div
            key={project._id || index}
            onClick={() => setSelectedProject(project)}
            style={{ cursor: "pointer", height: "100%" }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* 2. Modal Rendering Logic */}
      {/* Agar selectedProject me koi data hai, tabhi Modal render hoga */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          // Modal close karne par state wapas null set kar denge
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
