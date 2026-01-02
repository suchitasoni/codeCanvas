import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>Code Canvas</div>
          <p className={styles.tagline}>
            JavaScript • React • Internals
          </p>
        </div>

        {/* Links */}
        <nav className={styles.links}>
          <a
            href="https://www.youtube.com/@JSpresso1"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span>Built for curious developers.</span>
        <span>© {new Date().getFullYear()} Code Canvas</span>
      </div>
    </footer>
  );
}
