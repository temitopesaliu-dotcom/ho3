import Link from "next/link";
import Arch from "../components/Arch";
import styles from "../pages/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Arch position="bottom-right" />

      {/* Nav */}
      <nav className={styles.nav}>
        <span className={styles.navLogo}>Built for You</span>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <div className={styles.heroLayout}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>AI — Done for You</span>

          <h1>Stop Guessing How to Use AI for Your Business</h1>

          <div className={styles.dividerBar}>
            <div className={styles.line} />
            <span>We built it for you</span>
            <div className={styles.line} />
          </div>

          <p className={styles.subtext}>
            For Businesses, Coaches, Creators,<br />Consultants and Founders
          </p>

          <Link href="/products" className={styles.btnPrimary}>Explore Products</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerCopy}>© 2026 Built for You. All rights reserved.</span>
      </footer>
    </div>
  );
}
