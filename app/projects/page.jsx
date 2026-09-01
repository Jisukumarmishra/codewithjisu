import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/sanity/queries";

export const revalidate = 2; // Har 2 second me naya data fetch karega

export const metadata = {
  title: "Projects | Jisu Kumar",
  description:
    "Full stack projects by Jisu Kumar — MERN, PERN, React Native, Spring Boot.",
};

// Ye data abhi hum ID ke basis par use karenge
export const FALLBACK_PROJECTS = [
  {
    _id: "p1",
    title: "DevTinder – Developer Networking Platform",
    description:
      "A full-stack application for developers to connect, network, and match based on tech stacks and interests.",
    imageUrl: "/projects/DevTinder.png",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    status: "Live",
    githubUrl: "https://github.com/Jisukumarmishra/DevTinder-Web",
    liveUrl: "#",
    accentColor: "#ec4899",
  },
  {
    _id: "p2",
    title: "Memories – Social Media Events Platform",
    description:
      "A full-stack social platform allowing users to create, like, edit, and share beautiful life events and memories.",
    imageUrl: "/projects/memories.png",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    status: "Live",
    githubUrl: "https://github.com/Jisukumarmishra/Memories",
    liveUrl: null,
    accentColor: "#0ea5e9",
  },
  {
    _id: "p3",
    title: "NetflixGPT – AI-Powered Recommendation App",
    description:
      "An AI-integrated content recommendation platform built with React and Redux for robust state management.",
    imageUrl: "/projects/NetFlixGpt.png",
    technologies: ["React", "Redux", "Tailwind CSS", "AI/ML APIs"],
    status: "Live",
    githubUrl: "https://github.com/Jisukumarmishra/Netflix-Gpt",
    liveUrl: "#",
    accentColor: "#e50914",
  },
];

export default async function ProjectsPage() {
  let projects = [];
  try {
    projects = await getAllProjects();
  } catch (error) {
    projects = [];
  }

  const displayProjects =
    projects && projects.length > 0 ? projects : FALLBACK_PROJECTS;

  return (
    <section
      id="projects"
      className="projects-section fade-in-up"
      style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
    >
      <div
        className="section-inner"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div className="section-heading" style={{ marginBottom: "3rem" }}>
          <h2
            className="section-title"
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "1rem",
              marginTop: "-3rem",
            }}
          >
            <span style={{ color: "#ffffff" }}>Projects</span>
          </h2>

          <p
            className="hero-desc"
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#94a3b8",
              maxWidth: "850px",
              marginTop: "1rem",
            }}
          >
            Here are some of the projects I've built while growing as a
            developer. From frontend experiences to full-stack applications,
            each project represents a new challenge, a new technology, and an
            opportunity to build something meaningful
          </p>
        </div>

        {/* PROJECTS GRID (Directly mapping cards) */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {displayProjects.map((project) => (
            <ProjectCard key={project._id || project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
