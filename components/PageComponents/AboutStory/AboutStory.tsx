// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              &quot;We started Blackline because we were tired of watching homeowners get pressured into paving they didn&apos;t need — or shoddy patches that failed in a year.&quot;
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Vince Alvarez</span>
              <span className={styles.pullTitle}>Founder, Blackline &amp; Tile Co.</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2003 in Waco, TX, Blackline &amp; Tile Co. started with one crew and one principle:
              measure carefully, quote flat-rate, install it right, and back the work with a real warranty.
              No hourly billing surprises, no upsell pressure, no contracts.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with shop-certified craftspersons
              who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2008', label: 'Founded in Waco' },
                { year: '2015', label: 'Expanded to full crew' },
                { year: '2019', label: '2,500 jobs completed' },
                { year: '2025', label: '5,500+ jobs completed' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
