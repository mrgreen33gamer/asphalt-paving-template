// Blackline Paving — Pothole Repair Service Page
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

export default function PotholeRepairPage() {
  const expectations = [
    { icon: faSearch, title: "Honest Assessment", description: "We tell you if patches will hold or if base failure needs a larger repair." },
    { icon: faFileContract, title: "Proper Cut-and-Patch", description: "Square cuts, clean edges, hot-mix, and compaction — not dump-and-run cold fill." },
    { icon: faCheckCircle, title: "Safety First", description: "Entrances, pedestrian paths, and high-traffic bays prioritized." },
    { icon: faShieldHalved, title: "Path to a Better Fix", description: "If overlay or rebuild is smarter long-term, we explain the options clearly." },
  ];
  const whyFeatures = [
    { icon: faWrench, title: "Durable Patches", description: "Hot-mix cut-and-patch methods built for lasting repairs." },
    { icon: faClock, title: "Fast Response", description: "Liability potholes get priority scheduling when capacity allows." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Commercial paving contractor with PM-ready documentation." },
  ];
  const processSteps = [
    { number: 1, title: "Locate & Scope", description: "Map holes and soft spots.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Per-patch or area pricing, flat-rate.", icon: faSearch },
    { number: 3, title: "Cut & Fill", description: "Remove failed material, place and compact mix.", icon: faFileContract },
    { number: 4, title: "Open", description: "Traffic guidance for fresh patches.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 3000, label: "Patches and repairs completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years local experience", suffix: "+", duration: 2 },
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
    { feature: "Hot-mix cut-and-patch", us: "✅ Standard", others: "❌ Cold dump" },
    { feature: "Honest repair vs overlay advice", us: "✅ Always", others: "❌ Patch forever" },
    { feature: "Flat-rate pricing", us: "✅ Written", others: "❌ Hourly creep" },
  ];
  const faq = [
    { question: "Will a pothole patch last?", answer: "Proper cut-and-patch with good base support lasts far longer than temporary cold fill. If base is failed under a wide area, overlay may be smarter." },
    { question: "Do you do emergency patches?", answer: "We prioritize safety hazards when capacity allows. Call (254) 880-8080." },
    { question: "Can you patch then sealcoat?", answer: "Yes — patches should cure appropriately before sealcoat. We can package both." },
    { question: "Residential and commercial?", answer: "Both — driveways, HOAs, retail lots, schools, and industrial yards." },
  ];
  const crossServices = [
    { icon: faLayerGroup, title: "Overlay & Resurfacing", body: "When patches are chasing the same failures.", link: "/services/overlay-resurfacing" },
    { icon: faRoad, title: "Asphalt Paving", body: "Full rebuild when the base is gone.", link: "/services/asphalt-paving" },
    { icon: faSprayCan, title: "Sealcoating", body: "Protect the surrounding pavement after repairs.", link: "/services/sealcoating" },
    { icon: faParking, title: "Parking Lots", body: "Capital project planning for commercial lots.", link: "/services/parking-lots" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Pothole Repair" },
      ]} />
      <SectionIntro title={"Pothole Repair in Waco, TX"} subtitle={"Cut-and-patch asphalt repairs that hold — plus honest advice on when a patch is enough vs. when overlay makes more sense."} />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Pothole Repair"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Clients Trust Blackline for Patches"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={`services/pothole-repair`} title={"Pothole Repair Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Pothole Repair FAQs"} /></div>
      <CTABanner
        headline={"Need Potholes Fixed Fast?"}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={"Get a Free Pothole Repair Estimate"} cityName="Waco" slug={"pothole-repair"} spot={`service-pothole-repair`} formVariant={4} />
      </div>
    </main>
  );
}
