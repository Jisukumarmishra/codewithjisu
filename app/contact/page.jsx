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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Internal CSS for Premium Hover Effects */}
      <style>{`
        .premium-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(10px);
          padding: 2.5rem 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          transition: all 0.4s ease;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .premium-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.15);
        }
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Subtle Background Glow (Optional Premium Touch) */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(0,0,0,0) 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header Section */}
        <div
          className="fade-in-up"
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              color: "#ffffff",
              marginBottom: "1rem",
              letterSpacing: "-1px",
            }}
          >
            Let's <span className="gradient-text">Work Together</span>
          </h1>

          {/* Centered Decorative Gradient Underline */}
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              borderRadius: "4px",
              margin: "0 auto 1.5rem auto",
            }}
          ></div>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#94a3b8",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Ready to build something amazing? Reach out for projects,
            collaborations, or just to say hello.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className="fade-in-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "5rem",
            animationDelay: "0.1s",
          }}
        >
          {/* Email Card */}
          <div className="premium-card">
            <div
              style={{
                color: "#3b82f6",
                marginBottom: "1.2rem",
                filter: "drop-shadow(0 0 12px rgba(59,130,246,0.4))",
              }}
            >
              <svg
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
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
                fontSize: "1.25rem",
                color: "#f8fafc",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Email Me
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "1rem" }}>
              jisuk138@gmail.com
            </p>
          </div>

          {/* Phone Card */}
          <div className="premium-card">
            <div
              style={{
                color: "#3b82f6",
                marginBottom: "1.2rem",
                filter: "drop-shadow(0 0 12px rgba(59,130,246,0.4))",
              }}
            >
              <svg
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
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
                fontSize: "1.25rem",
                color: "#f8fafc",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Call Me
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "1rem" }}>+91 8651854087</p>
          </div>

          {/* Location Card */}
          <div className="premium-card">
            <div
              style={{
                color: "#3b82f6",
                marginBottom: "1.2rem",
                filter: "drop-shadow(0 0 12px rgba(59,130,246,0.4))",
              }}
            >
              <svg
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
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
                fontSize: "1.25rem",
                color: "#f8fafc",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Location
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "1rem" }}>
              Greater Noida, India
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div
          className="fade-in-up"
          style={{
            animationDelay: "0.2s",
            background: "rgba(30, 41, 59, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "24px",
            padding: "3rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "2.2rem",
                color: "#f8fafc",
                fontWeight: "700",
                marginBottom: "0.8rem",
              }}
            >
              Send a <span className="gradient-text">Message</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1.05rem" }}>
              Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
