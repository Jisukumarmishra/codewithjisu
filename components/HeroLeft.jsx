"use client";
import Typewriter from "typewriter-effect";

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Jisukumarmishra",
    icon: (
      <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jisu-kumar",
    icon: (
      <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jisu_mishra_offical/?hl=en",
    icon: (
      <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
        <circle cx="16.806" cy="7.207" r="1.078" />
        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
      </svg>
    ),
  },
  {
    label: "DSA Profiles",
    href: "/dsa",
    icon: (
      <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
  },
];

export default function HeroLeft() {
  return (
    <div className="hero-left fade-in-up" style={{ position: "relative" }}>
      <div className="hero-name-block">
        <h2
          className="hero-name"
          style={{ fontSize: "2.4rem", marginBottom: "0.5rem" }}
        >
          <span className="name-white">Hello, my name is </span>
          <span className="name-white">Jisu </span>
          <span className="name-blue">Kumar</span>
        </h2>

        <div
          className="hero-tagline"
          style={{ fontSize: "1.45rem", fontWeight: "600", marginTop: "1rem" }}
        >
          I'm a{" "}
          <span className="color-cycle" style={{ display: "inline-block" }}>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "MERN Developer",
                  "Problem Solver",
                  "AI/ML Enthusiast",
                  "Open Source Contributor",
                  "Open Source Maintainer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 60,
                component: "span",
              }}
            />
          </span>
        </div>
      </div>

      <p
        className="hero-desc"
        style={{ fontSize: "1.15rem", lineHeight: "1.8", marginTop: "1.5rem" }}
      >
        A passionate Open Source Contributor and Web Developer focused on
        building clean, engaging, and reliable applications, backed by strong
        DSA and problem-solving skills.
      </p>

      {/* Social Links Container */}
      <div
        className="action-container fade-in-up"
        style={{
          animationDelay: "0.2s",
          marginTop: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <ul
          className="social-links"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
            padding: 0,
            marginTop: "2rem",
            margin: 0,
            listStyle: "none",
          }}
        >
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
              >
                {icon}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* NAYA DOWNLOAD BUTTON - Absolute Position karke */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "100%",
          marginTop: "3rem",
        }}
      >
        <a
          href="/Jisu_Resume.pdf"
          download="Jisu_Resume.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.6rem 1.4rem",
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            borderRadius: "50px",
            fontWeight: "600",
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.39)",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px 0 rgba(59, 130, 246, 0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 14px 0 rgba(59, 130, 246, 0.39)";
          }}
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}

// "use client";
// import Typewriter from "typewriter-effect";

// export const SOCIAL_LINKS = [
//   {
//     label: "GitHub",
//     href: "https://github.com/Jisukumarmishra",
//     icon: (
//       <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
//         />
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/jisu-kumar",
//     icon: (
//       <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
//         <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/jisu_mishra_offical/?hl=en",
//     icon: (
//       <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
//         <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
//         <circle cx="16.806" cy="7.207" r="1.078" />
//         <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
//       </svg>
//     ),
//   },
//   {
//     label: "DSA Profiles",
//     href: "/dsa",
//     icon: (
//       <svg viewBox="0 0 24 24" className="social-icon" fill="currentColor">
//         <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
//       </svg>
//     ),
//   },
// ];

// export default function HeroLeft() {
//   return (
//     <div className="hero-left fade-in-up">
//       <div className="hero-name-block">
//         <h2
//           className="hero-name"
//           style={{ fontSize: "2.4rem", marginBottom: "0.5rem" }}
//         >
//           <span className="name-white">Hello, my name is </span>
//           <span className="name-white">Jisu </span>
//           <span className="name-blue">Kumar</span>
//         </h2>

//         <div
//           className="hero-tagline"
//           style={{ fontSize: "1.45rem", fontWeight: "600", marginTop: "1rem" }}
//         >
//           I'm a{" "}
//           <span className="color-cycle" style={{ display: "inline-block" }}>
//             <Typewriter
//               options={{
//                 strings: [
//                   "Full Stack Developer",
//                   "MERN Developer",
//                   "Problem Solver",
//                   "AI/ML Enthusiast",
//                   "Open Source Contributor",
//                   "Open Source Maintainer",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 deleteSpeed: 50,
//                 delay: 60,
//                 component: "span",
//               }}
//             />
//           </span>
//         </div>
//       </div>

//       <p
//         className="hero-desc"
//         style={{ fontSize: "1.15rem", lineHeight: "1.8", marginTop: "1.5rem" }}
//       >
//         A passionate Open Source Contributor and Web Developer focused on
//         building clean, engaging, and reliable applications, backed by strong
//         DSA and problem-solving skills.
//       </p>

//       {/* Button & Social Links Container */}
//       <div
//         className="action-container fade-in-up"
//         style={{
//           animationDelay: "0.2s",
//           marginTop: "2.5rem",
//           display: "flex",
//           alignItems: "center",
//           gap: "2rem",
//           flexWrap: "wrap",
//         }}
//       >
//         {/* SOCIAL LINKS */}
//         <ul
//           className="social-links"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             flexWrap: "wrap",
//             gap: "1.5rem",
//             padding: 0,
//             marginTop: "2rem",
//             margin: 0,
//             listStyle: "none",
//           }}
//         >
//           {SOCIAL_LINKS.map(({ label, href, icon }) => (
//             <li key={label}>
//               <a
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-link"
//                 aria-label={label}
//               >
//                 {icon}
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
