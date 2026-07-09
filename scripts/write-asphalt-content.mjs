/**
 * Overwrite trade content with Blackline Paving asphalt copy.
 * Run from asphalt-paving-template root: node scripts/write-asphalt-content.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  console.log('wrote', rel);
};

const BASE = 'https://www.blacklinepaving.com';

// ── WelcomePage ──────────────────────────────────────────────────────────────
w('components/Pages/Home/WelcomePage/WelcomePage.tsx', `'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({ length: 34 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 3.5 + 1, vx: (Math.random() - 0.5) * 0.8,
      vy: Math.random() * 0.35 + 0.12, o: Math.random() * 0.35 + 0.55,
      spin: Math.random() * 0.05 - 0.025, angle: Math.random() * Math.PI * 2,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.save(); ctx.globalAlpha = p.o;
        ctx.translate(p.x, p.y); ctx.rotate(p.angle);
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(-p.r, -p.r * 0.5, p.r * 2, p.r);
        ctx.restore();
        p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

function InstallMeter() {
  const [fill, setFill] = useState(0);
  useEffect(() => { const t = setTimeout(() => setFill(100), 750); return () => clearTimeout(t); }, []);
  return (
    <div className={styles.thermo} aria-hidden="true">
      <div className={styles.thermoColumn}>
        <div className={styles.thermoTube}>
          <motion.div
            className={styles.thermoFill}
            initial={{ height: '0%' }}
            animate={{ height: \`\${fill}%\` }}
            transition={{ duration: 2.0, delay: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
          />
        </div>
        <div className={styles.thermoBulb} />
      </div>
      <div className={styles.thermoLabels}>
        <span className={styles.thermoTop}>Open</span>
        <span className={styles.thermoMid}>Waco, TX</span>
        <span className={styles.thermoBot}>Paved</span>
      </div>
    </div>
  );
}

const CHIPS = ['Free Estimates', 'Flat-Rate Quotes', 'Commercial Paving', '23+ Yrs Local', '2-Yr Warranty'];

export default function WelcomePage() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <ParticleCanvas />
      <div className={styles.shard} aria-hidden="true" />
      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div className={styles.badge}
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className={styles.badgeDot} />
            Waco&apos;s Trusted Asphalt Paving Contractor — Since 2003
          </motion.div>
          <motion.h1 className={styles.headline}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Asphalt. Sealcoat.<br />Striping.<br />
            <span className={styles.accentLine}>Blackline.</span>
          </motion.h1>
          <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}>
            Free on-site estimates. Flat-rate quotes. 2-Year Workmanship on New Pavement.
            Asphalt Paving · Sealcoating · Striping for Central Texas homes and businesses.
          </motion.p>
          <motion.div className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}>
            <a href="tel:+12548808080" className={styles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call (254) 880-8080
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Free Quote
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </motion.div>
          <motion.div className={styles.chips}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}>
            {CHIPS.map(c => (
              <span key={c} className={styles.chip}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {c}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <motion.div className={styles.bgFlake}
            animate={{ rotate: 360 }}
            transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}>
            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="1"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </motion.div>
          <motion.div className={\`\${styles.statCard} \${styles.sc1}\`}
            initial={{ opacity: 0, y: -10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.05, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>800+ Reviews</span>
          </motion.div>
          <motion.div className={\`\${styles.statCard} \${styles.sc2}\`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.25, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.statNum}>5,500+</span>
            <span className={styles.statLabel}>Jobs Done</span>
          </motion.div>
          <InstallMeter />
        </motion.div>
      </div>
    </section>
  );
}
`);

// ── Shared component defaults ────────────────────────────────────────────────
const sharedFixes = [
  ['components/PageComponents/FAQ/FAQ.tsx', /title = '[^']*'/, "title = 'Asphalt Paving FAQs'"],
  ['components/PageComponents/ProcessTimeline/ProcessTimeline.tsx',
    /No runaround\. No hidden charges\. Just fast, professional [^.]+/,
    'No runaround. No hidden charges. Just fast, professional paving service from call to completion'],
  ['components/PageComponents/WhyChooseUs/WhyChooseUs.tsx',
    /There&apos;s no shortage of [^.]+/,
    "There&apos;s no shortage of paving companies in {cityName}. Here&apos;s why homeowners and property managers call us first"],
  ['components/PageComponents/TrustBar/TrustBar.tsx',
    /title: '5-Year Warranty'/, "title: '2-Year Warranty'"],
  ['components/PageComponents/TrustBar/TrustBar.tsx',
    /340\+ verified reviews/, '800+ verified reviews'],
  ['components/PageComponents/TrustBar/TrustBar.tsx',
    /title: 'Free Design Consults'[\s\S]*?sub: 'Samples brought to you'/,
    "title: 'Free On-Site Estimates',\n    sub: 'Measure before we quote'"],
];

for (const [rel, re, rep] of sharedFixes) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) continue;
  let t = fs.readFileSync(p, 'utf8');
  const n = t.replace(re, rep);
  if (n !== t) { fs.writeFileSync(p, n); console.log('patched', rel); }
}

// Guarantee, ValueComparison, ServiceCard defaults, TechStack, forms
const patches = {
  'components/PageComponents/GuaranteeSection/GuaranteeSection.tsx': [
    [/5-Year/g, '2-Year'],
    [/concrete|Concrete/g, (m) => m[0] === 'C' ? 'Asphalt' : 'asphalt'],
    [/pour/gi, 'pave'],
  ],
  'components/PageComponents/ValueComparison/ValueComparison.tsx': [
    [/Flat-rate quote before pour prep/, 'Flat-rate quote before pave day'],
    [/Crew-poured custom concretery/, 'Crew-paved commercial asphalt'],
    [/concretery/gi, 'paving'],
    [/concrete/gi, 'asphalt'],
  ],
  'components/PageComponents/ServiceCardComponent/ServiceCardComponent.tsx': [
    [/From emergency[^.]+/, 'From new asphalt paving to sealcoating and striping, Blackline handles it all — on time, on price'],
    [/concrete|Concrete|pour/gi, (m) => {
      if (/pour/i.test(m)) return m[0] === m[0].toUpperCase() ? 'Pave' : 'pave';
      return m[0] === m[0].toUpperCase() ? 'Asphalt' : 'asphalt';
    }],
  ],
  'components/PageComponents/TechStack/TechStack.tsx': [
    [/NATE Certified/g, 'Commercial Paving'],
    [/concrete|Concrete/g, (m) => m[0] === 'C' ? 'Asphalt' : 'asphalt'],
  ],
  'src/app/globalVariables.scss': [
    [/warm concrete-tinted/, 'slate charcoal-tinted'],
    [/amber\/brown/, 'amber on slate charcoal'],
  ],
  'src/app/api/admin/setup/route.ts': [
    [/arcticairhvac\.com/g, 'blacklinepaving.com'],
    [/Arctic Air HVAC/g, 'Blackline Paving'],
  ],
};

for (const [rel, list] of Object.entries(patches)) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) { console.log('skip missing', rel); continue; }
  let t = fs.readFileSync(p, 'utf8');
  for (const [re, rep] of list) t = t.replace(re, rep);
  fs.writeFileSync(p, t);
  console.log('patched', rel);
}

// ── Service page factory ─────────────────────────────────────────────────────
function serviceLayout(title, slug, desc, keywords) {
  return `import type { Metadata } from 'next';

const BASE = '${BASE}';

export const metadata: Metadata = {
  title: '${title} in Waco, TX | Blackline Paving',
  description: '${desc}',
  keywords: ${JSON.stringify(keywords)},
  alternates: { canonical: \`\${BASE}/services/${slug}\` },
  openGraph: {
    title: '${title} | Blackline Paving — Waco, TX',
    description: '${desc}',
    url: \`\${BASE}/services/${slug}\`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
}

function servicePage(cfg) {
  const { name, slug, fnName, introTitle, introSub, expectTitle, whyTitle, areasTitle, faqTitle, ctaHeadline, formTitle, expect, why, process, metrics, areas, comparison, faq, cross } = cfg;
  return `// Blackline Paving — ${name} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faRoad, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faSprayCan, faParking, faPaintRoller, faWrench, faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

export default function ${fnName}() {
  const expectations = ${JSON.stringify(expect, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1').replace(/"([^"]+)":/g, '$1:')};
  // fix icons after stringify - we'll embed properly below
  return null;
}
`.replace('return null;', '') + `
  const expectations = [
${expect.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} },`).join('\n')}
  ];

  const whyFeatures = [
${why.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} },`).join('\n')}
  ];

  const processSteps = [
${process.map(e => `    { number: ${e.number}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)}, icon: ${e.icon} },`).join('\n')}
  ];

  const metrics = [
${metrics.map(e => `    { icon: ${e.icon}, value: ${e.value}, label: ${JSON.stringify(e.label)}, suffix: ${JSON.stringify(e.suffix)}, duration: ${e.duration} },`).join('\n')}
  ];

  const localAreas = [
${areas.map(e => `    { town: ${JSON.stringify(e.town)}, benefit: ${JSON.stringify(e.benefit)}, badge: ${JSON.stringify(e.badge)} },`).join('\n')}
  ];

  const comparisonRows = [
${comparison.map(e => `    { feature: ${JSON.stringify(e.feature)}, us: ${JSON.stringify(e.us)}, others: ${JSON.stringify(e.others)} },`).join('\n')}
  ];

  const faq = [
${faq.map(e => `    { question: ${JSON.stringify(e.question)}, answer: ${JSON.stringify(e.answer)} },`).join('\n')}
  ];

  const crossServices = [
${cross.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, body: ${JSON.stringify(e.body)}, link: ${JSON.stringify(e.link)} },`).join('\n')}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: ${JSON.stringify(name)} },
      ]} />
      <SectionIntro
        title={${JSON.stringify(introTitle)}}
        subtitle={${JSON.stringify(introSub)}}
      />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={${JSON.stringify(expectTitle)}} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify(whyTitle)}} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={\`services/${slug}\`} title={${JSON.stringify(areasTitle)}} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={${JSON.stringify(faqTitle)}} /></div>
      <CTABanner
        headline={${JSON.stringify(ctaHeadline)}}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={${JSON.stringify(formTitle)}}
          cityName="Waco"
          slug={${JSON.stringify(slug)}}
          spot={\`service-${slug}\`}
          formVariant={4}
        />
      </div>
    </main>
  );
}
`;
}

const commonAreas = [
  { town: 'Waco', benefit: 'Home base — fastest scheduling.', badge: 'Home Base' },
  { town: 'Hewitt', benefit: 'Full residential and commercial coverage.', badge: '' },
  { town: 'Woodway', benefit: 'Regular availability for Woodway jobs.', badge: '' },
  { town: 'Temple', benefit: 'Bell County paving and striping.', badge: '' },
  { town: 'China Spring', benefit: 'Rural coverage, same flat-rate standards.', badge: '' },
  { town: 'Killeen', benefit: 'Killeen and Fort Cavazos area coverage.', badge: '' },
];

const services = [
  {
    name: 'Asphalt Paving', slug: 'asphalt-paving', fnName: 'AsphaltPavingPage',
    introTitle: 'Asphalt Paving in Waco, TX',
    introSub: 'New asphalt and full replacements for driveways, lanes, and pads — proper base prep, hot-mix, and compaction for Central Texas heat. Flat-rate quotes, 2-Year Workmanship on New Pavement.',
    expectTitle: 'What Happens on an Asphalt Paving Project',
    whyTitle: 'Why Homeowners Choose Blackline for Asphalt Paving',
    areasTitle: 'Asphalt Paving Across Central Texas',
    faqTitle: 'Asphalt Paving FAQs',
    ctaHeadline: 'Ready for Asphalt Paving Done Right?',
    formTitle: 'Get a Free Asphalt Paving Estimate',
    expect: [
      { icon: 'faSearch', title: 'On-Site Measure & Base Check', description: 'We measure square footage, check base condition and drainage, and review access before quoting.' },
      { icon: 'faFileContract', title: 'Flat-Rate Written Quote', description: 'Tear-out, base repair, hot-mix, and cleanup are in the number — no surprise change orders mid-job.' },
      { icon: 'faCheckCircle', title: 'Proper Compaction & Thickness', description: 'Thickness matched to traffic loads and compacted for long life in Texas heat.' },
      { icon: 'faShieldHalved', title: '2-Year Workmanship on New Pavement', description: 'Every new pavement job is backed by our 2-year workmanship guarantee.' },
    ],
    why: [
      { icon: 'faClock', title: 'Clear Pave Schedule', description: 'Realistic start windows and traffic-return guidance so you know when you can park again.' },
      { icon: 'faRoad', title: 'Built for Texas Heat', description: 'Mix and compaction practices suited for Central Texas summers — not thin, short-lived patches.' },
      { icon: 'faShieldHalved', title: 'Commercial Paving Contractor · Bonded & Insured', description: 'Bonded and insured crews led by a commercial paving contractor.' },
    ],
    process: [
      { number: 1, title: 'Free Estimate', description: 'We measure, check base and drainage, and recommend thickness and approach.', icon: 'faHeadset' },
      { number: 2, title: 'Quote & Schedule', description: 'Flat-rate quote, then we schedule tear-out, base work, and pave day.', icon: 'faSearch' },
      { number: 3, title: 'Pave Day', description: 'Base prepped, hot-mix placed and rolled to proper density.', icon: 'faFileContract' },
      { number: 4, title: 'Open & Warranty', description: 'Traffic guidance and 2-Year Workmanship on New Pavement.', icon: 'faCheckCircle' },
    ],
    metrics: [
      { icon: 'faTrophy', value: 5500, label: 'Jobs completed in Central Texas', suffix: '+', duration: 3 },
      { icon: 'faChartLine', value: 99, label: 'On-schedule project rate', suffix: '%', duration: 2 },
      { icon: 'faClock', value: 23, label: 'Years paving Waco-area asphalt', suffix: '+', duration: 2 },
    ],
    areas: commonAreas,
    comparison: [
      { feature: 'Proper base repair & compaction', us: '✅ Always', others: '❌ Often skipped' },
      { feature: 'Flat-rate quote (prep + pave + cleanup)', us: '✅ Written', others: '❌ Hourly + extras' },
      { feature: '2-Year Workmanship on New Pavement', us: '✅ Every job', others: '❌ Rare' },
      { feature: 'Commercial paving contractor', us: '✅ All crews', others: '❌ Varies' },
      { feature: 'Clear traffic-return timeline', us: '✅ Standard', others: '❌ Guesswork' },
    ],
    faq: [
      { question: 'How much does asphalt paving cost in Waco?', answer: 'Cost depends on square footage, thickness, base condition, and access. We provide a flat-rate written quote after an on-site measure.' },
      { question: 'How long before I can drive on new asphalt?', answer: 'Passenger cars are often fine once the mix cools — frequently the same day or next morning. Heavy trucks may need longer. We give a specific timeline for your job.' },
      { question: 'Do you remove old asphalt?', answer: 'Yes — demolition, haul-away, and re-pave can be included in one quote.' },
      { question: 'Hot-mix or cold patch?', answer: 'For permanent residential and commercial work we use hot-mix asphalt. Cold patch is for temporary emergency fills only.' },
      { question: 'Do you handle permits?', answer: 'When a permit is required, we coordinate the process and include known permit costs in your quote.' },
      { question: 'What warranty do you offer?', answer: 'New pavement work is backed by our 2-Year Workmanship on New Pavement.' },
    ],
    cross: [
      { icon: 'faSprayCan', title: 'Sealcoating', body: 'Protect new or aging asphalt with a UV-blocking sealcoat.', link: '/services/sealcoating' },
      { icon: 'faParking', title: 'Parking Lots', body: 'Full commercial lot paving and phased rebuilds.', link: '/services/parking-lots' },
      { icon: 'faWrench', title: 'Pothole Repair', body: 'Cut-and-patch repairs that hold through Texas weather.', link: '/services/pothole-repair' },
      { icon: 'faLayerGroup', title: 'Overlay & Resurfacing', body: 'Mill and overlay when the base is still sound.', link: '/services/overlay-resurfacing' },
    ],
    keywords: ['asphalt paving Waco TX', 'asphalt driveway Waco', 'hot mix asphalt Central Texas', 'driveway paving Hewitt', 'asphalt contractor Woodway'],
    desc: 'Asphalt paving and driveway replacement in Waco, TX. Proper base prep, hot-mix asphalt, flat-rate quotes, commercial paving contractor, 2-Year Workmanship on New Pavement.',
  },
  {
    name: 'Sealcoating', slug: 'sealcoating', fnName: 'SealcoatingPage',
    introTitle: 'Sealcoating in Waco, TX',
    introSub: 'Commercial-grade sealcoat that restores color, blocks UV, and extends pavement life for driveways, HOAs, and parking lots.',
    expectTitle: 'What Happens on a Sealcoating Project',
    whyTitle: 'Why Property Owners Choose Blackline for Sealcoating',
    areasTitle: 'Sealcoating Across Central Texas',
    faqTitle: 'Sealcoating FAQs',
    ctaHeadline: 'Ready to Protect Your Asphalt?',
    formTitle: 'Get a Free Sealcoating Estimate',
    expect: [
      { icon: 'faSearch', title: 'Surface Assessment', description: 'We check oxidation, cracks, and oil spots to confirm sealcoat is the right next step.' },
      { icon: 'faFileContract', title: 'Prep Included in Quote', description: 'Cleaning, crack fill recommendations, and traffic control are discussed before we start.' },
      { icon: 'faCheckCircle', title: 'Even, Professional Coat', description: 'Uniform coverage with crisp edges — not a thin spray that fades in one season.' },
      { icon: 'faShieldHalved', title: 'Clear Cure Window', description: 'You know when cars and trucks can return without tracking or damage.' },
    ],
    why: [
      { icon: 'faClock', title: 'Staged for Access', description: 'HOAs and commercial lots get phased work so traffic keeps moving.' },
      { icon: 'faSprayCan', title: 'UV Protection for Texas', description: 'Sealcoat is one of the best defenses against Central Texas sun and oxidation.' },
      { icon: 'faShieldHalved', title: 'Bonded & Insured Crews', description: 'Commercial paving contractor standards on every coat.' },
    ],
    process: [
      { number: 1, title: 'Inspect & Quote', description: 'On-site look at surface condition and crack needs.', icon: 'faHeadset' },
      { number: 2, title: 'Prep', description: 'Clean surface, address major cracks, stage traffic.', icon: 'faSearch' },
      { number: 3, title: 'Apply Sealcoat', description: 'Even application with edge protection.', icon: 'faFileContract' },
      { number: 4, title: 'Open for Traffic', description: 'Cure guidance for cars and heavy loads.', icon: 'faCheckCircle' },
    ],
    metrics: [
      { icon: 'faTrophy', value: 1200, label: 'Sealcoat projects completed', suffix: '+', duration: 3 },
      { icon: 'faChartLine', value: 98, label: 'Customer satisfaction', suffix: '%', duration: 2 },
      { icon: 'faClock', value: 23, label: 'Years local paving experience', suffix: '+', duration: 2 },
    ],
    areas: commonAreas,
    comparison: [
      { feature: 'Surface prep before coat', us: '✅ Standard', others: '❌ Spray and go' },
      { feature: 'Flat-rate written pricing', us: '✅ Always', others: '❌ Vague bids' },
      { feature: 'Traffic staging for HOAs/lots', us: '✅ Planned', others: '❌ Chaos' },
      { feature: 'Honest repair-first advice', us: '✅ Always', others: '❌ Upsell only' },
    ],
    faq: [
      { question: 'How often should I sealcoat in Texas?', answer: 'Many driveways and lots benefit every 2–4 years depending on traffic, sun exposure, and prior condition. We recommend after inspecting the surface.' },
      { question: 'Can you sealcoat over cracks?', answer: 'Hairline cracks can often be filled first. Structural alligator cracking may need patch or overlay first — we will tell you honestly.' },
      { question: 'How long until I can drive on sealcoat?', answer: 'Typically several hours for light traffic; weather and product affect the window. We give a specific open time for your job.' },
      { question: 'Do you sealcoat commercial lots?', answer: 'Yes — retail, medical, HOA, schools, and industrial yards with phased access plans.' },
    ],
    cross: [
      { icon: 'faRoad', title: 'Asphalt Paving', body: 'Full replacement when sealcoat is not enough.', link: '/services/asphalt-paving' },
      { icon: 'faPaintRoller', title: 'Line Striping', body: 'Restripe after sealcoat for a like-new lot.', link: '/services/line-striping' },
      { icon: 'faWrench', title: 'Pothole Repair', body: 'Fix holes before you sealcoat over problems.', link: '/services/pothole-repair' },
      { icon: 'faLayerGroup', title: 'Overlay & Resurfacing', body: 'When the surface needs more than a coat.', link: '/services/overlay-resurfacing' },
    ],
    keywords: ['sealcoating Waco TX', 'asphalt sealcoat Central Texas', 'parking lot sealcoat Waco', 'driveway sealcoating Hewitt'],
    desc: 'Asphalt sealcoating in Waco and Central Texas. Protect driveways and parking lots from UV and oxidation. Flat-rate quotes, bonded & insured.',
  },
  {
    name: 'Parking Lots', slug: 'parking-lots', fnName: 'ParkingLotsPage',
    introTitle: 'Parking Lot Paving in Waco, TX',
    introSub: 'Full parking lot paving, rebuilds, and phased commercial work that keeps tenants open and traffic flowing.',
    expectTitle: 'What Happens on a Parking Lot Project',
    whyTitle: 'Why Property Managers Choose Blackline',
    areasTitle: 'Parking Lots Across Central Texas',
    faqTitle: 'Parking Lot FAQs',
    ctaHeadline: 'Need a Parking Lot Partner?',
    formTitle: 'Get a Free Parking Lot Estimate',
    expect: [
      { icon: 'faSearch', title: 'Lot Assessment', description: 'We evaluate failed areas, drainage, and traffic patterns before recommending rebuild vs. overlay.' },
      { icon: 'faFileContract', title: 'Phased Work Plans', description: 'Keep stores and offices open with staged paving zones and clear communication.' },
      { icon: 'faCheckCircle', title: 'Striping Coordination', description: 'Paving plus layout striping so the lot reopens complete.' },
      { icon: 'faShieldHalved', title: 'COI & Docs Ready', description: 'Insurance certificates and documentation for PMs and GCs on request.' },
    ],
    why: [
      { icon: 'faClock', title: 'Schedule-Driven', description: 'We protect opening dates and tenant access with realistic phasing.' },
      { icon: 'faParking', title: 'Commercial Experience', description: 'Retail, medical, schools, and industrial yards — not just residential driveways.' },
      { icon: 'faShieldHalved', title: 'Bonded & Insured', description: 'Commercial paving contractor with documentation for property managers.' },
    ],
    process: [
      { number: 1, title: 'Site Walk', description: 'Measure, photo, and prioritize failed bays.', icon: 'faHeadset' },
      { number: 2, title: 'Scope & Bid', description: 'Rebuild, overlay, or hybrid plan with flat-rate pricing.', icon: 'faSearch' },
      { number: 3, title: 'Phase & Pave', description: 'Staged construction with traffic control.', icon: 'faFileContract' },
      { number: 4, title: 'Stripe & Closeout', description: 'Layout striping and final walkthrough.', icon: 'faCheckCircle' },
    ],
    metrics: [
      { icon: 'faTrophy', value: 400, label: 'Commercial lot projects', suffix: '+', duration: 3 },
      { icon: 'faChartLine', value: 97, label: 'On-time phase completion', suffix: '%', duration: 2 },
      { icon: 'faClock', value: 23, label: 'Years commercial paving', suffix: '+', duration: 2 },
    ],
    areas: commonAreas,
    comparison: [
      { feature: 'Phased access plans', us: '✅ Standard', others: '❌ Full shutdown' },
      { feature: 'Striping included option', us: '✅ Available', others: '❌ Separate vendor' },
      { feature: 'PM documentation / COI', us: '✅ Fast', others: '❌ Slow' },
      { feature: 'Flat-rate commercial quotes', us: '✅ Written', others: '❌ T&M surprises' },
    ],
    faq: [
      { question: 'Can you pave without closing the whole lot?', answer: 'Usually yes — we phase bays and stages so tenants keep access during most of the project.' },
      { question: 'Do you include striping?', answer: 'Yes — striping can be packaged with paving for a single-vendor closeout.' },
      { question: 'Do you work nights or weekends?', answer: 'When traffic or tenant needs require it, we discuss after-hours options during estimating.' },
      { question: 'What thickness do you recommend?', answer: 'Depends on traffic — passenger cars vs. delivery trucks. We design for expected loads.' },
    ],
    cross: [
      { icon: 'faPaintRoller', title: 'Line Striping', body: 'ADA, fire lanes, and layout striping.', link: '/services/line-striping' },
      { icon: 'faSprayCan', title: 'Sealcoating', body: 'Protect the lot after paving or between rebuilds.', link: '/services/sealcoating' },
      { icon: 'faLayerGroup', title: 'Overlay & Resurfacing', body: 'When full rebuild is not required.', link: '/services/overlay-resurfacing' },
      { icon: 'faWrench', title: 'Pothole Repair', body: 'Stop-gap safety patches between capital projects.', link: '/services/pothole-repair' },
    ],
    keywords: ['parking lot paving Waco', 'commercial asphalt Waco TX', 'parking lot contractor Central Texas'],
    desc: 'Parking lot paving and rebuilds in Waco, TX. Phased commercial asphalt work for retail, medical, and industrial properties. Flat-rate quotes.',
  },
  {
    name: 'Line Striping', slug: 'line-striping', fnName: 'LineStripingPage',
    introTitle: 'Line Striping in Waco, TX',
    introSub: 'ADA stalls, fire lanes, arrows, and full parking lot layouts that keep your property compliant and easy to navigate.',
    expectTitle: 'What Happens on a Striping Project',
    whyTitle: 'Why Businesses Choose Blackline for Striping',
    areasTitle: 'Line Striping Across Central Texas',
    faqTitle: 'Line Striping FAQs',
    ctaHeadline: 'Need Fresh Striping?',
    formTitle: 'Get a Free Striping Estimate',
    expect: [
      { icon: 'faSearch', title: 'Layout Review', description: 'We measure stalls, aisles, and accessible routes before paint hits the asphalt.' },
      { icon: 'faFileContract', title: 'Compliance-Minded Layout', description: 'ADA stalls, fire lanes, and directional markings planned for clarity and code awareness.' },
      { icon: 'faCheckCircle', title: 'Crisp Professional Lines', description: 'Clean edges and durable paint for Central Texas sun and traffic.' },
      { icon: 'faShieldHalved', title: 'Coordinated With Paving', description: 'Striping after sealcoat or overlay so the lot reopens complete.' },
    ],
    why: [
      { icon: 'faPaintRoller', title: 'Full Lot Layouts', description: 'Not just a few stalls — complete restripes with arrows and fire lanes.' },
      { icon: 'faClock', title: 'Fast Turnarounds', description: 'Most restripes complete with minimal business disruption.' },
      { icon: 'faShieldHalved', title: 'Bonded & Insured', description: 'Commercial paving contractor standards on every job.' },
    ],
    process: [
      { number: 1, title: 'Walk the Lot', description: 'Count stalls, note ADA needs, and plan flow.', icon: 'faHeadset' },
      { number: 2, title: 'Layout', description: 'Mark stalls, aisles, and special zones.', icon: 'faSearch' },
      { number: 3, title: 'Paint', description: 'Apply striping, symbols, and legends.', icon: 'faFileContract' },
      { number: 4, title: 'Open', description: 'Clear dry time and reopening plan.', icon: 'faCheckCircle' },
    ],
    metrics: [
      { icon: 'faTrophy', value: 800, label: 'Lots and lots restriped', suffix: '+', duration: 3 },
      { icon: 'faChartLine', value: 99, label: 'On-schedule restripes', suffix: '%', duration: 2 },
      { icon: 'faClock', value: 23, label: 'Years local experience', suffix: '+', duration: 2 },
    ],
    areas: commonAreas,
    comparison: [
      { feature: 'ADA & fire lane attention', us: '✅ Standard', others: '❌ Missed details' },
      { feature: 'Full layout capability', us: '✅ Yes', others: '❌ Stall paint only' },
      { feature: 'Works with paving/sealcoat', us: '✅ One team', others: '❌ Extra vendor' },
    ],
    faq: [
      { question: 'Do you paint ADA stalls?', answer: 'Yes — accessible stalls, access aisles, and related markings as part of a full layout.' },
      { question: 'How long before cars can park?', answer: 'Paint needs dry time based on weather; we typically reopen the same day with clear cones and signage as needed.' },
      { question: 'Can you restripe after sealcoat?', answer: 'Yes — striping after sealcoat is a common package for a like-new lot appearance.' },
      { question: 'Do you do warehouse floor striping?', answer: 'Our focus is exterior asphalt lots and drive surfaces. Ask us about your specific layout needs.' },
    ],
    cross: [
      { icon: 'faParking', title: 'Parking Lots', body: 'Full lot paving with striping closeout.', link: '/services/parking-lots' },
      { icon: 'faSprayCan', title: 'Sealcoating', body: 'Seal then stripe for maximum curb appeal.', link: '/services/sealcoating' },
      { icon: 'faRoad', title: 'Asphalt Paving', body: 'Rebuild failed pavement under faded lines.', link: '/services/asphalt-paving' },
      { icon: 'faLayerGroup', title: 'Overlay & Resurfacing', body: 'Fresh surface, then fresh striping.', link: '/services/overlay-resurfacing' },
    ],
    keywords: ['parking lot striping Waco', 'ADA striping Central Texas', 'line striping contractor Waco TX'],
    desc: 'Parking lot line striping in Waco, TX — ADA stalls, fire lanes, arrows, and full layouts. Flat-rate quotes, bonded & insured.',
  },
  {
    name: 'Pothole Repair', slug: 'pothole-repair', fnName: 'PotholeRepairPage',
    introTitle: 'Pothole Repair in Waco, TX',
    introSub: 'Cut-and-patch asphalt repairs that hold — plus honest advice on when a patch is enough vs. when overlay makes more sense.',
    expectTitle: 'What Happens on a Pothole Repair',
    whyTitle: 'Why Clients Trust Blackline for Patches',
    areasTitle: 'Pothole Repair Across Central Texas',
    faqTitle: 'Pothole Repair FAQs',
    ctaHeadline: 'Need Potholes Fixed Fast?',
    formTitle: 'Get a Free Pothole Repair Estimate',
    expect: [
      { icon: 'faSearch', title: 'Honest Assessment', description: 'We tell you if patches will hold or if base failure needs a larger repair.' },
      { icon: 'faFileContract', title: 'Proper Cut-and-Patch', description: 'Square cuts, clean edges, hot-mix, and compaction — not dump-and-run cold fill.' },
      { icon: 'faCheckCircle', title: 'Safety First', description: 'Entrances, pedestrian paths, and high-traffic bays prioritized.' },
      { icon: 'faShieldHalved', title: 'Path to a Better Fix', description: 'If overlay or rebuild is smarter long-term, we explain the options clearly.' },
    ],
    why: [
      { icon: 'faWrench', title: 'Durable Patches', description: 'Hot-mix cut-and-patch methods built for lasting repairs.' },
      { icon: 'faClock', title: 'Fast Response', description: 'Liability potholes get priority scheduling when capacity allows.' },
      { icon: 'faShieldHalved', title: 'Bonded & Insured', description: 'Commercial paving contractor with PM-ready documentation.' },
    ],
    process: [
      { number: 1, title: 'Locate & Scope', description: 'Map holes and soft spots.', icon: 'faHeadset' },
      { number: 2, title: 'Quote', description: 'Per-patch or area pricing, flat-rate.', icon: 'faSearch' },
      { number: 3, title: 'Cut & Fill', description: 'Remove failed material, place and compact mix.', icon: 'faFileContract' },
      { number: 4, title: 'Open', description: 'Traffic guidance for fresh patches.', icon: 'faCheckCircle' },
    ],
    metrics: [
      { icon: 'faTrophy', value: 3000, label: 'Patches and repairs completed', suffix: '+', duration: 3 },
      { icon: 'faChartLine', value: 98, label: 'Customer satisfaction', suffix: '%', duration: 2 },
      { icon: 'faClock', value: 23, label: 'Years local experience', suffix: '+', duration: 2 },
    ],
    areas: commonAreas,
    comparison: [
      { feature: 'Hot-mix cut-and-patch', us: '✅ Standard', others: '❌ Cold dump' },
      { feature: 'Honest repair vs overlay advice', us: '✅ Always', others: '❌ Patch forever' },
      { feature: 'Flat-rate pricing', us: '✅ Written', others: '❌ Hourly creep' },
    ],
    faq: [
      { question: 'Will a pothole patch last?', answer: 'Proper cut-and-patch with good base support lasts far longer than temporary cold fill. If base is failed under a wide area, overlay may be smarter.' },
      { question: 'Do you do emergency patches?', answer: 'We prioritize safety hazards when capacity allows. Call (254) 880-8080.' },
      { question: 'Can you patch then sealcoat?', answer: 'Yes — patches should cure appropriately before sealcoat. We can package both.' },
      { question: 'Residential and commercial?', answer: 'Both — driveways, HOAs, retail lots, schools, and industrial yards.' },
    ],
    cross: [
      { icon: 'faLayerGroup', title: 'Overlay & Resurfacing', body: 'When patches are chasing the same failures.', link: '/services/overlay-resurfacing' },
      { icon: 'faRoad', title: 'Asphalt Paving', body: 'Full rebuild when the base is gone.', link: '/services/asphalt-paving' },
      { icon: 'faSprayCan', title: 'Sealcoating', body: 'Protect the surrounding pavement after repairs.', link: '/services/sealcoating' },
      { icon: 'faParking', title: 'Parking Lots', body: 'Capital project planning for commercial lots.', link: '/services/parking-lots' },
    ],
    keywords: ['pothole repair Waco TX', 'asphalt patch Central Texas', 'parking lot pothole repair'],
    desc: 'Pothole and asphalt patch repair in Waco, TX. Cut-and-patch hot-mix repairs for driveways and parking lots. Flat-rate quotes.',
  },
  {
    name: 'Overlay & Resurfacing', slug: 'overlay-resurfacing', fnName: 'OverlayResurfacingPage',
    introTitle: 'Asphalt Overlay & Resurfacing in Waco, TX',
    introSub: 'Mill and overlay to restore ride quality when the base is sound — often faster and lower cost than full reconstruction.',
    expectTitle: 'What Happens on an Overlay Project',
    whyTitle: 'Why Overlay With Blackline',
    areasTitle: 'Overlay Projects Across Central Texas',
    faqTitle: 'Overlay & Resurfacing FAQs',
    ctaHeadline: 'Ready to Resurface?',
    formTitle: 'Get a Free Overlay Estimate',
    expect: [
      { icon: 'faSearch', title: 'Base Soundness Check', description: 'Overlay only works when the base can support it — we verify first.' },
      { icon: 'faFileContract', title: 'Mill Depth & Transitions', description: 'Milling and edge ties planned for smooth transitions at curbs and entrances.' },
      { icon: 'faCheckCircle', title: 'Hot-Mix Overlay', description: 'Proper tack coat and compaction for a durable new surface.' },
      { icon: 'faShieldHalved', title: 'Striping Ready', description: 'Coordinate restripe after overlay for a complete reopen.' },
    ],
    why: [
      { icon: 'faLayerGroup', title: 'Cost-Smart Option', description: 'When base is good, overlay restores the surface without full rebuild cost.' },
      { icon: 'faClock', title: 'Faster Than Rebuild', description: 'Less tear-out means shorter disruption for businesses and residents.' },
      { icon: 'faShieldHalved', title: 'Commercial Experience', description: 'Office parks, retail, industrial yards, and large residential drives.' },
    ],
    process: [
      { number: 1, title: 'Evaluate', description: 'Core knowledge of failures — surface vs. base.', icon: 'faHeadset' },
      { number: 2, title: 'Plan Mill & Overlay', description: 'Depths, transitions, and drainage.', icon: 'faSearch' },
      { number: 3, title: 'Execute', description: 'Mill, tack, pave, compact.', icon: 'faFileContract' },
      { number: 4, title: 'Finish', description: 'Traffic return and optional striping.', icon: 'faCheckCircle' },
    ],
    metrics: [
      { icon: 'faTrophy', value: 600, label: 'Overlay projects completed', suffix: '+', duration: 3 },
      { icon: 'faChartLine', value: 98, label: 'Customer satisfaction', suffix: '%', duration: 2 },
      { icon: 'faClock', value: 23, label: 'Years paving experience', suffix: '+', duration: 2 },
    ],
    areas: commonAreas,
    comparison: [
      { feature: 'Base evaluation before overlay', us: '✅ Always', others: '❌ Overlay on failure' },
      { feature: 'Proper tack coat', us: '✅ Standard', others: '❌ Skipped' },
      { feature: 'Edge transitions planned', us: '✅ Yes', others: '❌ Trip lips' },
    ],
    faq: [
      { question: 'When is overlay better than full rebuild?', answer: 'When the base is generally sound and failures are mostly surface-level. Widespread base failure needs reconstruction.' },
      { question: 'Do you mill before overlay?', answer: 'Often yes — milling improves thickness control and transitions at curbs and matches.' },
      { question: 'Can you overlay a driveway?', answer: 'Yes when conditions allow. Some failed residential drives need full replacement instead.' },
      { question: 'How long does an overlay last?', answer: 'Depends on traffic, base, drainage, and maintenance (including sealcoat). We set realistic expectations during the estimate.' },
    ],
    cross: [
      { icon: 'faPaintRoller', title: 'Line Striping', body: 'Restripe after overlay for a finished lot.', link: '/services/line-striping' },
      { icon: 'faWrench', title: 'Pothole Repair', body: 'Targeted fixes when overlay is not needed yet.', link: '/services/pothole-repair' },
      { icon: 'faParking', title: 'Parking Lots', body: 'Full rebuilds when overlay is not enough.', link: '/services/parking-lots' },
      { icon: 'faSprayCan', title: 'Sealcoating', body: 'Protect the new surface on the right schedule.', link: '/services/sealcoating' },
    ],
    keywords: ['asphalt overlay Waco', 'mill and overlay Central Texas', 'asphalt resurfacing Waco TX'],
    desc: 'Asphalt mill and overlay in Waco, TX. Resurface parking lots and drives when the base is sound. Flat-rate quotes, commercial paving contractor.',
  },
];

for (const s of services) {
  // fix broken servicePage generation - use clean version
  const page = `// Blackline Paving — ${s.name} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faRoad, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faSprayCan, faParking, faPaintRoller, faWrench, faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

export default function ${s.fnName}() {
  const expectations = [
${s.expect.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} },`).join('\n')}
  ];
  const whyFeatures = [
${s.why.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)} },`).join('\n')}
  ];
  const processSteps = [
${s.process.map(e => `    { number: ${e.number}, title: ${JSON.stringify(e.title)}, description: ${JSON.stringify(e.description)}, icon: ${e.icon} },`).join('\n')}
  ];
  const metrics = [
${s.metrics.map(e => `    { icon: ${e.icon}, value: ${e.value}, label: ${JSON.stringify(e.label)}, suffix: ${JSON.stringify(e.suffix)}, duration: ${e.duration} },`).join('\n')}
  ];
  const localAreas = [
${s.areas.map(e => `    { town: ${JSON.stringify(e.town)}, benefit: ${JSON.stringify(e.benefit)}, badge: ${JSON.stringify(e.badge)} },`).join('\n')}
  ];
  const comparisonRows = [
${s.comparison.map(e => `    { feature: ${JSON.stringify(e.feature)}, us: ${JSON.stringify(e.us)}, others: ${JSON.stringify(e.others)} },`).join('\n')}
  ];
  const faq = [
${s.faq.map(e => `    { question: ${JSON.stringify(e.question)}, answer: ${JSON.stringify(e.answer)} },`).join('\n')}
  ];
  const crossServices = [
${s.cross.map(e => `    { icon: ${e.icon}, title: ${JSON.stringify(e.title)}, body: ${JSON.stringify(e.body)}, link: ${JSON.stringify(e.link)} },`).join('\n')}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: ${JSON.stringify(s.name)} },
      ]} />
      <SectionIntro title={${JSON.stringify(s.introTitle)}} subtitle={${JSON.stringify(s.introSub)}} />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={${JSON.stringify(s.expectTitle)}} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify(s.whyTitle)}} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={\`services/${s.slug}\`} title={${JSON.stringify(s.areasTitle)}} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={${JSON.stringify(s.faqTitle)}} /></div>
      <CTABanner
        headline={${JSON.stringify(s.ctaHeadline)}}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={${JSON.stringify(s.formTitle)}} cityName="Waco" slug={${JSON.stringify(s.slug)}} spot={\`service-${s.slug}\`} formVariant={4} />
      </div>
    </main>
  );
}
`;
  w(`src/app/services/${s.slug}/page.tsx`, page);
  w(`src/app/services/${s.slug}/layout.tsx`, serviceLayout(s.name, s.slug, s.desc, s.keywords));
}

console.log('\\nService pages written.');
