import { targetCities } from '@/lib/cities'; // <--- Importação da lista central

export default function sitemap() {
  const baseUrl = 'https://www.bitbloomai.com';

  const services = [
    'desenvolvimento-web',
    'automacao-ia',
    'sistemas-custom'
  ];

  // Gera URLs das páginas principais
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Gera URLs combinadas usando a lista centralizada
  const cityUrls = services.flatMap((service) => 
    targetCities.map((city) => ({
      url: `${baseUrl}/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...serviceUrls,
    ...cityUrls,
  ];
}