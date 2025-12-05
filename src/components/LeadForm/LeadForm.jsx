"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  LayoutTemplate, 
  Smartphone, 
  Bot, 
  Database, 
  ArrowRight 
} from "lucide-react";
import "./LeadForm.css";

export default function LeadForm({ isOpen, onClose }) {
  // Estado inicial
  const [selectedService, setSelectedService] = useState("web");

  // Lógica da tecla ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulário enviado! Serviço: ${selectedService}`);
  };

  return (
    <div className={`lead-overlay ${isOpen ? "active" : ""}`}>
      
      <div className="lead-close" onClick={onClose}>
        <span className="close-x-bar"></span>
        <span className="close-x-bar"></span>
      </div>

      <div className="lead-container">
        <div className="lead-header">
          <div className="logo-wrapper-lead">
             <Image 
                src="/images/logo.png" 
                alt="Logo BitBloom" 
                width={150} 
                height={35} 
                className="logo-lead-content" 
             />
          </div>
          <h2>Vamos construir o futuro.</h2>
          <p>
            Conte-nos sobre o seu desafio. Nossa equipe de engenharia analisará sua
            demanda e retornará com uma proposta técnica em até 24h.
          </p>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          
          <label className="section-label">Qual o foco do projeto?</label>
          
          <div className="service-selection-grid">
            
            {/* --- Opção Web --- */}
            <div 
                className={`service-card-select ${selectedService === 'web' ? 'selected' : ''}`}
                onClick={() => setSelectedService('web')}
            >
                <input 
                  type="radio" 
                  name="service" 
                  value="web" 
                  className="hidden-radio"
                  checked={selectedService === "web"}
                  readOnly // React controla o estado
                />
                <LayoutTemplate size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                <span>Web / Plataforma</span>
            </div>

            {/* --- Opção App --- */}
            <div 
                className={`service-card-select ${selectedService === 'app' ? 'selected' : ''}`}
                onClick={() => setSelectedService('app')}
            >
                <input 
                  type="radio" 
                  name="service" 
                  value="app" 
                  className="hidden-radio"
                  checked={selectedService === "app"}
                  readOnly
                />
                <Smartphone size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                <span>Mobile App</span>
            </div>

            {/* --- Opção IA --- */}
            <div 
                className={`service-card-select ${selectedService === 'ai' ? 'selected' : ''}`}
                onClick={() => setSelectedService('ai')}
            >
                <input 
                  type="radio" 
                  name="service" 
                  value="ai" 
                  className="hidden-radio"
                  checked={selectedService === "ai"}
                  readOnly
                />
                <Bot size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                <span>IA & Automação</span>
            </div>

            {/* --- Opção Sistemas --- */}
            <div 
                className={`service-card-select ${selectedService === 'legacy' ? 'selected' : ''}`}
                onClick={() => setSelectedService('legacy')}
            >
                <input 
                  type="radio" 
                  name="service" 
                  value="legacy" 
                  className="hidden-radio"
                  checked={selectedService === "legacy"}
                  readOnly
                />
                <Database size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                <span>Sistemas/SaaS</span>
            </div>

          </div>

          <div className="form-grid-row">
            <div className="input-wrapper">
              <label>Seu Nome</label>
              <input type="text" placeholder="Nome completo" required className="clean-input" />
            </div>
            <div className="input-wrapper">
              <label>WhatsApp</label>
              <input type="tel" placeholder="(DDD) 99999-9999" required className="clean-input" />
            </div>
          </div>

          <div className="form-grid-row">
            <div className="input-wrapper">
              <label>E-mail Corporativo</label>
              <input type="email" placeholder="nome@suaempresa.com" required className="clean-input" />
            </div>
            <div className="input-wrapper">
              <label>Nome da Empresa</label>
              <input type="text" placeholder="Nome da empresa" className="clean-input" />
            </div>
          </div>

          <div className="input-wrapper" style={{ marginTop: "1rem" }}>
            <label>Detalhes da Demanda</label>
            <textarea
              rows="3"
              placeholder="Descreva brevemente o que você precisa construir ou automatizar..."
              className="clean-input"
            ></textarea>
          </div>

          <div className="input-wrapper" style={{ marginTop: "1rem" }}>
            <label>Estimativa de Investimento (Opcional)</label>
            <select className="clean-input select-arrow" defaultValue="">
              <option value="" disabled>Selecione um intervalo</option>
              <option value="mvp">Até R$ 10k (MVP/Landing)</option>
              <option value="small">R$ 10k - R$ 30k (Sistemas Médios)</option>
              <option value="medium">R$ 30k - R$ 80k (Projetos Robustos)</option>
              <option value="enterprise">+ R$ 80k (Enterprise/IA Complexa)</option>
              <option value="undecided">Ainda não tenho orçamento definido</option>
            </select>
          </div>

          <button type="submit" className="lead-submit-btn">
            Solicitar Análise Técnica <ArrowRight size={18} />
          </button>

          <p className="lead-footer-text">Seus dados estão protegidos sob NDA padrão.</p>
        </form>
      </div>
    </div>
  );
}