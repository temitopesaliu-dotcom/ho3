"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Nav from "../../../components/Nav";
import Arch from "../../../components/Arch";
import ProductCard from "../../../components/ProductCard";
import CalendlyBar from "../../../components/CalendlyBar";
import { getCategoryBySlug } from "../../../data/products";
import styles from "../../../pages/CategoryPage.module.css";

export default function CategoryPage() {
  const params = useParams() as Record<string, string>;
  const slug = params.slug ?? "";
  const category = getCategoryBySlug(slug);
  const [activeFilter, setActiveFilter] = useState("All");

  if (!category) {
    return (
      <div className={styles.page}>
        <Nav backLabel="All Categories" backTo="/products" />
        <div className={styles.notFound}>
          <strong>Category not found.</strong>
          <Link href="/products">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const filtered =
    activeFilter === "All"
      ? category.products
      : category.products.filter((p) => p.tag === activeFilter);

  return (
    <div className={styles.page}>
      <Arch position="top-right" />

      <Nav backLabel="All Categories" backTo="/products" />

      {/* Page Header */}
      <header className={styles.pageHeader}>
        <span className={styles.label}>{category.label}</span>
        <h1>{category.title}</h1>
        <p className={styles.subhead}>{category.subhead}</p>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <span className={styles.filterLabel}>Filter:</span>
          {category.filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterTag} ${activeFilter === f ? styles.active : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* Product Grid */}
      <section className={styles.gridWrapper}>
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <strong>No products found</strong>
            <p>Try selecting a different filter above.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </section>

      <CalendlyBar />
    </div>
  );
}
