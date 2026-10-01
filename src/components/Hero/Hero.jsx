import ArrowIcon from "../ArrowIcon/ArrowIcon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.aside}>
        <span className={styles.verticalLabel}>One drawing. Every day.</span>
      </div>
      <div>
        <p className={styles.eyebrow}>Inktober archive — 2026</p>
        <h2 className={styles.title}>
          My Take on Inktober 2026: <br />
          <br />
          <span className={styles.italic}>for Artis Moris</span>
        </h2>
        <div className={styles.intro}>
          <div>
          <p className={styles.introText}>
            Thirty-one days of daily practice in black and white.
          </p>
           <a href="https://www.instagram.com/p/Ddo582dAD40/?img_index=1" className={styles.challengePostLink}>
              Challenge post on instagram
            </a>
          </div>
          <a href="#gallery" className={styles.cta}>
            Explore the archive
            <span className={styles.ctaArrow}><ArrowIcon /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
