import { lazy, Suspense } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const CardSwap = lazy(
  () => import("../../../utils/ReactBitUtil").then((module) => ({ default: module.CardSwapComp }))
);

export const LazyCardSwap = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <CardSwap />
      </Suspense>
    </div>
  );
}


export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT: TEXT */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            JavaScript, explained the way <br />
            interviews expect you to think
          </h1>

          <p className={styles.subtitle}>
            Execution context • Event loop • Closures • React rendering
          </p>

          <div className={styles.actions}>
            Start by exploring the cards.
          </div>
        </div>

        <LazyCardSwap />
      </div>
    </div>
  );
}
