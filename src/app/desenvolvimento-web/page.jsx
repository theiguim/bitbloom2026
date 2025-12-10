import WebDevData from "./WebDevData";

export const metadata = {
  title: "Desenvolvimento de Sites e Sistemas Web de Alta Performance | BitBloom AI",
  description: "Construímos sites, sistemas e plataformas responsivas, rápidas e otimizadas para gerar resultados reais. Tecnologia Next.js e React.",
  keywords: [
    // Termos de Serviço
    "criação de sites profissionais",
    "desenvolvimento web next.js",
    "fábrica de software react",
    "desenvolvimento de sistemas web",

    // Termos de Solução/Produto
    "landing page alta conversão",
    "e-commerce headless shopify",
    "dashboard administrativo personalizado",
    "pwa progressive web app",

    // Termos de Benefício/Dor
    "site rápido google pagespeed",
    "otimização de core web vitals",
    "seo técnico para sites",
    "programação sob medida",

    // Branding
    "BitBloom AI",
    "Software House Brasil"
  ],
  alternates: {
    canonical: "https://www.bitbloomai.com/desenvolvimento-web",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function WebDevPage() {
  // Renderiza sem cidade (modo nacional)
  return <WebDevData />;
}