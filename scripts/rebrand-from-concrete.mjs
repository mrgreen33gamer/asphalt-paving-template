/**
 * Rebrand IronPath Concrete → Blackline Paving (asphalt)
 * Also remaps service/industry/blog slugs and key trade copy.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SKIP = new Set(['node_modules', '.next', '.git', 'GeoLite2-City.mmdb']);

// Ordered: longer / more specific first
const REPLACEMENTS = [
  // Identity
  ['IronPath Concrete', 'Blackline Paving'],
  ['ironpathconcrete.com', 'blacklinepaving.com'],
  ['ironpathconcrete', 'blacklinepaving'],
  ['IronPath', 'Blackline'],
  ['Ray Delgado', 'Vince Alvarez'],
  ['Owner & Lead Finisher', 'Owner & Lead Paving Contractor'],
  ['Lead Finisher', 'Lead Paving Contractor'],

  // Contact
  ['(254) 750-4400', '(254) 880-8080'],
  ['+12547504400', '+12548808080'],
  ['hello@ironpathconcrete.com', 'hello@blacklinepaving.com'],
  ['1800 S University Parks Dr, Waco, TX 76706', '4200 Franklin Ave, Waco, TX 76710'],
  ['1800 S University Parks Dr', '4200 Franklin Ave'],
  ['76706', '76710'],

  // Credentials / proof
  ['ACI-Trained Finishers · Bonded & Insured', 'Commercial Paving Contractor · Bonded & Insured'],
  ['ACI-Trained Finishers · Fully Insured', 'Commercial Paving Contractor · Fully Insured'],
  ['ACI-Trained · Bonded & Insured · Waco, TX', 'Commercial Paving · Bonded & Insured · Waco, TX'],
  ['ACI-Trained · Bonded & Insured', 'Commercial Paving Contractor · Bonded & Insured'],
  ['ACI-Trained Finishers', 'Commercial Paving Contractor'],
  ['ACI-trained finishers', 'commercial paving contractor'],
  ['ACI-trained', 'commercial paving'],
  ['ACI-Trained', 'Commercial Paving'],
  ['5-Year Workmanship Warranty', '2-Year Workmanship on New Pavement'],
  ['5-Year Workmanship', '2-Year Workmanship'],
  ['5-Yr Warranty', '2-Yr Warranty'],
  ['5-year workmanship warranty', '2-year workmanship on new pavement'],
  ['900+ Reviews', '800+ Reviews'],
  ['900+ reviews', '800+ reviews'],
  ['4,000+ Pours', '5,500+ Jobs'],
  ['4,000+ pours', '5,500+ jobs'],
  ['4,000+ pour', '5,500+ job'],
  ['Founded in 2008', 'Founded in 2003'],
  ['Since 2008', 'Since 2003'],
  ['since 2008', 'since 2003'],
  ['foundingDate: "2008"', 'foundingDate: "2003"'],
  ['"2008"', '"2003"'],

  // Taglines
  ['Driveways · Patios · Foundations Done Right', 'Asphalt Paving · Sealcoating · Striping'],
  ['Driveways · Patios · Foundations done right', 'Asphalt Paving · Sealcoating · Striping'],
  ['Driveways · Patios · Foundations', 'Asphalt Paving · Sealcoating · Striping'],
  ['Driveways, Patios & Foundations', 'Asphalt Paving, Sealcoating & Striping'],
  ['driveways, patios & walkways, foundations, stamped & decorative concrete, concrete repair, and commercial flatwork',
    'asphalt paving, sealcoating, parking lots, line striping, pothole repair, and overlay & resurfacing'],
  ['driveways, patios, foundations, decorative pours, repairs, and commercial flatwork',
    'asphalt paving, sealcoating, parking lots, striping, pothole repair, and overlays'],
  ['Driveways, patios, foundations, stamped concrete & commercial flatwork',
    'Asphalt paving, sealcoating, parking lots, striping & overlays'],

  // Colors (concrete warm → slate charcoal + amber)
  ['#b45309', '#f59e0b'],
  ['#d97706', '#fbbf24'],
  ['#92400e', '#b45309'],
  ['#1c1410', '#1e293b'],
  ['#2a1f18', '#334155'],
  ['#faf7f2', '#f8fafc'],
  ['#a89078', '#94a3b8'],
  ['#6b5644', '#64748b'],
  ['#e8dcc8', '#cbd5e1'],

  // Service slug paths (longer first)
  ['/services/commercial-flatwork', '/services/overlay-resurfacing'],
  ['/services/stamped-decorative', '/services/line-striping'],
  ['/services/concrete-repair', '/services/pothole-repair'],
  ['/services/patios-walkways', '/services/sealcoating'],
  ['/services/foundations', '/services/parking-lots'],
  ['/services/driveways', '/services/asphalt-paving'],

  // Industry slug paths
  ['/industries/property-management', '/industries/schools-municipal'],
  ['/industries/municipalities', '/industries/industrial-yards'],
  ['/industries/homebuilders', '/industries/retail-centers'],

  // Blog slugs
  ['how-long-before-drive-on-new-concrete', 'when-to-sealcoat-asphalt-texas'],
  ['stamped-vs-broom-finish-texas', 'pothole-repair-vs-overlay'],
  ['foundation-cracks-when-to-call', 'parking-lot-striping-compliance'],

  // Service titles (UI labels)
  ['Stamped & Decorative Concrete', 'Line Striping'],
  ['Stamped & Decorative', 'Line Striping'],
  ['Commercial Flatwork', 'Overlay & Resurfacing'],
  ['Patios & Walkways', 'Sealcoating'],
  ['Concrete Repair', 'Pothole Repair'],
  ['Concrete Driveways', 'Asphalt Paving'],
  ['Concrete Services', 'Asphalt Paving Services'],
  ['concrete contractor', 'asphalt paving contractor'],
  ['Concrete contractor', 'Asphalt paving contractor'],
  ['Concrete Contractor', 'Asphalt Paving Contractor'],
  ['concrete company', 'asphalt paving company'],
  ['concrete driveway', 'asphalt paving'],
  ['Concrete driveway', 'Asphalt paving'],
  ['patio concrete', 'sealcoating'],
  ['foundation pour', 'parking lot paving'],
  ['stamped concrete', 'line striping'],
  ['commercial flatwork', 'overlay and resurfacing'],
  ['concrete repair', 'pothole repair'],
  ['Concrete Driveway', 'Asphalt Paving'],

  // Industry titles
  ['Municipalities & Public Works', 'Industrial Yards'],
  ['Property Management', 'Schools & Municipal'],
  ['Homebuilders', 'Retail Centers'],
  ['homebuilders', 'retail centers'],
  ['property management', 'schools and municipal'],
  ['municipalities', 'industrial yards'],

  // Category labels in projects
  ["'Driveways'", "'Asphalt Paving'"],
  ["'Patios & Walkways'", "'Sealcoating'"],
  ["'Foundations'", "'Parking Lots'"],
  ["'Stamped & Decorative'", "'Line Striping'"],
  ["'Concrete Repair'", "'Pothole Repair'"],
  ["'Commercial Flatwork'", "'Overlay & Resurfacing'"],
  ['| \'Driveways\'', '| \'Asphalt Paving\''],
  ['| \'Patios & Walkways\'', '| \'Sealcoating\''],
  ['| \'Foundations\'', '| \'Parking Lots\''],
  ['| \'Stamped & Decorative\'', '| \'Line Striping\''],
  ['| \'Concrete Repair\'', '| \'Pothole Repair\''],
  ['| \'Commercial Flatwork\'', '| \'Overlay & Resurfacing\''],

  // Misc trade words
  ['HomeAndConstructionBusiness', 'HomeAndConstructionBusiness'],
  ['Waco TX Concrete', 'Waco TX Asphalt Paving'],
  ['Waco TX Driveways', 'Waco TX Asphalt Paving'],
  ['pour', 'pave'], // careful - may over-replace; we'll fix after
];

// Safer targeted trade phrases after bulk (avoid blind pour→pave on everything)
// We'll skip the last pour→pave and do selective later

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?|scss|css|json|md|txt|mjs|xml|webmanifest)$/i.test(ent.name)) files.push(p);
  }
  return files;
}

function apply(text) {
  let out = text;
  // Exclude the dangerous pour→pave from list - handle separately
  for (const [from, to] of REPLACEMENTS) {
    if (from === 'pour') continue;
    if (out.includes(from)) out = out.split(from).join(to);
  }
  return out;
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  if (f.includes(`${path.sep}scripts${path.sep}rebrand`)) continue;
  const raw = fs.readFileSync(f, 'utf8');
  const next = apply(raw);
  if (next !== raw) {
    fs.writeFileSync(f, next, 'utf8');
    changed++;
    console.log('updated', path.relative(ROOT, f));
  }
}
console.log(`\nDone. ${changed} files updated.`);
