// Blackline Paving — Retail Centers
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
  faStore, faClock, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function RetailCentersPage() {
  const whyFeatures = [
    { icon: faStore, title: "Tenant-Friendly Phasing", description: "We stage paving and striping so shoppers and deliveries keep access during most of the project." },
    { icon: faShieldHalved, title: "Lot + Striping Packages", description: "Pave, sealcoat, and restripe as one coordinated project with clear closeout." },
    { icon: faUsers, title: "PM-Ready Communication", description: "Scopes, COIs, and updates that property managers can pass to ownership without chasing." },
  ];

  const processSteps = [
    { number: 1, title: "Walk the Lot", description: "Map failed bays, drainage, and high-traffic zones.", icon: faHeadset },
    { number: 2, title: "Scope & Bid", description: "Rebuild, overlay, sealcoat, and striping options with flat-rate pricing.", icon: faSearch },
    { number: 3, title: "Phase & Execute", description: "Staged work that protects tenant access.", icon: faFileContract },
    { number: 4, title: "Stripe & Closeout", description: "Layout striping and final walkthrough.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 250, label: "Retail lot projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-phase completion target", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years with Central Texas commercial clients", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Can you pave without shutting the whole center?", answer: "Usually yes — we phase bays and stages so tenants keep access during most of the project." },
    { question: "Do you include ADA striping?", answer: "Yes — accessible stalls and access aisles can be part of the restripe package." },
    { question: "Do you provide COIs quickly?", answer: "Yes — insurance documentation is standard for retail PM accounts." },
    { question: "Can you sealcoat and restripe together?", answer: "Yes — a common package for a like-new lot appearance." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Retail Centers" },
      ]} />
      <SectionIntro
        title={"Retail Centers Asphalt Partner — Waco & Central Texas"}
        subtitle={"Shopping centers and strip retail need asphalt partners who phase work, protect tenant access, and reopen with clean striping. Blackline delivers parking lot paving, sealcoating, and striping across Central Texas."}
      />
      <TrustBar headline={"Preferred asphalt partner for Central Texas retail centers"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Retail PMs Choose Blackline"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Retail Centers FAQs"} /></div>
      <CTABanner
        headline={"Need a Reliable Retail Lot Partner?"}
        subline="Flat-rate commercial quotes. Commercial paving contractor. Bonded & insured. Call (254) 880-8080."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title={"Request a Bid for Retail Centers"}
          cityName="Waco"
          slug={"retail-centers"}
          spot={"retail-centers-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
