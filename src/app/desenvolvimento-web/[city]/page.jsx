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
  const city = formatCityName(params.city);

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
      canonical: `https://www.bitbloomai.com/desenvolvimento-web/${params.city}`,
    },
    openGraph: {
      title: `Líder em Desenvolvimento Web em ${city} | BitBloom AI`,
      description: `Sua empresa em ${city} merece um site de alta performance. Conheça a BitBloom AI.`,
      images: ["/images/preview.png"],
    },
  };
}

// 2. GERAÇÃO ESTÁTICA (SSG) - Opcional mas RECOMENDADO para SEO Extremo
// Isso cria as páginas HTML fisicamente na hora do build para as cidades principais.
// As outras cidades não listadas aqui serão geradas na hora do acesso (SSR).
export async function generateStaticParams() {
  // Em vez de digitar o array na mão, usamos o importado
  return targetCities.map((city) => ({ city }));
}

// 3. O COMPONENTE DA PÁGINA
export default function CityLandingPage({ params }) {
  const cityName = formatCityName(params.city);
  
  // Passa o nome da cidade formatado para o componente de dados
  return <WebDevData city={cityName} />;
}