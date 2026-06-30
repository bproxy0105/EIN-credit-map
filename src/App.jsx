import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "EIN & Entity Setup",
    subtitle: "Week 1–2 · $0–$50",
    color: "#7C3AED",
    icon: "🏛️",
    cost: "$0–$50",
    timeline: "Days 1–14",
    steps: [
      {
        title: "Choose Your Business Structure",
        priority: "CRITICAL",
        cost: "$0",
        details: [
          "LLC is the gold standard for business credit. It separates personal/business liability and looks more credible to lenders.",
          "Single-member LLC: cheapest to form, still effective.",
          "File in your home state unless you have a specific reason to use Wyoming/Delaware (unnecessary complexity at this stage).",
        ],
        action: "Decide: LLC (recommended) or Sole Proprietor (slower credit path)",
        warning: "Sole proprietors CAN build credit but it's slower and lenders take you less seriously."
      },
      {
        title: "Form Your LLC",
        priority: "CRITICAL",
        cost: "$0–$50 (varies by state)",
        details: [
          "CA: $70 | TX: $300 | FL: $125 | NV: $75 | WY: $100",
          "File directly on your Secretary of State website — never pay a third-party service $200+ for this.",
          "Pick a professional business name. Avoid your personal name in the business name.",
          "Use a real business address (not a PO box) for the registered agent.",
        ],
        action: "File Articles of Organization on your state's SOS website",
        tip: "Wyoming LLCs are cheap ($100) and privacy-friendly if you want to operate in multiple states later."
      },
      {
        title: "Get Your EIN (Free — IRS.gov ONLY)",
        priority: "CRITICAL",
        cost: "$0",
        details: [
          "Go to IRS.gov → 'Apply for an EIN Online' — it's completely free.",
          "Takes 10 minutes. You get your EIN immediately.",
          "NEVER pay any website for an EIN. Any site charging you is a scam.",
          "Use your EIN on ALL business accounts — never your SSN after this point.",
          "Save your EIN confirmation letter (CP575). Lenders will ask for it.",
        ],
        action: "Apply at IRS.gov/EIN — print and save your confirmation letter",
        warning: "Do NOT use a third-party EIN service. IRS.gov is the only legitimate source."
      },
      {
        title: "Open a Dedicated Business Checking Account",
        priority: "CRITICAL",
        cost: "$0",
        details: [
          "Chase Business Complete ($0 with $2K balance or $300 signup bonus often available)",
          "Relay (online, $0 fees, great for new businesses)",
          "Mercury (online, $0 fees, no minimum balance)",
          "Bank of America Business (good for future credit relationship)",
          "Never mix personal and business money. Ever. This is the #1 mistake that kills business credit.",
        ],
        action: "Open business checking using your EIN and LLC documents",
        tip: "Chase or Bank of America are best for future lending relationships. Relay/Mercury if you want zero fees."
      },
      {
        title: "Register with Business Credit Bureaus",
        priority: "HIGH",
        cost: "$0",
        details: [
          "Dun & Bradstreet: Get a free DUNS number at dnb.com/duns-number.html (takes 30 days unless you pay to expedite)",
          "Experian Business: Auto-created when vendors report. Monitor free at smallbusiness.experian.com",
          "Equifax Business: Auto-created when accounts are opened",
          "Nav.com: Free account — monitors all 3 business credit bureaus in one place",
        ],
        action: "Apply for DUNS number NOW (it takes 30 days — start immediately)",
        tip: "Nav.com free tier is sufficient to track your progress monthly."
      },
      {
        title: "Build Your Professional Business Presence",
        priority: "HIGH",
        cost: "$0–$20/mo",
        details: [
          "Professional email: Google Workspace ($6/mo) or Zoho Mail (free) — must match your domain",
          "Domain: Namecheap (~$10/yr) matching your LLC name",
          "Basic website: Google Sites (free) or Carrd ($19/yr) — just needs to look legitimate",
          "Business phone: Google Voice (free) — get a local area code number",
          "List on Google Business Profile (free) — this validates your business address",
        ],
        action: "Buy domain, set up email, create 1-page website, activate Google Voice",
        warning: "Lenders Google your business. If nothing comes up, they're skeptical."
      },
    ]
  },
  {
    id: 2,
    title: "Net-30 Vendor Accounts",
    subtitle: "Week 3–6 · Build D&B Paydex",
    color: "#0EA5E9",
    icon: "🏪",
    cost: "$50–$200 total purchases",
    timeline: "Days 15–45",
    steps: [
      {
        title: "Why Net-30 Vendors First",
        priority: "INFO",
        cost: "$0",
        details: [
          "Net-30 vendors give you a credit line and report your payments to D&B (and sometimes Experian/Equifax Business).",
          "Pay early or on time every single time. This builds your Paydex score (D&B's version of a credit score).",
          "Target: 80+ Paydex score before applying for any revolving credit.",
          "You need 3–5 active trade lines reporting to move to the next stage.",
          "Most require NO personal guarantee and NO credit check.",
        ],
        action: "Open 5 net-30 accounts in weeks 3–6",
        tip: "Buy only things you actually need for your business. This is NOT about buying junk."
      },
      {
        title: "Tier 1 Vendors — Open First (No Credit Check)",
        priority: "CRITICAL",
        cost: "$30–$80 in purchases",
        details: [
          "Uline (uline.com): Shipping/office supplies. Reports to D&B. Buy $50+ of supplies you'll actually use.",
          "Grainger (grainger.com): Industrial/safety supplies. Reports to D&B. Great for any physical business.",
          "Quill (quill.com): Office supplies. Reports to D&B & Equifax Business. First order discount available.",
          "Crown Office Supplies: Reports to all 3 bureaus. Low minimum purchase.",
          "Summa Office Supplies: Reports to all 3 bureaus. Easiest approval.",
        ],
        action: "Apply to all 5. Purchase $30–50 at each. Pay NET-30 (before due date)",
        warning: "Apply as your LLC using EIN only. Do not use SSN unless specifically required."
      },
      {
        title: "Tier 1 — Gas & Fuel Cards (No PG)",
        priority: "HIGH",
        cost: "$0 to open",
        details: [
          "Wex Fleet Card: Reports to D&B. For business with vehicles/travel.",
          "Fuelman: Reports to D&B.",
          "Apply only if you have legitimate business fuel expenses — lenders can see utilization.",
        ],
        action: "Apply if you have vehicle-related business expenses",
        tip: "Even a $30 monthly gas purchase paid on time builds strong history."
      },
      {
        title: "Tier 2 — Store Credit (Apply After 2–3 Months History)",
        priority: "MEDIUM",
        cost: "$0 to open",
        details: [
          "Office Depot/OfficeMax Business: Net-30. Reports to D&B.",
          "Staples Business Credit: Net-30. Reports to D&B.",
          "Amazon Business: Net-30 option available. Reports to some bureaus.",
          "Home Depot Commercial: Reports to D&B (useful if you have any contractor/repair business).",
          "Apply AFTER you have 2–3 months of on-time net-30 payment history.",
        ],
        action: "Apply in months 2–3 after initial accounts are reporting",
        warning: "These may pull Experian Business. Having some history first improves approvals."
      },
      {
        title: "Payment Rules — Non-Negotiable",
        priority: "CRITICAL",
        cost: "$0",
        details: [
          "Pay 5–10 days EARLY, not just on time. D&B Paydex rewards early payment.",
          "A Paydex of 80 = paid on time. Paydex of 100 = paid early. Target 80+ minimum.",
          "NEVER miss a payment. One late payment can drop your score 20+ points.",
          "Set calendar reminders for every due date the day you open the account.",
          "Keep utilization under 30% on any revolving accounts you open later.",
        ],
        action: "Set payment reminders immediately when each account opens",
        warning: "Late payment is the #1 thing that destroys business credit. Guard this obsessively."
      },
    ]
  },
  {
    id: 3,
    title: "Business Credit Cards",
    subtitle: "Month 3–4 · $500–$10K+ limits",
    color: "#10B981",
    icon: "💳",
    cost: "$0 to open",
    timeline: "Days 60–120",
    steps: [
      {
        title: "When You're Ready for Business Credit Cards",
        priority: "INFO",
        cost: "$0",
        details: [
          "You need: 3+ months of business operation, active business checking with consistent deposits, 3–5 net-30 accounts with on-time payments, D&B Paydex of 75+, basic website and online presence.",
          "Most starter business cards WILL check personal credit (FICO). You need 680+ personal score ideally.",
          "Some cards do NOT report to personal credit — this is the goal eventually.",
          "Start with cards that have high approval odds before going for premium cards.",
        ],
        action: "Check your D&B Paydex score on Nav.com before applying",
        tip: "Nav.com shows you which cards you're pre-qualified for — use this to avoid hard pulls."
      },
      {
        title: "Best Starter Business Credit Cards",
        priority: "HIGH",
        cost: "$0 annual fee options available",
        details: [
          "Capital One Spark Cash Select ($0 AF, 1.5% cash back, reports to business bureaus, 680+ personal FICO)",
          "Chase Ink Business Unlimited ($0 AF, $750 signup bonus, reports business only, 700+ FICO)",
          "American Express Blue Business Cash ($0 AF, 2% cash back, 680+ FICO)",
          "Bank of America Business Advantage ($0 AF, good if you bank there, reports business bureaus)",
          "Brex (no personal credit check, but requires $50K+ in bank — skip for now)",
        ],
        action: "Apply for 1–2 cards max. Space applications 90+ days apart.",
        warning: "Applying for multiple cards at once tanks your personal credit score. Be strategic."
      },
      {
        title: "Use Cards Strategically — Utilization is Key",
        priority: "CRITICAL",
        cost: "$0",
        details: [
          "Keep utilization under 10% ideally, never above 30% on any card.",
          "Pay in FULL every month. Business credit cards often have high APRs (20–29%).",
          "Use the card for regular business expenses you'd pay anyway: gas, supplies, software subscriptions.",
          "The goal is payment history, not credit limit access for spending.",
          "Request credit limit increases every 6 months with on-time history.",
        ],
        action: "Put 1–3 recurring business expenses on each card. Pay in full monthly.",
        warning: "Carrying a balance at 25% APR destroys any business progress. Pay in full, always."
      },
      {
        title: "Corporate Cards That Don't Require Personal Guarantee",
        priority: "MEDIUM",
        cost: "$0 to apply",
        details: [
          "These require established business revenue — target in months 5–6:",
          "Ramp: Requires 6+ months business history, $25K+ bank balance",
          "Brex: Requires $50K+ in business bank account",
          "Divvy: Flexible credit based on cash balance, good for newer businesses",
          "These report ONLY to business bureaus — zero impact on personal credit.",
        ],
        action: "Bookmark these for month 5–6 when you have revenue and bank history",
        tip: "Ramp and Divvy are the most accessible. Brex requires significant capital."
      },
    ]
  },
  {
    id: 4,
    title: "Business Lines of Credit",
    subtitle: "Month 4–6 · $5K–$150K",
    color: "#F59E0B",
    icon: "🏦",
    cost: "$0 to apply",
    timeline: "Days 90–180",
    steps: [
      {
        title: "Lines of Credit vs. Loans — Know the Difference",
        priority: "INFO",
        cost: "$0",
        details: [
          "Line of Credit: Revolving. Draw what you need, pay back, draw again. Better for flexibility.",
          "Term Loan: Lump sum, fixed payments. Better for specific large purchases.",
          "You want a LOC first — it builds credit utilization history and is more flexible.",
          "Only draw when you have a specific, profitable use for the funds.",
          "Interest only accrues on what you draw, not the total limit.",
        ],
        action: "Understand your options before applying for anything",
        warning: "Business lines are for business purposes. Using for personal expenses is fraud."
      },
      {
        title: "Requirements to Qualify",
        priority: "CRITICAL",
        cost: "$0",
        details: [
          "Time in business: 6–12 months minimum for most lenders (some require 2 years)",
          "Annual revenue: $50K+ for most business LOCs | $100K+ for bank LOCs",
          "Personal credit: 680+ for online lenders | 700+ for banks",
          "Business credit: Active accounts reporting, D&B Paydex 75+",
          "Business checking: 3+ months statements showing consistent deposits",
          "No bankruptcies, tax liens, or major derogatory marks",
        ],
        action: "Build toward these requirements — track your progress monthly",
        tip: "Focus on revenue first. Lenders lend to businesses making money."
      },
      {
        title: "Best LOC Sources (Ranked by Accessibility)",
        priority: "HIGH",
        cost: "$0 to apply",
        details: [
          "1. Bluevine ($5K–$250K, 6 months in business, $10K/mo revenue, reports to business bureaus)",
          "2. Fundbox ($1K–$150K, 3 months in business, $100K annual revenue, fast approval)",
          "3. OnDeck ($6K–$100K, 1 year in business, $100K annual revenue)",
          "4. American Express Business LOC (requires Amex relationship, competitive rates)",
          "5. Your business bank (best rates but strictest requirements — build the relationship)",
        ],
        action: "Start with Bluevine or Fundbox in month 5–6 if revenue qualifies",
        warning: "Avoid MCA (Merchant Cash Advance) lenders. Factor rates of 1.3–1.5 = 40–70% effective APR. Predatory."
      },
      {
        title: "SBA Loans — The Long Game",
        priority: "MEDIUM",
        cost: "$0 to apply",
        details: [
          "SBA 7(a): Up to $5M, best rates available, but requires 2+ years in business",
          "SBA Microloan: Up to $50K, 1 year in business, easier approval",
          "SBA Express: Up to $500K, faster (36 days vs months)",
          "These are NOT fast — plan for 60–90 day application process",
          "Work with a local SBA-preferred lender or SCORE mentor (free)",
        ],
        action: "Apply for SBA Microloan in month 6+ if you have 12 months history",
        tip: "SCORE.org offers free mentoring from retired executives — use them for SBA applications."
      },
      {
        title: "Responsible Leverage Strategy",
        priority: "CRITICAL",
        cost: "$0",
        details: [
          "Only borrow for assets or revenue-generating activities, never for operating expenses.",
          "The return on investment must exceed the cost of capital (your interest rate).",
          "If a LOC costs 15% APR, your use of funds must return more than 15%.",
          "Keep a cash reserve equal to 3 months of debt payments before drawing funds.",
          "Document what every dollar of funding is used for — paper trail matters.",
        ],
        action: "Before drawing any credit line, calculate the expected ROI on how you'll use it",
        warning: "Debt used for passive investing (stocks, crypto) when your business can't service it = financial risk. Build business revenue FIRST."
      },
    ]
  },
  {
    id: 5,
    title: "Leverage into Assets",
    subtitle: "Month 5–6 · Cash-Flowing Assets",
    color: "#EC4899",
    icon: "📈",
    cost: "Funded by business profits/credit",
    timeline: "Days 120–180+",
    steps: [
      {
        title: "Asset Acquisition Framework",
        priority: "INFO",
        cost: "$0",
        details: [
          "Rule: Never use credit to buy a depreciating or speculative asset.",
          "Use credit for assets that generate cash flow GREATER than the debt service.",
          "Start with digital assets — lowest startup cost, highest scalability.",
          "Reinvest 50% of business profits into assets. Pay debt with 30%. Keep 20% as reserves.",
          "Stack assets one at a time. Master one income stream before adding another.",
        ],
        action: "Define your first asset target before you have the capital to buy it",
        tip: "The best asset is one you understand. Don't invest in things you can't manage."
      },
      {
        title: "Digital Assets — Lowest Cost Entry",
        priority: "HIGH",
        cost: "$500–$5,000",
        details: [
          "Local Lead Gen Websites: Build niche sites (plumber in city, roofer in city), rank on Google, rent leads to businesses for $500–$2K/mo per site. Cost: $200–500/site.",
          "Affiliate Websites: Content site monetized via affiliate commissions. Cost: $500–2K. Returns: $500–5K+/mo at scale. Timeline: 6–18 months to meaningful income.",
          "YouTube Automation: Faceless channels with outsourced content. Cost: $1K–3K/mo in production. Revenue: ad revenue + affiliates. Risk: Policy changes.",
          "Digital Product Businesses: Buy or build info products, templates, courses. Low overhead, high margins.",
        ],
        action: "Start with local lead gen or affiliate — lowest risk, fastest cash flow",
        tip: "Flippa.com and Motion Invest sell existing sites with proven revenue. Buy instead of build when possible."
      },
      {
        title: "Service Business Acquisition",
        priority: "MEDIUM",
        cost: "$5K–$50K",
        details: [
          "Buy an existing service business on BizBuySell.com — landscaping, cleaning, pest control routes.",
          "Seller financing is common — owner finances 30–50%, you put down the rest.",
          "Target: 2–3x annual profit as purchase price. $5K/mo profit = $120–180K valuation.",
          "Semi-absentee businesses (owner works 10 hrs/week) are ideal.",
          "Use your business LOC or SBA Microloan for down payment.",
        ],
        action: "Browse BizBuySell.com for listings under $50K in your market",
        warning: "Always verify seller's financials with an accountant before purchasing. Never buy on word alone."
      },
      {
        title: "Equipment Financing",
        priority: "MEDIUM",
        cost: "Equipment as collateral",
        details: [
          "Equipment pays for itself through the revenue it generates — self-collateralizing.",
          "Lenders will finance 80–100% of equipment value.",
          "Examples: Pressure washing truck, food trailer, vending machines, laundry equipment.",
          "Vending route: $2K–5K per machine, $200–600/mo per machine in profit.",
          "Pressure washing: $5K equipment, $500–2K/job revenue.",
          "Equipment financing is available even in year 1 of business.",
        ],
        action: "Research equipment-based businesses in your local market",
        tip: "Vending machines and ATMs are among the most passive equipment-based income streams."
      },
    ]
  },
];

const checklist = [
  { category: "Entity & EIN", items: ["Choose business structure (LLC recommended)", "File Articles of Organization (Secretary of State)", "Obtain EIN from IRS.gov (free)", "Save EIN confirmation letter (CP575)", "Open dedicated business checking account (Chase/Relay/Mercury)"] },
  { category: "Business Credit Profile", items: ["Apply for DUNS number at D&B (free, 30 days)", "Create Nav.com free account", "Register business on Google Business Profile", "Set up professional business email (domain-based)", "Build 1-page business website"] },
  { category: "Net-30 Vendors (Open ASAP)", items: ["Uline — apply and purchase $50+ in supplies", "Quill — apply and purchase $30+ in office supplies", "Crown Office Supplies — apply and purchase", "Summa Office Supplies — apply and purchase", "Grainger — apply if applicable to your business"] },
  { category: "Business Credit Cards (Month 3+)", items: ["Check D&B Paydex (must be 75+)", "Check Nav.com for pre-qualified offers", "Apply for 1 starter business card", "Set up autopay for full statement balance", "Monitor personal credit — keep 680+ FICO"] },
  { category: "Lines of Credit (Month 5+)", items: ["Verify 6 months of business operation", "Document $50K+ annual revenue (bank statements)", "Apply to Bluevine or Fundbox", "Only draw for ROI-positive uses", "Keep 3-month payment reserve before drawing"] },
  { category: "Avoid These Mistakes", items: ["❌ Never use SSN when EIN can be used", "❌ Never mix personal and business money", "❌ Never apply for multiple credit products at once", "❌ Never use MCA (merchant cash advance) lenders", "❌ Never miss a vendor payment — even by 1 day", "❌ Never use credit for consumer/personal purchases", "❌ Never pay a third party for EIN or DUNS numbers"] },
];

const timeline = [
  { month: "Month 1", milestone: "Entity formed, EIN obtained, business bank open, DUNS applied for", credit: "No score yet — building foundation", revenue: "$0–$1,000" },
  { month: "Month 2", milestone: "3–5 net-30 vendors open, first purchases made, payments scheduled", credit: "D&B Paydex: 0–60 (few accounts)", revenue: "$1,000–$3,000" },
  { month: "Month 3", milestone: "Net-30 payments reported, Paydex building, first credit card application", credit: "D&B Paydex: 70–80", revenue: "$2,000–$5,000" },
  { month: "Month 4", milestone: "Business credit card active, building revolving history", credit: "D&B Paydex: 80+, Experian Business active", revenue: "$3,000–$7,000" },
  { month: "Month 5", milestone: "Apply for business LOC (Bluevine/Fundbox), asset research begins", credit: "Strong business credit profile", revenue: "$5,000–$10,000" },
  { month: "Month 6", milestone: "LOC approved, first asset acquisition, multiple income streams starting", credit: "Full credit profile across all 3 bureaus", revenue: "$7,000–$15,000+" },
];

export default function EINSystem() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState({});
  const [activeTab, setActiveTab] = useState("phases");
  const [checkedItems, setCheckedItems] = useState({});

  const toggleStep = (phaseIdx, stepIdx) => {
    const key = `${phaseIdx}-${stepIdx}`;
    setExpandedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCheck = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const priorityColor = (p) => {
    if (p === "CRITICAL") return "#EF4444";
    if (p === "HIGH") return "#F59E0B";
    if (p === "MEDIUM") return "#10B981";
    if (p === "INFO") return "#60A5FA";
    return "#9CA3AF";
  };

  const phase = phases[activePhase];

  return (
    <div style={{ background: "#0A0A0F", minHeight: "100vh", fontFamily: "'Inter', 'Segoe UI', sans-serif", color: "#E2E8F0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a0533 0%, #0d1f3c 100%)", borderBottom: "1px solid #2D1B69", padding: "28px 20px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ background: "#7C3AED", borderRadius: 10, padding: "8px 12px", fontSize: 22 }}>🏗️</div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: "#A78BFA", fontWeight: 700, textTransform: "uppercase" }}>Brandon's Playbook</div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#F1F5F9" }}>EIN + Business Credit System</h1>
            </div>
          </div>
          <p style={{ margin: "8px 0 0", color: "#94A3B8", fontSize: 13 }}>
            Legal · No-BS · Built for Speed → From $0 to leverageable business credit in 6 months
          </p>
        </div>
      </div>

      {/* Nav Tabs */}
      <div style={{ background: "#111118", borderBottom: "1px solid #1E293B", padding: "0 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0 }}>
          {["phases", "checklist", "timeline"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ background: "none", border: "none", borderBottom: activeTab === tab ? "2px solid #7C3AED" : "2px solid transparent", color: activeTab === tab ? "#A78BFA" : "#64748B", padding: "14px 20px", cursor: "pointer", fontSize: 13, fontWeight: 600, textTransform: "capitalize", letterSpacing: 0.5 }}>
              {tab === "phases" ? "📋 Phase Guide" : tab === "checklist" ? "✅ Master Checklist" : "📅 Timeline"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px" }}>

        {/* PHASES TAB */}
        {activeTab === "phases" && (
          <div>
            {/* Phase Selector */}
            <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
              {phases.map((p, i) => (
                <button key={i} onClick={() => setActivePhase(i)}
                  style={{ background: activePhase === i ? p.color : "#1E293B", border: `1px solid ${activePhase === i ? p.color : "#334155"}`, borderRadius: 10, padding: "10px 16px", cursor: "pointer", color: activePhase === i ? "#fff" : "#94A3B8", fontSize: 12, fontWeight: 700, transition: "all 0.2s" }}>
                  {p.icon} Phase {p.id}
                  <div style={{ fontSize: 10, marginTop: 2, fontWeight: 400, opacity: 0.85 }}>{p.title}</div>
                </button>
              ))}
            </div>

            {/* Phase Header */}
            <div style={{ background: `linear-gradient(135deg, ${phase.color}22, #111118)`, border: `1px solid ${phase.color}44`, borderRadius: 16, padding: "20px 24px", marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 28 }}>{phase.icon}</div>
                  <h2 style={{ margin: "8px 0 4px", fontSize: 20, fontWeight: 800, color: "#F1F5F9" }}>Phase {phase.id}: {phase.title}</h2>
                  <div style={{ color: "#94A3B8", fontSize: 13 }}>{phase.subtitle}</div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                    <div style={{ fontSize: 10, color: "#64748B", marginBottom: 2 }}>COST</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#10B981" }}>{phase.cost}</div>
                  </div>
                  <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                    <div style={{ fontSize: 10, color: "#64748B", marginBottom: 2 }}>TIMELINE</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#A78BFA" }}>{phase.timeline}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {phase.steps.map((step, si) => {
                const key = `${activePhase}-${si}`;
                const expanded = expandedSteps[key];
                return (
                  <div key={si} style={{ background: "#111118", border: `1px solid ${expanded ? phase.color + "55" : "#1E293B"}`, borderRadius: 12, overflow: "hidden", transition: "all 0.2s" }}>
                    <div onClick={() => toggleStep(activePhase, si)}
                      style={{ padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                        <div style={{ background: priorityColor(step.priority) + "22", border: `1px solid ${priorityColor(step.priority)}44`, borderRadius: 6, padding: "3px 8px", fontSize: 9, fontWeight: 800, color: priorityColor(step.priority), whiteSpace: "nowrap", letterSpacing: 1 }}>
                          {step.priority}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14, color: "#F1F5F9" }}>{step.title}</div>
                          <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>Cost: {step.cost}</div>
                        </div>
                      </div>
                      <div style={{ color: "#475569", fontSize: 18, flexShrink: 0 }}>{expanded ? "▲" : "▼"}</div>
                    </div>

                    {expanded && (
                      <div style={{ padding: "0 20px 20px", borderTop: "1px solid #1E293B" }}>
                        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                          {step.details.map((d, di) => (
                            <div key={di} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                              <div style={{ color: phase.color, marginTop: 2, flexShrink: 0 }}>•</div>
                              <div style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.6 }}>{d}</div>
                            </div>
                          ))}
                        </div>

                        {/* Action Box */}
                        <div style={{ background: "#0D1F3C", border: "1px solid #1E40AF55", borderRadius: 10, padding: "12px 16px", marginTop: 16 }}>
                          <div style={{ fontSize: 10, color: "#60A5FA", fontWeight: 800, letterSpacing: 1, marginBottom: 6 }}>▶ ACTION ITEM</div>
                          <div style={{ fontSize: 13, color: "#BFDBFE", fontWeight: 500 }}>{step.action}</div>
                        </div>

                        {step.tip && (
                          <div style={{ background: "#0A2E1A", border: "1px solid #14532D55", borderRadius: 10, padding: "12px 16px", marginTop: 10 }}>
                            <div style={{ fontSize: 10, color: "#4ADE80", fontWeight: 800, letterSpacing: 1, marginBottom: 4 }}>💡 PRO TIP</div>
                            <div style={{ fontSize: 13, color: "#BBF7D0" }}>{step.tip}</div>
                          </div>
                        )}

                        {step.warning && (
                          <div style={{ background: "#2D0A0A", border: "1px solid #7F1D1D55", borderRadius: 10, padding: "12px 16px", marginTop: 10 }}>
                            <div style={{ fontSize: 10, color: "#F87171", fontWeight: 800, letterSpacing: 1, marginBottom: 4 }}>⚠️ WARNING</div>
                            <div style={{ fontSize: 13, color: "#FECACA" }}>{step.warning}</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Phase Nav */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
              <button onClick={() => setActivePhase(p => Math.max(0, p - 1))} disabled={activePhase === 0}
                style={{ background: activePhase === 0 ? "#1E293B" : "#334155", border: "none", borderRadius: 10, padding: "12px 20px", color: activePhase === 0 ? "#475569" : "#E2E8F0", cursor: activePhase === 0 ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 600 }}>
                ← Previous Phase
              </button>
              <button onClick={() => setActivePhase(p => Math.min(phases.length - 1, p + 1))} disabled={activePhase === phases.length - 1}
                style={{ background: activePhase === phases.length - 1 ? "#1E293B" : phase.color, border: "none", borderRadius: 10, padding: "12px 20px", color: activePhase === phases.length - 1 ? "#475569" : "#fff", cursor: activePhase === phases.length - 1 ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 600 }}>
                Next Phase →
              </button>
            </div>
          </div>
        )}

        {/* CHECKLIST TAB */}
        {activeTab === "checklist" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "#0D1F3C", border: "1px solid #1E40AF44", borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontSize: 13, color: "#93C5FD" }}>
                ✅ Track your progress below. Check items off as you complete them. This is your full roadmap from $0 to leverageable business credit.
              </div>
            </div>
            {checklist.map((cat, ci) => {
              const completed = cat.items.filter((_, ii) => checkedItems[`${ci}-${ii}`]).length;
              return (
                <div key={ci} style={{ background: "#111118", border: "1px solid #1E293B", borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", background: "#0F172A", borderBottom: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#F1F5F9" }}>{cat.category}</div>
                    <div style={{ fontSize: 12, color: completed === cat.items.length ? "#4ADE80" : "#64748B", fontWeight: 600 }}>
                      {completed}/{cat.items.length} complete
                    </div>
                  </div>
                  <div style={{ padding: "12px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {cat.items.map((item, ii) => {
                      const checked = checkedItems[`${ci}-${ii}`];
                      const isWarning = item.startsWith("❌");
                      return (
                        <div key={ii} onClick={() => !isWarning && toggleCheck(ci, ii)}
                          style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: isWarning ? "default" : "pointer", opacity: isWarning ? 0.85 : 1 }}>
                          {!isWarning && (
                            <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${checked ? "#7C3AED" : "#334155"}`, background: checked ? "#7C3AED" : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
                              {checked && <span style={{ color: "#fff", fontSize: 11 }}>✓</span>}
                            </div>
                          )}
                          <div style={{ fontSize: 13, color: isWarning ? "#FCA5A5" : checked ? "#64748B" : "#CBD5E1", textDecoration: checked ? "line-through" : "none", lineHeight: 1.5 }}>
                            {item}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TIMELINE TAB */}
        {activeTab === "timeline" && (
          <div>
            <div style={{ background: "#0A2E1A", border: "1px solid #14532D55", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: "#86EFAC" }}>
                📅 This timeline assumes you execute consistently. Revenue goals are realistic for service businesses, freelancing, or digital products started alongside credit building.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((t, i) => (
                <div key={i} style={{ background: "#111118", border: "1px solid #1E293B", borderRadius: 14, padding: "20px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ background: phases[Math.min(i, phases.length-1)].color, borderRadius: 10, padding: "8px 14px", textAlign: "center", flexShrink: 0, minWidth: 70 }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 700 }}>{t.month.split(" ")[0]}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{t.month.split(" ")[1]}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: "#F1F5F9", fontWeight: 600, marginBottom: 10, lineHeight: 1.5 }}>{t.milestone}</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <div style={{ background: "#0A2E1A", border: "1px solid #14532D44", borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>
                        <span style={{ color: "#64748B" }}>Revenue: </span>
                        <span style={{ color: "#4ADE80", fontWeight: 700 }}>{t.revenue}</span>
                      </div>
                      <div style={{ background: "#1a0533", border: "1px solid #4C1D9544", borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>
                        <span style={{ color: "#64748B" }}>Credit: </span>
                        <span style={{ color: "#A78BFA", fontWeight: 600 }}>{t.credit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{ background: "linear-gradient(135deg, #1a0533, #0d1f3c)", border: "1px solid #4C1D9555", borderRadius: 16, padding: "24px", marginTop: 28, textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>🚀</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#F1F5F9", marginBottom: 8 }}>The Foundation Rule</div>
              <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
                Business credit is a long game played with short-game consistency. Every payment made early, every account opened legitimately, every dollar kept separate — it compounds.
                You're not building credit. <span style={{ color: "#A78BFA", fontWeight: 700 }}>You're building a financial identity</span> that banks and lenders will trust with capital.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
