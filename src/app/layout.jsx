import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ChatModal from "@/components/ChatModal/ChatModal";
import Preloader from "@/components/Preloader/Preloader";
import JsonLd from "@/components/JsonLd/JsonLd"; 

const inter = Inter({ subsets: ["latin"] });

// --- SEO: ESTRATÉGIA DE DOMINAÇÃO LOCAL (SJDR) ---
export const metadata = {
  metadataBase: new URL("https://www.bitbloomai.com"),
  
  title: {
    default: "BitBloom AI | Criação de Sites e Software em São João del-Rei",
    template: "%s | BitBloom AI - SJDR"
  },
  
  description: "A 1ª Software House de Elite em São João del-Rei e Região. Transforme seu negócio com sites de alta performance, sistemas sob medida e automação com IA. Tecnologia de ponta perto de você.",
  
  applicationName: "BitBloom AI",
  
  keywords: [
    // 1. TERMOS DE CAUDA LONGA LOCAIS (Ouro para SEO Local)
    "Criação de sites em São João del-Rei",
    "Desenvolvimento de software SJDR",
    "Agência de sites em São João del-Rei",
    "Sistemas web Tiradentes e Região",
    "Automação comercial em São João del-Rei",
    "Empresa de TI em Minas Gerais",
    "Programador em São João del-Rei",
    
    // 2. SOLUÇÕES (Dor do Cliente)
    "Como vender mais online",
    "Sistema de gestão personalizado",
    "Automatizar atendimento WhatsApp",
    "Site rápido e moderno",
    
    // 3. AUTORIDADE TÉCNICA
    "Software House Next.js",
    "Desenvolvimento React Native",
    "Consultoria de IA para empresas",
    "BitBloom AI"
  ],

  authors: [{ name: "BitBloom AI Team", url: "https://www.bitbloomai.com" }],
  creator: "BitBloom AI",
  publisher: "BitBloom AI",
  
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

  // GEO TAGS (Importante para Mobile Search)
  // Essas meta tags ajudam o Google Maps e buscas "perto de mim"
  other: {
    "geo.region": "BR-MG",
    "geo.placename": "São João del-Rei",
    "geo.position": "-21.135;-44.261", // Coordenadas aproximadas de SJDR
    "ICBM": "-21.135, -44.261"
  },

  openGraph: {
    title: "BitBloom AI | Tecnologia de Ponta em São João del-Rei",
    description: "Software House especializada em soluções digitais. Sites, Sistemas e IA com engenharia de elite no coração de Minas.",
    url: "https://www.bitbloomai.com",
    siteName: "BitBloom AI",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "BitBloom AI - Software House SJDR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BitBloom AI | Software House SJDR",
    description: "Inove e Floresça. Desenvolvimento Web e IA em São João del-Rei.",
    images: ["/images/preview.png"],
  },

  icons: {
    icon: "/images/spin-logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  
  alternates: {
    canonical: "https://www.bitbloomai.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <JsonLd /> {/* ESSENCIAL PARA O LOCAL PACK (MAPA) */}
        <Preloader />
        <Header />
        {children}
        <Footer />
        <ChatModal />
      </body>
    </html>
  );
}