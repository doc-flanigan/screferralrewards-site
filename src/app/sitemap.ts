import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/referral';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ['', '/get-the-code', '/rewards-ladder', '/event-tracker'];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));
}
