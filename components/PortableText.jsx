import Image from "next/image";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlFor } from "@/sanity/client"; // Ensure this path is correct based on your setup

const components = {
  // 1. Types (Images, Code Blocks)
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "400px", // Certificate/Image ki height
            margin: "2.5rem 0",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <Image
            src={urlFor(value).url()}
            alt="Content Image"
            fill
            style={{ objectFit: "contain", backgroundColor: "#0f172a" }} // contain taaki certificate kate nahi
          />
        </div>
      );
    },
    code: ({ value }) => (
      <pre
        style={{
          background: "#0f172a",
          padding: "1.5rem",
          borderRadius: "8px",
          overflowX: "auto",
          border: "1px solid rgba(255,255,255,0.1)",
          margin: "2rem 0",
        }}
      >
        <code
          style={{
            color: "#e2e8f0",
            fontFamily: "monospace",
            fontSize: "0.95rem",
          }}
        >
          {value.code}
        </code>
      </pre>
    ),
  },

  // 2. Marks (Links, Bold, Italic)
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          target="_blank"
          rel={rel}
          style={{
            color: "#3b82f6", // Bright Blue for Links
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            fontWeight: "500",
          }}
        >
          {children} ↗
        </a>
      );
    },
    strong: ({ children }) => (
      <strong style={{ color: "#ffffff", fontWeight: "600" }}>
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em style={{ color: "#cbd5e1", fontStyle: "italic" }}>{children}</em>
    ),
  },

  // 3. Blocks (Paragraphs, Headings, Quotes)
  block: {
    normal: ({ children }) => (
      <p
        style={{
          color: "#94a3b8",
          fontSize: "1.05rem",
          lineHeight: "1.8",
          marginBottom: "1.5rem",
        }}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: "#ffffff",
          fontSize: "1.75rem",
          fontWeight: "700",
          marginTop: "2.5rem",
          marginBottom: "1rem",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          color: "#f8fafc",
          fontSize: "1.4rem",
          fontWeight: "600",
          marginTop: "2rem",
          marginBottom: "0.8rem",
        }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #3b82f6",
          padding: "1rem 1.5rem",
          color: "#cbd5e1",
          fontStyle: "italic",
          margin: "2rem 0",
          backgroundColor: "rgba(59, 130, 246, 0.05)",
          borderRadius: "0 8px 8px 0",
        }}
      >
        {children}
      </blockquote>
    ),
  },

  // 4. Lists (Bullets and Numbers)
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          color: "#94a3b8",
          paddingLeft: "1.5rem",
          marginBottom: "1.5rem",
          lineHeight: "1.8",
          fontSize: "1.05rem",
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          color: "#94a3b8",
          paddingLeft: "1.5rem",
          marginBottom: "1.5rem",
          lineHeight: "1.8",
          fontSize: "1.05rem",
        }}
      >
        {children}
      </ol>
    ),
  },
};

export default function PortableText({ value }) {
  if (!value) return null;
  return <PortableTextComponent value={value} components={components} />;
}

// import { PortableText as SanityPortableText } from '@portabletext/react';

// const components = {
//   block: {
//     normal: ({ children }) => <p>{children}</p>,
//     h1:     ({ children }) => <h1>{children}</h1>,
//     h2:     ({ children }) => <h2>{children}</h2>,
//     h3:     ({ children }) => <h3>{children}</h3>,
//     h4:     ({ children }) => <h4>{children}</h4>,
//     blockquote: ({ children }) => <blockquote>{children}</blockquote>,
//   },
//   marks: {
//     code:   ({ children }) => <code>{children}</code>,
//     strong: ({ children }) => <strong>{children}</strong>,
//     em:     ({ children }) => <em>{children}</em>,
//     link:   ({ value, children }) => (
//       <a href={value?.href} target="_blank" rel="noopener noreferrer">
//         {children}
//       </a>
//     ),
//   },
//   types: {
//     code: ({ value }) => (
//       <pre>
//         <code>{value.code}</code>
//       </pre>
//     ),
//   },
//   list: {
//     bullet:  ({ children }) => <ul>{children}</ul>,
//     number:  ({ children }) => <ol>{children}</ol>,
//   },
//   listItem: {
//     bullet:  ({ children }) => <li>{children}</li>,
//     number:  ({ children }) => <li>{children}</li>,
//   },
// };

// export default function PortableText({ value }) {
//   return (
//     <div className="prose-dark">
//       <SanityPortableText value={value} components={components} />
//     </div>
//   );
// }
