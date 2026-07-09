// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Blackline Paving — used by Testimonials component,
// aggregate rating schema, and homepage social proof.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  id:       string;
  name:     string;
  location: string;
  rating:   number;
  text:     string;
  service?: string;
  date?:    string;
}

const reviews: Review[] = [
  {
    id:       'r1',
    name:     'Marcus T.',
    location: 'Woodway, TX',
    rating:   5,
    service:  'Asphalt Paving',
    date:     'March 2026',
    text:     "Blackline replaced our crumbling driveway with proper base and hot-mix asphalt. Quote was flat-rate, pave day was clean, and they told us exactly when we could park. Looks sharp and feels solid under the Texas sun.",
  },
  {
    id:       'r2',
    name:     'Elena R.',
    location: 'Hewitt, TX',
    rating:   5,
    service:  'Sealcoating',
    date:     'February 2026',
    text:     'Had our HOA drive lanes sealcoated before summer. Crew was professional, edges were crisp, and the blacktop looks brand new. Vince walked us through traffic control without pressure.',
  },
  {
    id:       'r3',
    name:     'James K.',
    location: 'Waco, TX',
    rating:   5,
    service:  'Parking Lots',
    date:     'January 2026',
    text:     'Our shopping center needed a full parking lot rebuild. Blackline hit the schedule, coordinated striping same week, and provided COI paperwork fast. Professional crew from start to finish.',
  },
  {
    id:       'r4',
    name:     'Patricia N.',
    location: 'Temple, TX',
    rating:   5,
    service:  'Pothole Repair',
    date:     'December 2025',
    text:     'Potholes at our clinic entrance were a liability. Blackline cut clean patches, compacted properly, and the repairs held through winter rains. Fair price and clear communication.',
  },
  {
    id:       'r5',
    name:     'Derek L.',
    location: 'Killeen, TX',
    rating:   5,
    service:  'Line Striping',
    date:     'November 2025',
    text:     'Restriped our retail lot with ADA stalls, fire lanes, and directional arrows. Layout was measured correctly and paint still looks fresh months later. Highly recommend for commercial work.',
  },
  {
    id:       'r6',
    name:     'Sandra M.',
    location: 'China Spring, TX',
    rating:   5,
    service:  'Overlay & Resurfacing',
    date:     'October 2025',
    text:     'Compared three companies. Blackline was clear about mill depth, tack coat, and when an overlay beats full reconstruction. The surface is smooth and drainage works as promised.',
  },
  {
    id:       'r7',
    name:     'Tony V.',
    location: 'McGregor, TX',
    rating:   5,
    service:  'Asphalt Paving',
    date:     'September 2025',
    text:     'Rural driveway and apron rebuild. They handled soft spots in the base, rolled compact, and left the site cleaner than they found it. Will use again for the barn pad.',
  },
  {
    id:       'r8',
    name:     'Rachel B.',
    location: 'Bellmead, TX',
    rating:   5,
    service:  'Sealcoating',
    date:     'August 2025',
    text:     'Church parking lot sealcoat and restripe. Blackline worked around Sunday services, protected landscaping, and finished on schedule. Our congregation noticed the upgrade immediately.',
  },
];

export default reviews;
