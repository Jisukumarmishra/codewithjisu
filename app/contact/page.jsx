import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Jisu Kumar",
  description:
    "Get in touch with Jisu Kumar — MERN Developer and Full Stack Developer.",
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 1.5rem",
        minHeight: "100vh",
        backgroundColor: "#020617",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header Section */}
        <div className="fade-in-up" style={{ marginBottom: "3rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#ffffff",
              marginBottom: "0.5rem",
            }}
          >
            Contact Me
          </h1>
          {/* Decorative Underline */}
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#3b82f6",
              borderRadius: "2px",
              marginBottom: "1.5rem",
            }}
          ></div>
          <p style={{ fontSize: "1.1rem", color: "#94a3b8" }}>
            Have a project, collaboration idea, or just want to chat? I&apos;d
            love to hear from you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className="fade-in-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
            animationDelay: "0.1s",
          }}
        >
          {/* Email Card */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "2rem 1.5rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.05)",
              textAlign: "center",
            }}
          >
            <div style={{ color: "#3b82f6", marginBottom: "1rem" }}>
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                style={{ margin: "0 auto" }}
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Email
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
              your.email@gmail.com
            </p>
          </div>

          {/* Phone Card */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "2rem 1.5rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.05)",
              textAlign: "center",
            }}
          >
            <div style={{ color: "#3b82f6", marginBottom: "1rem" }}>
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                style={{ margin: "0 auto" }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Phone
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
              +91 00000 00000
            </p>
          </div>

          {/* Location Card */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "2rem 1.5rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.05)",
              textAlign: "center",
            }}
          >
            <div style={{ color: "#3b82f6", marginBottom: "1rem" }}>
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                style={{ margin: "0 auto" }}
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#ffffff",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Location
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
              Greater Noida, Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div
          className="fade-in-up"
          style={{
            animationDelay: "0.2s",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "#3b82f6",
              fontWeight: "700",
              marginBottom: "0.5rem",
            }}
          >
            Knock Me Anytime
          </h2>
          <p
            style={{ color: "#e2e8f0", fontSize: "1.05rem", fontWeight: "500" }}
          >
            Feel free to get in touch by filling out the form below, I&apos;ll
            respond to you as soon as possible.
          </p>
        </div>

        <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
