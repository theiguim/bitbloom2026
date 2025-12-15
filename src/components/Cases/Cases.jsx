"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./Cases.css";
import SectionHeader from "../ui/SectionHeader/SectionHeader";

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
        <SectionHeader tag="Cases Selecionados"
          title="Cases rescentes."
          align="left"
        />

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
            <img className="poster-img" src="/images/cases/lgnd-min.png" alt="Legendários" />
            <div className="poster-info">
              <p className="poster-cat">E-Commerce</p>
              <h3 className="poster-title">Legendários Las Campanas</h3>
            </div>
          </a>

          <a href="https://fg360transportes.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/fg-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Logística</p>
              <h3 className="poster-title">FG360 Transportes</h3>
            </div>
          </a>

          <a href="https://www.resolveonline.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/ro-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">HUB</p>
              <h3 className="poster-title">Resolve Online</h3>
            </div>
          </a>

          <a href="https://www.omneimperium.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/oi-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Contabilidade</p>
              <h3 className="poster-title">Omni Imperium</h3>
            </div>
          </a>
          <a href="https://www.labraengenharia.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/labra-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Engenharia</p>
              <h3 className="poster-title">Labra</h3>
            </div>
          </a>

          <a href="https://www.silvaneves.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/sn-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Advocacia</p>
              <h3 className="poster-title">Silva Neves</h3>
            </div>
          </a>
          <a href="https://www.forneria360.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/fornaria-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Delivery</p>
              <h3 className="poster-title">Fornaria 360º</h3>
            </div>
          </a>
          <a href="https://www.empreendimentosgran.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/granemp-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Construtora</p>
              <h3 className="poster-title">Gran Empreendimentos</h3>
            </div>
          </a>

          <a href="https://www.omegajunior.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/omega-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Engenharia</p>
              <h3 className="poster-title">Ômega Júnior</h3>
            </div>
          </a>

          <a href="https://www.advocaciaconrado.com/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/conrado-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Advocacia</p>
              <h3 className="poster-title">Conrado Advocacia</h3>
            </div>
          </a>

          <a href="https://joggybrasil.com.br/" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/joggy-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Produto</p>
              <h3 className="poster-title">JOGGY Brasil</h3>
            </div>
          </a>

          <a href="" target="_blank" className="project-poster">
            <img className="poster-img" src="/images/cases/realiza-min.png" alt="FG360" />
            <div className="poster-info">
              <p className="poster-cat">Imobiliaria</p>
              <h3 className="poster-title">Realiza Imóveis</h3>
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