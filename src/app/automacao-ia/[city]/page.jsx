import AutomacaoData from "../AutomacaoData";
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

export async function generateMetadata({ params }) {
  // Em metadata também precisa do await
  const { city: citySlug } = await params;
  const city = formatCityName(citySlug);

  return {
    title: `Automação de Processos e IA em ${city} | BitBloom AI`,
    description: `Consultoria de Automação e Inteligência Artificial em ${city}. Integre seus sistemas, crie chatbots e elimine trabalho manual. Atendimento para empresas de ${city} e região.`,
    keywords: [
      `automação de processos em ${city}`,
      `empresa de ia em ${city}`,
      `integração de sistemas ${city}`,
      `chatbot whatsapp ${city}`,
      "consultoria n8n", "python"
    ],
    alternates: {
      canonical: `https://www.bitbloomai.com/automacao-ia/${citySlug}`,
    },
    openGraph: {
      title: `Líder em Automação Comercial em ${city} | BitBloom AI`,
      description: `Sua empresa em ${city} rodando no piloto automático. Reduza custos e erros com nossa tecnologia.`,
      images: ["/images/preview.png"],
    },
  };
}

export async function generateStaticParams() {
  return targetCities.map((city) => ({ city }));
}

// CORREÇÃO AQUI: Componente async e await params
export default async function CityAutomacaoPage({ params }) {
  const { city } = await params; // Extrai a cidade da Promessa
  const cityName = formatCityName(city);
  
  return <AutomacaoData city={cityName} />;
}