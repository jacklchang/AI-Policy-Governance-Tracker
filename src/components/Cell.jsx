import { useState } from "react";
import { STATUS } from "../data/scorecard.js";
import styles from "./Cell.module.css";

export default function Cell({ note }) {
  const [hovered, setHovered] = useState(false);
  const s = STATUS[note?.s ?? 0];

  return (
    <td className={styles.td}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className={styles.square} style={{
        background: s.bg,
        border: `0.5px solid ${s.border}`,
        transform: hovered ? "scale(1.18)" : "scale(1)",
      }} />
      {hovered && note && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipHeader}>
            <div className={styles.dot} style={{ background: s.dot }} />
            <span className={`badge ${styles.statusBadge}`}
              style={{ background: s.bg, color: s.text, borderColor: s.border }}>
              {s.label}
            </span>
          </div>
          <p className={styles.tooltipText}>{note.note}</p>
        </div>
      )}
    </td>
  );
}
