// Blackline Paving — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faLayerGroup,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2003",
      description: "Blackline was founded in Waco by Vince Alvarez, a paving contractor with deep roots in asphalt. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Property",
      description: "Every crew member works under bonded, insured leadership. We treat every driveway and parking lot like it is on our own street — protected landscaping, clean jobsite, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full rebuild when a patch or overlay will do the job for years. We won't skip base prep to save an afternoon. Our reputation is built on straight talk — and 23 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5500, label: "Jobs across Central Texas",            suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 23,   label: "Years serving Waco-area families",     suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free On-Site Estimate", description: "Vince or a senior estimator measures your project, checks base and drainage, and gives you a firm written price — no surprises later.", icon: faClipboardCheck },
    { number: 2, title: "Plan the Pave Right", description: "Thickness, base repair, mix, and drainage are locked before we mobilize. Good asphalt is won or lost in the base prep.", icon: faShieldHalved },
    { number: 3, title: "Pave With Precision", description: "Commercial paving crews place and compact hot-mix to professional standards, then leave a clean site and clear traffic guidance.", icon: faLayerGroup },
    { number: 4, title: "Final Walkthrough & Warranty", description: "We walk the finished pavement with you before we call the job done, and back new pavement with our 2-Year Workmanship guarantee.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Blackline Paving"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2003. We pave honest asphalt at fair prices for the families and businesses we've called neighbors for 23 years."
      />

      <TrustBar headline="5,500+ jobs trust Blackline — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="23 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Asphalt Crew — Ready When You Are"
        subline="Free on-site estimates. Flat-rate quotes. 2-Year Workmanship on New Pavement. No pressure — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Request a Free Quote"
        secondaryLink="/contact"
      />

    </main>
  );
}
