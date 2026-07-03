import styles from "./Arch.module.css";

interface ArchProps {
  position?: "top-right" | "bottom-right";
}

export default function Arch({ position = "top-right" }: ArchProps) {
  return <div className={`${styles.arch} ${styles[position.replace("-", "")]}`} aria-hidden="true" />;
}
