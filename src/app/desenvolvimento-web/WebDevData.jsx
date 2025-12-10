"use client";

import ServiceLanding from "@/components/Templates/ServiceLanding/ServiceLanding";
import { Zap, Layout, Code2, Rocket, MousePointerClick, Layers, ShoppingCart, Search, PenTool } from "lucide-react";

/* --- COMPONENTES VISUAIS (MANTIDOS ORIGINAIS) --- */
const VisualSpeed = () => (
  <div className="speed-visual">
    <div className="score-circle">
      <svg viewBox="0 0 36 36" className="circular-chart green">
        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x="18" y="20.35" className="percentage">100</text>
      </svg>
      <span className="score-label">Mobile Score</span>
    </div>
    <div className="graph-lines">
      <div className="line l-1"></div><div className="line l-2"></div><div className="line l-3"></div>
    </div>
  </div>
);

const VisualBrowser = () => (
  <div className="mini-browser">
    <div className="browser-header"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
    <div className="browser-body">
      <div className="skeleton-hero">
        <div className="s-line title"></div><div className="s-line subtitle"></div>
        <div className="s-btn-cta"><span>COMPRAR</span><div className="cursor-arrow"><MousePointerClick size={24} fill="black" /></div></div>
      </div>
    </div>
  </div>
);

const VisualDashboard = () => (
  <div className="mini-dashboard">
    <div className="dash-sidebar"></div>
    <div className="dash-main">
        <div className="dash-header"></div>
        <div className="dash-grid">
            <div className="dash-card graph"><div className="bar b1"></div><div className="bar b2"></div><div className="bar b3"></div><div className="bar b4"></div></div>
            <div className="dash-card info"></div>
        </div>
    </div>
  </div>
);

const VisualProduct = () => (
  <div className="mini-product-card">
    <div className="prod-img"><div className="flash-badge">OFERTA</div></div>
    <div className="prod-info">
        <div className="s-line p-title"></div>
        <div className="prod-bottom"><div className="s-line p-price"></div><div className="s-btn-add">+</div></div>
    </div>
  </div>
);

/* --- FUNÇÃO GERADORA DE CONTEÚDO DINÂMICO --- */
// Recebe 'city' (string ou null) para personalizar a copy
const getContent = (city) => {
  
  // Variáveis para personalização local
  const badgeText = city ? `Software House ${city}` : "Web Engineering";
  
  // Título e Descrição Adaptáveis
  const heroTitlePart1 = city ? "Líder em Desenvolvimento Web" : "Seu site deve ser seu melhor";
  const heroTitlePart2 = city ? `em ${city}.` : "vendedor 24h.";
  
  const heroDescription = city 
    ? `Empresas de <strong>${city}</strong> perdem vendas diariamente com sites lentos. Construímos ecossistemas digitais com <strong>Next.js</strong> que colocam seu negócio no topo do mercado local e nacional.`
    : `Esqueça templates lentos. Construímos ecossistemas digitais no <strong>código</strong> com <strong>tecnologia de ponta</strong>. Carregamento instantâneo, SEO nativo e design focado em conversão.`;

  return {
    hero: {
      badge: badgeText,
      titlePart1: heroTitlePart1,
      titlePart2: heroTitlePart2,
      description: heroDescription,
      ctaText: "Quero um Site de Alta Performance",
      subCta: "Engenharia sob demanda. Zero templates."
    },
    painPoints: {
      header: {
        tag: "Performance First",
        title: "Por que a maioria falha?",
        description: <>Se o seu site demora <span className="highlight-red">3s</span> para carregar, você perde <span className="highlight-red">40%</span> da sua receita.</>
      },
      cards: {
        main: {
          icon: Zap,
          tag: "Google Core Vitals",
          title: "Velocidade é Dinheiro.",
          desc: "Otimização byte a byte. Atingimos pontuação máxima no PageSpeed, reduzindo custo de anúncios e explodindo o orgânico.",
          visualComponent: <VisualSpeed />
        },
        secondary: [
          {
            icon: Layout,
            title: 'UX "Invisível"',
            desc: "Design tão fluido que guia o usuário até o botão de compra sem fricção cognitiva."
          },
          {
            icon: Code2,
            title: "Ativo Proprietário",
            desc: "Sem plugins inseguros. Código robusto, limpo e que é 100% propriedade da sua empresa."
          }
        ]
      }
    },
    solutions: {
      header: {
        tag: "Ecossistema",
        title: "O que construímos?",
        description: 'Não vendemos "telas". Entregamos infraestrutura digital focada em resultado.'
      },
      cards: [
        {
          title: "Landing Pages de Alta Conversão",
          desc: "Páginas projetadas para tráfego pago. Carregamento instantâneo para não perder o clique do Ads.",
          icon: Rocket,
          tags: ["Next.js", "Tailwind", "Motion"],
          visualComponent: <VisualBrowser />,
          className: "lp-card"
        },
        {
          title: "SaaS & Dashboards",
          desc: "Painéis administrativos complexos. Gestão de dados, áreas de membros e automação de processos internos.",
          icon: Layers,
          tags: ["Postgres", "Python", "Node"],
          visualComponent: <VisualDashboard />,
          className: "saas-card"
        },
        {
          title: "E-commerce Headless",
          desc: "Lojas ultra-rápidas. Checkout transparente e experiência de aplicativo mobile na web.",
          icon: ShoppingCart,
          tags: ["Shopify API", "Stripe", "Vercel"],
          visualComponent: <VisualProduct />,
          className: "ecom-card"
        }
      ]
    },
    process: {
      header: {
        tag: "Metodologia",
        title: "Da Ideia ao Scale-up.",
        description: "Um processo de engenharia, não de tentativa e erro."
      },
      steps: [
        {
          stepLabel: "01. Discovery",
          title: "Imersão & Requisitos",
          desc: "Mergulhamos no seu modelo de negócio. Definimos a stack técnica, o público-alvo e os KPIs de sucesso antes de escrever uma linha de código.",
          icon: Search
        },
        {
          stepLabel: "02. Blueprint",
          title: "Arquitetura & Design",
          desc: "Nossa equipe desenha a estrutura do banco de dados enquanto designers criam protótipos focados em UX.",
          icon: PenTool
        },
        {
          stepLabel: "03. High-Code Dev",
          title: "Desenvolvimento",
          desc: "Programação robusta em React/Next.js. Integração de APIs, otimização de performance e implementação de segurança.",
          icon: Code2
        },
        {
          stepLabel: "04. Launch & Scale",
          title: "Publicação e Otimização",
          desc: "Deploy na Vercel/AWS. Testes finais de carga, configuração de SEO técnico e entrega do painel administrativo.",
          icon: Rocket
        }
      ]
    },
    cta: {
      badge: "Agenda Q4: Últimas Vagas",
      titlePart1: "Deixe os templates para os amadores.",
      titlePart2: "Escale com Engenharia.",
      desc: "Não é apenas um site. É uma máquina de vendas operando 24/7. Agende uma análise técnica gratuita e pare de deixar dinheiro na mesa.",
      btnText: "Agendar Consultoria Web",
      subText: "Resposta em até 24h"
    }
  };
};

// Componente Principal: Recebe 'city' via props
export default function WebDevData({ city }) {
  const content = getContent(city);
  return <ServiceLanding content={content} />;
}