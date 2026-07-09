// Blackline Paving — Service Areas Page
'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Waco',
    county:      'McLennan County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest scheduling for asphalt paving, sealcoating, parking lots, striping, pothole repair, and overlays across all of Waco.',
    highlights:  ['Fastest scheduling', 'Free on-site estimates', 'All services available'],
  },
  {
    city:        'Hewitt',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: 'Full asphalt paving coverage for Hewitt homes and businesses. Fast scheduling from our Waco base — typically within the same week.',
    highlights:  ['Same-week estimates', 'Residential & commercial', 'Free quotes'],
  },
  {
    city:        'Woodway',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: "Serving Woodway's residential neighborhoods with the same flat-rate pricing and 2-Year Workmanship on New Pavement as every other area we cover.",
    highlights:  ['Flat-rate pricing', '2-Year Workmanship on New Pavement', 'commercial paving contractor'],
  },
  {
    city:        'McGregor',
    county:      'McLennan County',
    badge:       '',
    description: 'Reliable driveway, patio, and flatwork service for McGregor residents — done right the first time.',
    highlights:  ['Bonded & insured crews', 'Free quotes', 'No pressure'],
  },
  {
    city:        'China Spring',
    county:      'McLennan County',
    badge:       '',
    description: 'Rural and residential asphalt service for the China Spring area. We make the drive — flat-rate pricing applies just the same.',
    highlights:  ['Rural coverage', 'Flat-rate pricing', 'Free quotes'],
  },
  {
    city:        'Bellmead',
    county:      'McLennan County',
    badge:       '',
    description: 'Full asphalt paving coverage for Bellmead homes and small businesses. Same warranty and pricing standards as our Waco base.',
    highlights:  ['Local coverage', 'All service types', 'Free quotes'],
  },
  {
    city:        'Killeen',
    county:      'Bell County',
    badge:       '',
    description: 'Asphalt paving, sealcoating, parking lots, and overlays for Killeen and Fort Cavazos area homes and businesses. Military-friendly scheduling.',
    highlights:  ['Military-friendly', 'Residential & commercial', 'Same-week when available'],
  },
  {
    city:        'Temple',
    county:      'Bell County',
    badge:       '',
    description: 'Full-service asphalt coverage for Temple. Homes, builder sites, and commercial suites served. All service types.',
    highlights:  ['Full service coverage', 'Builder support', 'Commercial & residential'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve Waco and the surrounding Central Texas region — including Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and most communities within about 60 miles of Waco. Call us if you\'re not sure — we probably cover your area.',
  },
  {
    question: 'Is your pricing the same in all service areas?',
    answer: 'Yes — flat-rate pricing applies across every city and community we serve. The price we quote before we start is the price you pay, regardless of your location.',
  },
  {
    question: 'Do you offer free estimates outside of Waco?',
    answer: 'Yes. Free on-site estimates are available across all of our service areas. We\'ll give you an honest timeline when you call — not a vague window.',
  },
  {
    question: 'Do you handle overlay & resurfacing in all areas?',
    answer: 'Yes — pads, sidewalks, and commercial asphalt work are within scope across our coverage areas. Call to discuss your specific project and location.',
  },
  {
    question: 'How soon can you start my project?',
    answer: 'For Waco and immediate surrounding areas, we typically schedule an estimate within a few days. Pave scheduling depends on weather and season — call (254) 880-8080 for current availability.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Central Texas Asphalt — Since 2003
            </div>
            <h1 className={styles.heroTitle}>
              Service Areas
              <span className={styles.heroAccent}>We Come to You.</span>
            </h1>
            <p className={styles.heroSub}>
              From Waco to Temple and Killeen — flat-rate asphalt jobs with commercial paving contractor and a 2-Year Workmanship on New Pavement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.areas}>
        <div className={styles.areasInner}>
          {SERVICE_AREAS.map((area, i) => (
            <motion.article
              key={area.city}
              className={styles.card}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div className={styles.cardTop}>
                <h2 className={styles.city}>{area.city}</h2>
                {area.badge && <span className={styles.badge}>{area.badge}</span>}
              </div>
              <p className={styles.county}>{area.county}</p>
              <p className={styles.desc}>{area.description}</p>
              <ul className={styles.highlights}>
                {area.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <div className={styles.faqWrap}>
        <FAQ cityName="Waco" faq={faq} title="Service Area FAQs" />
      </div>

      <CTABanner
        headline="In Our Service Area? Let's Talk."
        subline="Call (254) 880-8080 for a free on-site estimate anywhere we cover in Central Texas."
        primaryText="Call (254) 880-8080"
        primaryLink="tel:+12548808080"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />
    </main>
  );
}
