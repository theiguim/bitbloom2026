import WebDevData from "../WebDevData";
import { targetCities } from "@/lib/cities";

// Função para formatar o slug (ex: sao-joao-del-rei -> São João del-Rei)
const formatCityName = (slug) => {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => {
        // Exceções para preposições minúsculas
        if (["de", "da", "do", "del", "em"].includes(word)) return word; 
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// 1. GERAÇÃO DINÂMICA DE METADATA (SEO DE PONTA)
export async function generateMetadata({ params }) {
  // CORREÇÃO: Extraindo da Promise com await
  const { city: citySlug } = await params;
  const city = formatCityName(citySlug);

  return {
    title: `Criação de Sites e Sistemas em ${city} | BitBloom AI`,
    description: `Software House em ${city}. Desenvolvimento de sites de alta performance, e-commerce e sistemas web sob medida para empresas de ${city} e região.`,
    keywords: [
      `criação de sites em ${city}`,
      `desenvolvimento web ${city}`,
      `software house ${city}`,
      `agência de sites ${city}`,
      "next.js", "react"
    ],
    alternates: {
      canonical: `https://www.bitbloomai.com/desenvolvimento-web/${citySlug}`,
    },
    openGraph: {
      title: `Líder em Desenvolvimento Web em ${city} | BitBloom AI`,
      description: `Sua empresa em ${city} merece um site de alta performance. Conheça a BitBloom AI.`,
      images: ["/images/preview.png"],
    },
  };
}

// 2. GERAÇÃO ESTÁTICA (SSG)
export async function generateStaticParams() {
  return targetCities.map((city) => ({ city }));
}

// 3. O COMPONENTE DA PÁGINA
// CORREÇÃO: Componente async e await params
export default async function CityLandingPage({ params }) {
  const { city } = await params; 
  const cityName = formatCityName(city);
  
  // Passa o nome da cidade formatado para o componente de dados
  return <WebDevData city={cityName} />;
}