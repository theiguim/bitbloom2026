import Image from "next/image";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header-center">
        <span className="section-tag">Portfólio</span>
        <h1 className="section-headline">+ 30 cases de sucesso.</h1>
        <p className="section-subhead">Empresas que confiam na nossa tecnologia para inovar.</p>
      </div>
      <div className="portfolio-img-wrapper">
        {/* Usando Image do Next para otimização */}
        <Image 
          src="/images/port.png" 
          alt="Logos dos clientes BitBloom AI" 
          width={1200}
          height={600}
          className="portf-img"
        />
      </div>
    </section>
  );
}