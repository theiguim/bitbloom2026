import Link from "next/link";
import "./Products.css";
import Button from "../ui/Button/Button";
import SectionHeader from "../ui/SectionHeader/SectionHeader";

export default function Products() {
  return (
    <section id="products" className="products">
      <SectionHeader tag="Portfólio de Produtos"
        title="Construído para escalar."
      />

      <div className="product-container-wrapper">

        {/* Produto 1 */}
        <div
          className="product-content"
          style={{ backgroundImage: "url(/images/products/omni.png)" }}
        >
          <h1>Omni Healthy</h1>
          <p>Plataforma médica com inteligência artificial integrada com gestão de pacientes e transcrição de consultas.</p>
          <div className="nav-btn">
            <a href="https://orquestra-med.vercel.app/" target="_blank">
              <Button>Acessar plataforma</Button>
            </a>
            <Button variant="alt">Saiba mais</Button>
          </div>
        </div>

        {/* Produto 2 */}
        <div
          className="product-content"
          style={{ backgroundImage: "url(/images/products/todentro.png)" }}
        >
          <h1>Tô Dentro</h1>
          <p>Uma plataforma de check-in digital para eventos, reuniões e atividades.</p>
          <div className="nav-btn">
            <a href="https://to-dentro-react.vercel.app/" target="_blank">
              <Button>Acessar plataforma</Button>
            </a>
          </div>
        </div>

        {/* Produto 3 */}
        <div
          className="product-content"
          style={{ backgroundImage: "url(/images/products/falamecanico.png)" }}
        >
          <h1>Fala Mecânico</h1>
          <p>Tire dúvidas técnicas em segundos através do whatsapp 24 horas por dia.</p>
          <div className="nav-btn">
            <Button>Acessar</Button>
            <a href="https://falamecanico.vercel.app/" target="_blank">
              <Button variant="alt">Saiba mais</Button>
            </a>
          </div>
        </div>

        {/* Produto 4 */}
        <div
          className="product-content"
          style={{ backgroundImage: "url(/images/products/forneria.png)" }}
        >
          <h1>Forneria Delivery</h1>
          <p>Sistema de pedidos e gestão online exclusivo para pizzarias.</p>
          <div className="nav-btn">
            <a href="#" target="_blank">
              <Button>Acessar plataforma</Button>
            </a>
            <Button variant="alt">Contatar</Button>
          </div>
        </div>

      </div>
    </section>
  );
}