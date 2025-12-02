import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Training & AI Automation Services Thanjavur | Enterprise Solutions",
  description: "Custom corporate training programs and AI automation solutions for businesses in Thanjavur. GenAI training, full-stack upskilling, AI chatbots, workflow automation. Expert trainers, measurable outcomes, flexible engagement models.",
  keywords: [
    "corporate training Thanjavur",
    "AI automation services Tamil Nadu",
    "business AI solutions Thanjavur",
    "GenAI corporate training",
    "employee upskilling programs",
    "AI chatbot development Thanjavur",
    "workflow automation India",
    "enterprise tech training",
    "SME automation solutions",
    "college tech workshops Thanjavur",
    "institutional training programs",
    "custom AI solutions businesses",
    "Thanjai Tech Guru corporate",
    "AI transformation consulting"
  ].join(", "),
  openGraph: {
    title: "Corporate Training & AI Automation | Thanjai Tech Guru",
    description: "Transform your business with custom AI solutions and corporate training programs. Upskill teams, automate workflows in Thanjavur.",
    url: "https://thanjaitechguru.com/corporate",
    siteName: "Thanjai Tech Guru",
    images: [
      {
        url: "/og-corporate.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Training at Thanjai Tech Guru"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Training & AI Automation Services | Thanjavur",
    description: "Expert corporate training and AI automation for businesses. Custom solutions, measurable ROI.",
    images: ["/og-corporate.jpg"],
  },
  alternates: {
    canonical: "https://thanjaitechguru.com/corporate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Training & AI Automation Services",
    "description": "Custom corporate training programs and AI automation solutions for businesses and educational institutions",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Thanjai Tech Guru",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thanjavur",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "url": "https://thanjaitechguru.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-90250-32130",
        "contactType": "Corporate Sales",
        "availableLanguage": ["English", "Tamil"]
      }
    },
    "serviceType": "Corporate Training and AI Automation",
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Corporate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GenAI Training for Developers",
            "description": "Upskill engineering teams with GenAI, LangChain, and AI agents"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI for Business Leaders",
            "description": "Strategic AI implementation for non-technical executives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots & Automation",
            "description": "Custom chatbots, workflow automation, and intelligent tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "College & School Workshops",
            "description": "Free tech workshops for educational institutions"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What corporate training programs do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer GenAI for Developers, AI for Business Leaders, Modern Full-Stack training, and custom programs tailored to your organization's needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI automation services for businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build custom AI chatbots, workflow automation solutions, and intelligent business tools. Services include 24/7 customer support bots, lead qualification systems, and document processing automation."
        }
      },
      {
        "@type": "Question",
        "name": "Are college workshops really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we conduct free one-day tech workshops for colleges and schools in Thanjavur and surrounding areas. This is our commitment to education and community development."
        }
      },
      {
        "@type": "Question",
        "name": "What engagement models do you offer for corporate training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer on-site training at your office, virtual live cohorts, and blended programs. Training can be customized based on your team size, schedule, and specific requirements."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thanjaitechguru.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Corporate Training",
        "item": "https://thanjaitechguru.com/corporate"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

