import Link from "next/link";
import Image from "next/image";

let urlFor;
try {
  urlFor = require("@/sanity/client").urlFor;
} catch {
  urlFor = null;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function WinBookCard({ post }) {
  const { title, slug, excerpt, coverImage, publishedAt, tags = [] } = post;

  return (
    <Link href={`/winbook/${slug.current}`} className="winbook-card">
      {/* Cover image */}
      {coverImage && urlFor && coverImage.asset ? (
        <Image
          src={urlFor(coverImage).width(600).height(320).url()}
          alt={title}
          width={600}
          height={180}
          className="winbook-card-image"
        />
      ) : (
        <div
          className="winbook-card-image"
          style={{
            background: "linear-gradient(135deg, #1c1c1f 0%, #27272a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          📖
        </div>
      )}

      <div className="winbook-card-body">
        <h3 className="winbook-card-title">{title}</h3>
        {excerpt && <p className="winbook-card-excerpt">{excerpt}</p>}

        {/* Tags */}
        {tags > 0 && (
          <div className="winbook-card-tags">
            {tags.map((tag) => (
              <span key={tag} className="winbook-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="winbook-card-meta">
          <span>{formatDate(publishedAt)}</span>
          <span style={{ color: "#60a5fa", fontSize: "0.75rem" }}>Read →</span>
        </div>
      </div>
    </Link>
  );
}
