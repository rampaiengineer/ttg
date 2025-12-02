import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-numeric",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Best Programming Classes in Thanjavur - 100% Placement | Coding Institute",
    template: "%s | Thanjai Tech Guru"
  },
  description:
    "Top-rated programming classes in Thanjavur ⭐ Learn Python, Java, JavaScript, Full-Stack, AI/ML from industry experts. 500+ students placed ✓ Hands-on projects ✓ 100% placement support ✓ Flexible batches. Join Thanjavur's #1 coding institute today!",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48' }
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' }
    ]
  },
  keywords: [
    "programming classes in Thanjavur",
    "coding classes in Thanjavur",
    "programming institute Thanjavur",
    "coding institute Thanjavur",
    "software training Thanjavur",
    "Python classes Thanjavur",
    "Java training Thanjavur",
    "JavaScript course Thanjavur",
    "web development classes Thanjavur",
    "full stack developer course Thanjavur",
    "AI training Thanjavur",
    "machine learning classes Thanjavur",
    "GenAI course Thanjavur",
    "programming courses near me",
    "coding bootcamp Thanjavur",
    "best programming institute in Thanjavur",
    "software development training Thanjavur",
    "tech courses Thanjavur Tamil Nadu",
    "computer programming classes Thanjavur",
    "placement oriented courses Thanjavur",
    "React training Thanjavur",
    "Node.js course Thanjavur",
    "backend development Thanjavur",
    "Thanjai Tech Guru",
    "programming certification Thanjavur"
  ],
  authors: [{ name: "Thanjai Tech Guru" }],
  creator: "Thanjai Tech Guru",
  publisher: "Thanjai Tech Guru",
  metadataBase: new URL("https://thanjaitechguru.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thanjaitechguru.com",
    siteName: "Thanjai Tech Guru",
    title: "Programming Classes in Thanjavur | Best Coding Institute",
    description:
      "Learn programming & coding at Thanjavur's top institute. Python, Java, JavaScript, Full-Stack, AI/ML courses. 500+ students placed, expert trainers, 100% placement support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thanjai Tech Guru - Premium Tech Academy"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Classes Thanjavur | Best Coding Institute",
    description: "Learn coding & programming in Thanjavur. Python, Java, Full-Stack, AI courses. 100% placement support.",
    images: ["/og-image.jpg"],
    creator: "@thanjaitechguru",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data - LocalBusiness Schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Thanjai Tech Guru",
    "alternateName": ["TTG Academy", "Thanjai Tech Guru Programming Institute"],
    "url": "https://thanjaitechguru.com",
    "logo": "https://thanjaitechguru.com/images.png",
    "image": "https://thanjaitechguru.com/images.png",
    "description": "Best programming and coding classes in Thanjavur. Expert training in Python, Java, JavaScript, Full-Stack Development, AI, and Machine Learning with 100% placement support.",
    "slogan": "Knowledge Meets Technology",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 123, Tech Park Road",
      "addressLocality": "Thanjavur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "613005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.7905",
      "longitude": "79.1378"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-90250-32130",
      "contactType": "customer service",
      "email": "hello@thanjaitechguru.com",
      "areaServed": ["Thanjavur", "Tamil Nadu", "IN"],
      "availableLanguage": ["en", "ta"]
    },
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 09:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "sameAs": [
      "https://www.linkedin.com/company/thanjaitechguru",
      "https://www.instagram.com/thanjaitechguru",
      "https://www.youtube.com/@thanjaitechguru",
      "https://twitter.com/thanjaitechguru"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Programming Courses",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Full-Stack Development",
            "description": "Complete programming course covering frontend and backend development",
            "provider": {
              "@type": "Organization",
              "name": "Thanjai Tech Guru"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Python Programming",
            "description": "Professional Python coding classes from basics to advanced",
            "provider": {
              "@type": "Organization",
              "name": "Thanjai Tech Guru"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "AI & Machine Learning",
            "description": "Artificial Intelligence and ML programming course",
            "provider": {
              "@type": "Organization",
              "name": "Thanjai Tech Guru"
            }
          }
        }
      ]
    }
  };

  // Structured Data - Course Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "GenAI Mastery Program",
    "description": "Master production-grade AI agents, RAG pipelines, and LLM applications with hands-on projects",
    "provider": {
      "@type": "Organization",
      "name": "Thanjai Tech Guru",
      "sameAs": "https://thanjaitechguru.com"
    },
    "courseMode": ["Offline", "Hybrid"],
    "educationalLevel": "Intermediate to Advanced",
    "teaches": ["Artificial Intelligence", "Machine Learning", "LangChain", "OpenAI", "RAG", "Vector Databases"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
