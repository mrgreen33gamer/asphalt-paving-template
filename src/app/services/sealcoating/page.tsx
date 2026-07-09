// Blackline Paving — Sealcoating Service Page
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

export default function SealcoatingPage() {
  const expectations = [
    { icon: faSearch, title: "Surface Assessment", description: "We check oxidation, cracks, and oil spots to confirm sealcoat is the right next step." },
    { icon: faFileContract, title: "Prep Included in Quote", description: "Cleaning, crack fill recommendations, and traffic control are discussed before we start." },
    { icon: faCheckCircle, title: "Even, Professional Coat", description: "Uniform coverage with crisp edges — not a thin spray that fades in one season." },
    { icon: faShieldHalved, title: "Clear Cure Window", description: "You know when cars and trucks can return without tracking or damage." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Staged for Access", description: "HOAs and commercial lots get phased work so traffic keeps moving." },
    { icon: faSprayCan, title: "UV Protection for Texas", description: "Sealcoat is one of the best defenses against Central Texas sun and oxidation." },
    { icon: faShieldHalved, title: "Bonded & Insured Crews", description: "Commercial paving contractor standards on every coat." },
  ];
  const processSteps = [
    { number: 1, title: "Inspect & Quote", description: "On-site look at surface condition and crack needs.", icon: faHeadset },
    { number: 2, title: "Prep", description: "Clean surface, address major cracks, stage traffic.", icon: faSearch },
    { number: 3, title: "Apply Sealcoat", description: "Even application with edge protection.", icon: faFileContract },
    { number: 4, title: "Open for Traffic", description: "Cure guidance for cars and heavy loads.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 1200, label: "Sealcoat projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years local paving experience", suffix: "+", duration: 2 },
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
    { feature: "Surface prep before coat", us: "✅ Standard", others: "❌ Spray and go" },
    { feature: "Flat-rate written pricing", us: "✅ Always", others: "❌ Vague bids" },
    { feature: "Traffic staging for HOAs/lots", us: "✅ Planned", others: "❌ Chaos" },
    { feature: "Honest repair-first advice", us: "✅ Always", others: "❌ Upsell only" },
  ];
  const faq = [
    { question: "How often should I sealcoat in Texas?", answer: "Many driveways and lots benefit every 2–4 years depending on traffic, sun exposure, and prior condition. We recommend after inspecting the surface." },
    { question: "Can you sealcoat over cracks?", answer: "Hairline cracks can often be filled first. Structural alligator cracking may need patch or overlay first — we will tell you honestly." },
    { question: "How long until I can drive on sealcoat?", answer: "Typically several hours for light traffic; weather and product affect the window. We give a specific open time for your job." },
    { question: "Do you sealcoat commercial lots?", answer: "Yes — retail, medical, HOA, schools, and industrial yards with phased access plans." },
  ];
  const crossServices = [
    { icon: faRoad, title: "Asphalt Paving", body: "Full replacement when sealcoat is not enough.", link: "/services/asphalt-paving" },
    { icon: faPaintRoller, title: "Line Striping", body: "Restripe after sealcoat for a like-new lot.", link: "/services/line-striping" },
    { icon: faWrench, title: "Pothole Repair", body: "Fix holes before you sealcoat over problems.", link: "/services/pothole-repair" },
    { icon: faLayerGroup, title: "Overlay & Resurfacing", body: "When the surface needs more than a coat.", link: "/services/overlay-resurfacing" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Sealcoating" },
      ]} />
      <SectionIntro title={"Sealcoating in Waco, TX"} subtitle={"Commercial-grade sealcoat that restores color, blocks UV, and extends pavement life for driveways, HOAs, and parking lots."} />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Sealcoating Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Property Owners Choose Blackline for Sealcoating"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={`services/sealcoating`} title={"Sealcoating Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Sealcoating FAQs"} /></div>
      <CTABanner
        headline={"Ready to Protect Your Asphalt?"}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={"Get a Free Sealcoating Estimate"} cityName="Waco" slug={"sealcoating"} spot={`service-sealcoating`} formVariant={4} />
      </div>
    </main>
  );
}
