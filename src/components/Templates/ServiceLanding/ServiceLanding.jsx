"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Portfolio from "@/components/Portfolio/Portfolio";
import Cases from "@/components/Cases/Cases";
import Button from "@/components/ui/Button/Button";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import "./ServiceLanding.css";

export default function ServiceLanding({ content }) {
  
  const triggerOrçamento = () => {
    const headerBtn = document.querySelector('.desktop-only');
    if(headerBtn) headerBtn.click();
  };

  // --- LÓGICA DA TIMELINE ANIMADA ---
  const processRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;
      const { top, height } = processRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.7;
      const scrollDistance = -top + startPoint;
      let progress = (scrollDistance / height) * 100;
      progress = Math.min(Math.max(progress, 0), 100);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="web-page">
      
      {/* --- HERO --- */}
      <section className="web-hero">
        <div className="hero-noise"></div>
        <div className="cta-grid-moving"></div> 
        <div className="cta-glow-center"></div>
        
        <div className="web-hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">
              <span className="pulse-dot"></span> {content.hero.badge}
            </span>
          </div>  
          <h1>
            {content.hero.titlePart1} <br />
            <span className="text-gradient-modern">{content.hero.titlePart2}</span>
          </h1>
          <p dangerouslySetInnerHTML={{ __html: content.hero.description }}></p>
          
          <div className="hero-cta-group">
            <Button variant="primary" size="lg" onClick={triggerOrçamento}>
              {content.hero.ctaText}
            </Button>
            <span className="hero-sub-text">{content.hero.subCta}</span>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID COMPARISON --- */}
      <section className="web-comparison">
        <SectionHeader
          tag={content.painPoints.header.tag}
          title={content.painPoints.header.title}
          description={content.painPoints.header.description}
        />

        <div className="bento-grid">
          {/* Main Card (Esquerda) */}
          <div className="bento-card main-feature">
            <div className="card-bg-glow"></div>
            <div className="bento-content">
              <div className="icon-header">
                <div className="icon-box-modern fast">
                    {/* Renderizando componente de ícone passado via props */}
                    <content.painPoints.cards.main.icon size={28} />
                </div>
                <span className="tag-performance">{content.painPoints.cards.main.tag}</span>
              </div>
              <h3>{content.painPoints.cards.main.title}</h3>
              <p>{content.painPoints.cards.main.desc}</p>
            </div>
            {content.painPoints.cards.main.visualComponent}
          </div>

          {/* Coluna Direita (Stacked) */}
          <div className="stacked-column">
            {content.painPoints.cards.secondary.map((card, idx) => (
                <div key={idx} className="bento-card secondary-feature">
                    <div className="icon-box-modern design">
                        <card.icon size={24} />
                    </div>
                    <div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                </div> 
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES (Web Types) --- */}
      <section className="web-types">
        <SectionHeader
          tag={content.solutions.header.tag}
          title={content.solutions.header.title}
          description={content.solutions.header.description}
        />

        <div className="types-list-modern">
          {content.solutions.cards.map((card, idx) => (
             <div key={idx} className={`service-card ${card.className || ''}`}>
                <div className="service-content">
                  <div className="service-icon"><card.icon size={24}/></div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <div className="tech-stack-mini">
                      {card.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="service-visual">
                   {card.visualComponent}
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* --- PROCESSO (Timeline) --- */}
      <section className="process-section" ref={processRef}>
        <div className="process-container">
          <SectionHeader
            tag={content.process.header.tag}
            title={content.process.header.title}
            description={content.process.header.description}
          />

          <div className="process-timeline">
            <div className="timeline-track">
              <div className="timeline-fill" style={{ height: `${scrollProgress}%` }}></div>
            </div>

            <div className="process-steps">
              {content.process.steps.map((step, idx) => {
                 const activationPoint = 15 + (idx * 25); 
                 const isActive = scrollProgress > activationPoint;

                 return (
                  <div key={idx} className={`process-step ${isActive ? 'active' : ''}`}>
                    <div className="step-icon-wrapper">
                      <div className="step-icon"><step.icon size={15} /></div>
                    </div>
                    <div className="step-content">
                      <span className="step-number">{step.stepLabel}</span>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                 );
              })}
            </div>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: 'white' }}>
        <Portfolio />
        <Cases />
      </div>

      {/* --- CTA FINAL --- */}
      <section className="web-final-cta-modern">
        <div className="cta-grid-moving"></div> 
        <div className="cta-glow-center"></div>
        <div className="cta-content-modern">
          <div className="cta-badge-status">
            <span className="status-dot"></span><span>{content.cta.badge}</span>
          </div>
          <h2>{content.cta.titlePart1} <br /><span className="text-white-gradient">{content.cta.titlePart2}</span></h2>
          <p>{content.cta.desc}</p>
          <div className="cta-action-group">
            <Button variant="primary" size="lg" onClick={triggerOrçamento}>
               {content.cta.btnText}
            </Button>
            <div className="cta-trust-text">
                <CheckCircle2 size={16} color="#4ade80" /><span>{content.cta.subText}</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}