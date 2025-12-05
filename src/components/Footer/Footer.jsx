import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="bitbloom-footer">
      <div className="footer-content">
        <div className="footer-newsletter">
          <h3>Alguma dúvida?</h3>
          <p>Preencha os dados abaixo e nossa equipe entrará em contato para discutir como podemos inovar o seu negócio.</p>

          <form className="newsletter-form contact-expanded">
            <div className="form-row">
              <div className="input-group">
                <input type="text" placeholder="Seu nome" required className="form-input" />
              </div>
              <div className="input-group">
                <input type="tel" placeholder="WhatsApp" required className="form-input" />
              </div>
            </div>

            <div className="input-group">
              <input type="email" placeholder="Seu e-mail corporativo" required className="form-input" />
            </div>

            <div className="input-group">
              <textarea placeholder="Como podemos ajudar?" rows="3" required className="form-input"></textarea>
            </div>

            <button type="submit" className="submit-btn">Enviar Solicitação</button>
          </form>

          <p className="newsletter-disclaimer">Seus dados estão seguros conosco. Responderemos em até 24h úteis.</p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-links-section">
          <div className="footer-brand-column">
            <Link href="#" className="footer-logo">
              <img src="/images/logo.png" alt="BitBloom AI Logo" />
            </Link>
            <p>CNPJ: 61.635.661/0001-88</p>
            <a href="mailto:bitbloomai@gmail.com" className="footer-email">bitbloomai@gmail.com</a>
            
            <div className="footer-socials">
              <a href="https://www.instagram.com/bitbloomai" target="_blank" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/bitbloomai" target="_blank" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/bitbloomai" target="_blank" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-nav-column">
            <h3>Produtos</h3>
            <ul>
              <li><Link href="#products">Omni Healthy</Link></li>
              <li><Link href="#products">Tô Dentro</Link></li>
              <li><Link href="#products">Fala Mecânico</Link></li>
              <li><Link href="#products">Forneria 360º</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <h3>Navegação</h3>
            <ul>
              <li><Link href="#">Início</Link></li>
              <li><Link href="#services">Serviços</Link></li>
              <li><Link href="#portfolio">Portfólio</Link></li>
              <li><Link href="#about">Sobre Nós</Link></li>
              <li><a href="https://wa.me/5532999526526" target="_blank">Suporte</a></li>
            </ul>
          </div>

          <div className="footer-contact-column">
            <h3>Contato</h3>
            <p>Pronto para inovar?</p>
            <p>Fale com nossos especialistas.</p>
            <button className="footer-btn">
                <a href="https://wa.me/5532999526526" target="_blank" className="footer-contact-btn" style={{ textDecoration: 'none', color: 'white' }}>
                  Entrar em contato
                </a>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 BitBloom AI. Todos os direitos reservados.</p>
          <p className="footer-tagline">Inove. Floresça.</p>
        </div>
      </div>
    </footer>
  );
}