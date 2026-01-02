import styles from "./GuessOutput.module.css";
import GuessCard from "../../../components/ui/Card.tsx";
import { guessOutputData } from "../../../data/guessOutput";

const CATEGORIES = ["JS Basics", "Async", "Closures", "React"];

export default function GuessOutput() {
  return (
    <div id="guess" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <h2 className={styles.title}>Guess the Output 🤯</h2>
          <p className={styles.subtitle}>
            Most developers get these wrong. Interviews love them.
          </p>
        </header>

        {/* Category Tabs */}
        <div className={styles.tabs}>
          {CATEGORIES.map((category) => (
            <button key={category} className={styles.tab}>
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {/* Skeleton cards for now */}
          {guessOutputData.slice(0,4).map((item) => (
            <GuessCard key={item.id} item={item} />
            ))}
        </div>

        {/* Footer CTA */}
        <div className={styles.footer}>
          <a href="/guess-the-output" className={styles.viewMore}>
            View all questions →
          </a>
        </div>
      </div>
    </div>
  );
}
