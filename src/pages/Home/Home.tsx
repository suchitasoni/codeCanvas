import Hero from "./sections/Hero";
import GuessOutput from "./sections/GuessOutput";
import Roadmap from "./sections/Roadmap";
import BlogPreview from "./sections/BlogPreview";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* GUESS THE OUTPUT */}
      <section id="guess">
        <GuessOutput />
      </section>

      {/* ROADMAP */}
      <section id="roadmap">
        <Roadmap />
      </section>

      {/* BLOG PREVIEW */}
      <section id="blog">
        <BlogPreview />
      </section>
    </>
  );
}
