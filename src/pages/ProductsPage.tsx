import { Link } from 'react-router-dom'
import Arch from '../components/Arch'
import CalendlyBar from '../components/CalendlyBar'
import styles from './ProductsPage.module.css'

const categories = [
  {
    slug: 'coaches',
    title: 'For Coaches',
    count: 'Sales · Marriage · Life · Business',
    description:
      'Client management systems, session trackers, lead pipelines, and content tools — built around how coaches actually run their practice.',
  },
  {
    slug: 'creators',
    title: 'For Creators',
    count: 'Content · Video · Newsletter · Podcast',
    description:
      'Content intelligence dashboards, audience analytics, publishing planners, and monetisation tools for creators building in public.',
  },
  {
    slug: 'professionals',
    title: 'For Professionals',
    count: 'Consultants · Freelancers · Advisors',
    description:
      'Proposal generators, client reporting dashboards, invoicing trackers, and personal brand tools — for professionals who sell expertise.',
  },
  {
    slug: 'companies',
    title: 'For Companies',
    count: 'Startups · SMEs · Agencies · Teams',
    description:
      'Lead generation systems, internal ops dashboards, team analytics, and automated outreach tools built for businesses running at scale.',
  },
]

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <Arch position="top-right" />

      {/* Nav */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>Built for You</Link>
      </nav>

      {/* Page Header */}
      <header className={styles.pageHeader}>
        <span className={styles.label}>Our Digital Products</span>
        <h1>Who Are You Building For?</h1>
        <p className={styles.subhead}>Pick your category — explore tools built specifically for how you work.</p>
        <span className={styles.demoNotice}>
          These are example builds. Every product you see is a demo — built to show you what's possible.
        </span>
      </header>

      {/* Grid */}
      <section className={styles.gridWrapper}>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/category/${cat.slug}`} className={styles.catCard}>
              <div className={styles.catCardBody}>
                <h2>{cat.title}</h2>
                <span className={styles.catCount}>{cat.count}</span>
                <p>{cat.description}</p>
                <span className={styles.catCta}>Explore Products →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CalendlyBar />
    </div>
  )
}
