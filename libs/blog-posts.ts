// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'when-to-sealcoat-asphalt-texas',
    title:    'When to Sealcoat Asphalt in Texas (Waco & Central Texas)',
    excerpt:  'How often Central Texas parking lots and driveways need sealcoat, what heat and UV do to asphalt, and the best seasonal window for a lasting coat.',
    category: 'Sealcoating',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Fresh sealcoat on asphalt driveway in Central Texas',
    featured: true,
  },
  {
    slug:     'pothole-repair-vs-overlay',
    title:    'Pothole Repair vs. Asphalt Overlay: Which Fix Is Right?',
    excerpt:  'When a patch is enough, when mill-and-overlay makes sense, and how to stop chasing the same pothole season after season.',
    category: 'Repairs',
    date:     'April 14, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Pothole repair compared with asphalt overlay options',
  },
  {
    slug:     'parking-lot-striping-compliance',
    title:    'Parking Lot Striping Compliance for Central Texas Businesses',
    excerpt:  'ADA stalls, fire lanes, directional arrows, and layout standards property managers should know before the next restriping project.',
    category: 'Striping',
    date:     'April 10, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Freshly striped commercial parking lot with ADA stalls',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
