import { useState } from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import DrawingCard from "../DrawingCard/DrawingCard";
import { isComingSoon } from "../../data/drawings";
import styles from "./Gallery.module.css";

const INITIAL_VISIBLE = 6;

export default function Gallery({ drawings, onSelect }) {
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const completed = drawings.filter((drawing) => !isComingSoon(drawing)).length;

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.head}>
        <div>
          <p className={styles.eyebrow}>The collection</p>
        </div>
        <p className={styles.count}>{completed} / 31 drawings</p>
      </div>

      <div className={styles.grid}>
        {drawings.slice(0, visible).map((drawing) => (
          <DrawingCard key={drawing.day} drawing={drawing} onSelect={onSelect} />
        ))}
      </div>

      {visible < drawings.length && (
        <button className={styles.loadMore} onClick={() => setVisible(drawings.length)}>
          Load more drawings <ArrowIcon />
        </button>
      )}
    </section>
  );
}
