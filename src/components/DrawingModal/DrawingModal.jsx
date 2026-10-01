import { useEffect } from "react";
import { formatDay } from "../../data/drawings";
import styles from "./DrawingModal.module.css";

export default function DrawingModal({ drawing, onClose }) {
  useEffect(() => {
    const close = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${drawing.prompt} drawing`}
      onClick={onClose}
    >
      <div className={styles.panel} onClick={(event) => event.stopPropagation()}>
        <div className={styles.art}>
          <img className={styles.image} src={drawing.image} alt={`Day ${formatDay(drawing.day)}: ${drawing.prompt}`} />
        </div>
        <div className={styles.details}>
          <button className={styles.close} onClick={onClose}>
            Close ×
          </button>
          <div className={styles.info}>
            <p className={styles.meta}>
              Day {formatDay(drawing.day)} — {drawing.date}
            </p>
            <h3 className={styles.title}>{drawing.prompt}</h3>
            <p className={styles.medium}>
              148 × 210 mm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
