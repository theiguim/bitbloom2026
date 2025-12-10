import AutomacaoData from "./AutomacaoData";

// --- SEO ESPECÍFICO PARA AUTOMAÇÃO ---
export const metadata = {
  title: "Automação de Processos com IA e Integração de Sistemas | BitBloom AI",
  description: "Elimine o trabalho manual da sua empresa. Criamos ecossistemas de automação inteligente, chatbots com IA e integrações de API para escalar sua operação sem aumentar custos.",
  keywords: [
    "automação de processos",
    "inteligência artificial para empresas",
    "integração de sistemas api",
    "chatbot whatsapp ia",
    "consultoria em automação",
    "n8n e python",
    "otimização de fluxo de trabalho",
    "agentes de ia"
  ],
  alternates: {
    canonical: "https://www.bitbloomai.com/automacao-ia",
  },
  openGraph: {
    title: "Sua empresa rodando no piloto automático | BitBloom AI",
    description: "Automação inteligente para reduzir custos e erros manuais. Conecte seu CRM, ERP e WhatsApp em um fluxo único.",
    images: ["/images/preview.png"], 
  },
};

export default function AutomacaoPage() {
  return <AutomacaoData />;
}