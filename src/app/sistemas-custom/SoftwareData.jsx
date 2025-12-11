"use client";

import ServiceLanding from "@/components/Templates/ServiceLanding/ServiceLanding";
import { 
  Cpu, Server, ShieldCheck, Smartphone, Globe, Layout, 
  Database, GitBranch, Terminal, LineChart, Code2, Lock, Rocket
} from "lucide-react";

/* --- VISUAIS ABSTRATOS (MANTIDOS) --- */
const VisualArchitecture = () => (
  <div className="mini-dashboard" style={{alignItems:'center', justifyContent:'center', background:'#f8fafc', flexDirection:'column', gap: 15}}>
     <div style={{display:'flex', gap:10}}>
        <div style={{width:40, height:40, background:'#fff', border:'1px solid #e2e8f0', borderRadius:8, boxShadow:'0 4px 10px rgba(0,0,0,0.05)'}}></div>
        <div style={{width:40, height:40, background:'#fff', border:'1px solid #e2e8f0', borderRadius:8, boxShadow:'0 4px 10px rgba(0,0,0,0.05)'}}></div>
     </div>
     <div style={{height: 20, width: 2, background: '#cbd5e1'}}></div>
     <div style={{width: 100, height: 60, background: '#fff', border:'1px solid #0071e3', borderRadius: 12, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 10px 20px rgba(0, 113, 227, 0.15)'}}>
        <div style={{width: 60, height: 6, background: '#0071e3', borderRadius:4}}></div>
     </div>
     <div style={{height: 20, width: 2, background: '#cbd5e1'}}></div>
     <div style={{width: 80, height: 30, background: '#f1f5f9', border:'1px solid #e2e8f0', borderRadius: 50}}></div>
  </div>
);

const VisualMobile = () => (
  <div className="mini-product-card" style={{width: 140, height: 200, transform:'rotate(-5deg)', borderRadius: 20, border:'4px solid #f1f5f9'}}>
     <div style={{width: '40%', height: 4, background: '#e2e8f0', margin:'10px auto', borderRadius: 4}}></div>
     <div style={{padding: 15, display:'flex', flexDirection:'column', gap: 10}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
           <div style={{width: 20, height: 20, borderRadius: '50%', background:'#0071e3'}}></div>
           <div style={{width: 20, height: 6, background:'#e2e8f0', borderRadius: 4}}></div>
        </div>
        <div style={{height: 60, background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0'}}></div>
        <div style={{alignSelf:'flex-end', width: 30, height: 30, borderRadius: '50%', background:'#22c55e', boxShadow:'0 4px 10px rgba(34,197,94,0.3)'}}></div>
     </div>
  </div>
);

const VisualSecurity = () => (
  <div className="speed-visual" style={{flexDirection:'column', alignItems:'center', justifyContent:'center', height: 160}}>
      <div style={{position:'relative', width: 60, height: 70}}>
          <ShieldCheck size={60} color="#0f172a" strokeWidth={1.5} />
          <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
             <Lock size={20} color="#0071e3" fill="#0071e3" />
          </div>
      </div>
      <div style={{marginTop: 15, fontSize:'0.8rem', fontWeight:600, color:'#0f172a', background:'#f1f5f9', padding:'4px 12px', borderRadius:20}}>
          End-to-End Encrypted
      </div>
  </div>
);

// --- FUNÇÃO GERADORA DE CONTEÚDO DINÂMICO ---
const getContent = (city) => {
  
  // Variáveis Dinâmicas para Localização
  const badgeText = city ? `Software House ${city}` : "Enterprise Software";
  
  const heroTitlePart1 = city ? "Sistemas sob medida" : "Sistemas complexos,";
  const heroTitlePart2 = city ? `em ${city}.` : "simplificados.";
  
  const heroDescription = city 
    ? `Empresas líderes em <strong>${city}</strong> não usam planilhas. Projetamos sistemas sob medida e aplicativos mobile que centralizam sua operação, protegem dados e escalam com seu crescimento na região.`
    : `Abandone as planilhas e o software legado. Projetamos sistemas sob medida e aplicativos mobile que centralizam sua operação, protegem seus dados e escalam com seu crescimento.`;

  return {
    hero: {
      badge: badgeText,
      titlePart1: heroTitlePart1,
      titlePart2: heroTitlePart2,
      description: heroDescription,
      ctaText: "Iniciar Projeto de Software",
      subCta: "Arquitetura Escalável. Código Proprietário."
    },
    painPoints: {
      header: {
        tag: "Dores do Crescimento",
        title: "Sua empresa cresceu, seu sistema não.",
        description: <>O "puxadinho" tecnológico custa caro. Falhas de segurança, dados descentralizados e lentidão custam <span className="highlight-red">milhões</span> em oportunidades perdidas.</>
      },
      cards: {
        main: {
          icon: ShieldCheck,
          tag: "Cybersecurity First",
          title: "Segurança não é Opcional",
          desc: "Protegemos seu maior ativo: os dados. Implementamos criptografia de ponta a ponta, LGPD compliance e auditoria de acessos em todos os sistemas.",
          visualComponent: <VisualSecurity />
        },
        secondary: [
          {
            icon: Server,
            title: "Fim do Legado",
            desc: "Modernize sua operação sem parar a empresa. Migração segura de sistemas antigos para nuvem (Cloud-Native)."
          },
          {
            icon: GitBranch,
            title: "Propriedade Intelectual",
            desc: "O código é seu. Não prendemos você em contratos de licenciamento eternos. Entregamos o ativo digital completo."
          }
        ]
      }
    },
    solutions: {
      header: {
        tag: "Engenharia de Software",
        title: "O que fazemos?",
        description: "Soluções robustas para problemas reais. Do backoffice ao bolso do cliente."
      },
      cards: [
        {
          title: "Sistemas Web (SaaS/ERP)",
          desc: "Plataformas de gestão personalizadas. Controle financeiro, estoque, RH e logística em um único lugar, acessível de qualquer navegador.",
          icon: Layout,
          tags: ["React", "Node.js", "AWS"],
          visualComponent: <VisualArchitecture />,
          className: "lp-card"
        },
        {
          title: "Aplicativos Mobile (iOS/Android)",
          desc: "Apps nativos ou híbridos para sua força de vendas ou clientes. Notificações push, geolocalização e funcionamento offline.",
          icon: Smartphone,
          tags: ["React Native", "Flutter", "PWA"],
          visualComponent: <VisualMobile />,
          className: "saas-card"
        },
        {
          title: "API & Microserviços",
          desc: "Arquitetura modular que permite que seu sistema cresça em partes, conectando-se a bancos, IAs e parceiros.",
          icon: Terminal,
          tags: ["GraphQL", "REST", "Docker"],
          visualComponent: (
              <div className="mini-browser">
                  <div className="browser-body" style={{fontFamily:'monospace', fontSize:10, color:'#64748b', alignItems:'flex-start'}}>
                      <div>{`{`}</div>
                      <div style={{paddingLeft:10}}>{`"status": "connected",`}</div>
                      <div style={{paddingLeft:10}}>{`"latency": "12ms",`}</div>
                      <div style={{paddingLeft:10}}>{`"secure": true`}</div>
                      <div>{`}`}</div>
                  </div>
              </div>
          ),
          className: "ecom-card"
        }
      ]
    },
    process: {
      header: {
        tag: "Ciclo de Vida",
        title: "Software que evolui.",
        description: "Não entregamos e sumimos. Construímos parcerias de longo prazo."
      },
      steps: [
        {
          stepLabel: "01. Product Design",
          title: "Escopo & Prototipagem",
          desc: "Desenhamos cada tela e fluxo do sistema. Você valida a usabilidade antes de qualquer código ser escrito.",
          icon: Code2
        },
        {
          stepLabel: "02. MVP Ágil",
          title: "Primeira Entrega",
          desc: "Em vez de esperar 1 ano, entregamos as funções vitais em semanas para você já começar a operar e testar.",
          icon: Rocket
        },
        {
          stepLabel: "03. Escala & Cloud",
          title: "Infraestrutura",
          desc: "Hospedagem em servidores escaláveis (AWS/Google Cloud) que aguentam picos de acesso sem cair.",
          icon: Server
        },
        {
          stepLabel: "04. Manutenção",
          title: "Evolução Contínua",
          desc: "Monitoramento de erros 24/7 e implementação de novas features conforme seu negócio cresce.",
          icon: LineChart
        }
      ]
    },
    cta: {
      badge: "Fábrica de Software",
      titlePart1: "Chega de gambiarras.",
      titlePart2: "Construa seu Legado.",
      desc: "Sistemas personalizados são o diferencial das empresas líderes de mercado. Vamos desenhar a arquitetura do seu sucesso.",
      btnText: "Orçar Projeto de Sistema",
      subText: "Consultoria de arquitetura inclusa"
    }
  };
};

export default function SoftwareData({ city }) {
  const content = getContent(city);
  return <ServiceLanding content={content} />;
}