import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PortableText from "@/components/PortableText";
import { getWinbookPostBySlug, getAllWinbookPosts } from "@/sanity/queries";

export const revalidate = 2;

let urlFor;
try {
  urlFor = require("@/sanity/client").urlFor;
} catch {
  urlFor = null;
}

export async function generateStaticParams() {
  try {
    const posts = await getAllWinbookPosts();
    return posts.map((p) => ({ slug: p.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const post = await getWinbookPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found | Jisu Kumar" };
    return {
      title: `${post.title} | WinBook | Jisu Kumar`,
      description: post.excerpt || "A post by Jisu Kumar.",
    };
  } catch {
    return { title: "WinBook | Jisu Kumar" };
  }
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function WinBookPostPage({ params }) {
  let post = null;
  try {
    post = await getWinbookPostBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <section className="contribution-section">
      <div className="section-inner" style={{ maxWidth: "768px" }}>
        {/* Back link */}
        <Link
          href="/winbook"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#60a5fa",
            fontSize: "0.875rem",
            textDecoration: "none",
            marginBottom: "2rem",
          }}
        >
          ← Back to WinBook
        </Link>

        {/* Cover image */}
        {post.coverImage && urlFor && post.coverImage.asset && (
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <Image
              src={urlFor(post.coverImage).width(768).height(400).url()}
              alt={post.title}
              width={768}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        )}

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1rem",
            }}
          >
            {post.tags.map((tag) => (
              <span key={tag} className="winbook-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          {post.title}
        </h1>

        {/* Date */}
        <p
          style={{
            fontSize: "0.82rem",
            color: "#71717a",
            marginBottom: "2rem",
          }}
        >
          {formatDate(post.publishedAt)}
        </p>

        {/* Content */}
        <div className="contribution-card">
          {post.content ? (
            <PortableText value={post.content} />
          ) : (
            <p className="hero-desc">No content yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
