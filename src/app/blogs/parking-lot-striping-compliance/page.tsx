'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWheelchair, faFire, faArrowRight, faCheck, faRulerCombined, faPaintRoller } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Faded striping is more than an eyesore — it affects flow, liability, and accessibility. Property managers in Central Texas should treat restriping as part of lot maintenance, especially after sealcoat or overlay when old layout marks disappear.',
  },
  {
    type: 'cards',
    heading: 'What a Good Restripe Usually Includes',
    cards: [
      { icon: faWheelchair, title: 'Accessible stalls', body: 'Accessible parking spaces and access aisles laid out for usability and visibility — not leftover paint in the wrong place.' },
      { icon: faFire, title: 'Fire lanes', body: 'Clear fire lane markings and no-parking zones that emergency services and inspectors can read at a glance.' },
      { icon: faArrowRight, title: 'Directional arrows', body: 'One-way aisles and turn arrows that reduce near-misses at peak shopping or school times.' },
      { icon: faRulerCombined, title: 'Measured layout', body: 'Stall widths and aisle geometry planned on the pavement — not freehand guesswork.' },
      { icon: faPaintRoller, title: 'Durable materials', body: 'Paint systems suited for Texas sun and traffic, applied to a clean surface.' },
      { icon: faCheck, title: 'After paving package', body: 'Coordinate striping immediately after sealcoat or overlay so the lot reopens complete.' },
    ],
  },
  {
    type: 'table',
    heading: 'PM Checklist Before Restriping',
    tableHeaders: ['Item', 'Why It Matters', 'Action'],
    tableRows: [
      ['Current layout photo map', 'Baseline for changes', 'Walk the lot before paint day'],
      ['Accessible route needs', 'Usability & compliance awareness', 'Confirm stall count and locations'],
      ['Fire lane requirements', 'Emergency access', 'Verify with property standards'],
      ['Traffic flow complaints', 'Safety & customer experience', 'Adjust arrows/aisles if needed'],
      ['Upcoming sealcoat/overlay', 'Timing', 'Stripe after surface work when possible'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Restriping on dirty, oily, or failing asphalt wastes money. Fix potholes and clean the surface first — or package striping with sealcoat for a true refresh.',
  },
  {
    type: 'tips',
    heading: 'How Blackline Handles Striping',
    items: [
      'Layout review before paint for stalls, ADA, fire lanes, and arrows',
      'Coordination with sealcoat and paving so the lot reopens finished',
      'Clear dry-time and reopening guidance for tenants and customers',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Parking Lot Striping Compliance for Central Texas Businesses"
        description="ADA stalls, fire lanes, directional arrows, and layout standards property managers should know before the next restriping project."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Freshly striped commercial parking lot with ADA stalls"
        category="Striping"
        date="April 10, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need a Full Lot Restripe?"
        body="Blackline lays out ADA stalls, fire lanes, and directional striping for Central Texas lots. Package with sealcoat or paving for a complete reopen."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="parking-lot-striping-compliance-blog" />
    </>
  );
}
