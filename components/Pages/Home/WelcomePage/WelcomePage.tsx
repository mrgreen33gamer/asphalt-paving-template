// _archetype-library/hero-g-dashboard/Component.tsx
//
// Hero G: Live Control Panel — industrial chrome, counting gauges from props,
// toggle switches, small meters. Framer-motion for counter animations.
'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function parseGaugeValue(raw: string): { numeric: number | null; prefix: string; suffix: string } {
  const match = raw.match(/^([^0-9.-]*)(-?[\d.]+)(.*)$/);
  if (!match) return { numeric: null, prefix: '', suffix: raw };
  const num = parseFloat(match[2]);
  if (Number.isNaN(num)) return { numeric: null, prefix: '', suffix: raw };
  return { numeric: num, prefix: match[1], suffix: match[3] };
}

function CountingValue({
  value,
  unit,
  delay = 0,
}: {
  value: string;
  unit?: string;
  delay?: number;
}) {
  const parsed = useMemo(() => parseGaugeValue(value), [value]);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => {
    if (parsed.numeric === null) return value;
    const decimals = String(parsed.numeric).includes('.')
      ? (String(parsed.numeric).split('.')[1]?.length ?? 0)
      : 0;
    const rounded = decimals > 0 ? v.toFixed(decimals) : String(Math.round(v));
    return `${parsed.prefix}${rounded}${parsed.suffix}`;
  });
  const [text, setText] = useState(parsed.numeric === null ? value : `${parsed.prefix}0${parsed.suffix}`);

  useEffect(() => {
    if (parsed.numeric === null) {
      setText(value);
      return;
    }
    const controls = animate(motionVal, parsed.numeric, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = display.on('change', (v) => setText(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [parsed.numeric, value, delay, motionVal, display]);

  return (
    <span className={styles.gaugeValue}>
      {text}
      {unit ? <span className={styles.gaugeUnit}>{unit}</span> : null}
    </span>
  );
}

function GaugeRow({
  label,
  value,
  unit,
  index,
}: {
  label: string;
  value: string;
  unit?: string;
  index: number;
}) {
  const parsed = useMemo(() => parseGaugeValue(value), [value]);
  const pct = parsed.numeric !== null
    ? Math.min(100, Math.max(8, Math.abs(parsed.numeric) > 100 ? 72 : Math.abs(parsed.numeric)))
    : 55 + (index % 3) * 12;

  return (
    <div className={styles.gauge}>
      <div className={styles.gaugeHeader}>
        <span className={styles.gaugeLabel}>{label}</span>
        <CountingValue value={value} unit={unit} delay={0.45 + index * 0.12} />
      </div>
      <div className={styles.meterTrack} aria-hidden="true">
        <motion.div
          className={styles.meterFill}
          initial={{ width: '0%' }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.35, delay: 0.5 + index * 0.1, ease: [0.34, 1.1, 0.64, 1] }}
        />
        <div className={styles.meterTicks}>
          {[0, 1, 2, 3, 4].map((t) => (
            <span key={t} className={styles.meterTick} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ToggleSwitch({
  label,
  on,
  index,
}: {
  label: string;
  on: boolean;
  index: number;
}) {
  return (
    <motion.div
      className={`${styles.toggle} ${on ? styles.toggleOn : styles.toggleOff}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
    >
      <span className={styles.toggleLabel}>{label}</span>
      <span className={styles.toggleTrack} aria-hidden="true">
        <span className={styles.toggleThumb} />
      </span>
      <span className={styles.toggleState}>{on ? 'ON' : 'OFF'}</span>
    </motion.div>
  );
}

function PanelChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelBezel} aria-hidden="true">
        <span className={styles.screw} />
        <span className={styles.screw} />
        <span className={styles.panelTitle}>CONTROL</span>
        <span className={styles.screw} />
        <span className={styles.screw} />
      </div>
      <div className={styles.panelStatus} aria-hidden="true">
        <span className={styles.statusLed} />
        <span className={styles.statusText}>SYSTEM ACTIVE</span>
        <span className={styles.statusTime}>LIVE</span>
      </div>
      <div className={styles.panelBody}>{children}</div>
    </div>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Trusted Asphalt Paving Contractor — Since 2003';
const headlineLines = [
  'Asphalt. Sealcoat.',
  'Striping.',
];
const headlineAccent = 'Blackline.';
const subheadline = 'Free on-site estimates. Flat-rate quotes. 2-Year Workmanship on New Pavement. Asphalt Paving · Sealcoating · Striping for Central Texas homes and businesses.';
const primaryCta = { label: 'Call (254) 880-8080', href: 'tel:+12548808080' };
const secondaryCta = { label: 'Free Quote', href: '/contact' };
const chips = [
  'Free Estimates',
  'Flat-Rate Quotes',
  'Commercial Paving',
  '23+ Yrs Local',
  '2-Yr Warranty',
];
const stats = [
  {
    "value": "500+",
    "label": "Jobs Done"
  },
  {
    "value": "4.9 ★",
    "label": "Rating"
  },
  {
    "value": "15+",
    "label": "Years Local"
  },
  {
    "value": "1-Yr",
    "label": "Warranty"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak load";
const meterMidLabel = "Crew";
const meterBotLabel = "Base";
const particleColor = '#ea580c';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Cracked lot";
const afterLabel = "Fresh pave";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Hot Mix", swatch: "#ea580c", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Sealcoat", swatch: "#fb923c", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Overlay", swatch: "#9a3412", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Patch", swatch: "#c2410c", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Mill & Fill", swatch: "#78716c", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Stripe", swatch: "#fafaf9", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Our apartment lot was a mess. Blackline milled, paved, and striped on schedule — looks brand new.";
const authorName = "Derek H.";
const authorMeta = "Property manager · Temple";
const rating = 5;
const schematicLabel = "Blackline schematic";
const gauges = [
  { label: "Sq ft paved", value: "2M+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Crews", value: "Full-time" },
  { label: "Warranty", value: "2-yr" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "Blackline";

  // Stable serial for SSR/hydration — avoid Math.random in render of serial
  // by using a fixed-looking decorative suffix derived from gauge count.
  const serial = `CH-${String(gauges.length).padStart(2, '0')}`;

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <PanelChrome>
            <div className={styles.gaugeList}>
              {gauges.map((g, i) => (
                <GaugeRow
                  key={g.label}
                  label={g.label}
                  value={g.value}
                  unit={undefined}
                  index={i}
                />
              ))}
            </div>
            {toggles.length > 0 && (
              <div className={styles.toggleList}>
                {toggles.map((t, i) => (
                  <ToggleSwitch key={t.label} label={t.label} on={t.on} index={i} />
                ))}
              </div>
            )}
            <div className={styles.panelFooterStatic} aria-hidden="true">
              <div className={styles.miniMeter}>
                <span className={styles.miniMeterBar} />
                <span className={styles.miniMeterBar} />
                <span className={styles.miniMeterBar} />
                <span className={styles.miniMeterBar} />
                <span className={styles.miniMeterBar} />
              </div>
              <span className={styles.footerSerial}>{serial}</span>
            </div>
          </PanelChrome>
        </motion.div>
      </div>
    </section>
  );
}
