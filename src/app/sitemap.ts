import { MetadataRoute } from 'next';
import { products, collections } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rahaboutique.com';

  const productUrls = products.map((p) => ({
    url: `${baseUrl}/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const collectionUrls = collections.map((c) => ({
    url: `${baseUrl}/collections/${c.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const staticUrls = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/collections`, priority: 0.9 },
    { url: `${baseUrl}/new-arrivals`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.7 },
    { url: `${baseUrl}/search`, priority: 0.6 },
    { url: `${baseUrl}/wishlist`, priority: 0.5 },
    { url: `${baseUrl}/faq`, priority: 0.6 },
    { url: `${baseUrl}/shipping`, priority: 0.5 },
    { url: `${baseUrl}/privacy`, priority: 0.4 },
    { url: `${baseUrl}/terms`, priority: 0.4 },
  ].map((item) => ({
    ...item,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }));

  return [...staticUrls, ...productUrls, ...collectionUrls];
}
