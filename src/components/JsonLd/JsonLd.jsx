export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Mais forte que LocalBusiness para Tech
    "name": "BitBloom AI",
    "image": "https://www.bitbloomai.com/images/logo.png",
    "description": "Software House em São João del-Rei especializada em desenvolvimento web, sistemas sob medida e automação com Inteligência Artificial. Engenharia de elite para empresas que buscam inovação.",
    "@id": "https://www.bitbloomai.com",
    "url": "https://www.bitbloomai.com",
    "telephone": "+5532999526526",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São João del-Rei",
      "addressRegion": "MG",
      "postalCode": "36300-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.1356,
      "longitude": -44.2612
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "São João del-Rei"
      },
      {
        "@type": "City",
        "name": "Tiradentes"
      },
      {
        "@type": "City",
        "name": "Barbacena"
      },
      {
        "@type": "City",
        "name": "Lavras"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Minas Gerais"
      }
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Augusto",
        "jobTitle": "Co-Founder & Business Engineer"
      },
      {
        "@type": "Person",
        "name": "Igor",
        "jobTitle": "Co-Founder & Tech Lead"
      }
    ],
    "knowsAbout": [
      "Engenharia de Software",
      "Inteligência Artificial",
      "Next.js",
      "React Native",
      "Automação de Processos",
      "Cloud Computing"
    ],
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
      "https://www.instagram.com/bitbloomai",
      "https://www.linkedin.com/company/bitbloomai"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desenvolvimento de Sites e Landing Pages de Alta Performance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automação com Inteligência Artificial e Chatbots"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desenvolvimento de Sistemas SaaS e Aplicativos Mobile"
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