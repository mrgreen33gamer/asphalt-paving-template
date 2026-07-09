// src/app/llms.txt/route.ts
// Blackline Paving — AI & LLM Content Index
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  const base = 'https://www.blacklinepaving.com';

  const content = `# Blackline Paving — AI & LLM Content Index

> Asphalt Paving · Sealcoating · Striping for Central Texas homes and businesses.

## About Blackline Paving

Blackline Paving is a locally owned asphalt paving contractor based in Waco, Texas, founded in 2003 by Vince Alvarez. We provide asphalt paving, sealcoating, parking lots, line striping, pothole repair, and overlay & resurfacing for residential and light commercial customers across Central Texas. All work is performed by a commercial paving contractor with flat-rate quotes and a 2-Year Workmanship on New Pavement on every job. Bonded & insured.

Contact: +1 (254) 880-8080 | hello@blacklinepaving.com
Address: 4200 Franklin Ave, Waco, TX 76710
Website: ${base}

## FAQ

Q: Who paves asphalt in Waco, TX?
A: Blackline Paving provides asphalt paving, sealcoating, parking lots, striping, and repairs in Waco, TX. Founded in 2003, commercial paving contractor, bonded & insured. Flat-rate quotes, 2-Year Workmanship on New Pavement. Call (254) 880-8080.

Q: What is Blackline Paving?
A: Blackline is a locally owned asphalt paving contractor in Waco, Texas. They provide asphalt paving, sealcoating, parking lots, line striping, pothole repair, and overlay & resurfacing for homes and businesses across Central Texas.

Q: Does Blackline serve Hewitt TX?
A: Yes. Blackline serves Hewitt and all of McLennan County with full asphalt paving services.

Q: Do you offer free estimates?
A: Yes. Free on-site estimates with no obligation. Call (254) 880-8080.

Q: How long before I can drive on new asphalt?
A: Passenger cars are often fine once hot-mix cools — frequently the same day or next morning. Heavy trucks may need longer. Blackline provides a specific timeline for each job.

Q: What warranty do you offer?
A: Every project is backed by a 2-Year Workmanship on New Pavement.

## Services

### Asphalt Paving
${base}/services/asphalt-paving

### Sealcoating
${base}/services/sealcoating

### Parking Lots
${base}/services/parking-lots

### Line Striping
${base}/services/line-striping

### Pothole Repair
${base}/services/pothole-repair

### Overlay & Resurfacing
${base}/services/overlay-resurfacing

## Industries

- Retail Centers: ${base}/industries/retail-centers
- Schools & Municipal: ${base}/industries/schools-municipal
- Industrial Yards: ${base}/industries/industrial-yards

## Projects Gallery

${base}/projects

## Key Pages

- Home: ${base}/
- About: ${base}/about
- Contact: ${base}/contact
- All Services: ${base}/services
- Service Areas: ${base}/service-areas
- Blog: ${base}/blogs
- Privacy Policy: ${base}/privacy-policy

## Service Areas

Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
