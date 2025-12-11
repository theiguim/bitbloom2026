"use client";

import Image from "next/image";
import { ShieldCheck, Scale, Award, Zap, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import "./About.css";
import { useState, useEffect, useRef } from "react";

const triggerOrçamento = () => {
    const headerBtn = document.querySelector('.desktop-only');
    if (headerBtn) headerBtn.click();
};

export default function AboutPage() {
    // --- LÓGICA DE CONTAGEM ANIMADA ---
    const statsRef = useRef(null);
    const [countYears, setCountYears] = useState(0);
    const [countProjects, setCountProjects] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const section = statsRef.current;
        if (!section) return;

        const animateValue = (start, end, duration, setter) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setter(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                // Dispara assim que a section entra na tela (threshold 0.2 = 20% visível)
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateValue(0, 5, 1500, setCountYears);      // 0 a 5 em 1.5s
                    animateValue(0, 100, 2000, setCountProjects); // 0 a 100 em 2s
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <main className="about-page">

            {/* --- HERO: SOBRE + ALICERCES (DARK) --- */}
            <section className="about-main-hero">
                <div className="hero-aurora-bg"></div>

                <div className="hero-container">

                    {/* Cabeçalho do Hero (Customizado para Dark Mode via CSS) */}
                    <SectionHeader
                        tag="Sobre nós"
                        title="Os Fundamentos da BitBloom."
                        description="Antes de escrevermos uma linha de código, estabelecemos os princípios que guiam nossa engenharia."
                        className="aboutHeader" // Classe para forçar texto branco
                    />

                    {/* Grid de Alicerces (Integrado no Hero) */}
                    <div className="about-hero-values-grid">

                        <div className="about-hero-value-card">
                            <div className="h-icon"><ShieldCheck size={28} /></div>
                            <h3>Honra</h3>
                            <p>Valorizamos pessoas acima de códigos. Honramos a confiança de clientes e parceiros em cada etapa.</p>
                        </div>

                        <div className="about-hero-value-card">
                            <div className="h-icon"><Scale size={28} /></div>
                            <h3>Integridade</h3>
                            <p>Transparência radical. Agimos com retidão na engenharia e na negociação. O combinado é sagrado.</p>
                        </div>

                        <div className="about-hero-value-card">
                            <div className="h-icon"><Award size={28} /></div>
                            <h3>Excelência</h3>
                            <p>Do requisito ao suporte. Não aceitamos o "mais ou menos". Qualidade técnica absoluta.</p>
                        </div>

                        <div className="about-hero-value-card">
                            <div className="h-icon"><Zap size={28} /></div>
                            <h3>Inovação</h3>
                            <p>Nossa espinha dorsal. Usamos tecnologia de ponta para resolver problemas complexos de forma simples.</p>
                        </div>

                    </div>

                    <div className="about-scroll-indicator">
                        <ChevronDown size={32} />
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 2: A HISTÓRIA (LIGHT) --- */}
            <section className="about-story-section">
                <div className="about-story-content-wrapper">
                    <div className="about-story-content">
                        <h2 className="about-story-title">
                            Engenharia, Negócios e <br />
                            <span style={{ color: '#0071e3' }}>Propósito Compartilhado.</span>
                        </h2>

                        <p className="about-story-text">
                            A <strong>BitBloom AI</strong> nasceu da trajetória de dois amigos que carregam mais do que afinidade por tecnologia:
                            compartilham valores, propósito e anos de construção conjunta. Atuamos lado a lado em projetos missionários que nos ensinaram,
                            na prática, o significado de <strong>servir, liderar e transformar realidades</strong> — lições que hoje sustentam nossa cultura.
                        </p>

                        <p className="about-story-text">
                            O tempo nos conectou novamente no empreendedorismo.
                            <strong> Augusto</strong>, formando em Engenharia Mecânica (UFSJ) e fundador da <em>Black Brian</em>,
                            construiu repertório sólido em estratégia, gestão e desenvolvimento de negócios.
                            <strong> Igor</strong>, formado em Gestão de TI (IFMG), consolidou sua experiência atuando em startup local,
                            aprofundando-se em web, automações e produtos digitais.
                        </p>

                        <p className="about-story-text">
                            Unimos esses dois pilares — visão estratégica e excelência técnica — para criar a <strong >BitBloom AI</strong>.
                            <strong className="about-story-highlight"> Bit</strong> representa inovação, precisão, lógica e performance. <strong className="about-story-highlight">Bloom</strong> simboliza crescimento, evolução e impacto.
                            Acreditamos em tecnologia como força multiplicadora: inteligente, acessível e capaz de fazer negócios florescerem.
                        </p>
                    </div>


                    <div className="about-founders-image-wrapper">
                        <Image
                            src="/images/about-ia-image.png"
                            alt="Augusto e Igor - Fundadores BitBloom"
                            fill
                            className="about-founders-image"
                            priority
                        />
                    </div>
                </div>
            </section>
            <section className="about-expertise-strip" ref={statsRef}>
                <div className="about-expertise-content">

                    <div className="about-stat-item">
                        <h4>+{countYears} Anos</h4>
                        <p>Sinergia & Parceria</p>
                    </div>

                    <div className="about-stat-item">
                        <h4>{countProjects}%</h4>
                        <p>Projetos Customizados</p>
                    </div>

                    <div className="about-stat-item">
                        <h4>Engenharia</h4>
                        <p>High-Code & Performance</p>
                    </div>

                </div>
            </section>

        </main>
    );
}