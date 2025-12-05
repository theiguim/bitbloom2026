"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./Preloader.css";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // 1. Bloqueia o scroll assim que monta
    document.body.style.overflow = "hidden";

    // Função que remove o preloader
    const dismissPreloader = () => {
      setIsLoading(false); // Ativa a opacidade 0 (fade-out)
      
      // Espera a animação de opacidade (0.5s) terminar para remover do DOM
      setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "auto"; // Libera o scroll
      }, 500);
    };

    const handleLoad = () => {
      const video = document.querySelector("video");

      // Se houver vídeo na página
      if (video) {
        // Se já carregou o suficiente para tocar
        if (video.readyState >= 3) {
          dismissPreloader();
        } else {
          // Se não, espera carregar
          video.addEventListener("canplaythrough", dismissPreloader);
          video.addEventListener("error", dismissPreloader); // Segurança caso falhe
        }
      } else {
        // Se não tiver vídeo, libera logo
        dismissPreloader();
      }
    };

    // Verifica se a página inteira já carregou
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback de segurança: Se por algum motivo o load travar, libera em 4 segundos
    const safetyTimer = setTimeout(dismissPreloader, 4000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(safetyTimer);
      // Garante que o scroll volta ao normal se o componente desmontar
      document.body.style.overflow = "auto";
    };
  }, []);

  // Se já terminou a transição, não renderiza nada (remove do HTML)
  if (!shouldRender) return null;

  return (
    <div id="preloader" className={!isLoading ? "fade-out" : ""}>
      <div className="loader-container">
        <Image 
            src="/images/spin-logo.png" 
            alt="BitBloom Loading" 
            width={60} 
            height={60} 
            className="loader"
            priority // Carrega essa imagem com prioridade máxima
        />
      </div>
    </div>
  );
}