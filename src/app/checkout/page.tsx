import Nav from "../../components/Nav";

export default function CheckoutPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Nav />

      <section
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-4) var(--space-4)",
          position: "relative",
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        {/* Subtle background gradient */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(149,125,173,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Checkout card */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 480,
            background: "var(--bg-1)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-6) var(--space-5)",
            textAlign: "center",
          }}
        >
          {/* Label */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "var(--space-3)",
            }}
          >
Consultation Deposit
          </p>

          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 4,
              marginBottom: "var(--space-2)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 400,
                color: "var(--text-2)",
                lineHeight: 1,
                marginTop: 8,
              }}
            >
              $
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 14vw, 88px)",
                fontWeight: 400,
                lineHeight: 1,
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              500
            </span>
          </div>

          <p
            style={{
              fontSize: 15,
              color: "var(--text-2)",
              lineHeight: 1.5,
              fontWeight: 500,
              maxWidth: 360,
              margin: "0 auto var(--space-3)",
            }}
          >
            Your $500 deposit to get started. We&apos;ll consult with you
            and build a system like the demo you just saw — tailored to your
            business.
          </p>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--border)",
              marginBottom: "var(--space-3)",
            }}
          />

          {/* What happens next — compact */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              marginBottom: "var(--space-3)",
              textAlign: "left",
            }}
          >
            {[
              {
                num: "1",
                title: "Pay the deposit",
                desc: "Secure payment via Stripe.",
              },
              {
                num: "2",
                title: "Book a consultation",
                desc: "Pick a date & time on Calendly.",
              },
              {
                num: "3",
                title: "We consult & build",
                desc: "We design and build your system.",
              },
              {
                num: "4",
                title: "Your system is delivered",
                desc: "A working tool, built for your business.",
              },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    fontSize: 12,
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {step.title}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--text-3)",
                      fontWeight: 500,
                      marginLeft: 6,
                    }}
                  >
                    — {step.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--border)",
              marginBottom: "var(--space-3)",
            }}
          />

          {/* Credit callout */}
          <div
            style={{
              background: "var(--accent-dim)",
              border: "1px solid rgba(149,125,173,0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-2)",
              marginBottom: "var(--space-3)",
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
              textAlign: "left",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              style={{
                width: 20,
                height: 20,
                color: "var(--accent)",
                flexShrink: 0,
              }}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M8 12l3 3 5-5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.4,
              }}
            >
              Your $500 is credited toward your project if you proceed within 30
              days.
            </span>
          </div>

          {/* CTA */}
          <a
            href="#stripe-checkout"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent)",
              color: "var(--black)",
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: "var(--radius)",
              border: "1px solid var(--accent)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.15s ease",
              width: "100%",
              justifyContent: "center",
              letterSpacing: "0.01em",
            }}
          >
            Pay $500 to Get Started
            <span style={{ fontSize: 16 }}>→</span>
          </a>

          <p
            style={{
              fontSize: 12,
              color: "var(--text-3)",
              marginTop: "var(--space-2)",
              fontWeight: 500,
            }}
          >
            Secure payment via Stripe · You&apos;ll book on Calendly right
            after
          </p>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "0.9rem 4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--white)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "rgba(30,30,30,0.4)",
          }}
        >
          © 2026 Built for You. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
