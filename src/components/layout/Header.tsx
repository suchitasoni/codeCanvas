import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          Code Canvas
        </NavLink>

        {/* Navigation */}
        <nav className={styles.nav}>
          <NavLink
            to="/#guess"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Guess the Output
          </NavLink>

          <NavLink
            to="/#roadmap"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Roadmap
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Blog
          </NavLink>

          <a
            href="https://www.youtube.com/@JSpresso1"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            YouTube
          </a>
        </nav>
      </div>
    </header>
  );
}
