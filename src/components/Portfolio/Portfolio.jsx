import Image from "next/image";
import "./Portfolio.css";
import SectionHeader from "../ui/SectionHeader/SectionHeader";

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">

      <SectionHeader
        tag="Portfólio"
        title="+ 30 cases de sucesso."
        description="Empresas que confiam na nossa tecnologia para inovar."
      />

      <div className="portfolio-img-wrapper">
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