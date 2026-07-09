// Blackline Paving — Industries Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";

import {
  faStore, faSchool, faIndustry,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faHeadset, faFileContract,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const industries = [
    {
      icon: faStore,
      title: "Retail Centers",
      body: "Parking lots, striping, and sealcoating that keep shoppers moving and storefronts open during phased work.",
      link: "/industries/retail-centers",
    },
    {
      icon: faSchool,
      title: "Schools & Municipal",
      body: "Campus drives, bus loops, and public lots with bonded crews and documentation-ready scopes.",
      link: "/industries/schools-municipal",
    },
    {
      icon: faIndustry,
      title: "Industrial Yards",
      body: "Heavy-use yard paving, overlays, and repairs designed for truck traffic and equipment loads.",
      link: "/industries/industrial-yards",
    },
  ];

  const whyFeatures = [
    {
      icon: faHeadset,
      title: "Schedule-Driven Communication",
      description: "Property managers, facility directors, and site supervisors get clear phase plans and responsive updates.",
    },
    {
      icon: faFileContract,
      title: "Written Scopes & Flat Rates",
      description: "Commercial pricing in writing so purchasing and facilities can approve with confidence.",
    },
    {
      icon: faShieldHalved,
      title: "Bonded, Insured, Documented",
      description: "COIs and insurance paperwork without the chase. Commercial paving contractor standards on every crew.",
    },
  ];

  const metrics = [
    { icon: faTrophy, value: 5500, label: "Jobs across residential & commercial work", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-schedule mobilization target", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years serving Central Texas partners", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you work with retail center owners and PMs?", answer: "Yes — parking lot paving, sealcoating, striping, and phased rebuilds coordinated with tenant access." },
    { question: "Can schools and municipalities get COIs quickly?", answer: "Yes — insurance documentation is standard for institutional and public accounts." },
    { question: "Do you pave industrial yards for truck traffic?", answer: "Yes — thickness and overlays designed for equipment and delivery loads within our capacity." },
    { question: "What is your service radius?", answer: "Waco home base with coverage across Central Texas including Temple, Killeen, and surrounding communities." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />
      <SectionIntro
        title="Industries We Serve"
        subtitle="Retail centers, schools & municipal, and industrial yards trust Blackline for schedule-driven asphalt paving across Central Texas."
      />
      <TrustBar headline="Commercial asphalt paving done right since 2003" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Who We Partner With" cards={industries} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="An Asphalt Partner Who Shows Up" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partner FAQs" />
      </div>
      <CTABanner
        headline="Need a Reliable Asphalt Partner?"
        subline="Request a bid or call (254) 880-8080. Commercial paving contractor · Bonded & insured."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
    </main>
  );
}
