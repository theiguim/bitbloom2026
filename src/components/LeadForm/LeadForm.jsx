"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  LayoutTemplate, 
  Smartphone, 
  Bot, 
  Database
} from "lucide-react";
import "./LeadForm.css";
import Button from "../ui/Button/Button";

export default function LeadForm({ isOpen, onClose }) {
  // Estados do Formulário
  const [selectedService, setSelectedService] = useState("web");
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    company: "",
    details: "",
    investment: ""
  });
  
  // Estados de UI (Feedback)
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  // Lógica de Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Lógica ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Manipulador de Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Envio do Formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: selectedService }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setFormData({ name: "", whatsapp: "", email: "", company: "", details: "", investment: "" });
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className={`lead-overlay ${isOpen ? "active" : ""}`}>
      
      <div className="lead-close" onClick={onClose}>
        <span className="close-x-bar"></span>
        <span className="close-x-bar"></span>
      </div>

      <div className="lead-container">
        {/* MENSAGEM DE SUCESSO */}
        {status === "success" ? (
          <div style={{textAlign: 'center', padding: '4rem 0'}}>
             <div style={{width: 60, height: 60, background: '#4ade80', borderRadius: '50%', margin: '0 auto 1rem', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'2rem'}}>✓</div>
             <h2 style={{color: '#1d1d1f'}}>Recebemos sua solicitação!</h2>
             <p style={{color: '#86868b'}}>Nossa equipe entrará em contato em breve.</p>
          </div>
        ) : (
          <>
            <div className="lead-header">
              <div className="logo-wrapper-lead">
                 <Image src="/images/logo.png" alt="Logo BitBloom" width={150} height={35} className="logo-lead-content" />
              </div>
              <h2>Vamos construir o futuro.</h2>
              <p>Conte-nos sobre o seu desafio. Nossa equipe de engenharia analisará sua demanda e retornará com uma proposta técnica.</p>
            </div>

            <form className="lead-form" onSubmit={handleSubmit}>
              
              <label className="section-label">Qual o foco do projeto?</label>
              
              <div className="service-selection-grid">
                {/* Web */}
                <div className={`service-card-select ${selectedService === 'web' ? 'selected' : ''}`} onClick={() => setSelectedService('web')}>
                    <LayoutTemplate size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                    <span>Web / Plataforma</span>
                </div>
                {/* App */}
                <div className={`service-card-select ${selectedService === 'app' ? 'selected' : ''}`} onClick={() => setSelectedService('app')}>
                    <Smartphone size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                    <span>Mobile App</span>
                </div>
                {/* IA */}
                <div className={`service-card-select ${selectedService === 'ai' ? 'selected' : ''}`} onClick={() => setSelectedService('ai')}>
                    <Bot size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                    <span>IA & Automação</span>
                </div>
                {/* Sistemas */}
                <div className={`service-card-select ${selectedService === 'legacy' ? 'selected' : ''}`} onClick={() => setSelectedService('legacy')}>
                    <Database size={28} strokeWidth={1.5} style={{ marginBottom: '5px' }} />
                    <span>Sistemas/SaaS</span>
                </div>
              </div>

              <div className="form-grid-row">
                <div className="input-wrapper">
                  <label>Seu Nome</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome completo" required className="clean-input" />
                </div>
                <div className="input-wrapper">
                  <label>WhatsApp</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="(DDD) 99999-9999" required className="clean-input" />
                </div>
              </div>

              <div className="form-grid-row">
                <div className="input-wrapper">
                  <label>E-mail Corporativo</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="nome@suaempresa.com" required className="clean-input" />
                </div>
                <div className="input-wrapper">
                  <label>Nome da Empresa</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da empresa" className="clean-input" />
                </div>
              </div>

              <div className="input-wrapper" style={{ marginTop: "1rem" }}>
                <label>Detalhes da Demanda</label>
                <textarea name="details" value={formData.details} onChange={handleChange} rows="3" placeholder="Descreva brevemente..." className="clean-input"></textarea>
              </div>

              <div className="input-wrapper" style={{ marginTop: "1rem" }}>
                <label>Estimativa de Investimento</label>
                <select name="investment" value={formData.investment} onChange={handleChange} className="clean-input select-arrow">
                  <option value="" disabled>Selecione um intervalo</option>
                  <option value="Até R$ 10k">Até R$ 10k (MVP/Landing)</option>
                  <option value="R$ 10k - R$ 30k">R$ 10k - R$ 30k (Sistemas Médios)</option>
                  <option value="R$ 30k - R$ 80k">R$ 30k - R$ 80k (Projetos Robustos)</option>
                  <option value="+ R$ 80k">+ R$ 80k (Enterprise/IA Complexa)</option>
                  <option value="Não definido">Ainda não tenho orçamento definido</option>
                </select>
              </div>

              <Button className="lead-submit-btn" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Solicitar Análise Técnica'}
              </Button>
              
              {status === 'error' && <p style={{color:'red', textAlign:'center', marginTop:10}}>Erro ao enviar. Tente novamente ou chame no WhatsApp.</p>}

              <p className="lead-footer-text">Seus dados estão protegidos sob NDA padrão.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}