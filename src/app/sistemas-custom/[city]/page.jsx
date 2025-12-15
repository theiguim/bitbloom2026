import SoftwareData from "../SoftwareData";
import { targetCities } from "@/lib/cities";

const formatCityName = (slug) => {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => {
        if (["de", "da", "do", "del", "em"].includes(word)) return word; 
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// SEO Dinâmico Local
export async function generateMetadata({ params }) {
  // CORREÇÃO: Extraindo da Promise com await
  const { city: citySlug } = await params;
  const city = formatCityName(citySlug);

  return {
    title: `Desenvolvimento de Sistemas e Apps em ${city} | BitBloom AI`,
    description: `Fábrica de Software em ${city}. Criamos sistemas ERP sob medida, aplicativos mobile e plataformas SaaS para empresas de ${city} e região.`,
    keywords: [
      `desenvolvimento de sistemas em ${city}`,
      `fábrica de software ${city}`,
      `criar aplicativo em ${city}`,
      `empresa de ti ${city}`,
      "react native", "custom software"
    ],
    alternates: {
      canonical: `https://www.bitbloomai.com/sistemas-custom/${citySlug}`,
    },
    openGraph: {
      title: `Líder em Desenvolvimento de Software em ${city} | BitBloom AI`,
      description: `Sua empresa em ${city} precisa de sistemas que escalam. Conheça nossa engenharia sob medida.`,
      images: ["/images/preview.png"],
    },
  };
}

// SSG para cidades prioritárias
export async function generateStaticParams() {
  return targetCities.map((city) => ({ city }));
}

// CORREÇÃO: Componente async e await params
export default async function CitySoftwarePage({ params }) {
  const { city } = await params; 
  const cityName = formatCityName(city);
  
  return <SoftwareData city={cityName} />;
}