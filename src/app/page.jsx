import Header from "@/components/Header/Header";
import styles from "./globals.css";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Parallax from "@/components/Parallax/Parallax";
import Products from "@/components/Products/Products";
import Portfolio from "@/components/Portfolio/Portfolio";
import Cases from "@/components/Cases/Cases";


export default function Home() {
  return (
    <>

      <Hero />
      <Services />
      <Parallax />
      <Products />
      <Portfolio />
      <Cases />
    </>
  );
}
