import WinBookCard from "@/components/WinBookCard";
import { getAllWinbookPosts } from "@/sanity/queries";

export const revalidate = 2; // Har 10 second me naya data fetch karega

export const metadata = {
  title: "WinBook | Jisu Kumar",
  description: "Developer notes, wins, and learnings by Jisu Kumar.",
};

export default async function WinBookPage() {
  let posts = [];
  try {
    posts = await getAllWinbookPosts();
  } catch {
    posts = [];
  }

  return (
    <section id="winbook" className="contribution-section">
      <div className="section-inner">
        <div className="section-heading fade-in-up">
          <h2 className="section-title">WinBook</h2>
          <p className="hero-desc" style={{ marginTop: "0.5rem" }}>
            Developer wins, notes, and lessons learned — one post at a time.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="contribution-content fade-in-up">
            <div className="contribution-card">
              <p className="hero-desc">
                WinBook posts will appear here once published in Sanity CMS. Add
                your first post to get started!
              </p>
            </div>
          </div>
        ) : (
          <div
            className="winbook-grid fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {posts.map((post) => (
              <WinBookCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
