export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Híbrido de Negócio Local e Tech
    "name": "BitBloom AI",
    "image": "https://www.bitbloomai.com/images/logo.png",
    "description": "Software house especializada em sites, sistemas e automações com inteligência artificial. Atendemos todo o Brasil com sede em Minas Gerais.",
    "@id": "https://www.bitbloomai.com",
    "url": "https://www.bitbloomai.com",
    "telephone": "+5532999526526",
    "priceRange": "$$$", // Indica serviço premium/customizado
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São João del-Rei",
      "addressRegion": "MG",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.1356, // Coordenadas aprox de SJDR (ajuda no SEO local)
      "longitude": -44.2612
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bitbloomai",
      "https://www.instagram.com/bitbloomai"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desenvolvimento de Sites e Landing Pages"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automação com Inteligência Artificial"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desenvolvimento de Sistemas SaaS e Apps"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}