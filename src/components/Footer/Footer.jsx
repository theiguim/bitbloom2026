import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import "./Footer.css"
import Button from "../ui/Button/Button";
import FooterForm from "../FooterForm/FooterForm";

export default function Footer() {
  return (
    <footer className="bitbloom-footer">
      <div className="footer-content">

        <FooterForm />

        <div className="footer-divider"></div>

        <div className="footer-links-section">
          <div className="footer-brand-column">
            <Link href="#" className="footer-logo">
              <img src="/images/logo.png" alt="BitBloom AI Logo" />
            </Link>
            <p>CNPJ: 61.635.661/0001-88</p>
            <p>São João Del Rei, Minas Gerais</p>
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
            <Button className="footer-btn">
              <a href="https://wa.me/5532999526526" target="_blank" className="footer-contact-btn" style={{ textDecoration: 'none', color: 'white' }}>
                Entrar em contato
              </a>
            </Button>

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