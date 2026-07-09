// Blackline Paving — Schools & Municipal
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
  faSchool, faClock, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine, faBus
} from "@fortawesome/free-solid-svg-icons";

export default function SchoolsMunicipalPage() {
  const whyFeatures = [
    { icon: faSchool, title: "Campus-Aware Scheduling", description: "We plan around school calendars, events, and bus routes whenever possible." },
    { icon: faShieldHalved, title: "Documentation Ready", description: "Bonded, insured crews with COIs and clear scopes for public and institutional buyers." },
    { icon: faUsers, title: "Safety-First Jobsites", description: "Traffic control and staging that respect students, staff, and public visitors." },
  ];

  const processSteps = [
    { number: 1, title: "Site Review", description: "Walk drives, bus loops, and lots with facilities staff.", icon: faHeadset },
    { number: 2, title: "Scope & Quote", description: "Written flat-rate scopes for pave, patch, seal, or stripe.", icon: faSearch },
    { number: 3, title: "Execute", description: "Scheduled work with access plans for campus operations.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Final walkthrough and documentation package.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 150, label: "School & public-sector projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-schedule target", suffix: "%", duration: 2 },
    { icon: faClock, value: 23, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Can you work during summer break or nights?", answer: "Yes — we often schedule around academic calendars and discuss after-hours options when needed." },
    { question: "Do you restripe bus loops and fire lanes?", answer: "Yes — layout striping including fire lanes and directional markings." },
    { question: "Are you bonded and insured for institutional work?", answer: "Yes — COIs available for schools, districts, and municipalities." },
    { question: "Do you handle pothole emergencies on campus?", answer: "We prioritize safety hazards when capacity allows — call (254) 880-8080." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Schools & Municipal" },
      ]} />
      <SectionIntro
        title={"Schools & Municipal Asphalt Partner — Waco & Central Texas"}
        subtitle={"Campuses and public facilities need asphalt crews who respect schedules, safety, and documentation. Blackline paves, patches, sealcoats, and stripes for schools and municipal sites across Central Texas."}
      />
      <TrustBar headline={"Trusted asphalt partner for schools and municipal facilities"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Schools & Cities Choose Blackline"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Schools & Municipal FAQs"} /></div>
      <CTABanner
        headline={"Need a Reliable Campus Paving Partner?"}
        subline="Flat-rate quotes. Commercial paving contractor. Bonded & insured. Call (254) 880-8080."
        primaryText="Call Us Now"
        primaryLink="tel:+12548808080"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title={"Request a Bid for Schools & Municipal"}
          cityName="Waco"
          slug={"schools-municipal"}
          spot={"schools-municipal-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
