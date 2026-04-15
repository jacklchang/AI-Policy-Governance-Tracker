// status keys map to BILL_STATUS below
export const BILL_STATUS = {
  inforce:   { label: "In force",        bg: "#d4edda", text: "#155724", border: "#b5d9bf" },
  signed:    { label: "Signed into law", bg: "#d4edda", text: "#155724", border: "#b5d9bf" },
  passed:    { label: "Passed chamber",  bg: "#E6F1FB", text: "#0C447C", border: "#B5D4F4" },
  committee: { label: "In committee",    bg: "#fff3cd", text: "#7a5800", border: "#fde896" },
  pending:   { label: "Pending",         bg: "#EEEDFE", text: "#3C3489", border: "#CECBF6" },
  stalled:   { label: "Stalled",         bg: "#fde8d8", text: "#7c3310", border: "#f5c6a0" },
};

// highlight: true = "Key bill" badge + blue left border
export const BILLS = [
  {
    id: "eu-ai-act",
    name: "EU AI Act",
    jurisdiction: "EU",
    status: "inforce",
    introduced: "Apr 2021",
    lastAction: "Feb 2025 — prohibitions on unacceptable-risk AI fully applied",
    summary:
      "World's first comprehensive AI law. Classifies AI by risk tier; bans social scoring and real-time biometric surveillance in public spaces; requires conformity assessments for high-risk systems; imposes GPAI model transparency and safety obligations for models above 10²⁵ FLOPs.",
    highlight: true,
    link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
  },
  {
    id: "take-it-down",
    name: "TAKE IT DOWN Act",
    jurisdiction: "US",
    status: "signed",
    introduced: "Jan 2025",
    lastAction: "Apr 2025 — signed by President Trump",
    summary:
      "Criminalizes non-consensual publication of intimate images, including AI-generated deepfakes. Requires platforms to remove flagged content within 48 hours of notice. Passed the Senate 94–0.",
    highlight: false,
    link: "",
  },
  {
    id: "no-fakes",
    name: "NO FAKES Act",
    jurisdiction: "US",
    status: "committee",
    introduced: "Sep 2023",
    lastAction: "Mar 2025 — revised draft reintroduced in Senate Judiciary Committee",
    summary:
      "Creates a federal right to control digital replicas of one's voice and likeness. Would prohibit AI-generated deepfakes of individuals without consent, with carve-outs for news, satire, and commentary.",
    highlight: true,
    link: "",
  },
  {
    id: "us-ai-act",
    name: "American AI Act (discussion draft)",
    jurisdiction: "US",
    status: "pending",
    introduced: "Feb 2025",
    lastAction: "Mar 2025 — circulating in Senate Commerce Committee",
    summary:
      "Proposed federal framework establishing AI risk tiers, transparency requirements, and an AI Safety Board. Would preempt conflicting state laws. Lacks bipartisan consensus needed to advance.",
    highlight: true,
    link: "",
  },
  {
    id: "create-ai",
    name: "CREATE AI Act",
    jurisdiction: "US",
    status: "signed",
    introduced: "Jun 2023",
    lastAction: "Jan 2025 — signed into law",
    summary:
      "Establishes the National AI Research Resource (NAIRR), a shared national infrastructure giving researchers access to compute, data, and tools. Aimed at broadening AI research beyond large technology companies.",
    highlight: false,
    link: "",
  },
  {
    id: "ca-sb-1047",
    name: "SB 1047 (California)",
    jurisdiction: "US",
    status: "stalled",
    introduced: "Feb 2024",
    lastAction: "Sep 2024 — vetoed by Governor Newsom",
    summary:
      "Would have required safety testing and a kill-switch capability for AI models trained above specific compute thresholds. Vetoed after significant industry lobbying, but reshaped the national debate on frontier model governance.",
    highlight: false,
    link: "",
  },
  {
    id: "uk-ai-plan",
    name: "AI Opportunities Action Plan",
    jurisdiction: "UK",
    status: "pending",
    introduced: "Jan 2025",
    lastAction: "Apr 2025 — implementation ongoing; no binding legislation introduced",
    summary:
      "Government plan to position the UK as an AI superpower. Proposes AI Growth Zones, compute investment, and public sector AI adoption targets. Sector-based regulation continues; no omnibus AI bill has been introduced.",
    highlight: false,
    link: "https://www.gov.uk/government/publications/ai-opportunities-action-plan",
  },
  {
    id: "china-genai",
    name: "Generative AI Measures",
    jurisdiction: "China",
    status: "inforce",
    introduced: "Apr 2023",
    lastAction: "Aug 2023 — entered into force",
    summary:
      "Requires providers of public generative AI services to register with the CAC, label AI-generated content, and ensure outputs do not violate core socialist values or national security. The first major national rules specifically targeting generative AI globally.",
    highlight: false,
    link: "",
  },
  {
    id: "eu-liability",
    name: "EU AI Liability Directive",
    jurisdiction: "EU",
    status: "stalled",
    introduced: "Sep 2022",
    lastAction: "Feb 2025 — Commission withdrew original proposal; revised approach under consultation",
    summary:
      "Aimed to ease burden of proof for victims of AI-caused harm via disclosure obligations and a rebuttable presumption of causality. The original draft was withdrawn amid industry pushback; a narrower replacement is being consulted on.",
    highlight: true,
    link: "",
  },
];
