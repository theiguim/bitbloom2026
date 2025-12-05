"use client";

import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  
  // Função para disparar abertura do Lead Form
  const openLeadForm = () => {
    // Dispara um evento customizado que o Header/LeadForm ouvirá
    // (Vamos precisar adicionar o listener no Header.jsx depois)
    // OU, mais simples: Expor uma função global temporária ou usar Context.
    
    // Como estamos migrando, vamos usar a abordagem mais direta:
    // O botão do Hero vai apenas simular o clique no botão do Header (invisível)
    // ou usaremos um Context simples no futuro.
    
    // Por enquanto, vamos assumir que você vai implementar um Context ou 
    // passar a prop se reestruturar o layout. 
    
    // HACK TEMPORÁRIO (Funciona se o botão do header tiver um ID):
    const headerBtn = document.querySelector('.desktop-only');
    if(headerBtn) headerBtn.click();
  };

  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video autoPlay muted loop playsInline poster="/images/preview.png">
          <source src="/images/hero-video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <div className="video-tint"></div>
        <div className="video-fade-gradient"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Inove. Floresça.</h1>
        
        <div 
          className="input-mockup" 
          onClick={openLeadForm} 
          style={{ cursor: "pointer" }}
        >
          <span className="input-text">Como podemos inovar o seu negócio?</span>
          <div className="input-icon">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}