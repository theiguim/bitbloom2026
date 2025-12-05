import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ChatModal from "@/components/ChatModal/ChatModal";
import Preloader from "@/components/Preloader/Preloader";
import JsonLd from "@/components/JsonLd/JsonLd"; // 

const inter = Inter({ subsets: ["latin"] });

// --- CONFIGURAÇÃO DE SEO DE ELITE ---
export const metadata = {
  metadataBase: new URL("https://www.bitbloomai.com"), // MUITO IMPORTANTE: Sua URL final
  
  title: {
    default: "BitBloom AI | Software House, Sites e Automação Inteligente",
    template: "%s | BitBloom AI"
  },
  
  description: "Transforme seu negócio com softwares sob medida, sites de alta performance e automações com IA. Entrega express, suporte dedicado e código zero template. Atendemos todo o Brasil.",
  
  applicationName: "BitBloom AI",
  
  keywords: [
    // Palavras-chave de Solução (Dor do Cliente)
    "Como criar um site de vendas",
    "Automatizar atendimento WhatsApp",
    "Desenvolvimento de aplicativo delivery",
    "Sistema de gestão para empresas",
    "Melhorar vendas online",
    "Site rápido para Google",
    
    // Palavras-chave de Serviço (O que você faz)
    "Software House Minas Gerais",
    "Desenvolvimento Web Next.js",
    "Criação de Landing Pages Alta Conversão",
    "Automação com Inteligência Artificial",
    "Consultoria de TI",
    "Fábrica de Software",
    "Ecommerce personalizado",
    
    // Diferenciais (USP)
    "Desenvolvimento de software ágil",
    "Sistemas sob medida sem template",
    "Software House Express",
    "BitBloom AI"
  ],

  authors: [{ name: "BitBloom AI Team", url: "https://www.bitbloomai.com" }],
  creator: "BitBloom AI",
  publisher: "BitBloom AI",
  
  // Como aparece no Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Como aparece no WhatsApp / Facebook / LinkedIn
  openGraph: {
    title: "BitBloom AI | Inove. Floresça.",
    description: "Software House especializada em soluções digitais de alta performance e IA. Do MVP ao Enterprise.",
    url: "https://www.bitbloomai.com",
    siteName: "BitBloom AI",
    images: [
      {
        url: "/images/preview.png", // Sua imagem de compartilhamento
        width: 1200,
        height: 630,
        alt: "BitBloom AI - Software House",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Como aparece no Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "BitBloom AI | Software House & IA",
    description: "Desenvolvimento sob medida e automações inteligentes. Entrega rápida e suporte premium.",
    images: ["/images/preview.png"],
  },

  // Ícones
  icons: {
    icon: "/favicon.ico", // Garanta que tenha um favicon na pasta public
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  
  // Canônico (Evita conteúdo duplicado)
  alternates: {
    canonical: "https://www.bitbloomai.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Cor da barra de navegação mobile (Safari/Chrome) */}
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <JsonLd /> {/* Injeção de Dados Estruturados */}
        <Preloader />
        <Header />
        {children}
        <Footer />
        <ChatModal />
      </body>
    </html>
  );
}