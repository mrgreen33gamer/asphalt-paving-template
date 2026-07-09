// Blackline Paving — Industrial Yards
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant4         from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faIndustry, faClock, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function IndustrialYardsPage() {
  const whyFeatures = [
    { icon: faIndustry, title: "Built for Truck Loads", description: "Thickness and overlay plans matched to equipment and delivery traffic." },
    { icon: faShieldHalved, title: "Operations-Aware Phasing", description: "We stage work so shipping and yard access stay as open as practical." },
    { icon: faUsers, title: "Direct Site Coordination", description: "Clear contact with plant and yard supervisors from estimate through closeout." },
  ];

  const processSteps = [
    { number: 1, title: "Yard Walk", description: "Assess truck routes, soft spots, and drainage.", icon: faHeadset },
    { number: 2, title: "Recommend Fix", description: "Patch, overlay, or rebuild with written pricing.", icon: faSearch },
    { number: 3, title: "Execute", description: "Phased paving that respects operations.", icon: faFileContract },
    { number: 4, title: "Open", description: "Traffic guidance for heavy loads.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 200, label: "Industrial yard projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97, label: "On-schedule target", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years heavy-use paving experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Can you handle heavy truck traffic areas?", answer: "Yes — we design thickness and repairs for expected equipment and delivery loads within our capacity." },
    { question: "Do you work around active shipping?", answer: "We phase access routes whenever possible so operations keep moving." },
    { question: "Overlay or full rebuild?", answer: "Depends on base condition. We recommend overlay only when the base can support it." },
    { question: "Do you provide COIs for industrial accounts?", answer: "Yes — insurance documentation is standard." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Industrial Yards" },
      ]} />
      <SectionIntro
        title={"Industrial Yards Asphalt Partner — Waco & Central Texas"}
        subtitle={"Yards and industrial sites need pavement that handles trucks and equipment. Blackline delivers heavy-use paving, overlays, and repairs across Central Texas."}
      />
      <TrustBar headline={"Asphalt partner for industrial yards and heavy-use sites"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Industrial Sites Choose Blackline"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Industrial Yards FAQs"} /></div>
      <CTABanner
        headline={"Need a Reliable Yard Paving Partner?"}
        subline="Flat-rate commercial quotes. Commercial paving contractor. Bonded & insured. Call (254) 880-8080."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title={"Request a Bid for Industrial Yards"}
          cityName="Waco"
          slug={"industrial-yards"}
          spot={"industrial-yards-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
