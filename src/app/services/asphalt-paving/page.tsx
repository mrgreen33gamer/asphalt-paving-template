// Blackline Paving — Asphalt Paving Service Page
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

export default function AsphaltPavingPage() {
  const expectations = [
    { icon: faSearch, title: "On-Site Measure & Base Check", description: "We measure square footage, check base condition and drainage, and review access before quoting." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Tear-out, base repair, hot-mix, and cleanup are in the number — no surprise change orders mid-job." },
    { icon: faCheckCircle, title: "Proper Compaction & Thickness", description: "Thickness matched to traffic loads and compacted for long life in Texas heat." },
    { icon: faShieldHalved, title: "2-Year Workmanship on New Pavement", description: "Every new pavement job is backed by our 2-year workmanship guarantee." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Clear Pave Schedule", description: "Realistic start windows and traffic-return guidance so you know when you can park again." },
    { icon: faRoad, title: "Built for Texas Heat", description: "Mix and compaction practices suited for Central Texas summers — not thin, short-lived patches." },
    { icon: faShieldHalved, title: "Commercial Paving Contractor · Bonded & Insured", description: "Bonded and insured crews led by a commercial paving contractor." },
  ];
  const processSteps = [
    { number: 1, title: "Free Estimate", description: "We measure, check base and drainage, and recommend thickness and approach.", icon: faHeadset },
    { number: 2, title: "Quote & Schedule", description: "Flat-rate quote, then we schedule tear-out, base work, and pave day.", icon: faSearch },
    { number: 3, title: "Pave Day", description: "Base prepped, hot-mix placed and rolled to proper density.", icon: faFileContract },
    { number: 4, title: "Open & Warranty", description: "Traffic guidance and 2-Year Workmanship on New Pavement.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 5500, label: "Jobs completed in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-schedule project rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years paving Waco-area asphalt", suffix: "+", duration: 2 },
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
    { feature: "Proper base repair & compaction", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Flat-rate quote (prep + pave + cleanup)", us: "✅ Written", others: "❌ Hourly + extras" },
    { feature: "2-Year Workmanship on New Pavement", us: "✅ Every job", others: "❌ Rare" },
    { feature: "Commercial paving contractor", us: "✅ All crews", others: "❌ Varies" },
    { feature: "Clear traffic-return timeline", us: "✅ Standard", others: "❌ Guesswork" },
  ];
  const faq = [
    { question: "How much does asphalt paving cost in Waco?", answer: "Cost depends on square footage, thickness, base condition, and access. We provide a flat-rate written quote after an on-site measure." },
    { question: "How long before I can drive on new asphalt?", answer: "Passenger cars are often fine once the mix cools — frequently the same day or next morning. Heavy trucks may need longer. We give a specific timeline for your job." },
    { question: "Do you remove old asphalt?", answer: "Yes — demolition, haul-away, and re-pave can be included in one quote." },
    { question: "Hot-mix or cold patch?", answer: "For permanent residential and commercial work we use hot-mix asphalt. Cold patch is for temporary emergency fills only." },
    { question: "Do you handle permits?", answer: "When a permit is required, we coordinate the process and include known permit costs in your quote." },
    { question: "What warranty do you offer?", answer: "New pavement work is backed by our 2-Year Workmanship on New Pavement." },
  ];
  const crossServices = [
    { icon: faSprayCan, title: "Sealcoating", body: "Protect new or aging asphalt with a UV-blocking sealcoat.", link: "/services/sealcoating" },
    { icon: faParking, title: "Parking Lots", body: "Full commercial lot paving and phased rebuilds.", link: "/services/parking-lots" },
    { icon: faWrench, title: "Pothole Repair", body: "Cut-and-patch repairs that hold through Texas weather.", link: "/services/pothole-repair" },
    { icon: faLayerGroup, title: "Overlay & Resurfacing", body: "Mill and overlay when the base is still sound.", link: "/services/overlay-resurfacing" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Asphalt Paving" },
      ]} />
      <SectionIntro title={"Asphalt Paving in Waco, TX"} subtitle={"New asphalt and full replacements for driveways, lanes, and pads — proper base prep, hot-mix, and compaction for Central Texas heat. Flat-rate quotes, 2-Year Workmanship on New Pavement."} />
      <TrustBar headline={"5,500+ jobs across Central Texas by Blackline Paving"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on an Asphalt Paving Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose Blackline for Asphalt Paving"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={`services/asphalt-paving`} title={"Asphalt Paving Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Asphalt Paving FAQs"} /></div>
      <CTABanner
        headline={"Ready for Asphalt Paving Done Right?"}
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={"Get a Free Asphalt Paving Estimate"} cityName="Waco" slug={"asphalt-paving"} spot={`service-asphalt-paving`} formVariant={4} />
      </div>
    </main>
  );
}
