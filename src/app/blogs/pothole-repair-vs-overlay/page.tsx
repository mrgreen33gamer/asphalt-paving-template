'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWrench, faLayerGroup, faRoad, faCheck, faTriangleExclamation, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Not every rough parking lot needs a full rebuild — and not every pothole is a cheap patch. Choosing between cut-and-patch repairs and mill-and-overlay (or full reconstruction) is mostly about base condition, failure pattern, and budget horizon.',
  },
  {
    type: 'cards',
    heading: 'How to Think About the Options',
    cards: [
      { icon: faWrench, title: 'Pothole / section patch', body: 'Best for isolated failures with solid surrounding pavement. Square-cut, hot-mix, compacted patches can last when the base is sound.' },
      { icon: faLayerGroup, title: 'Mill & overlay', body: 'Best when the surface is oxidized or raveled but the base is generally good. Restores ride quality without full tear-out.' },
      { icon: faRoad, title: 'Full rebuild', body: 'Needed when base failure is widespread — soft spots, pumping, or alligator cracking across large areas.' },
      { icon: faTriangleExclamation, title: 'Chasing the same hole', body: 'If the same spots fail every season, the base is talking. More cold patch will not fix structural failure.' },
      { icon: faDollarSign, title: 'Lifecycle cost', body: 'A lower first cost patch can be more expensive over five years if you re-patch the same bay repeatedly.' },
      { icon: faCheck, title: 'Honest assessment', body: 'A good contractor will show you where patches make sense and where capital work is smarter.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Comparison',
    tableHeaders: ['Option', 'Best When', 'Watch Outs'],
    tableRows: [
      ['Cut-and-patch', 'Isolated holes / small areas', 'Won\'t fix failed base under large zones'],
      ['Mill & overlay', 'Surface worn, base OK', 'Overlay on bad base fails early'],
      ['Full rebuild', 'Base failure widespread', 'Higher cost, longer disruption'],
      ['Sealcoat only', 'Surface intact, mild oxidation', 'Cosmetic if structure is failing'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Photograph failures after rain. Standing water and soft edges are clues that drainage and base — not just surface mix — are part of the problem.',
  },
  {
    type: 'tips',
    heading: 'How Blackline Helps You Choose',
    items: [
      'On-site assessment of base vs. surface failure patterns',
      'Flat-rate options for patch, overlay, or rebuild scopes',
      'Phased plans for commercial lots that must stay open',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Pothole Repair vs. Asphalt Overlay: Which Fix Is Right?"
        description="When a patch is enough, when mill-and-overlay makes sense, and how to stop chasing the same pothole season after season."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Pothole repair compared with asphalt overlay options"
        category="Repairs"
        date="April 14, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Patch or Overlay?"
        body="Blackline assesses base condition and gives flat-rate options — patch, overlay, or rebuild. Free on-site estimates in Central Texas."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="pothole-repair-vs-overlay-blog" />
    </>
  );
}
