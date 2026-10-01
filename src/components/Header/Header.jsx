import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        INKTOBER 2026
      </a>
      <nav className={styles.nav}>
        <a className={styles.active} href="#gallery">Gallery</a>
        <a className={styles.link} href="#about">About</a>
      </nav>
      <div className={styles.status}>
        <span className={styles.dot} />
        October 2026
      </div>
    </header>
  );
}
