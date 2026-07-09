import Nav from "../../components/Nav";
import s from "./checkout.module.css";

const STRIPE = "https://buy.stripe.com/7sY9AS4WKfbFbfDfBj6J205";

export default function CheckoutPage() {
  return (
    <div className={s.page}>
      <Nav />

      {/* ── Hero ── */}
      <section className={`${s.hero} ${s.wrap}`}>
        <span className={s.eyebrow}>What Comes Next</span>
        <h1>
          You Just Saw What&apos;s Possible.{" "}
          <em>Here&apos;s What It Looks Like For Your Business.</em>
        </h1>
        <p className={s.heroSub}>
          That was a demo. Yours gets built around how your business actually
          runs — not a template, not a one-size-fits-all tool.
        </p>
        <a href={STRIPE} className={s.ctaBtn} target="_blank" rel="noopener noreferrer">
          Get This For Your Business →
        </a>
        <div className={s.heroNote}>
          $500 audit call · credited in full toward your build
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className={s.how}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2>How it works</h2>
            <p>Four steps. No guesswork, no long onboarding.</p>
          </div>
          <div className={s.steps}>
            <div className={s.step}>
              <div className={s.stepNum}>1</div>
              <h3>Pay the audit fee</h3>
              <p>
                $500 locks your session and gets your business properly looked at
                — not a sales call in disguise.
              </p>
            </div>
            <div className={s.step}>
              <div className={s.stepNum}>2</div>
              <h3>Get on the call</h3>
              <p>
                Bring your pain points. No prep deck needed — just what&apos;s
                actually broken day to day.
              </p>
            </div>
            <div className={s.step}>
              <div className={s.stepNum}>3</div>
              <h3>Leave with a working system</h3>
              <p>
                Built around your business, mapped to your exact workflow — not a
                generic tool.
              </p>
            </div>
            <div className={`${s.step} ${s.stepHighlight}`}>
              <div className={s.stepNum}>4</div>
              <h3>Grow revenue, not just save hours</h3>
              <p>
                A system that frees your time to focus on what actually grows the
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Shift ── */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2>The shift</h2>
            <p>Not features. What actually changes.</p>
          </div>
          <div className={s.transformGrid}>
            <div className={`${s.tCard} ${s.tCardBefore}`}>
              <h3>Right now</h3>
              <ul>
                <li>You&apos;re the bottleneck — everything runs through you</li>
                <li>Everything you know lives in your head</li>
                <li>Your tools don&apos;t talk to each other</li>
                <li>Every task needs your attention</li>
                <li>More growth just means more chaos</li>
              </ul>
            </div>
            <div className={`${s.tCard} ${s.tCardAfter}`}>
              <h3>After</h3>
              <ul>
                <li>A connected system handles the repeat stuff</li>
                <li>Your knowledge is documented and accessible</li>
                <li>Your tools work off one source of truth</li>
                <li>Routine decisions get handled without you</li>
                <li>Growth doesn&apos;t cost you more hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof / Stats ── */}
      <section className={s.proof}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2>What clients actually get back</h2>
            <p>Real numbers, not projections.</p>
          </div>
          <div className={s.proofGrid}>
            <div className={s.stat}>
              <span className={s.statNum}>8 hrs</span>
              <span className={s.statLabel}>
                Average weekly time recovered
              </span>
            </div>
            <div className={s.stat}>
              <span className={s.statNum}>72h → 20m</span>
              <span className={s.statLabel}>
                Client onboarding time, before vs. after
              </span>
            </div>
            <div className={s.stat}>
              <span className={s.statNum}>80%</span>
              <span className={s.statLabel}>
                Of support queries resolved without a human
              </span>
            </div>
          </div>
          <div className={s.dollarCallout}>
            <div className={s.dollarBig}>$4,800/mo</div>
            <div>
              <p>
                8 hours a week back, valued at $150/hr — that&apos;s what your
                time is worth freed up from busywork instead of spent
                babysitting your business.
              </p>
              <small>
                Illustrative at $150/hr — adjust to your own rate. Not a
                client-reported revenue figure.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ── Engagement / Pricing ── */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.engagementGrid}`}>
          <div className={s.engagementCopy}>
            <h2>
              This isn&apos;t a sales call. It&apos;s a paid audit of your
              business.
            </h2>
            <p>
              $500 gets your business properly audited — we map exactly where AI
              fits, and you get a written plan either way. Not a pitch. A
              deliverable you keep.
            </p>
            <div className={s.creditBox}>
              <strong>Credited in full.</strong> If you move forward with
              implementation within 30 days, the full $500 comes off your build
              cost. Effectively free, if you proceed.
            </div>
          </div>
          <div className={s.priceCard}>
            <div className={s.priceAmount}>$500</div>
            <div className={s.priceSub}>One-time · credited toward your build</div>
            <ul className={s.priceList}>
              <li>Full business audit</li>
              <li>Written plan, yours to keep</li>
              <li>Exact investment estimate for your build</li>
              <li>Credited 100% if you proceed within 30 days</li>
            </ul>
            <a
              href={STRIPE}
              className={s.ctaBtn}
              style={{ width: "100%", justifyContent: "center" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get This For Your Business
            </a>
          </div>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.investBox}>
            <h2>What it costs to build</h2>
            <p className={s.investNote}>
              No fixed price — every build is scoped to your business.
            </p>
            <div className={s.investRange}>
              <div className={s.investRangeItem}>
                <div className={s.investValue}>$3,500</div>
                <div className={s.investLabel}>Single-system build</div>
              </div>
              <div className={s.investRangeItem}>
                <div className={s.investValue}>$10,000+</div>
                <div className={s.investLabel}>Full operating system</div>
              </div>
            </div>
            <p className={s.investNote}>
              Your audit gives you the exact number before you commit to
              anything.
            </p>
            <div className={s.maintLine}>
              <strong>Monthly maintenance:</strong> optional, not required —
              available if you want ongoing tweaks and improvements.
            </div>
          </div>
        </div>
      </section>

      {/* ── Scarcity Bar ── */}
      <div className={s.scarcityBar}>
        Only <span>4 audit calls</span> open this month — booked on a
        first-come basis.
      </div>

      {/* ── Final CTA ── */}
      <section className={`${s.final} ${s.section}`}>
        <div className={s.wrap}>
          <h2>
            Your business, mapped. Your next 90 days, clear.
          </h2>
          <p>$500 · credited in full if you proceed</p>
          <a
            href={STRIPE}
            className={s.ctaBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get This For Your Business →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={s.footer}>
        © 2026 yourhumanedge with AI. All rights reserved.
      </footer>
    </div>
  );
}
