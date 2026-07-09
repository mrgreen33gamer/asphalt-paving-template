// Blackline Paving — Overlay & Resurfacing Service Page
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

export default function OverlayResurfacingPage() {
  const expectations = [
    { icon: faSearch, title: "Base Soundness Check", description: "Overlay only works when the base can support it — we verify first." },
    { icon: faFileContract, title: "Mill Depth & Transitions", description: "Milling and edge ties planned for smooth transitions at curbs and entrances." },
    { icon: faCheckCircle, title: "Hot-Mix Overlay", description: "Proper tack coat and compaction for a durable new surface." },
    { icon: faShieldHalved, title: "Striping Ready", description: "Coordinate restripe after overlay for a complete reopen." },
  ];
  const whyFeatures = [
    { icon: faLayerGroup, title: "Cost-Smart Option", description: "When base is good, overlay restores the surface without full rebuild cost." },
    { icon: faClock, title: "Faster Than Rebuild", description: "Less tear-out means shorter disruption for businesses and residents." },
    { icon: faShieldHalved, title: "Commercial Experience", description: "Office parks, retail, industrial yards, and large residential drives." },
  ];
  const processSteps = [
    { number: 1, title: "Evaluate", description: "Core knowledge of failures — surface vs. base.", icon: faHeadset },
    { number: 2, title: "Plan Mill & Overlay", description: "Depths, transitions, and drainage.", icon: faSearch },
    { number: 3, title: "Execute", description: "Mill, tack, pave, compact.", icon: faFileContract },
    { number: 4, title: "Finish", description: "Traffic return and optional striping.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 600, label: "Overlay projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years paving experience", suffix: "+", duration: 2 },
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
    { feature: "Base evaluation before overlay", us: "✅ Always", others: "❌ Overlay on failure" },
    { feature: "Proper tack coat", us: "✅ Standard", others: "❌ Skipped" },
    { feature: "Edge transitions planned", us: "✅ Yes", others: "❌ Trip lips" },
  ];
  const faq = [
    { question: "When is overlay better than full rebuild?", answer: "When the base is generally sound and failures are mostly surface-level. Widespread base failure needs reconstruction." },
    { question: "Do you mill before overlay?", answer: "Often yes — milling improves thickness control and transitions at curbs and matches." },
    { question: "Can you overlay a driveway?", answer: "Yes when conditions allow. Some failed residential drives need full replacement instead." },
    { question: "How long does an overlay last?", answer: "Depends on traffic, base, drainage, and maintenance (including sealcoat). We set realistic expectations during the estimate." },
  ];
  const crossServices = [
    { icon: faPaintRoller, title: "Line Striping", body: "Restripe after overlay for a finished lot.", link: "/services/line-striping" },
    { icon: faWrench, title: "Pothole Repair", body: "Targeted fixes when overlay is not needed yet.", link: "/services/pothole-repair" },
    { icon: faParking, title: "Parking Lots", body: "Full rebuilds when overlay is not enough.", link: "/services/parking-lots" },
    { icon: faSprayCan, title: "Sealcoating", body: "Protect the new surface on the right schedule.", link: "/services/sealcoating" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Overlay & Resurfacing" },
      ]} />
      <SectionIntro title={"Asphalt Overlay & Resurfacing in Waco, TX"} subtitle={"Mill and overlay to restore ride quality when the base is sound — often faster and lower cost than full reconstruction."} />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on an Overlay Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Overlay With Blackline"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={`services/overlay-resurfacing`} title={"Overlay Projects Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Overlay & Resurfacing FAQs"} /></div>
      <CTABanner
        headline={"Ready to Resurface?"}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={"Get a Free Overlay Estimate"} cityName="Waco" slug={"overlay-resurfacing"} spot={`service-overlay-resurfacing`} formVariant={4} />
      </div>
    </main>
  );
}
