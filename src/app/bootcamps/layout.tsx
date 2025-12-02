import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intensive Tech Bootcamps in Thanjavur | 12-Week Training Programs",
  description: "Join intensive bootcamps in Thanjavur: GenAI Builder, Full-Stack Development, and weekend workshops. 12-week programs with hands-on projects, expert mentors, 100% placement support. Small batch sizes, flexible timings.",
  keywords: [
    "bootcamp Thanjavur",
    "coding bootcamp Tamil Nadu",
    "GenAI bootcamp India",
    "full stack bootcamp Thanjavur",
    "intensive programming training",
    "12 week coding bootcamp",
    "tech bootcamp Thanjavur",
    "web development bootcamp",
    "AI bootcamp India",
    "programming bootcamp placement",
    "weekend coding workshops",
    "Thanjai Tech Guru bootcamp",
    "career switch programming",
    "intensive tech training Thanjavur"
  ].join(", "),
  openGraph: {
    title: "Intensive Tech Bootcamps in Thanjavur | GenAI & Full-Stack",
    description: "Transform your career in 12 weeks. GenAI, Full-Stack bootcamps with 100% placement support in Thanjavur.",
    url: "https://thanjaitechguru.com/bootcamps",
    siteName: "Thanjai Tech Guru",
    images: [
      {
        url: "/og-bootcamps.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Bootcamps at Thanjai Tech Guru"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intensive Tech Bootcamps in Thanjavur | Thanjai Tech Guru",
    description: "12-week GenAI & Full-Stack bootcamps with hands-on projects and placement support.",
    images: ["/og-bootcamps.jpg"],
  },
  alternates: {
    canonical: "https://thanjaitechguru.com/bootcamps",
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

export default function BootcampsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Intensive Tech Bootcamps at Thanjai Tech Guru",
    "description": "12-week intensive bootcamps in GenAI and Full-Stack development with hands-on projects and placement support",
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
        "contactType": "Admissions",
        "availableLanguage": ["English", "Tamil"]
      }
    },
    "courseMode": "Blended",
    "educationalLevel": "Beginner to Advanced",
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "GenAI Builder Bootcamp",
        "courseMode": "Blended",
        "duration": "P12W",
        "inLanguage": "en-IN"
      },
      {
        "@type": "CourseInstance",
        "name": "Full-Stack Developer Bootcamp",
        "courseMode": "Blended",
        "duration": "P12W",
        "inLanguage": "en-IN"
      }
    ],
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the bootcamps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our intensive bootcamps are 12 weeks long, with weekday evening sessions and weekend labs. We also offer 2-4 weekend micro bootcamps for focused learning."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide placement assistance after bootcamp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% placement assistance including resume building, LinkedIn optimization, mock interviews, and direct company referrals."
        }
      },
      {
        "@type": "Question",
        "name": "What is the batch size for bootcamps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain small batch sizes of 15-20 students to ensure personalized attention and effective learning."
        }
      },
      {
        "@type": "Question",
        "name": "Can working professionals join the bootcamp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our bootcamp schedule (weekday evenings + weekend labs) is specifically designed for working professionals to upskill without leaving their jobs."
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
        "name": "Bootcamps",
        "item": "https://thanjaitechguru.com/bootcamps"
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

