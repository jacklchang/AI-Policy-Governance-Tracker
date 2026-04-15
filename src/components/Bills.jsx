import { useState } from "react";
import { BILLS, BILL_STATUS } from "../data/bills.js";
import styles from "./Bills.module.css";

const FILTERS = ["All", "EU", "US", "UK", "China"];

export default function Bills() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const visible = filter === "All" ? BILLS : BILLS.filter(b => b.jurisdiction === filter);

  return (
    <div>
      {/* Filter bar */}
      <div className={styles.filterBar}>
        <span className={`mono ${styles.filterLabel}`}>Filter:</span>
        {FILTERS.map(f => (
          <button key={f} className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {visible.map(bill => {
          const bs = BILL_STATUS[bill.status];
          const open = expanded === bill.id;
          return (
            <div key={bill.id}
              className={`${styles.card} ${bill.highlight ? styles.highlight : ""}`}
              onClick={() => setExpanded(open ? null : bill.id)}>
              {/* Top row */}
              <div className={styles.cardHeader}>
                <div className={styles.cardMeta}>
                  <div className={styles.badges}>
                    <span className="badge"
                      style={{ background: bs.bg, color: bs.text, borderColor: bs.border }}>
                      {bs.label}
                    </span>
                    <span className="badge"
                      style={{ background: "var(--surface-2)", color: "var(--text-3)", borderColor: "var(--border)" }}>
                      {bill.jurisdiction}
                    </span>
                    {bill.highlight && (
                      <span className="badge" style={{ background: "#E6F1FB", color: "#0C447C", borderColor: "#B5D4F4" }}>
                        Key bill
                      </span>
                    )}
                  </div>
                  <p className={styles.billName}>{bill.name}</p>
                </div>
                <span className={`mono ${styles.chevron}`}>{open ? "▲" : "▼"}</span>
              </div>

              {/* Expanded */}
              {open && (
                <div className={styles.expanded}>
                  <p className={styles.summary}>{bill.summary}</p>
                  <div className={styles.meta}>
                    <div>
                      <span className={`mono ${styles.metaLabel}`}>Introduced</span>
                      <p className={`mono ${styles.metaVal}`}>{bill.introduced}</p>
                    </div>
                    <div>
                      <span className={`mono ${styles.metaLabel}`}>Latest action</span>
                      <p className={`mono ${styles.metaVal}`}>{bill.lastAction}</p>
                    </div>
                  </div>
                  {bill.link && (
                    <a href={bill.link} target="_blank" rel="noopener noreferrer"
                      className={`mono ${styles.link}`}
                      onClick={e => e.stopPropagation()}>
                      Official text ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className={`mono ${styles.footnote}`}>
        {visible.length} bills shown · Click any bill to expand · Key bills marked in blue
      </p>
    </div>
  );
}
