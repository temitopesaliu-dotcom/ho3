import Link from "next/link";
import styles from "./Nav.module.css";

interface NavProps {
  backLabel?: string;
  backTo?: string;
}

export default function Nav({ backLabel, backTo }: NavProps) {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>Built for You</Link>
      {backTo && backLabel && (
        <Link href={backTo} className={styles.back}>
          &larr; {backLabel}
        </Link>
      )}
    </nav>
  );
}
