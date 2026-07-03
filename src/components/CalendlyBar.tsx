import styles from "./CalendlyBar.module.css";

interface CalendlyBarProps {
  calendlyUrl?: string;
}

export default function CalendlyBar({ calendlyUrl = "https://calendly.com" }: CalendlyBarProps) {
  return (
    <div className={styles.band}>
      <div className={styles.text}>
        <h2>Want one built for your business?</h2>
        <p>Everything here is a demo. Your version gets built around your exact workflow, audience, and goals.</p>
      </div>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        Book a Call &rarr;
      </a>
    </div>
  );
}
