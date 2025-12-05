import Link from "next/link";
import "./Products.css";

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="section-header-center">
        <span className="tag-bracket">Portfólio de Produtos</span>
        <h2 className="section-title">Construído para escalar.</h2>
      </div>

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
              <button>Acessar plataforma</button>
            </a>
            <button className="alt-btn">Saiba mais</button>
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
              <button>Acessar Plataforma</button>
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
            <button>Acessar</button>
            <a href="https://falamecanico.vercel.app/" target="_blank">
              <button className="alt-btn">Saiba mais</button>
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
              <button>Acessar plataforma</button>
            </a>
            <button className="alt-btn">Contatar</button>
          </div>
        </div>

      </div>
    </section>
  );
}