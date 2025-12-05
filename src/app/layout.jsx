import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ChatModal from "@/components/ChatModal/ChatModal";
import Preloader from "@/components/Preloader/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BitBloom AI | Inove. Floresça.",
  description: "Software House especializada em IA e Sistemas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Preloader />
        <Header />
        {children}
        <Footer />
        <ChatModal />
      </body>
    </html>
  );
}