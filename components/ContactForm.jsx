"use client";

export default function ContactForm() {
  const inputStyle = {
    width: "100%",
    padding: "1rem 1.5rem",
    backgroundColor: "#1e293b",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "30px", // Pill shape from screenshot
    color: "#ffffff",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const textAreaStyle = {
    ...inputStyle,
    borderRadius: "20px",
    minHeight: "200px",
    resize: "vertical",
  };

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      {/* Yahan apni Web3Forms wali Access Key paste karein 👇 */}
      <input type="hidden" name="" value="YOUR_ACCESS_KEY_HERE" />

      {/* Success redirect URL */}
      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />

      {/* 2-Column Grid for Name and Email */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <input
          type="text"
          name="name" // 🔥 Name attribute added
          placeholder="Name"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255,255,255,0.05)")
          }
        />
        <input
          type="email"
          name="email" // 🔥 Name attribute added
          placeholder="Email"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255,255,255,0.05)")
          }
        />
      </div>

      {/* Subject Field */}
      <input
        type="text"
        name="subject" // 🔥 Name attribute added
        placeholder="Subject"
        required
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.05)")}
      />

      {/* Message Area */}
      <textarea
        name="message" // 🔥 Name attribute added
        placeholder="Message"
        required
        style={textAreaStyle}
        onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.05)")}
      ></textarea>

      {/* Submit Button aligned to left like the screenshot */}
      <div style={{ textAlign: "left" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            padding: "0.8rem 2.5rem",
            borderRadius: "30px",
            border: "none",
            fontSize: "1.05rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
