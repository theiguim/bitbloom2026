export default function sitemap() {
  const baseUrl = 'https://www.bitbloomai.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Futuramente, quando criar páginas individuais, adicione aqui:
    // {
    //   url: `${baseUrl}/servicos`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}