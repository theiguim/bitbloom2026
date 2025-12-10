"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2, Zap, Layout, Code2, Rocket, MousePointerClick,
  Layers, ShoppingCart, ArrowRight, Search, PenTool
} from "lucide-react";
import Portfolio from "@/components/Portfolio/Portfolio";
import Cases from "@/components/Cases/Cases";
// import "../../app/globals.css";
import "./WebDevContent.css";

import Button from "../ui/Button/Button";
import SectionHeader from "../ui/SectionHeader/SectionHeader";

export default function WebDevContent() {

  const triggerOrçamento = () => {
    const headerBtn = document.querySelector('.desktop-only');
    if (headerBtn) headerBtn.click();
  };

  // --- LÓGICA DA TIMELINE ANIMADA ---
  const processRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;

      const { top, height } = processRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Começa a animar quando o topo da seção chega a 70% da tela
      const startPoint = windowHeight * 0.7;
      // Termina quando o final da seção passa
      const scrollDistance = -top + startPoint;

      // Calcula porcentagem (0 a 100)
      let progress = (scrollDistance / height) * 100;

      // Limita entre 0 e 100
      progress = Math.min(Math.max(progress, 0), 100);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="web-page">

      {/* --- HERO (Fundo Escuro - Deep Tech) --- */}
    <section className="web-hero">
        <div className="hero-noise"></div>
        {/* ADDED: Shared Animation Classes */}
        <div className="cta-grid-moving"></div> 
        <div className="cta-glow-center"></div>
        
        <div className="web-hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">
              <span className="pulse-dot"></span> Web Engineering
            </span>
          </div>
          <h1>
            Seu site deve ser seu melhor <br />
            <span className="text-gradient-modern">vendedor 24h.</span>
          </h1>
          <p>
            Esqueça templates lentos. Construímos ecossistemas digitais no 
            <strong> código</strong> com <strong>tecnologia de ponta</strong>. Carregamento instantâneo, 
            SEO nativo e design focado em conversão.
          </p>
          
          <div className="hero-cta-group">
            <Button variant="primary" size="lg" onClick={triggerOrçamento}>Quero um Site de Alta Performance</Button>
            <span className="hero-sub-text">Engenharia sob demanda. Zero templates.</span>
          </div>
        </div>
      </section>
      {/* --- BENTO GRID (Fundo Cinza Técnico + Pontos) --- */}
      <section className="web-comparison">
        <SectionHeader
          tag="Performance First"
          title="Por que a maioria falha?"
          description={
            <>
              Se o seu site demora <span className="highlight-red">3s</span> para carregar,
              você perdeu <span className="highlight-red">40%</span> da sua receita.
            </>
          }
        />





        <div className="bento-grid">
          <div className="bento-card main-feature">
            <div className="card-bg-glow"></div>
            <div className="bento-content">
              <div className="icon-header">
                <div className="icon-box-modern fast"><Zap size={28} /></div>
                <span className="tag-performance">Google Core Vitals</span>
              </div>
              <h3>Velocidade é Dinheiro.</h3>
              <p>Otimização byte a byte. Atingimos pontuação máxima no PageSpeed, reduzindo custo de anúncios e explodindo o orgânico.</p>
            </div>
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
          </div>
          <div className="stacked-column">
            <div className="bento-card secondary-feature">
              <div className="icon-box-modern design"><Layout size={24} /></div>
              <div>
                <h3>UX "Invisível"</h3>
                <p>Design tão fluido que guia o usuário até o botão de compra sem fricção cognitiva.</p>
              </div>
            </div>
            <div className="bento-card secondary-feature">
              <div className="icon-box-modern code"><Code2 size={24} /></div>
              <div>
                <h3>Ativo Proprietário</h3>
                <p>Sem plugins inseguros. Código robusto, limpo e que é 100% propriedade da sua empresa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (Fundo Branco Limpo) --- */}
      <section className="web-types">

        <SectionHeader
          tag="Ecossistema"
          title="O que construímos?"
          description='Não vendemos "telas". Entregamos infraestrutura digital focada em resultado.'
        />

        <div className="types-list-modern">
          <div className="service-card lp-card">
            <div className="service-content">
              <div className="service-icon"><Rocket size={24} /></div>
              <h3>Landing Pages de Alta Conversão</h3>
              <p>Páginas projetadas para tráfego pago. Carregamento instantâneo para não perder o clique do Ads.</p>
              <div className="tech-stack-mini"><span>Next.js</span><span>Tailwind</span><span>Motion</span></div>
            </div>
            <div className="service-visual">
              <div className="mini-browser">
                <div className="browser-header"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                <div className="browser-body">
                  <div className="skeleton-hero"><div className="s-line title"></div><div className="s-line subtitle"></div><div className="s-btn-cta"><span>COMPRAR</span><div className="cursor-arrow"><MousePointerClick size={24} fill="black" /></div></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-card saas-card">
            <div className="service-content">
              <div className="service-icon"><Layers size={24} /></div>
              <h3>SaaS & Dashboards</h3>
              <p>Painéis administrativos complexos. Gestão de dados, áreas de membros e automação de processos internos.</p>
              <div className="tech-stack-mini"><span>Postgres</span><span>Python</span><span>Node</span></div>
            </div>
            <div className="service-visual">
              <div className="mini-dashboard">
                <div className="dash-sidebar"></div>
                <div className="dash-main"><div className="dash-header"></div><div className="dash-grid"><div className="dash-card graph"><div className="bar b1"></div><div className="bar b2"></div><div className="bar b3"></div><div className="bar b4"></div></div><div className="dash-card info"></div></div></div>
              </div>
            </div>
          </div>
          <div className="service-card ecom-card">
            <div className="service-content">
              <div className="service-icon"><ShoppingCart size={24} /></div>
              <h3>E-commerce Headless</h3>
              <p>Lojas ultra-rápidas. Checkout transparente e experiência de aplicativo mobile na web.</p>
              <div className="tech-stack-mini"><span>Shopify API</span><span>Stripe</span><span>Vercel</span></div>
            </div>
            <div className="service-visual">
              <div className="mini-product-card"><div className="prod-img"><div className="flash-badge">OFERTA</div></div><div className="prod-info"><div className="s-line p-title"></div><div className="prod-bottom"><div className="s-line p-price"></div><div className="s-btn-add">+</div></div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESSO (Fundo com Grid Matemático Sutil) --- */}
      <section className="process-section" ref={processRef}>
        <div className="process-container">

          <SectionHeader
            tag="Metodologia"
            title="Da Ideia ao Scale-up."
            description='Um processo de engenharia, não de tentativa e erro.'
          />

          <div className="process-timeline">
            {/* Barra de Progresso Vertical */}
            <div className="timeline-track">
              <div className="timeline-fill" style={{ height: `${scrollProgress}%` }}></div>
            </div>

            <div className="process-steps">
              {/* Step 1 */}
              <div className={`process-step ${scrollProgress > 15 ? 'active' : ''}`}>
                <div className="step-icon-wrapper">
                  <div className="step-icon"><Search size={15} /></div>
                </div>
                <div className="step-content">
                  <span className="step-number">01. Discovery</span>
                  <h3>Imersão & Requisitos</h3>
                  <p>Mergulhamos no seu modelo de negócio. Definimos a stack técnica, o público-alvo e os KPIs de sucesso antes de escrever uma linha de código.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`process-step ${scrollProgress > 40 ? 'active' : ''}`}>
                <div className="step-icon-wrapper">
                  <div className="step-icon"><PenTool size={15} /></div>
                </div>
                <div className="step-content">
                  <span className="step-number">02. Blueprint</span>
                  <h3>Arquitetura & Design</h3>
                  <p>Nossa equipe de engenharia desenha a estrutura do banco de dados enquanto designers criam protótipos de alta fidelidade focados em UX.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`process-step ${scrollProgress > 65 ? 'active' : ''}`}>
                <div className="step-icon-wrapper">
                  <div className="step-icon"><Code2 size={15} /></div>
                </div>
                <div className="step-content">
                  <span className="step-number">03. High-Code Dev</span>
                  <h3>Desenvolvimento</h3>
                  <p>Programação robusta em React/Next.js. Integração de APIs, otimização de performance e implementação de segurança.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`process-step ${scrollProgress > 90 ? 'active' : ''}`}>
                <div className="step-icon-wrapper">
                  <div className="step-icon"><Rocket size={15} /></div>
                </div>
                <div className="step-content">
                  <span className="step-number">04. Launch & Scale</span>
                  <h3>Publicação e Otimização</h3>
                  <p>Deploy na Vercel/AWS. Testes finais de carga, configuração de SEO técnico e entrega do painel administrativo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUNDO BRANCO PARA PORTFOLIO/CASES --- */}
      <Portfolio />
      <Cases />

      {/* --- CTA FINAL (Fundo Escuro) --- */}
      <section className="web-final-cta-modern">
        <div className="cta-grid-moving"></div> 
        <div className="cta-glow-center"></div>
        <div className="cta-content-modern">
          <div className="cta-badge-status">
            <span className="status-dot"></span><span>Agenda Q4: Últimas Vagas</span>
          </div>
          <h2>Deixe os templates para os amadores. <br /><span className="text-white-gradient">Escale com Engenharia.</span></h2>
          <p>Não é apenas um site. É uma máquina de vendas operando 24/7. Agende uma análise técnica gratuita e pare de deixar dinheiro na mesa.</p>
          <div className="cta-action-group">
            <Button variant="cta" onClick={triggerOrçamento}>Agendar Consultoria Web</Button>
            <div className="cta-trust-text"><CheckCircle2 size={16} color="#4ade80" /><span>Resposta em até 24h</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}