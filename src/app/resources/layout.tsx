import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Blog & Learning Resources | Thanjai Tech Guru Thanjavur",
  description: "Expert tech articles, tutorials, and career guides on GenAI, Full-Stack Development, and AI Automation. Learn programming, upskilling tips, and industry insights from Thanjavur's top tech institute.",
  keywords: [
    "tech blog Thanjavur",
    "programming tutorials Tamil Nadu",
    "GenAI learning resources",
    "full stack development guide",
    "AI automation blog",
    "coding career tips",
    "tech education blog India",
    "programming articles Thanjavur",
    "learn AI Thanjavur",
    "web development tutorials",
    "career guidance tech",
    "Thanjai Tech Guru blog",
    "technology insights Tamil Nadu"
  ].join(", "),
  openGraph: {
    title: "Tech Blog & Learning Resources | Thanjai Tech Guru",
    description: "Expert articles on GenAI, Full-Stack, AI Automation. Career guides, tutorials, and industry insights.",
    url: "https://thanjaitechguru.com/resources",
    siteName: "Thanjai Tech Guru",
    images: [
      {
        url: "/og-resources.jpg",
        width: 1200,
        height: 630,
        alt: "Learning Resources at Thanjai Tech Guru"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog & Resources | Thanjai Tech Guru Thanjavur",
    description: "Expert tech articles, career guides, and learning resources for aspiring developers.",
    images: ["/og-resources.jpg"],
  },
  alternates: {
    canonical: "https://thanjaitechguru.com/resources",
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

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Thanjai Tech Guru Tech Blog",
    "description": "Expert articles and learning resources on programming, AI, and career development",
    "url": "https://thanjaitechguru.com/resources",
    "publisher": {
      "@type": "Organization",
      "name": "Thanjai Tech Guru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thanjaitechguru.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thanjavur",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "inLanguage": "en-IN"
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
        "name": "Resources",
        "item": "https://thanjaitechguru.com/resources"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

