"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./Parallax.css";

export default function Parallax() {
  const sectionRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Variáveis de Estado para Animação (Lerp)
    let currentX = 0;
    let targetX = 0;
    let currentRot = 0;
    let targetRot = 0;
    let animationFrameId;

    const animateScrollFx = () => {
      const section = sectionRef.current;
      
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionCenter = sectionRect.top + sectionRect.height / 2;
      const screenCenter = window.innerHeight / 2;
      const distanceFromCenter = screenCenter - sectionCenter;

      // Se visível, calcula o alvo
      if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
        // Velocidade baseada no scroll (0.3)
        targetX = Math.abs(distanceFromCenter * 0.3);
        targetRot = distanceFromCenter * 0.1;
      }

      // Lerp (Suavização)
      currentX += (targetX - currentX) * 0.05;
      currentRot += (targetRot - currentRot) * 0.05;

      const finalX = Math.max(0, currentX);

      // Aplica transformações
      if (textLeftRef.current) textLeftRef.current.style.transform = `translateX(-${finalX}px)`;
      if (textRightRef.current) textRightRef.current.style.transform = `translateX(${finalX}px)`;
      if (logoRef.current) logoRef.current.style.transform = `rotateY(${currentRot}deg) rotateZ(${currentRot * 0.05}deg)`;

      animationFrameId = requestAnimationFrame(animateScrollFx);
    };

    // Inicia loop
    animationFrameId = requestAnimationFrame(animateScrollFx);

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="scroll-fx-section" id="scrollFxSection" ref={sectionRef}>
      
      <div className="fx-text-container left">
        <h2 className="fx-text" ref={textLeftRef}>
          <span className="text-highlight">Inove.</span>
        </h2>
      </div>

      <div className="fx-center-stage">
        <div className="fx-aura"></div>
        <div className="fx-logo-wrapper" id="logo3d" ref={logoRef}>
          <img 
            src="/images/logo-3d.png" 
            alt="BitBloom Logo 3D" 
            className="fx-logo-img front" 
          />
          <img 
            src="/images/logo-3d.png" 
            alt="BitBloom Logo 3D" 
            className="fx-logo-img back" 
          />
        </div>
      </div>

      <div className="fx-text-container right">
        <h2 className="fx-text" ref={textRightRef}>
          <span className="text-highlight">Floresça.</span>
        </h2>
      </div>

    </section>
  );
}