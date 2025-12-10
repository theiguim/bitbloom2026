import SoftwareData from "./SoftwareData";

export const metadata = {
  title: "Desenvolvimento de Sistemas Custom e Apps Mobile | BitBloom AI",
  description: "Fábrica de software especializada em sistemas web (SaaS), aplicativos mobile e modernização de legado. Engenharia de software robusta e escalável para empresas.",
  keywords: [
    "desenvolvimento de software customizado",
    "criar aplicativo mobile empresas",
    "sistema erp sob medida",
    "fábrica de software minas gerais",
    "desenvolvimento saas",
    "modernização de sistemas legado",
    "react native flutter development"
  ],
  alternates: {
    canonical: "https://www.bitbloomai.com/sistemas-custom",
  },
  openGraph: {
    title: "Engenharia de Software Sob Medida | BitBloom AI",
    description: "Sistemas exclusivos adaptados 100% à realidade da sua empresa. Mobile, Web e Cloud.",
    images: ["/images/preview.png"],
  },
};

export default function SoftwarePage() {
  return <SoftwareData />;
}