'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faSun, faRoad, faCheck, faShieldHalved, faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'In Central Texas, asphalt takes a beating from UV, heat, and seasonal storms. Sealcoating restores the rich black surface and helps protect the binder from oxidation — but timing and surface condition matter as much as the product itself.',
  },
  {
    type: 'cards',
    heading: 'What Changes the Sealcoat Clock',
    cards: [
      { icon: faSun, title: 'Texas UV & heat', body: 'Sun oxidizes asphalt binder and fades color. Properties with full sun exposure often need more frequent protection than shaded drives.' },
      { icon: faClock, title: 'Traffic volume', body: 'HOA lanes and busy lots wear coating faster than a low-traffic residential driveway.' },
      { icon: faCloudSunRain, title: 'Weather window', body: 'You need dry pavement and enough cure time before rain. Summer heat can help set, but extreme temperatures require good product and process.' },
      { icon: faRoad, title: 'Surface condition', body: 'Alligator cracking and base failure need repair first. Sealcoat is not a structural fix.' },
      { icon: faCheck, title: 'Prior coats', body: 'Well-maintained lots on a 2–4 year cycle often look better and cost less long-term than waiting until the surface is gray and brittle.' },
      { icon: faShieldHalved, title: 'Prep quality', body: 'Cleaning and crack fill before coat determine how professional the finish looks and how long it lasts.' },
    ],
  },
  {
    type: 'table',
    heading: 'Typical Sealcoat Guidance (Central Texas)',
    tableHeaders: ['Situation', 'Typical Cadence', 'Notes'],
    tableRows: [
      ['Residential driveway', 'Every 2–4 years', 'Depends on sun and traffic'],
      ['HOA / light commercial', 'Every 2–3 years', 'Plan around residents and tenants'],
      ['High-traffic retail lot', 'Inspect annually', 'May need more frequent attention'],
      ['After new paving', 'Wait for guidance', 'New asphalt often needs time before first coat'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: If your lot has structural alligator cracking, spend budget on patches or overlay first. Sealcoating over failed pavement is cosmetic at best.',
  },
  {
    type: 'tips',
    heading: 'How Blackline Approaches Sealcoat',
    items: [
      'We inspect oxidation, cracks, and oil spots before recommending sealcoat',
      'Traffic staging for HOAs and commercial lots is part of the plan',
      'You get a clear open-for-traffic window for cars and heavier loads',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="When to Sealcoat Asphalt in Texas (Waco & Central Texas)"
        description="How often Central Texas parking lots and driveways need sealcoat, what heat and UV do to asphalt, and the best seasonal window for a lasting coat."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Fresh sealcoat on asphalt driveway in Central Texas"
        category="Sealcoating"
        date="April 18, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Planning Sealcoating in Waco?"
        body="Blackline sealcoats driveways and commercial lots with clear traffic plans and flat-rate quotes. Free on-site estimates."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="when-to-sealcoat-asphalt-texas-blog" />
    </>
  );
}
