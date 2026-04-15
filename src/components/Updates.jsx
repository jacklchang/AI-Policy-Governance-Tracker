import { UPDATES } from "../data/updates.js";
import styles from "./Updates.module.css";

const TYPE_COLORS = {
  "Legislation":   { bg: "#E6F1FB", text: "#0C447C", border: "#B5D4F4" },
  "Regulation":    { bg: "#EEEDFE", text: "#3C3489", border: "#CECBF6" },
  "International": { bg: "#E1F5EE", text: "#085041", border: "#9FE1CB" },
  "Courts":        { bg: "#FAECE7", text: "#712B13", border: "#F5C4B3" },
  "Safety":        { bg: "#f1f0ee", text: "#444",    border: "#ddd"    },
};

export default function Updates() {
  return (
    <div>
      <p className={`mono ${styles.meta}`}>
        {UPDATES.length} developments · Curated as of April 2026
      </p>

      <div className={styles.list}>
        {UPDATES.map((item, i) => {
          const tc = TYPE_COLORS[item.type] || TYPE_COLORS["Safety"];
          return (
            <div key={i} className={`${styles.card} ${item.significance === "High" ? styles.high : ""}`}>
              <div className={styles.badges}>
                <span className="badge" style={{ background: tc.bg, color: tc.text, borderColor: tc.border }}>
                  {item.type}
                </span>
                <span className="badge"
                  style={{ background: "var(--surface-2)", color: "var(--text-3)", borderColor: "var(--border)" }}>
                  {item.jurisdiction}
                </span>
                {item.significance === "High" && (
                  <span className="badge"
                    style={{ background: "#fde8d8", color: "#7c3310", borderColor: "#f5c6a0" }}>
                    High significance
                  </span>
                )}
              </div>

              <p className={styles.headline}>{item.headline}</p>
              <p className={styles.summary}>{item.summary}</p>

              <div className={styles.footer}>
                <span className={`mono ${styles.source}`}>{item.source} · {item.date}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    className={`mono ${styles.link}`}>
                    Read ↗
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
