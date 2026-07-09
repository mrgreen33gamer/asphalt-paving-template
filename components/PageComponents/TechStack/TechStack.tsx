'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'What We Pave',
    items: [
      { name: 'Asphalt Paving', type: 'brand', icon: '🛤️' },
      { name: 'Sealcoating', type: 'brand', icon: '🖤' },
      { name: 'Parking Lots', type: 'brand', icon: '🅿️' },
      { name: 'Line Striping', type: 'brand', icon: '➖' },
      { name: 'Pothole Repair', type: 'brand', icon: '🔧' },
      { name: 'Overlay & Resurfacing', type: 'brand', icon: '📐' },
      { name: 'Driveways', type: 'brand', icon: '🏠' },
      { name: 'Commercial Yards', type: 'brand', icon: '🏢' },
    ],
  },
  {
    label: 'Credentials',
    items: [
      { name: 'Commercial Paving Contractor', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured', type: 'cert', icon: '✓' },
      { name: '2-Year Warranty', type: 'cert', icon: '✓' },
      { name: 'Flat-Rate Quotes', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Methods',
    items: [
      { name: 'Hot-Mix Asphalt', type: 'tool', icon: '🧱' },
      { name: 'Mill & Overlay', type: 'tool', icon: '🧱' },
      { name: 'Cut-and-Patch', type: 'tool', icon: '🧱' },
      { name: 'Crack Fill', type: 'tool', icon: '🧱' },
      { name: 'Base Prep', type: 'tool', icon: '🧱' },
      { name: 'ADA Striping', type: 'tool', icon: '🧱' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Asphalt Done Right',
  subtitle = 'Asphalt paving, sealcoating, parking lots, striping, pothole repair, and overlays — finished by commercial paving crews.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Services and credentials">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>
        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item} data-type={item.type}>
                    <span className={styles.itemIcon}>{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
