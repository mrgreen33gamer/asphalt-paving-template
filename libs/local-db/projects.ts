// libs/local-db/projects.ts
// ─────────────────────────────────────────────────────────────────────────────
// Central data store for Blackline Paving projects shown on
// /projects and /projects/[slug]. Images reuse existing gallery assets.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'Asphalt Paving'
  | 'Sealcoating'
  | 'Parking Lots'
  | 'Line Striping'
  | 'Pothole Repair'
  | 'Overlay & Resurfacing';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  sqft?: string;
  duration?: string;
  featured?: boolean;
}

const g = (name: string) => `/projects/gallery/${name}`;

const asphaltPaving: Project[] = [
  {
    id: 'woodway-driveway-rebuild',
    title: 'Woodway Residential Driveway Rebuild',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Asphalt Paving',
    year: '2026',
    duration: '1 week',
    sqft: '1,400 sq ft',
    shortDesc: 'Full driveway replacement with base repair, hot-mix asphalt, and clean apron transition.',
    fullDesc: 'The existing asphalt had alligator cracking and base failure at the apron. Blackline removed failed sections, rebuilt soft spots, and paved a new hot-mix surface with proper compaction for Central Texas heat. Homeowners received clear traffic-return guidance.',
    result: 'Full Replacement',
    tags: ['Driveway', 'Hot-Mix', 'Woodway'],
    images: [
      { src: g('2.png'), alt: 'New asphalt residential driveway', caption: 'Completed driveway' },
      { src: g('3.png'), alt: 'Driveway apron and edge detail', caption: '' },
    ],
    beforeImage: { src: g('4.png'), alt: 'Failed asphalt driveway before replacement' },
    afterImage:  { src: g('2.png'), alt: 'Driveway after Blackline paving' },
    featured: true,
  },
  {
    id: 'hewitt-two-car-asphalt',
    title: 'Hewitt Two-Car Asphalt Driveway',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Asphalt Paving',
    year: '2025',
    duration: '5 days',
    sqft: '950 sq ft',
    shortDesc: 'New two-car asphalt driveway with grade match at the street and compacted base.',
    fullDesc: 'New residential driveway with careful grade transition at the street, compacted base, and hot-mix finish. Flat-rate quote included tear-out of a failing approach section.',
    result: 'New Pavement',
    tags: ['New Construction', 'Hewitt', 'Driveway'],
    images: [
      { src: g('5.png'), alt: 'Two-car residential asphalt driveway', caption: '' },
      { src: g('7.png'), alt: 'Asphalt driveway apron detail', caption: '' },
    ],
    featured: true,
  },
];

const sealcoating: Project[] = [
  {
    id: 'waco-hoa-sealcoat',
    title: 'Waco HOA Drive Lane Sealcoat',
    client: 'HOA Board',
    location: 'Waco, TX',
    category: 'Sealcoating',
    year: '2025',
    duration: '3 days',
    sqft: '28,000 sq ft',
    shortDesc: 'Community drive lanes sealcoated with crack fill prep and staged traffic control.',
    fullDesc: 'HOA wanted to extend pavement life before summer UV. Blackline cleaned, filled major cracks, applied commercial-grade sealcoat, and staged lanes so residents kept access throughout the project.',
    result: 'Protective Coat',
    tags: ['HOA', 'Sealcoat', 'Waco'],
    images: [
      { src: g('ertret.png'), alt: 'Fresh sealcoat on community drive lanes', caption: '' },
    ],
    beforeImage: { src: g('ewew.png'), alt: 'Oxidized asphalt before sealcoat' },
    afterImage:  { src: g('ertret.png'), alt: 'Drive lanes after Blackline sealcoat' },
    featured: true,
  },
  {
    id: 'china-spring-driveway-seal',
    title: 'China Spring Driveway Sealcoat',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Sealcoating',
    year: '2025',
    duration: '1 day',
    sqft: '1,100 sq ft',
    shortDesc: 'Residential driveway sealcoat with edge protection and cure guidance.',
    fullDesc: 'Rural residential sealcoat to restore color and protect binder from UV. Edges protected, vehicles staged off-site, clear return-to-traffic window provided.',
    result: 'UV Protection',
    tags: ['Residential', 'Sealcoat', 'China Spring'],
    images: [
      { src: g('htf.png'), alt: 'Residential asphalt driveway after sealcoat', caption: '' },
    ],
  },
];

const parkingLots: Project[] = [
  {
    id: 'temple-retail-lot',
    title: 'Temple Retail Parking Lot Rebuild',
    client: 'Retail Center Owner',
    location: 'Temple, TX',
    category: 'Parking Lots',
    year: '2025',
    duration: '2 weeks',
    sqft: '42,000 sq ft',
    shortDesc: 'Phased parking lot reconstruction with striping ready for grand reopening.',
    fullDesc: 'Failed sections and drainage issues required full rebuild of high-traffic bays. Blackline phased work to keep tenant access, paved hot-mix asphalt, and coordinated line striping for opening day.',
    result: 'Full Rebuild',
    tags: ['Retail', 'Parking Lot', 'Temple'],
    images: [
      { src: g('kgh.png'), alt: 'Retail parking lot after asphalt rebuild', caption: '' },
    ],
    featured: true,
  },
];

const lineStriping: Project[] = [
  {
    id: 'killeen-ada-restripe',
    title: 'Killeen ADA Parking Lot Restripe',
    client: 'Medical Office',
    location: 'Killeen, TX',
    category: 'Line Striping',
    year: '2025',
    duration: '2 days',
    sqft: '18,000 sq ft',
    shortDesc: 'Full lot restripe with ADA stalls, fire lanes, and directional arrows.',
    fullDesc: 'Layout remapped for compliance and flow. Blackline laid out stalls, painted ADA spaces and access aisles, marked fire lanes, and refreshed arrows for clearer circulation.',
    result: 'Compliance Ready',
    tags: ['ADA', 'Striping', 'Killeen'],
    images: [
      { src: g('qwe.png'), alt: 'Fresh parking lot striping with ADA stalls', caption: '' },
    ],
    beforeImage: { src: g('sesrere.png'), alt: 'Faded striping before restripe' },
    afterImage:  { src: g('qwe.png'), alt: 'Lot after Blackline striping' },
    featured: true,
  },
];

const potholeRepair: Project[] = [
  {
    id: 'waco-clinic-patches',
    title: 'Waco Clinic Entrance Pothole Repair',
    client: 'Medical Clinic',
    location: 'Waco, TX',
    category: 'Pothole Repair',
    year: '2025',
    duration: '1 day',
    sqft: '450 sq ft',
    shortDesc: 'Cut-and-patch repairs at patient entrance with proper compaction.',
    fullDesc: 'Multiple potholes at the drop-off created trip and vehicle hazards. Blackline square-cut patches, cleaned edges, placed hot-mix, and compacted for a smooth, lasting repair.',
    result: 'Safety Fix',
    tags: ['Patch', 'Commercial', 'Waco'],
    images: [
      { src: g('uikhj.png'), alt: 'Asphalt pothole patch at clinic entrance', caption: '' },
    ],
  },
];

const overlayResurfacing: Project[] = [
  {
    id: 'hewitt-mill-overlay',
    title: 'Hewitt Mill & Overlay — Office Park',
    client: 'Property Manager',
    location: 'Hewitt, TX',
    category: 'Overlay & Resurfacing',
    year: '2025',
    duration: '1 week',
    sqft: '22,000 sq ft',
    shortDesc: 'Mill and overlay to restore ride quality without full reconstruction.',
    fullDesc: 'Surface was oxidized and raveled but base remained sound. Blackline milled high spots, applied tack, overlaid with hot-mix, and restored drainage flow for the office park.',
    result: 'Surface Restored',
    tags: ['Mill & Overlay', 'PM', 'Hewitt'],
    images: [
      { src: g('werwer.png'), alt: 'Office park asphalt after mill and overlay', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'mcgregor-yard-overlay',
    title: 'McGregor Industrial Yard Overlay',
    client: 'Industrial Tenant',
    location: 'McGregor, TX',
    category: 'Overlay & Resurfacing',
    year: '2024',
    duration: '4 days',
    sqft: '15,000 sq ft',
    shortDesc: 'Heavy-use yard overlay with edges tied into truck routes.',
    fullDesc: 'Industrial yard needed a smoother, thicker surface for truck traffic. Overlay design matched equipment loads and kept shipping operations online with phased access.',
    result: 'Heavy-Duty Surface',
    tags: ['Industrial', 'Overlay', 'McGregor'],
    images: [
      { src: g('zXas.png'), alt: 'Industrial yard asphalt overlay', caption: '' },
    ],
  },
];

const ALL_PROJECTS: Project[] = [
  ...asphaltPaving,
  ...sealcoating,
  ...parkingLots,
  ...lineStriping,
  ...potholeRepair,
  ...overlayResurfacing,
];

export const CATEGORIES: ProjectCategory[] = [
  'Asphalt Paving',
  'Sealcoating',
  'Parking Lots',
  'Line Striping',
  'Pothole Repair',
  'Overlay & Resurfacing',
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'Asphalt Paving': asphaltPaving,
  'Sealcoating': sealcoating,
  'Parking Lots': parkingLots,
  'Line Striping': lineStriping,
  'Pothole Repair': potholeRepair,
  'Overlay & Resurfacing': overlayResurfacing,
};

export function getAllProjects(): Project[] {
  return ALL_PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return ALL_PROJECTS.filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return ALL_PROJECTS.filter((p) => p.category === category);
}

export default ALL_PROJECTS;
