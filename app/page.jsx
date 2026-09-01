import HeroLeft from "@/components/HeroLeft";
import HeroRight from "@/components/HeroRight";
import GitHubGraph from "@/components/GitHubGraph";

export const metadata = {
  title: "Jisu Kumar | MERN Developer | Full Stack Developer",
  description: "MERN Developer, Full Stack Developer and Problem Solver.",
};

export default function HomePage() {
  return (
    <>
      <section id="home" className="home-section">
        {/* Ye div sirf alignment ke liye hai (taki graph ke barabar aaye) */}
        <div className="section-inner">
          {/* Ye div aapke HeroLeft aur HeroRight ko side-by-side rakhega (jaise pehle tha) */}
          <div
            className="home-inner"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap", // Mobile me responsive rakhne ke liye
              gap: "8rem",
            }}
          >
            <HeroLeft />
            <HeroRight />
          </div>
        </div>
      </section>

      {/* GitHub Contribution Graph */}
      <section className="contribution-section">
        <div className="section-inner">
          <div className="fade-in-up">
            <GitHubGraph />
          </div>
        </div>
      </section>
    </>
  );
}
