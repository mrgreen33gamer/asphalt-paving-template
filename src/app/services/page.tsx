// Blackline Paving — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faRoad, faSprayCan, faParking, faPaintRoller, faWrench, faLayerGroup,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faRoad, title: "Asphalt Paving", body: "New and replacement asphalt for driveways, lanes, and pads with proper base and hot-mix compaction.", link: "/services/asphalt-paving" },
    { icon: faSprayCan, title: "Sealcoating", body: "Protective sealcoat that restores color, blocks UV, and extends pavement life.", link: "/services/sealcoating" },
    { icon: faParking, title: "Parking Lots", body: "Full parking lot paving and phased rebuilds that keep tenants open.", link: "/services/parking-lots" },
    { icon: faPaintRoller, title: "Line Striping", body: "ADA stalls, fire lanes, arrows, and full lot layouts.", link: "/services/line-striping" },
    { icon: faWrench, title: "Pothole Repair", body: "Cut-and-patch repairs with honest repair-vs-overlay advice.", link: "/services/pothole-repair" },
    { icon: faLayerGroup, title: "Overlay & Resurfacing", body: "Mill and overlay when the base is sound — restore ride quality faster.", link: "/services/overlay-resurfacing" },
  ];

  const expectations = [
    { icon: faSearch, title: "Free On-Site Estimate", description: "We measure on-site, check base and drainage, and explain exactly what's included with a written price before work starts." },
    { icon: faCheckCircle, title: "Upfront Flat-Rate Pricing", description: "No hourly billing, no surprise fees. You approve the price before we mobilize." },
    { icon: faShieldHalved, title: "Commercial Paving Contractor · Bonded & Insured", description: "Crews led by a commercial paving contractor. Bonded and insured on every job." },
    { icon: faTag, title: "2-Year Workmanship on New Pavement", description: "New pavement work is backed by our 2-year workmanship guarantee." },
  ];

  const metrics = [
    { icon: faTrophy, value: 5500, label: "Jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years serving Waco and Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real Blackline team member — not a call center. We schedule your free estimate fast." },
    { icon: faShieldHalved, title: "Honest Scope Advice", description: "We'll tell you when a patch is enough and when overlay or rebuild makes sense — no upselling for the sake of it." },
    { icon: faLock, title: "Bonded & Insured", description: "Fully insured crews. Proof of insurance available on request for property managers and GCs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or the form below. We'll confirm a free on-site estimate that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Measure & Assess", description: "We measure, check base condition, and recommend pave, patch, seal, or overlay in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Pave & Warranty", description: "Professional work, traffic guidance, 2-Year Workmanship on New Pavement.", icon: faCheckCircle },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway jobs.", badge: "" },
    { town: "McGregor", benefit: "Reliable turnaround for McGregor customers.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Temple", benefit: "Full service for Bell County homes and businesses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "2-Year Workmanship on New Pavement", us: "✅ Every new pave", others: "❌ Rare or none" },
    { feature: "Commercial paving contractor", us: "✅ All crews", others: "❌ Not always" },
    { feature: "Proper base prep included", us: "✅ Standard", others: "❌ Often skipped" },
    { feature: "Clear traffic-return timeline", us: "✅ Always", others: "❌ Guesswork" },
  ];

  const faq = [
    { question: "How much does asphalt work cost in Waco?", answer: "Driveways, lots, and repairs vary by size and scope. We always provide a flat-rate written quote after an on-site estimate." },
    { question: "Are you a commercial paving contractor?", answer: "Yes — Blackline is a commercial paving contractor, bonded and insured." },
    { question: "Do you offer emergency pothole repairs?", answer: "We prioritize safety hazards when capacity allows. Call (254) 880-8080." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — new pavement work is backed by our 2-Year Workmanship on New Pavement." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule a free on-site estimate and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />
      <SectionIntro
        title="Asphalt Paving Services in Waco, TX"
        subtitle="Paving, sealcoating, parking lots, striping, pothole repair, and overlays — flat-rate quotes, commercial paving contractor, 2-Year Workmanship on New Pavement."
      />
      <TrustBar headline="5,500+ jobs · 4.9★ from 800+ reviews across Central Texas" />
      <div className={styles.section}><ServiceCardComponent heading="What We Deliver" cards={services} /></div>
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Hire Blackline" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Service Areas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Service FAQs" /></div>
      <CTABanner
        headline="Ready to Get a Flat-Rate Asphalt Quote?"
        subline="Free on-site estimates. Commercial paving contractor. Call (254) 880-8080."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request Service" cityName="Waco" slug="services" spot="services-index" formVariant={2} />
      </div>
    </main>
  );
}
