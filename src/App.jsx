import { useState } from "react";
import Scorecard from "./components/Scorecard.jsx";
import Bills from "./components/Bills.jsx";
import Updates from "./components/Updates.jsx";
import styles from "./App.module.css";

const TABS = [
  { id: "scorecard", label: "Governance Scorecard" },
  { id: "bills",     label: "Major Bills" },
  { id: "updates",   label: "Latest Updates" },
];

export default function App() {
  const [tab, setTab] = useState("scorecard");

  return (
    <div className="page">
      {/* Header */}
      <header className={styles.header}>
        <p className={`mono ${styles.eyebrow}`}>Research Dashboard</p>
        <h1 className={styles.title}>AI Policy & Governance Tracker</h1>
        <p className={styles.description}>
          How are major jurisdictions governing AI? This tracker scores the EU, US, UK,
          and China across eight governance dimensions — binding law, enforcement, transparency,
          liability, and international coordination — and follows the key legislation shaping
          the global AI policy landscape.
        </p>

        {/* Tabs */}
        <nav className={styles.tabs}>
          {TABS.map(t => (
            <button key={t.id}
              className={tab === t.id ? "active" : ""}
              onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <hr className="divider" />

      {/* Panels */}
      <main>
        {tab === "scorecard" && <Scorecard />}
        {tab === "bills"     && <Bills />}
        {tab === "updates"   && <Updates />}
      </main>

      <footer className={styles.footer}>
        <p className="mono">
          AI Policy & Governance Tracker · Data current as of April 2026 ·{" "}
          <a href="https://ailabwatch.org" target="_blank" rel="noopener noreferrer">
            Inspired by AI Lab Watch
          </a>
        </p>
      </footer>
    </div>
  );
}
