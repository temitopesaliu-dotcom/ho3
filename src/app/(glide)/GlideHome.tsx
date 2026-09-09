"use client";

import { useEffect } from "react";
import Link from "next/link";

const TICKER_ITEMS = [
  "Inboxes",
  "Follow-ups",
  "Scheduling",
  "Onboarding",
  "Invoicing",
  "Reminders",
  "Reporting",
  "Data entry",
  "Quote chasing",
  "FAQ answering",
];

const DRAINS = [
  {
    hours: "5 hrs",
    activity: "Answering the same questions",
    pain: "From clients, leads, and your own team. The answer exists, but it lives in your head, so every question routes through you.",
    fix: "We centralize your brain into an automated, AI-powered knowledge base.",
  },
  {
    hours: "3 hrs",
    activity: "Chasing and being chased",
    pain: "Follow-ups, reminders, scheduling ping-pong, and unpaid invoices. Work that happens entirely between two calendars that refuse to talk.",
    fix: "Autonomous scheduling and automated workflows that close the loop without you.",
  },
  {
    hours: "4 hrs",
    activity: "Moving data between tools",
    pain: "Copying from the form into the CRM, from the CRM into the sheet, from the sheet into the invoice. Human middleware is the most expensive kind.",
    fix: "Seamless, native integrations that move data instantly and flawlessly.",
  },
  {
    hours: "2 hrs",
    activity: "Rebuilding the same documents",
    pain: "Proposals, reports, contracts, and updates rewritten from scratch because the last version is buried deep in a shared drive.",
    fix: "Dynamic, one-click templates that auto-populate your data.",
  },
];

const PATHS = [
  {
    kicker: "Path 1 — Kill one time drain at a time",
    title: "Grab back an afternoon this week.",
    desc: "Pick your single biggest weekly bottleneck. A working system for it already exists — CRMs, content engines, or automated finance dashboards. Browse our vault, see a live demo, and switch it on immediately.",
    points: [
      "Built around how your specific profession actually works",
      "Live video interactive demos — see exactly what you get",
      "No audit, no application, no wait time",
    ],
    cta: "Explore the Product Vault",
    href: "/built-for-you",
    featured: false,
  },
  {
    kicker: "Path 2 — Kill all of them at once",
    title: "Reclaim 55+ hours a month.",
    desc: "A high-impact, 90-minute consulting engagement where we map your entire operation, identify every hidden time drain, rank your highest-ROI AI opportunities, and hand you a complete execution blueprint.",
    points: [
      "Your entire operation mapped visually on one screen",
      "A comprehensive written blueprint delivered within 5 business days",
      "The $1,000 audit fee is 100% credited toward your build if you choose to proceed",
      "No obligation — the blueprint is yours to keep either way",
    ],
    cta: "Apply for a Business Audit",
    href: "/the-blueprint-audit",
    featured: true,
  },
];

const SUPPORT = [
  {
    title: "Continuous Optimization",
    desc: "New custom automations deployed every month.",
  },
  {
    title: "System Maintenance",
    desc: "Regular performance reviews and AI prompt tuning.",
  },
  {
    title: "Quarterly Strategy",
    desc: "Dedicated sessions to proactively eliminate new friction.",
  },
];

const FLOW = [
  {
    title: "Count the Cost",
    desc: "A 90-minute deep-dive session where we lay your entire operation out on the table and calculate exactly what each time drain costs you in real hours.",
    badge: "$1,000 — fully credited if you choose to proceed",
  },
  {
    title: "The Blueprint",
    desc: "Within 5 business days, you receive a written execution plan detailing what gets automated, in what order, with what tools, and your exact projected ROI.",
  },
  {
    title: "Build & Launch",
    desc: "When you give the green light, we implement the blueprint to exact specifications — handling all integrations, automations, dashboards, and team training. The timeline is set with you, around your priorities.",
  },
  {
    title: "Watch the Numbers",
    desc: "We track your reclaimed hours just like revenue. Most operations land at 50+ hours given back to the business every single month.",
  },
];

const FAQS = [
  {
    q: "Do I need the audit to use a product?",
    a: "No. The product vault is completely open. Browse the demos and deploy a single solution whenever you like. The audit is exclusively for business owners who want their entire operation streamlined at once.",
  },
  {
    q: "What exactly happens during the 90-minute audit?",
    a: "We interview you about your current workflows, tool stack, and daily frustrations. We visually map your processes live to find the exact friction points where hours are being dropped.",
  },
  {
    q: "What if I choose not to proceed after the audit?",
    a: "The written operational blueprint is yours to keep. You can use it to build the automations internally, hire another developer, or save it for later.",
  },
  {
    q: "How technical do I need to be?",
    a: "Not at all. We build, test, and deploy everything for you. If your team can use an email inbox, they can use our systems.",
  },
];

const CHIPS = [
  { num: "55+", label: "hours reclaimed per month" },
  { num: "12+", label: "businesses transformed" },
  { num: "100%", label: "audit fee credited" },
];

export default function GlideHome() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    /* Floating nav — deepen shadow on scroll */
    const nav = document.querySelector(".hg-nav");
    const onScroll = () => {
      nav?.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    /* Scroll reveals */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document
      .querySelectorAll(".hg-reveal")
      .forEach((el) => observer.observe(el));
    cleanups.push(() => observer.disconnect());

    /* FAQ accordion — one open at a time */
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".hg-faq-item"),
    );
    const handler = (event: Event) => {
      const btn = event.currentTarget as HTMLElement;
      const item = btn.closest<HTMLElement>(".hg-faq-item");
      if (!item) return;
      const wasOpen = item.classList.contains("is-open");
      items.forEach((el) => el.classList.remove("is-open"));
      if (!wasOpen) item.classList.add("is-open");
    };
    document.querySelectorAll(".hg-faq-q").forEach((btn) => {
      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="glide-root">
      {/* ── Floating pill nav ── */}
      <div className="hg-nav-wrap">
        <nav className="hg-nav" aria-label="Main">
          <Link href="/" className="hg-nav-logo" aria-label="Hello Glide — Home">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1.5" y="1.5" width="25" height="25" rx="8" stroke="#957DAD" strokeWidth="1.6" />
              <path
                d="M7 18c4.5 0 5.5-9 8.5-9s3.5 9 5.5 9"
                stroke="#957DAD"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="hg-nav-logo-word">Hello Glide</span>
          </Link>

          <div className="hg-nav-links">
            <Link href="#drains" className="hg-nav-link">Time Drains</Link>
            <Link href="#paths" className="hg-nav-link">Two Ways</Link>
            <Link href="#process" className="hg-nav-link">Process</Link>
            <Link href="#faq" className="hg-nav-link">FAQ</Link>
          </div>

          <div className="hg-nav-right">
            <Link href="/the-blueprint-audit" className="hg-btn-primary hg-btn-sm">
              Book a Business Audit
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Hero ── */}
      <header className="hg-hero">
        <div className="hg-blob hg-blob-1" aria-hidden="true"></div>
        <div className="hg-blob hg-blob-2" aria-hidden="true"></div>
        <div className="hg-blob hg-blob-3" aria-hidden="true"></div>

        <div className="hg-wrap">
          <div className="hg-hero-inner">
            <div className="hg-hero-eyebrow hg-reveal">
              <span className="hg-eyebrow">
                <span className="hg-eyebrow-dot" aria-hidden="true"></span>
                Your week has a busywork problem
              </span>
            </div>

            <h1 className="hg-display hg-hero-title hg-reveal">
              14 hours a week.
              <br />
              <em>Spent on busywork.</em>
            </h1>

            <p className="hg-hero-lede hg-reveal">
              Not on competition. Not on strategy. You are spending your days
              on manual follow-ups, resends, data re-entry, scheduling
              ping-pong, and answering the exact same eleven questions.
              That&apos;s a part-time employee&apos;s worth of time — spent on
              work a system should have done in the dark.
            </p>

            <div className="hg-hero-ctas hg-reveal">
              <Link href="/the-blueprint-audit" className="hg-btn-primary">
                Book a Business Audit
              </Link>
              <Link href="/built-for-you" className="hg-btn-secondary">
                Or, browse our standalone products
              </Link>
            </div>

            <p className="hg-hero-note hg-reveal">
              90-minute audit · 100% credited toward a build if you choose to proceed · Reviewed within 48 hours
            </p>
          </div>

          <div className="hg-chips hg-reveal">
            {CHIPS.map((chip) => (
              <div className="hg-chip" key={chip.num}>
                <span className="hg-chip-num">{chip.num}</span>
                <span className="hg-chip-label">{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Ticker ── */}
      <div className="hg-ticker" aria-hidden="true">
        <div className="hg-ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="hg-ticker-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── The time drains ── */}
      <section className="hg-drains" id="drains" aria-labelledby="drains-heading">
        <div className="hg-wrap">
          <div className="hg-drains-head hg-reveal">
            <p className="hg-eyebrow" style={{ marginBottom: 20 }}>
              Where the Hours Go
            </p>
            <h2 className="hg-h2" id="drains-heading">
              Nobody chooses this.{" "}
              <em className="hg-display-em">Busywork just happens.</em>
            </h2>
            <p className="hg-drains-sub hg-body">
              Add up the small tasks and they quickly outearn your best hire
              — just in the wrong direction. Here is where those 14 hours
              typically vanish each week.
            </p>
          </div>

          <div className="hg-drains-grid">
            {DRAINS.map((drain) => (
              <div className="hg-drain hg-reveal" key={drain.activity}>
                <div className="hg-drain-top">
                  <span className="hg-drain-hours">{drain.hours}</span>
                  <span className="hg-drain-per">/ week</span>
                </div>
                <h3 className="hg-drain-activity">{drain.activity}</h3>
                <p className="hg-drain-pain">{drain.pain}</p>
                <p className="hg-drain-fix">
                  <span className="hg-drain-fix-label">The fix</span>
                  {drain.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two ways to reclaim ── */}
      <section className="hg-offers" id="paths" aria-labelledby="paths-heading">
        <div className="hg-wrap">
          <div className="hg-offers-head hg-reveal">
            <p className="hg-eyebrow" style={{ marginBottom: 20 }}>
              Two Ways to Reclaim Your Time
            </p>
            <h2 className="hg-h2" id="paths-heading">
              Kill one time drain. <em className="hg-display-em">Or all of them.</em>
            </h2>
          </div>

          <div className="hg-offers-grid hg-offers-grid--two">
            {PATHS.map((path) => (
              <Link
                href={path.href}
                key={path.title}
                className={`hg-offer hg-reveal ${path.featured ? "hg-offer--featured" : "hg-offer--standard"}`}
              >
                <span className="hg-offer-tag">{path.kicker}</span>
                <h3 className="hg-offer-title">{path.title}</h3>
                <p className="hg-offer-desc">{path.desc}</p>
                <ul className="hg-offer-points">
                  {path.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <span className="hg-offer-cta">
                  {path.cta} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── The support plan ── */}
      <section className="hg-support" id="support" aria-labelledby="support-heading">
        <div className="hg-wrap">
          <div className="hg-support-head hg-reveal">
            <p className="hg-eyebrow" style={{ marginBottom: 20 }}>
              The Support Plan
            </p>
            <h2 className="hg-h2" id="support-heading">
              Keep It Reclaimed.{" "}
              <em className="hg-display-em">Time drains never settle back in.</em>
            </h2>
            <p className="hg-body hg-support-sub">
              Businesses evolve, and growth creates new bottlenecks. Our
              ongoing optimization ensures your systems scale alongside your
              revenue.
            </p>
          </div>

          <div className="hg-support-grid">
            {SUPPORT.map((item) => (
              <div className="hg-support-item hg-reveal" key={item.title}>
                <h3 className="hg-support-title">{item.title}</h3>
                <p className="hg-support-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="hg-support-note hg-reveal">
            The Support Plan is an optional add-on at extra cost — quoted separately.
          </p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="hg-flow" id="process" aria-labelledby="process-heading">
        <div className="hg-wrap">
          <div className="hg-flow-head hg-reveal">
            <p className="hg-eyebrow" style={{ marginBottom: 20 }}>
              The Process
            </p>
            <h2 className="hg-h2" id="process-heading">
              Counted. Mapped. <em className="hg-display-em">Sealed.</em>
            </h2>
          </div>

          <div className="hg-flow-grid">
            {FLOW.map((step, i) => (
              <div className="hg-flow-card hg-reveal" key={i}>
                <span className="hg-flow-connector" aria-hidden="true"></span>
                <span className="hg-flow-step">{i + 1}</span>
                <h3 className="hg-flow-title">{step.title}</h3>
                <p className="hg-flow-desc">{step.desc}</p>
                {step.badge && (
                  <span className="hg-flow-badge">{step.badge}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote / pull section ── */}
      <section className="hg-quote" aria-label="Why it matters">
        <div className="hg-quote-blob" aria-hidden="true"></div>
        <div className="hg-wrap">
          <div className="hg-quote-inner hg-reveal">
            <p className="hg-quote-text">
              &ldquo;You didn&apos;t build a business to be its unpaid
              assistant. <em>The hours were always yours — take them back.</em>&rdquo;
            </p>
            <div className="hg-quote-ctas">
              <Link href="/the-blueprint-audit" className="hg-btn-primary">
                Book a Business Audit
              </Link>
              <Link href="/built-for-you" className="hg-btn-secondary">
                Explore the Product Vault
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="hg-faq" id="faq" aria-labelledby="faq-heading">
        <div className="hg-wrap">
          <div className="hg-faq-grid">
            <div className="hg-reveal">
              <p className="hg-eyebrow" style={{ marginBottom: 20 }}>
                Questions
              </p>
              <h2 className="hg-h2" id="faq-heading">
                Fair questions. Straight answers.
              </h2>
            </div>

            <div className="hg-faq-list">
              {FAQS.map((faq, i) => (
                <div className={`hg-faq-item hg-reveal${i === 0 ? " is-open" : ""}`} key={i}>
                  <button type="button" className="hg-faq-q" aria-expanded={i === 0}>
                    {faq.q}
                    <span className="hg-faq-icon" aria-hidden="true">+</span>
                  </button>
                  <div className="hg-faq-a">
                    <div className="hg-faq-a-inner">
                      <p className="hg-faq-a-text">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="hg-final" aria-label="Get started">
        <div className="hg-wrap">
          <div className="hg-final-card hg-reveal">
            <div className="hg-final-inner">
              <h2 className="hg-final-title">
                Next week will lose 14 more hours to busywork.
                <br />
                <em>This one doesn&apos;t have to.</em>
              </h2>
              <p className="hg-final-sub">
                Map every time drain in 90 minutes and get the roadmap to
                reclaim your days — or start with the one system you need
                most and switch it on this week.
              </p>
              <div className="hg-final-ctas">
                <Link href="/the-blueprint-audit" className="hg-btn-primary">
                  Book Your Business Audit
                </Link>
                <Link
                  href="/built-for-you"
                  className="hg-btn-secondary hg-btn-secondary--inverse"
                >
                  Explore the Product Vault
                </Link>
              </div>
              <p className="hg-final-note">
                $1,000 audit · Credited in full if you choose to proceed · Applications reviewed within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="hg-footer">
        <div className="hg-wrap">
          <div className="hg-footer-inner">
            <span className="hg-footer-copy">
              © {new Date().getFullYear()} Hello Glide. All rights reserved.
            </span>
            <span className="hg-footer-brand">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="1.5" y="1.5" width="25" height="25" rx="8" stroke="#957DAD" strokeWidth="1.6" />
                <path
                  d="M7 18c4.5 0 5.5-9 8.5-9s3.5 9 5.5 9"
                  stroke="#957DAD"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              Your hours, returned.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
