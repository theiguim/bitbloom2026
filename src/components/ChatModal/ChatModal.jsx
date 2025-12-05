"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react";
import "./ChatModal.css";

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  // Estados de Controle do Fluxo
  const [chatStep, setChatStep] = useState(0); // 0: Nome, 1: Motivo, 2: Finalizado
  const [userData, setUserData] = useState({ name: "", reason: "" });
  
  // Referência para auto-scroll
  const messagesEndRef = useRef(null);

  // Auto-scroll sempre que uma nova mensagem chegar
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Função para abrir/fechar
  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // Se estiver abrindo pela primeira vez (sem mensagens), inicia
    if (!isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage("bot", "Olá! Bem-vindo à BitBloom AI. Qual é o seu nome?");
      }, 600);
    }
  };

  // Adicionar mensagem ao array
  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  // Processar envio do usuário
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    addMessage("user", text);
    setInputValue(""); // Limpa input

    // Máquina de Estados
    if (chatStep === 0) {
      // Passo 0: Capturou Nome
      setUserData((prev) => ({ ...prev, name: text }));
      
      setTimeout(() => {
        addMessage("bot", `Prazer, ${text}! Qual o motivo do seu contato hoje?`);
      }, 800);
      
      setChatStep(1);

    } else if (chatStep === 1) {
      // Passo 1: Capturou Motivo
      setUserData((prev) => ({ ...prev, reason: text }));
      
      setTimeout(() => {
        addMessage("bot", "Perfeito! Estou gerando seu protocolo e te direcionando para o WhatsApp...");
        redirectToWhatsapp(userData.name, text); // Passa os dados atuais para garantir
      }, 800);
      
      setChatStep(2);
    }
  };

  // Lógica do WhatsApp
  const redirectToWhatsapp = (name, reason) => {
    const hour = new Date().getHours();
    let greeting = "Bom dia";
    if (hour >= 12 && hour < 18) greeting = "Boa tarde";
    if (hour >= 18) greeting = "Boa noite";

    const protocol = "BB-" + Math.floor(1000 + Math.random() * 9000);

    // Usa os parametros passados ou o estado (garantia de sincronismo)
    const finalName = name || userData.name;
    const finalReason = reason || userData.reason;

    const finalMessage = `${greeting}! 👋 Meu nome é ${finalName}.\nTenho interesse em: ${finalReason} 🛠️.\n\n🆔 Protocolo: ${protocol}\n(Aguardo atendimento ⏳)`;

    const phone = "5532999526526";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;

    // Delay para leitura antes de abrir (4s)
    setTimeout(() => {
      window.location.href = url; // Funciona melhor em iOS que window.open
    }, 4000);
  };

  // Enviar com Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-widget-container">
      
      {/* Janela do Chat */}
      <div className={`chat-window ${isOpen ? "active" : ""}`}>
        <div className="chat-header">
          <div className="chat-brand">
            <div className="chat-status-dot"></div>
            <span>Assistente BitBloom</span>
          </div>
          
          {/* Botão Fechar Customizado (X CSS) */}
          <div className="chat-close" onClick={toggleChat}>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {/* Elemento invisível para scroll */}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            id="chatInput" // ID mantido para o CSS de zoom fix
            placeholder="Digite sua resposta..."
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button id="chatSendBtn" onClick={handleSendMessage}>
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Botão Flutuante (Trigger) */}
      <button className="chat-trigger-btn" onClick={toggleChat}>
        <MessageSquare size={24} />
      </button>
    </div>
  );
}