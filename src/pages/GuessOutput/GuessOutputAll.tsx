import { useMemo, useState } from "react";
import { guessOutputData } from "../../data/guessOutput.ts";
import type { GuessCategory } from "../../data/guessOutput.ts";
import GuessCard from "../../components/ui/Card.tsx";

import styles from "./GuessOutputAll.module.css";

const CATEGORIES: GuessCategory[] = [
  "JS Basics",
  "Async",
  "Closures",
  "React",
];

const DIFFICULTIES = ["easy", "medium", "hard"] as const;

type Difficulty = (typeof DIFFICULTIES)[number];

export default function GuessOutputAll() {
  const [activeCategory, setActiveCategory] = useState<GuessCategory | "all">(
    "all"
  );
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | "all">(
    "all"
  );

  const filteredData = useMemo(() => {
    return guessOutputData.filter((item) => {
      const categoryMatch =
        activeCategory === "all" || item.category === activeCategory;

      const difficultyMatch =
        activeDifficulty === "all" || item.difficulty === activeDifficulty;

      return categoryMatch && difficultyMatch;
    });
  }, [activeCategory, activeDifficulty]);

  return (
    <div className={styles.page}>
      {/* PAGE HEADER */}
      <header className={styles.header}>
        <h1 className={styles.title}>Guess the Output</h1>
        <p className={styles.subtitle}>
          Train your JavaScript intuition. Don’t run the code — reason about it.
        </p>
      </header>

      {/* FILTERS */}
      <section className={styles.filters}>
        {/* CATEGORY FILTER */}
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Category</span>
          <div className={styles.filterOptions}>
            <button
              className={
                activeCategory === "all" ? styles.active : styles.filterBtn
              }
              onClick={() => setActiveCategory("all")}
            >
              All
            </button>

            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? styles.active
                    : styles.filterBtn
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* DIFFICULTY FILTER */}
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Difficulty</span>
          <div className={styles.filterOptions}>
            <button
              className={
                activeDifficulty === "all" ? styles.active : styles.filterBtn
              }
              onClick={() => setActiveDifficulty("all")}
            >
              All
            </button>

            {DIFFICULTIES.map((level) => (
              <button
                key={level}
                className={
                  activeDifficulty === level
                    ? styles.active
                    : styles.filterBtn
                }
                onClick={() => setActiveDifficulty(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.grid}>
        {filteredData.map((item) => (
          <GuessCard key={item.id} item={item} />
        ))}

        {filteredData.length === 0 && (
          <p className={styles.empty}>
            No questions found for this filter.
          </p>
        )}
      </section>

      {/* OPTIONAL LEARNING FOOTER */}
      <footer className={styles.learning}>
        <h3>Patterns you’ll start noticing</h3>
        <ul>
          <li>Microtasks always run before macrotasks</li>
          <li>`var` hoisting hides bugs — `let` exposes them</li>
          <li>Closures preserve memory, not values</li>
          <li>React batches state updates aggressively</li>
        </ul>
      </footer>
    </div>
  );
}
