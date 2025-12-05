export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Exemplo: se tiver área admin
    },
    sitemap: 'https://www.bitbloomai.com/sitemap.xml',
  }
}