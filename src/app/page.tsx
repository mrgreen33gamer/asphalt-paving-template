// Blackline Paving — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faRoad, faSprayCan, faParking, faPaintRoller, faWrench, faLayerGroup,
  faTrophy, faChartLine, faClock,
  faClipboardCheck, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faRoad,
      title: "Asphalt Paving",
      body: "New and replacement asphalt for driveways, lanes, and pads — proper base, hot-mix, and compaction built for Central Texas heat.",
      link: "/services/asphalt-paving",
    },
    {
      icon: faSprayCan,
      title: "Sealcoating",
      body: "Protective sealcoat that restores color, blocks UV, and extends pavement life for homes, HOAs, and commercial lots.",
      link: "/services/sealcoating",
    },
    {
      icon: faParking,
      title: "Parking Lots",
      body: "Full parking lot paving, rebuilds, and phased commercial work that keeps tenants open and traffic flowing.",
      link: "/services/parking-lots",
    },
    {
      icon: faPaintRoller,
      title: "Line Striping",
      body: "ADA stalls, fire lanes, arrows, and layout striping that keeps your lot compliant and easy to navigate.",
      link: "/services/line-striping",
    },
    {
      icon: faWrench,
      title: "Pothole Repair",
      body: "Cut-and-patch repairs that hold — honest advice on when a patch is enough vs. when overlay is smarter.",
      link: "/services/pothole-repair",
    },
    {
      icon: faLayerGroup,
      title: "Overlay & Resurfacing",
      body: "Mill and overlay to restore ride quality when the base is sound — faster and often lower cost than full rebuild.",
      link: "/services/overlay-resurfacing",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5500, label: "Jobs completed across Central Texas",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 23,   label: "Years of local paving experience",     suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Free On-Site Estimates",
      description: "We measure on-site, check base and drainage, and give you a written flat-rate quote before any work starts.",
    },
    {
      icon: faShieldHalved,
      title: "Commercial Paving Contractor · Bonded & Insured",
      description: "Crews led by a commercial paving contractor with full bonding and insurance on every job — documentation available on request.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2003",
      description: "We're not a franchise. Blackline was founded in Waco by Vince Alvarez. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a free on-site estimate that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Measure & Assess",
      description: "We measure square footage, check base condition and drainage, and recommend pave, patch, seal, or overlay in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before mobilization. You decide — zero pressure. The quote covers prep, asphalt work, and cleanup.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Pave, Protect & Warranty",
      description: "Professional paving or repair, clear traffic-return guidance, and 2-Year Workmanship on New Pavement.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Scope Assessment",
      description: "We tell you when a patch is enough and when overlay or full rebuild makes sense — not what's most profitable to sell.",
    },
    {
      icon: faLayerGroup,
      title: "Base Prep That Lasts",
      description: "Soft spots fixed, proper compaction, and thickness matched to traffic so your pavement survives Central Texas heat.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before we start. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Clear Traffic Guidance",
      description: "You'll know when cars, trucks, and heavy traffic can return so you don't damage fresh asphalt too early.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway paving.", badge: "" },
    { town: "Temple",       benefit: "Bell County lots, driveways, and striping.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const faq = [
    { question: "How much does asphalt paving cost in Waco?", answer: "Pricing depends on square footage, thickness, base condition, access, and whether we patch, overlay, or fully rebuild. We provide a free on-site measure and a flat-rate written quote — no ballpark phone guesses that change later." },
    { question: "How long before I can drive on new asphalt?", answer: "Light passenger traffic is often fine the same day or next morning after hot-mix cools. Heavy trucks may need longer. We give you a specific timeline for your mix and weather." },
    { question: "Are you licensed and insured?", answer: "Yes. Blackline Paving is a commercial paving contractor, bonded and insured. Proof of insurance is available for property managers and general contractors." },
    { question: "Do you remove old asphalt?", answer: "Yes — tear-out, haul-away, and re-pave can be included in your quote so one crew handles the full job." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "What warranty do you offer?", answer: "New pavement work is backed by our 2-Year Workmanship on New Pavement." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="4.9★ · 800+ reviews · 5,500+ jobs across Central Texas" />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Asphalt Paving Services Built for Central Texas"
          subheading="Paving, sealcoating, parking lots, striping, pothole repair, and overlays — flat-rate quotes from a commercial paving contractor."
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" title="23 Years, By the Numbers" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses Blackline" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect Working With Us" expectations={expectations} />
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
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving Waco & Central Texas" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Asphalt Paving FAQs" />
      </div>
      <CTABanner
        headline="Ready for Pavement Done Right?"
        subline="Free on-site estimate. Flat-rate quotes. Commercial paving contractor. 2-Year Workmanship on New Pavement."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Get a Free Asphalt Estimate"
          cityName="Waco"
          slug="home"
          spot="homepage-form"
          formVariant={4}
        />
      </div>
    </main>
  );
}
