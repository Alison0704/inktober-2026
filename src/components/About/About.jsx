import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <p className={styles.label}>About the project and the artist</p>
        <div>
          <p className={styles.body}>
            I'm Annaëlle, born and raised on Mauritius, attempting a quiet commitment to making something, <span className={styles.muted}>every single day.</span>
          </p>
          <p className={styles.body}>
            This project is my take on Inktober 2026, a month-long challenge to create one ink drawing per day. I used this challenge as an opportunity to explore different techniques and styles, and to push myself to create something new every day.
          </p>
          <p className={styles.body}>
            You can find me on <a href="https://www.instagram.com/sketchesbyannaelle/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
