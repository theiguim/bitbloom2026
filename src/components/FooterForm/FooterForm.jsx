"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button/Button";
import "./FooterForm.css";

export default function FooterForm() {
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
        details: ""
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    service: "Contato Rodapé",
                    company: "Via Footer",
                    investment: "Não informado"
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", whatsapp: "", email: "", details: "" });
                
                // Volta o formulário após 5 segundos (opcional)
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Erro:", error);
            setStatus("error");
        }
    };

    return (
        <div className="footer-newsletter">
            
            {/* LÓGICA: Se sucesso, exibe APENAS a mensagem. Se não, exibe TUDO do form. */}
            
            {status === "success" ? (
                <div className="success-wrapper fade-in-fast">
                    <div className="success-icon-bg">
                        <CheckCircle2 size={40} color="#4ade80" strokeWidth={2} />
                    </div>
                    <h4>Solicitação Recebida!</h4>
                    <p>Nossa equipe de engenharia analisará sua demanda e entrará em contato em breve.</p>
                </div>
            ) : (
                <div className="form-content-wrapper fade-in-fast">
                    <h3>Alguma dúvida?</h3>
                    <p>Preencha os dados abaixo e nossa equipe entrará em contato para discutir como podemos inovar o seu negócio.</p>

                    <form className="newsletter-form contact-expanded" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Seu nome" 
                                    required 
                                    className="form-input" 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="tel" 
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="WhatsApp" 
                                    required 
                                    className="form-input" 
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Seu e-mail corporativo" 
                                required 
                                className="form-input" 
                            />
                        </div>

                        <div className="input-group">
                            <textarea 
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                placeholder="Como podemos ajudar?" 
                                rows="3" 
                                required 
                                className="form-input"
                            ></textarea>
                        </div>

                        <Button type="submit" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
                        </Button>

                        {status === 'error' && (
                            <p className="error-text">Erro ao enviar. Tente novamente.</p>
                        )}
                    </form>

                    <p className="newsletter-disclaimer">Seus dados estão seguros conosco. Responderemos em até 24h úteis.</p>
                </div>
            )}
        </div>
    );
}