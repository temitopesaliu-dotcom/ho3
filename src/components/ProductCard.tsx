import type { Product } from "../data/products";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { title, tag, description, demo, href } = product;
  const destination = href ?? demo ?? "#";

  return (
    <article className={styles.card}>
      {/* Preview — iframe if demo exists, placeholder if not */}
      <a href={destination} className={styles.preview} title={title}>
        {demo ? (
          <iframe
            src={demo}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            title={`Preview of ${title}`}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon} />
            <span>Preview coming soon</span>
          </div>
        )}
      </a>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.tag}>{tag}</span>
          <span className={styles.index}>0{index + 1}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={destination} className={styles.cta}>
          Open Product &rarr;
        </a>
      </div>
    </article>
  );
}
