import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { formatDay } from "../../data/drawings";
import styles from "./DrawingCard.module.css";

export default function DrawingCard({ drawing, onSelect }) {
  return (
    <button className={styles.card} onClick={() => onSelect(drawing)}>
      <div className={styles.meta}>
        <span>Day {formatDay(drawing.day)}</span>
        <span>{drawing.date}</span>
      </div>
      <div className={styles.art}>
        <img className={styles.image} src={drawing.image} alt={`Day ${formatDay(drawing.day)}: ${drawing.prompt}`} />
      </div>
      <div className={styles.caption}>
        <span className={styles.prompt}>{drawing.prompt}</span>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </button>
  );
}
