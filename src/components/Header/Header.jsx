"use client"; // Obrigatório para usar Hooks (useState, useEffect)

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Importando o componente de Form
import LeadForm from "../LeadForm/LeadForm"; 
import "./Header.css";

export default function Header() {
  // 1. ESTADOS (Substituem as variáveis globais e querySelectors)
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  // 2. LÓGICA DE SCROLL (Substitui o handleScroll e addEventListener)
  useEffect(() => {
    const handleScroll = () => {
      // Pega altura da hero via ID ou classe (no React, tentamos evitar querySelector, mas para medir altura de outro elemento é aceitável)
      const hero = document.querySelector(".hero");
      const heroHeight = hero ? hero.offsetHeight : 500;
      const triggerPoint = heroHeight - 100;

      // Atualiza o estado "scrolled"
      if (window.scrollY > triggerPoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Limpeza do evento quando o componente desmonta (Importante no React)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. LÓGICA DO MENU E LEAD FORM (Substitui as funções toggle)
  const toggleMenu = () => {
    // Inverte o estado atual (true vira false, false vira true)
    setMenuOpen(!menuOpen);
    // Controla o scroll do body
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  const toggleLeadForm = () => {
    setLeadFormOpen(!leadFormOpen);
    document.body.style.overflow = !leadFormOpen ? "hidden" : "auto";
  };

  return (
    <>
      <header className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        
        <div className="header-left">
          <Link href="/" className="logo">
            {/* Troca de imagem via Lógica Ternária (React Way) */}
            <img 
              src={scrolled ? "/images/logo.png" : "/images/logo-w.png"} 
              alt="BitBloom AI Logo" 
            />
          </Link>
          
          <nav className="nav-desktop">
            <Link href="#services">Expertise</Link>
            <Link href="#products">Produtos</Link>
            <Link href="#portfolio">Cases</Link>
            <Link href="/about">Sobre</Link>
          </nav>
        </div>

        <div className="header-right">
          <button 
            onClick={toggleLeadForm} 
            className="try-btn desktop-only"
            style={{ cursor: "pointer" }}
          >
            Fazer Orçamento
          </button>

          <div className="mobile-menu-icon" id="mobileMenuBtn" onClick={toggleMenu}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
        </div>

        {/* MENU MOBILE CONTROLADO PELO ESTADO menuOpen */}
        <div className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}>
          <nav className="mobile-nav-content">
            <Link href="#services" onClick={toggleMenu}>Expertise</Link>
            <Link href="#services" onClick={toggleMenu}>Produtos</Link>
            <Link href="#portfolio" onClick={toggleMenu}>Cases</Link>
            <Link href="/about" onClick={toggleMenu}>Sobre</Link>

            <button onClick={() => { toggleMenu(); toggleLeadForm(); }} className="mobile-cta-btn">
              Fazer Orçamento
            </button>
          </nav>

          <div className="mobile-menu-footer">
            <Link href="#" onClick={toggleMenu}>
              <img src="/images/logo.png" alt="BitBloom Logo Small" />
            </Link>
          </div>
        </div>
      </header>

      {/* Componente Lead Form importado */}
      <LeadForm 
        isOpen={leadFormOpen} 
        onClose={toggleLeadForm} 
      />
    </>
  );
}