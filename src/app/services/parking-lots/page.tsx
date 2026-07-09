// Blackline Paving — Parking Lots Service Page
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

export default function ParkingLotsPage() {
  const expectations = [
    { icon: faSearch, title: "Lot Assessment", description: "We evaluate failed areas, drainage, and traffic patterns before recommending rebuild vs. overlay." },
    { icon: faFileContract, title: "Phased Work Plans", description: "Keep stores and offices open with staged paving zones and clear communication." },
    { icon: faCheckCircle, title: "Striping Coordination", description: "Paving plus layout striping so the lot reopens complete." },
    { icon: faShieldHalved, title: "COI & Docs Ready", description: "Insurance certificates and documentation for PMs and GCs on request." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Schedule-Driven", description: "We protect opening dates and tenant access with realistic phasing." },
    { icon: faParking, title: "Commercial Experience", description: "Retail, medical, schools, and industrial yards — not just residential driveways." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Commercial paving contractor with documentation for property managers." },
  ];
  const processSteps = [
    { number: 1, title: "Site Walk", description: "Measure, photo, and prioritize failed bays.", icon: faHeadset },
    { number: 2, title: "Scope & Bid", description: "Rebuild, overlay, or hybrid plan with flat-rate pricing.", icon: faSearch },
    { number: 3, title: "Phase & Pave", description: "Staged construction with traffic control.", icon: faFileContract },
    { number: 4, title: "Stripe & Closeout", description: "Layout striping and final walkthrough.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 400, label: "Commercial lot projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97, label: "On-time phase completion", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years commercial paving", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway jobs.", badge: "" },
    { town: "Temple", benefit: "Bell County paving and striping.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage, same flat-rate standards.", badge: "" },
    { town: "Killeen", benefit: "Killeen and Fort Cavazos area coverage.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Phased access plans", us: "✅ Standard", others: "❌ Full shutdown" },
    { feature: "Striping included option", us: "✅ Available", others: "❌ Separate vendor" },
    { feature: "PM documentation / COI", us: "✅ Fast", others: "❌ Slow" },
    { feature: "Flat-rate commercial quotes", us: "✅ Written", others: "❌ T&M surprises" },
  ];
  const faq = [
    { question: "Can you pave without closing the whole lot?", answer: "Usually yes — we phase bays and stages so tenants keep access during most of the project." },
    { question: "Do you include striping?", answer: "Yes — striping can be packaged with paving for a single-vendor closeout." },
    { question: "Do you work nights or weekends?", answer: "When traffic or tenant needs require it, we discuss after-hours options during estimating." },
    { question: "What thickness do you recommend?", answer: "Depends on traffic — passenger cars vs. delivery trucks. We design for expected loads." },
  ];
  const crossServices = [
    { icon: faPaintRoller, title: "Line Striping", body: "ADA, fire lanes, and layout striping.", link: "/services/line-striping" },
    { icon: faSprayCan, title: "Sealcoating", body: "Protect the lot after paving or between rebuilds.", link: "/services/sealcoating" },
    { icon: faLayerGroup, title: "Overlay & Resurfacing", body: "When full rebuild is not required.", link: "/services/overlay-resurfacing" },
    { icon: faWrench, title: "Pothole Repair", body: "Stop-gap safety patches between capital projects.", link: "/services/pothole-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Parking Lots" },
      ]} />
      <SectionIntro title={"Parking Lot Paving in Waco, TX"} subtitle={"Full parking lot paving, rebuilds, and phased commercial work that keeps tenants open and traffic flowing."} />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Parking Lot Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Property Managers Choose Blackline"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={`services/parking-lots`} title={"Parking Lots Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Parking Lot FAQs"} /></div>
      <CTABanner
        headline={"Need a Parking Lot Partner?"}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={"Get a Free Parking Lot Estimate"} cityName="Waco" slug={"parking-lots"} spot={`service-parking-lots`} formVariant={4} />
      </div>
    </main>
  );
}
