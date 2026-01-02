import { useState } from "react";
import type { GuessOutputItem } from "../../data/guessOutput";
import styles from "./Card.module.css";

interface Props {
  item: GuessOutputItem;
}

export default function Card({ item }: Props) {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    console.log("Card clicked");
    setFlipped((prev) => !prev);
  }

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
    >
      <div className={styles.flipCardInner}>
        {/* FRONT */}
        <div className={styles.front} onClick={handleClick}>
            <pre className={styles.code}>{item.code}</pre>
            <p className={styles.hint}>What's the output?</p>
        </div>

        {/* BACK */}
        <div className={styles.back} onClick={handleClick}>
            <div className={styles.output}>
            <strong>Output</strong>
            <pre>{item.output}</pre>
            </div>

            <ul className={styles.explanation}>
            {item.explanation.map((line, index) => (
                <li key={index}>{line}</li>
            ))}
            </ul>

            {item.relatedVideo && (
            <a
                href={item.relatedVideo}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
            >
                Watch explanation →
            </a>
            )}
        </div>
        </div>
    </div>
  );
}