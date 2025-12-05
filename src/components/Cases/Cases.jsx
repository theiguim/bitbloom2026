"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./Cases.css";

export default function Cases() {
  const trackRef = useRef(null);

  // Lógica de Scroll dos Botões
  const handleScroll = (direction) => {
    if (trackRef.current) {
      // 320px (card width) + 40px (gap) = 360px
      const scrollAmount = 360; 
      
      if (direction === "left") {
        trackRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div>
          <span className="tag-bracket">Selected Works</span>
          <h2 className="gallery-title">Cases recentes.</h2>
        </div>
        <div className="scroll-hint">
          <div className="scroll-line"></div>
          Arraste / Scroll
          <ArrowRight className="icon-small" />
        </div>
      </div>

      <div className="gallery-wrapper">
        
        {/* Botão Esquerda */}
        <button 
          className="gallery-nav-btn prev" 
          aria-label="Scroll Left"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft />
        </button>

        <div className="gallery-track" ref={trackRef}>
          
          <a href="https://www.legendarioslascampanas.com" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/works/lgnd.png" alt="Legendários" />
            <div className="poster-info">
              <p className="poster-cat">E-Commerce</p>
              <h3 className="poster-title">Legendários Las Campanas</h3>
            </div>
          </a>

          <a href="https://fg360transportes.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/works/fg.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Logística</p>
              <h3 className="poster-title">FG360 Transportes</h3>
            </div>
          </a>

          <a href="https://blackbrian.com/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/works/bb.png" alt="Black Brian" />
            <div className="poster-info">
              <p className="poster-cat">Landing Page</p>
              <h3 className="poster-title">Black Brian</h3>
            </div>
          </a>

          <a href="https://www.silvaneves.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/works/sn.png" alt="Silva Neves" />
            <div className="poster-info">
              <p className="poster-cat">Jurídico</p>
              <h3 className="poster-title">Silva Neves Advocacia</h3>
            </div>
          </a>

          {/* Repetido apenas para mostrar scroll se necessário */}
          <a href="#" className="project-poster">
             <img className="poster-img" src="/images/works/bb.png" alt="Exemplo Extra" />
             <div className="poster-info">
               <p className="poster-cat">Tecnologia</p>
               <h3 className="poster-title">Mais Projetos...</h3>
             </div>
          </a>

        </div>

        {/* Botão Direita */}
        <button 
          className="gallery-nav-btn next" 
          aria-label="Scroll Right"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight />
        </button>

      </div>
    </section>
  );
}