"use client";

import ServiceLanding from "@/components/Templates/ServiceLanding/ServiceLanding";
import { 
  Bot, Workflow, Database, Cpu, MessageSquare, Zap, 
  Share2, ShieldCheck, Terminal, Fingerprint, Code2 
} from "lucide-react";

/* --- COMPONENTES VISUAIS EXCLUSIVOS (MANTIDOS) --- */
const VisualBot = () => (
  <div className="mini-browser" style={{transform: 'translateY(0)'}}>
    <div className="browser-header" style={{justifyContent:'center', color:'#94a3b8', fontSize:10, letterSpacing:1}}>ASSISTENTE VIRTUAL</div>
    <div className="browser-body" style={{justifyContent:'flex-start', padding: 20, gap: 15}}>
        <div style={{alignSelf:'flex-start', background:'#f1f5f9', padding:'10px 15px', borderRadius:'12px 12px 12px 2px', maxWidth:'80%'}}>
            <div style={{width: 120, height: 6, background:'#cbd5e1', borderRadius:4, marginBottom:6}}></div>
            <div style={{width: 80, height: 6, background:'#cbd5e1', borderRadius:4}}></div>
        </div>
        <div style={{alignSelf:'flex-end', background:'#0071e3', padding:'10px 15px', borderRadius:'12px 12px 2px 12px', maxWidth:'70%'}}>
             <div style={{width: 90, height: 6, background:'rgba(255,255,255,0.6)', borderRadius:4}}></div>
        </div>
        <div style={{alignSelf:'flex-start', marginTop: 5}}>
            <div style={{display:'flex', gap:8}}>
                <div style={{width:80, height:24, border:'1px solid #e2e8f0', borderRadius:6}}></div>
                <div style={{width:80, height:24, background:'#0071e3', borderRadius:6, boxShadow:'0 4px 10px rgba(0,113,227,0.2)'}}></div>
            </div>
        </div>
    </div>
  </div>
);

const VisualIntegration = () => (
  <div className="mini-dashboard" style={{alignItems:'center', justifyContent:'center', background:'#f8fafc'}}>
     <div style={{position:'relative', width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{position:'absolute', width:'60%', height:2, background:'#cbd5e1', zIndex:0}}></div>
        <div style={{position:'absolute', height:'40%', width:2, background:'#cbd5e1', zIndex:0}}></div>
        <div style={{width:50, height:50, background:'#fff', border:'1px solid #e2e8f0', borderRadius:'50%', zIndex:1, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 10px 20px rgba(0,0,0,0.05)'}}>
            <div style={{width:8, height:8, background:'#0071e3', borderRadius:'50%'}}></div>
        </div>
        <div style={{position:'absolute', top:'20%', left:'20%', width:30, height:30, background:'#fff', border:'1px solid #e2e8f0', borderRadius:8}}></div>
        <div style={{position:'absolute', bottom:'20%', right:'20%', width:30, height:30, background:'#fff', border:'1px solid #e2e8f0', borderRadius:8}}></div>
     </div>
  </div>
);

const VisualAI = () => (
  <div className="mini-product-card" style={{width: 180, transform:'rotate(0deg)'}}>
    <div style={{padding:20, display:'flex', flexDirection:'column', gap:12}}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
            <div style={{width:30, height:6, background:'#e2e8f0', borderRadius:4}}></div>
            <div style={{width:6, height:6, background:'#22c55e', borderRadius:'50%'}}></div>
        </div>
        <div style={{width:'100%', height:4, background:'#f1f5f9', borderRadius:2, overflow:'hidden'}}>
            <div style={{width:'70%', height:'100%', background:'#0071e3'}}></div>
        </div>
        <div style={{width:'100%', height:4, background:'#f1f5f9', borderRadius:2}}></div>
        <div style={{width:'100%', height:4, background:'#f1f5f9', borderRadius:2}}></div>
        <div style={{marginTop:10, padding:10, background:'#f8fafc', borderRadius:8, border:'1px solid #e2e8f0'}}>
            <div style={{width:'40%', height:6, background:'#cbd5e1', borderRadius:4}}></div>
        </div>
    </div>
  </div>
);

// --- FUNÇÃO GERADORA DE CONTEÚDO (AGORA DINÂMICA) ---
const getContent = (city) => {
  
  // Variáveis Dinâmicas
  const badgeText = city ? `Automação em ${city}` : "AI & Automation";
  
  const heroTitlePart1 = city ? "Sua empresa em " + city : "Sua operação rodando no";
  const heroTitlePart2 = city ? "no piloto automático." : "piloto automático.";
  
  const heroDescription = city
    ? `Empresas de <strong>${city}</strong> perdem até 30% de margem com processos manuais. Desenvolvemos ecossistemas de automação que integram seu negócio e reduzem custos operacionais na região.`
    : `Elimine o trabalho manual repetitivo. Desenvolvemos ecossistemas de automação e agentes de IA que integram seu CRM, WhatsApp e ERP com precisão cirúrgica.`;

  return {
    hero: {
      badge: badgeText,
      titlePart1: heroTitlePart1,
      titlePart2: heroTitlePart2,
      description: heroDescription,
      ctaText: "Automatizar meu Negócio",
      subCta: "Integrações via código. Zero mensalidade de SaaS."
    },
    painPoints: {
      header: {
        tag: "Eficiência Operacional",
        title: "O custo invisível do manual.",
        description: <>Se sua equipe gasta <span className="highlight-red">2h/dia</span> copiando dados entre planilhas, você perde <span className="highlight-red">30%</span> da produtividade.</>
      },
      cards: {
        main: {
          icon: Zap,
          tag: "ROI Imediato",
          title: "Escala sem Contratação",
          desc: "Atenda 1.000 clientes com a mesma qualidade de 10. Nossos bots trabalham 24/7, sem férias, sem erro humano e com custo marginal zero por interação.",
          visualComponent: (
              <div className="speed-visual" style={{flexDirection:'column', alignItems:'center', justifyContent:'center', height: 160}}>
                  <div style={{fontSize:'3rem', fontWeight:'800', color:'#0071e3', letterSpacing:'-0.05em'}}>+300%</div>
                  <div style={{color:'#64748b', fontSize:'0.9rem', fontWeight:500}}>Capacidade de Atendimento</div>
              </div>
          )
        },
        secondary: [
          {
            icon: Database,
            title: "Dados Sincronizados",
            desc: "Fim do 'Ctrl+C Ctrl+V'. Seu Marketing, Vendas e Financeiro falando a mesma língua em tempo real."
          },
          {
            icon: Cpu,
            title: "IA Real, não Hype",
            desc: "Implementamos LLMs (GPT-4/Claude) treinados especificamente com a base de conhecimento da sua empresa."
          }
        ]
      }
    },
    solutions: {
      header: {
        tag: "O que automatizamos",
        title: "Inteligência aplicada ao processo.",
        description: "Do primeiro 'olá' no WhatsApp até a emissão da nota fiscal."
      },
      cards: [
        {
          title: "Agentes de Atendimento (IA)",
          desc: "Chatbots que entendem contexto, áudio e intenção. Agendam reuniões, tiram dúvidas técnicas e qualificam leads.",
          icon: MessageSquare,
          tags: ["WhatsApp API", "OpenAI", "Typebot"],
          visualComponent: <VisualBot />,
          className: "lp-card"
        },
        {
          title: "Integração de Sistemas (API)",
          desc: "Conectamos ferramentas que não conversam nativamente. Hubspot com ERP, Shopify com Logística, tudo via código.",
          icon: Workflow,
          tags: ["n8n", "Python", "Webhooks"],
          visualComponent: <VisualIntegration />,
          className: "saas-card"
        },
        {
          title: "Automação de Backoffice",
          desc: "Transforme tarefas manuais repetitivas em scripts de alta performance. Conciliação financeira, atualização de estoque e relatórios gerenciais sem tocar em planilhas.",
          icon: Terminal,
          tags: ["ETL & Dados", "Python", "Gestão Financeira"],
          visualComponent: <VisualAI />,
          className: "ecom-card"
        }
      ]
    },
    process: {
      header: {
        tag: "Workflow",
        title: "Nossa execução.",
        description: "Sem interromper sua operação atual. Construímos em paralelo."
      },
      steps: [
        {
          stepLabel: "01. Mapeamento",
          title: "Caça aos Gargalos",
          desc: "Analisamos sua operação para identificar onde estão as tarefas repetitivas de baixo valor agregado que consomem sua equipe.",
          icon: Share2
        },
        {
          stepLabel: "02. Arquitetura",
          title: "Desenho do Fluxo",
          desc: "Criamos a lógica da automação. Definimos gatilhos, condicionais e tratamento de erros para garantir robustez.",
          icon: Terminal
        },
        {
          stepLabel: "03. Code & Train",
          title: "Engenharia",
          desc: "Desenvolvemos os scripts de integração e treinamos a IA com seus dados proprietários para garantir respostas precisas.",
          icon: Code2
        },
        {
          stepLabel: "04. Deploy",
          title: "Operação Assistida",
          desc: "Colocamos no ar e monitoramos as primeiras semanas para calibrar a eficiência e garantir adoção da equipe.",
          icon: ShieldCheck
        }
      ]
    },
    cta: {
      badge: "Vagas para Consultoria",
      titlePart1: "Pare de perder tempo.",
      titlePart2: "Comece a lucrar tempo.",
      desc: "A automação se paga no primeiro mês. Agende uma análise de viabilidade dos seus processos.",
      btnText: "Mapear Oportunidades",
      subText: "Análise técnica gratuita"
    }
  };
};

// Componente Principal
export default function AutomacaoData({ city }) {
  const content = getContent(city);
  return <ServiceLanding content={content} />;
}