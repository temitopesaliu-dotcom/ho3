import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

interface NavProps {
  backLabel?: string;
  backTo?: string;
}

export default function Nav({ backLabel, backTo }: NavProps) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>Built for You</Link>
      {backTo && backLabel && (
        <Link to={backTo} className={styles.back}>
          &larr; {backLabel}
        </Link>
      )}
    </nav>
  );
}
