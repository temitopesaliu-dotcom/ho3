// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DATA — single source of truth
//
// To add a product:    add an object to the `products` array inside a category.
// To remove a product: delete that object.
// To add/remove a demo: set/remove the `demo` field on any product.
//   demo is a path relative to /public  e.g. "/demos/my-product.html"
//   If demo is undefined, the card shows a styled placeholder automatically.
// ─────────────────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  title: string;
  tag: string;          // used for filter matching
  description: string;
  demo?: string;        // optional — path to HTML file in /public/demos/
  href?: string;        // optional — external link to open product
}

export interface Category {
  slug: string;
  label: string;        // nav / breadcrumb label  e.g. "For Coaches"
  title: string;        // page h1
  subhead: string;
  filters: string[];    // first entry should always be "All"
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "coaches",
    label: "For Coaches",
    title: "Built for Coaches",
    subhead:
      "Tools built around client management, session delivery, lead generation, and content — for every type of coaching practice.",
    filters: ["All", "Sales Coach", "Marriage Coach", "Life Coach", "Business Coach", "Fitness Coach"],
    products: [
      {
        id: "coaches-01",
        title: "Content Intelligence System",
        tag: "Sales Coach",
        description:
          "A full CRM-style pipeline to track every prospect from first DM to signed contract. Know your conversion rate at every stage.",
        demo: "/demos/content-intelligence.html",
      },
      {
        id: "coaches-02",
        title: "The Marriage Coach Method",
        tag: "Marriage Coach",
        description:
          "A structured coaching platform for marriage and parenting transformation. Guided frameworks, session notes, and client progress tracking.",
        demo: "/demos/the-marriage-coach.html",
      },
      {
        id: "coaches-04",
        title: "Business Coach Dashboard",
        tag: "Business Coach",
        description:
          "Revenue tracking, client milestones, group cohort management, and launch pipeline — built for coaches who run programs at scale.",
        demo: "/demos/financial_coach.html",
      },
    ],
  },
  {
    slug: "creators",
    label: "For Creators",
    title: "Built for Creators",
    subhead:
      "Content analytics, publishing planners, audience dashboards, and monetisation tools for creators building in public.",
    filters: ["All", "Content Creator", "Video Creator", "Newsletter", "Podcaster", "Course Creator"],
    products: [
      {
        id: "creators-01",
        title: "Content Intelligence System",
        tag: "Content Creator",
        description:
          "Audit your content performance across platforms, identify gaps, and build a data-driven publishing calendar — all in one place.",
        demo: "/demos/content-intelligence.html",
      },
      {
        id: "creators-03",
        title: "Course Revenue Tracker",
        tag: "Course Creator",
        description:
          "Monitor course sales, student progress, refund rates, and cohort health. Know exactly which launch strategy is working.",
        demo: "/demos/financial_coach.html",
      },
    ],
  },
  {
    slug: "professionals",
    label: "For Professionals",
    title: "Built for Professionals",
    subhead:
      "Proposal tools, client reporting, invoicing, and personal brand dashboards — for consultants, freelancers, and advisors who sell expertise.",
    filters: ["All", "Consultant", "Freelancer", "Financial Advisor", "Legal", "HR Professional"],
    products: [
      {
        id: "professionals-02",
        title: "Content Intelligence System",
        tag: "Freelancer",
        description:
          "Auto-generate clean weekly or monthly client reports from your work data. Reduce admin, look more professional, keep clients longer.",
        demo: "/demos/content-intelligence.html",
      },
      {
        id: "professionals-03",
        title: "Finance OS",
        tag: "Financial Advisor",
        description:
          "A personal finance operating system to share with clients — budgeting, goal-setting, net worth tracking, and spending clarity.",
        demo: "/demos/financial_coach.html",
      },
    ],
  },
  {
    slug: "companies",
    label: "For Companies",
    title: "Built for Companies",
    subhead:
      "Lead generation systems, ops dashboards, team analytics, and automated outreach tools — for businesses running at scale.",
    filters: ["All", "Startup", "SME", "Agency", "E-commerce", "SaaS"],
    products: [
      {
        id: "companies-02",
        title: "Content Intelligence System",
        tag: "Agency",
        description:
          "Run content audits and publish performance reports for multiple clients in one workspace — with channel-by-channel analytics.",
        demo: "/demos/content-intelligence.html",
      },
      {
        id: "companies-03",
        title: "Team Finance OS",
        tag: "SME",
        description:
          "Company-wide budget tracking, expense management, and financial forecasting — built for small and mid-size teams.",
        demo: "/demos/financial_coach.html",
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  CATEGORIES.find((c) => c.slug === slug);

// ── Build-time uniqueness guard ──────────────────────────────────────────────
const _allIds = CATEGORIES.flatMap((c) => c.products.map((p) => p.id));
const _dupes = _allIds.filter((id, i) => _allIds.indexOf(id) !== i);
if (_dupes.length > 0) {
  throw new Error(
    `Duplicate product id(s) found in products.ts: ${[...new Set(_dupes)].join(", ")}. Each product id must be globally unique.`,
  );
}
