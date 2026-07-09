// Blackline Paving — Line Striping Service Page
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

export default function LineStripingPage() {
  const expectations = [
    { icon: faSearch, title: "Layout Review", description: "We measure stalls, aisles, and accessible routes before paint hits the asphalt." },
    { icon: faFileContract, title: "Compliance-Minded Layout", description: "ADA stalls, fire lanes, and directional markings planned for clarity and code awareness." },
    { icon: faCheckCircle, title: "Crisp Professional Lines", description: "Clean edges and durable paint for Central Texas sun and traffic." },
    { icon: faShieldHalved, title: "Coordinated With Paving", description: "Striping after sealcoat or overlay so the lot reopens complete." },
  ];
  const whyFeatures = [
    { icon: faPaintRoller, title: "Full Lot Layouts", description: "Not just a few stalls — complete restripes with arrows and fire lanes." },
    { icon: faClock, title: "Fast Turnarounds", description: "Most restripes complete with minimal business disruption." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Commercial paving contractor standards on every job." },
  ];
  const processSteps = [
    { number: 1, title: "Walk the Lot", description: "Count stalls, note ADA needs, and plan flow.", icon: faHeadset },
    { number: 2, title: "Layout", description: "Mark stalls, aisles, and special zones.", icon: faSearch },
    { number: 3, title: "Paint", description: "Apply striping, symbols, and legends.", icon: faFileContract },
    { number: 4, title: "Open", description: "Clear dry time and reopening plan.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 800, label: "Lots and lots restriped", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-schedule restripes", suffix: "%", duration: 2 },
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
    { feature: "ADA & fire lane attention", us: "✅ Standard", others: "❌ Missed details" },
    { feature: "Full layout capability", us: "✅ Yes", others: "❌ Stall paint only" },
    { feature: "Works with paving/sealcoat", us: "✅ One team", others: "❌ Extra vendor" },
  ];
  const faq = [
    { question: "Do you paint ADA stalls?", answer: "Yes — accessible stalls, access aisles, and related markings as part of a full layout." },
    { question: "How long before cars can park?", answer: "Paint needs dry time based on weather; we typically reopen the same day with clear cones and signage as needed." },
    { question: "Can you restripe after sealcoat?", answer: "Yes — striping after sealcoat is a common package for a like-new lot appearance." },
    { question: "Do you do warehouse floor striping?", answer: "Our focus is exterior asphalt lots and drive surfaces. Ask us about your specific layout needs." },
  ];
  const crossServices = [
    { icon: faParking, title: "Parking Lots", body: "Full lot paving with striping closeout.", link: "/services/parking-lots" },
    { icon: faSprayCan, title: "Sealcoating", body: "Seal then stripe for maximum curb appeal.", link: "/services/sealcoating" },
    { icon: faRoad, title: "Asphalt Paving", body: "Rebuild failed pavement under faded lines.", link: "/services/asphalt-paving" },
    { icon: faLayerGroup, title: "Overlay & Resurfacing", body: "Fresh surface, then fresh striping.", link: "/services/overlay-resurfacing" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Line Striping" },
      ]} />
      <SectionIntro title={"Line Striping in Waco, TX"} subtitle={"ADA stalls, fire lanes, arrows, and full parking lot layouts that keep your property compliant and easy to navigate."} />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Striping Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Businesses Choose Blackline for Striping"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={`services/line-striping`} title={"Line Striping Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Line Striping FAQs"} /></div>
      <CTABanner
        headline={"Need Fresh Striping?"}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={"Get a Free Striping Estimate"} cityName="Waco" slug={"line-striping"} spot={`service-line-striping`} formVariant={4} />
      </div>
    </main>
  );
}
