import ArrowIcon from "../ArrowIcon/ArrowIcon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h2 className={styles.title}>
          My Take on Inktober 2026:
          <span className={styles.italic}>for Artis Moris</span>
        </h2>
        <div className={styles.intro}>
          <div>
          <p className={styles.introText}>
            Thirty-one days of daily practice in black and white.
          </p>
           <a className={styles.link} href="https://www.instagram.com/p/Ddo582dAD40/?img_index=1" target="_blank" rel="noopener noreferrer" xsclassName={styles.challengePostLink}>
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
