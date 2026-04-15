import { useState } from "react";
import { SCORECARD, STATUS } from "../data/scorecard.js";
import { JURISDICTIONS } from "../data/jurisdictions.js";
import Cell from "./Cell.jsx";
import styles from "./Scorecard.module.css";

export default function Scorecard() {
  const [hoveredRow, setHoveredRow] = useState(null);

  const allRows = SCORECARD.flatMap(s => s.rows);

  return (
    <div>
      {/* Legend */}
      <div className={styles.legend}>
        <span className={`mono ${styles.legendLabel}`}>Hover any cell for details →</span>
        {[3, 2, 1, 0].map(k => {
          const s = STATUS[k];
          return (
            <div key={k} className={styles.legendItem}>
              <div className={styles.legendSwatch}
                style={{ background: s.bg, borderColor: s.border }} />
              <span className={`mono ${styles.legendText}`}>{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <colgroup>
            <col style={{ width: "36%" }} />
            {JURISDICTIONS.map(j => <col key={j.id} style={{ width: "16%" }} />)}
          </colgroup>
          <thead>
            <tr>
              <th className={styles.th}>Dimension</th>
              {JURISDICTIONS.map(j => (
                <th key={j.id} className={`${styles.th} ${styles.thCenter}`}>{j.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCORECARD.map((section, si) => (
              <>
                <tr key={"sec" + si}>
                  <td colSpan={JURISDICTIONS.length + 1} className={styles.sectionLabel}>
                    {section.section}
                  </td>
                </tr>
                {section.rows.map(row => (
                  <tr key={row.id}
                    className={hoveredRow === row.id ? styles.rowHovered : ""}
                    onMouseEnter={() => setHoveredRow(row.id)}
                    onMouseLeave={() => setHoveredRow(null)}>
                    <td className={styles.rowLabel}>
                      <div className={styles.rowName}>{row.name}</div>
                      {hoveredRow === row.id && (
                        <div className={styles.rowDesc}>{row.description}</div>
                      )}
                    </td>
                    {JURISDICTIONS.map(j => (
                      <Cell key={j.id} note={row.notes[j.id]} />
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overall score cards */}
      <div className={styles.scoreGrid}>
        {JURISDICTIONS.map(j => {
          const scores = allRows.map(r => r.notes[j.id]?.s ?? 0);
          const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
          const pct = Math.round((avg / 3) * 100);
          const col = pct >= 60 ? "#2d7a45" : pct >= 35 ? "#b88a00" : "#c05010";
          return (
            <div key={j.id} className={styles.scoreCard}>
              <p className={`mono ${styles.scoreJur}`}>{j.full}</p>
              <p className={`mono ${styles.scoreNum}`} style={{ color: col }}>{pct}%</p>
              <div className={styles.scoreBarBg}>
                <div className={styles.scoreBarFill} style={{ width: `${pct}%`, background: col }} />
              </div>
            </div>
          );
        })}
      </div>

      <p className={`mono ${styles.footnote}`}>
        Overall scores averaged across all 8 dimensions. Reflects published laws, regulations, and commitments as of April 2026.
      </p>
    </div>
  );
}
