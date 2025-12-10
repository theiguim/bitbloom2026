import { ArrowUpRight } from "lucide-react";
import "./Services.css";
import SectionHeader from "../ui/SectionHeader/SectionHeader";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="services-ref">
      <SectionHeader tag="Nossos Serviços"
        title="Engenharia de software para seu negócio."
        align="left"
      />


      <div className="services-grid-lines">

        {/* Coluna 1: Web Dev */}
        <div className="service-col">
          <h3>Web Development</h3>
          <p>Construímos sites, sistemas e plataformas responsivas, rápidas e otimizadas para gerar resultados reais para o seu negócio.</p>

          <div className="wireframe-visual">
            <div className="wf-window">
              <div className="wf-header">
                <div className="wf-dot red"></div>
                <div className="wf-dot yellow"></div>
                <div className="wf-dot green"></div>
              </div>
              <div className="wf-content">
                <div className="wf-bar w-40"></div>
                <div className="wf-bar w-70"></div>
                <div className="wf-bar w-55"></div>
              </div>
            </div>
          </div>

          <Link href='/desenvolvimento-web'>
            <div className="bottom-link">
              Saber mais <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

        {/* Coluna 2: IA */}
        <div className="service-col">
          <h3>Automações & IA</h3>
          <p>Automatizamos processos repetitivos e integramos diferentes ferramentas com eficiência usando nossa expertise em APIs, bots e fluxos inteligentes.</p>

          <div className="wireframe-visual">
            <div className="wf-circle"></div>
            <div className="wf-line-diagonal"></div>
          </div>

          <Link href='automacao-ia'>
            <div className="bottom-link">
              Automatizar <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

        {/* Coluna 3: Sistemas */}
        <div className="service-col">
          <h3>Sistemas Custom</h3>
          <p>Projetamos e desenvolvemos sistemas exclusivos, adaptados 100% às necessidades e realidade da sua empresa ou projeto.</p>

          <div className="wireframe-visual">
            <div className="wf-doc back"></div>
            <div className="wf-doc front">
              <div className="wf-content">
                <div className="wf-bar w-30 h-3"></div>
                <div className="wf-bar w-80 h-3 mt-20"></div>
                <div className="wf-bar w-80 h-3"></div>
              </div>
            </div>
          </div>

          <Link href='sistemas-custom'>
            <div className="bottom-link">
              Iniciar projeto <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}