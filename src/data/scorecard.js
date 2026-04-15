// Status levels: 3 = Strong, 2 = Partial, 1 = Weak, 0 = None
export const STATUS = {
  3: { label: "Strong",  bg: "#d4edda", text: "#155724", border: "#b5d9bf", dot: "#2d7a45" },
  2: { label: "Partial", bg: "#fff3cd", text: "#7a5800", border: "#fde896", dot: "#b88a00" },
  1: { label: "Weak",    bg: "#fde8d8", text: "#7c3310", border: "#f5c6a0", dot: "#c05010" },
  0: { label: "None",    bg: "#f1f0ee", text: "#6c6c6c", border: "#ddd",    dot: "#aaa"    },
};

export const SCORECARD = [
  {
    section: "Legislation & Regulation",
    rows: [
      {
        id: "binding-law",
        name: "Binding AI legislation",
        description: "Has comprehensive, enacted AI legislation with legal force.",
        notes: {
          eu:    { s: 3, note: "EU AI Act fully in force 2024–2026. World's first comprehensive AI law with risk tiers, prohibitions, and conformity assessments for high-risk systems." },
          us:    { s: 1, note: "No federal AI legislation enacted. Executive orders rescinded in 2025. Numerous bills pending in Congress; states increasingly filling the gap." },
          uk:    { s: 1, note: "Sector-based approach; no omnibus AI law. Pro-innovation stance relying on guidance from existing regulators (FCA, ICO, CMA)." },
          china: { s: 2, note: "Regulations for generative AI (2023), algorithmic recommendations (2022), and deep synthesis (2022). Sector-fragmented rather than comprehensive." },
        },
      },
      {
        id: "enforcement",
        name: "Enforcement body",
        description: "Dedicated regulator or clear enforcement authority for AI.",
        notes: {
          eu:    { s: 3, note: "AI Office established within the European Commission (2024). Member state Market Surveillance Authorities handle national-level enforcement." },
          us:    { s: 1, note: "No dedicated AI regulator. Patchwork of FTC, NIST, and sector agencies. US AISI established under NIST but advisory only." },
          uk:    { s: 2, note: "AI Security Institute (DSIT) covers frontier models. Existing sectoral regulators retain oversight in their own domains." },
          china: { s: 2, note: "CAC enforces generative AI rules. MIIT oversees industrial AI. Overlapping jurisdictions across ministries with no central AI authority." },
        },
      },
      {
        id: "frontier",
        name: "Frontier model rules",
        description: "Specific obligations targeting the most powerful AI systems.",
        notes: {
          eu:    { s: 3, note: "EU AI Act GPAI rules require transparency, copyright compliance, and systemic risk assessments for models above 10²⁵ FLOPs training compute." },
          us:    { s: 1, note: "EO 14110 required safety reports for dual-use frontier models but was rescinded January 2025. No legislative replacement has been enacted." },
          uk:    { s: 2, note: "Voluntary frontier safety commitments from labs; AISI conducts pre-deployment evaluations. No mandatory reporting framework yet enacted." },
          china: { s: 2, note: "Security assessments required before deploying public generative AI services. Providers must register with the Cyberspace Administration of China." },
        },
      },
    ],
  },
  {
    section: "Accountability & Transparency",
    rows: [
      {
        id: "transparency",
        name: "Transparency & disclosure",
        description: "Mandatory disclosure of AI use, capabilities, or training data.",
        notes: {
          eu:    { s: 3, note: "AI Act requires GPAI model documentation, training data summaries, and labeling of AI-generated content. Prohibited opaque emotion recognition in workplaces." },
          us:    { s: 1, note: "Some state laws (CA, CO, TX) require AI disclosure in hiring/HR. No federal disclosure mandate. FTC guidance only, no binding rules." },
          uk:    { s: 1, note: "ICO guidance on AI transparency under UK GDPR. No AI-specific disclosure mandate beyond existing data protection obligations." },
          china: { s: 2, note: "Generative AI Measures require clear labeling of AI-generated content and disclosure of the AI service nature to end users." },
        },
      },
      {
        id: "liability",
        name: "AI liability framework",
        description: "Clear legal liability rules for AI-caused harm.",
        notes: {
          eu:    { s: 2, note: "EU AI Liability Directive proposed to ease burden of proof for victims. Updated Product Liability Directive covers software/AI. Original directive withdrawn Feb 2025." },
          us:    { s: 1, note: "Existing tort law applies on a case-by-case basis. No AI-specific liability statute enacted. Courts still establishing standards." },
          uk:    { s: 1, note: "Existing negligence and product liability law. Law Commission reviewing autonomous systems. No specific AI liability legislation enacted." },
          china: { s: 2, note: "Providers liable for AI-generated content violating laws. Personal Information Protection Law applies. AI civil liability rules still developing." },
        },
      },
    ],
  },
  {
    section: "International Coordination",
    rows: [
      {
        id: "multilateral",
        name: "Multilateral commitments",
        description: "Participation in international AI governance frameworks and treaties.",
        notes: {
          eu:    { s: 3, note: "Council of Europe AI Treaty signatory (2024). Bletchley Declaration. G7 Hiroshima Process. Active in OECD AI Policy Observatory and Global Partnership on AI." },
          us:    { s: 2, note: "Signed Bletchley Declaration. Co-founded AI Safety Institutes network. Selective multilateral disengagement under 2025 administration." },
          uk:    { s: 3, note: "Hosted Bletchley AI Safety Summit (2023), Seoul and Paris Summits. Founded AISI. Council of Europe treaty signatory." },
          china: { s: 1, note: "Signed Bletchley Declaration but limited engagement with Western-led frameworks. Promotes own AI standards via ITU and Shanghai Cooperation Organisation." },
        },
      },
      {
        id: "aisi",
        name: "AI Safety Institute",
        description: "Government body evaluating frontier AI risks and capabilities.",
        notes: {
          eu:    { s: 2, note: "AI Office within the Commission evaluates GPAI models and shares safety evaluation functions with national bodies. No standalone AISI equivalent." },
          us:    { s: 2, note: "US AISI established under NIST (2023). Conducts pre-deployment evaluations. Funding and formal authority uncertain under the current administration." },
          uk:    { s: 3, note: "AISI founded November 2023, the first dedicated government frontier AI safety institute globally. Renamed AI Security Institute in 2024." },
          china: { s: 1, note: "No equivalent independent institute. State-affiliated bodies (e.g. CAICT) conduct some safety research but lack independence." },
        },
      },
    ],
  },
];
