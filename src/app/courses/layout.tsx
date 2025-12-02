import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming Courses in Thanjavur | Python, Java, Full-Stack, AI Training",
  description: "Best programming courses in Thanjavur. Learn Python, JavaScript, Java, React, Node.js, Full-Stack Development, AI/ML, Cloud & DevOps. Expert-led training with 100% placement support. Flexible batches, hands-on projects, industry-recognized certification.",
  keywords: [
    "programming courses Thanjavur",
    "coding classes Thanjavur",
    "Python training Thanjavur",
    "Java course Thanjavur",
    "JavaScript training Thanjavur",
    "full stack developer course Thanjavur",
    "React training Thanjavur",
    "Node.js course Thanjavur",
    "AI ML training Thanjavur",
    "machine learning course Thanjavur",
    "cloud computing course Thanjavur",
    "DevOps training Thanjavur",
    "software training institute Thanjavur",
    "best IT courses Thanjavur",
    "web development course Thanjavur",
    "frontend backend training Thanjavur",
    "programming bootcamp Thanjavur",
    "coding bootcamp Tamil Nadu",
    "online programming courses India",
    "placement oriented IT training"
  ].join(", "),
  openGraph: {
    title: "Best Programming Courses in Thanjavur | Full-Stack, AI, Cloud Training",
    description: "Master programming with industry-expert trainers. Python, Java, JavaScript, React, AI/ML courses with 100% placement. Enroll now!",
    url: "https://thanjaitechguru.com/courses",
    siteName: "Thanjai Tech Guru",
    images: [
      {
        url: "/og-courses.jpg",
        width: 1200,
        height: 630,
        alt: "Programming Courses at Thanjai Tech Guru"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Courses in Thanjavur | Thanjai Tech Guru",
    description: "Learn Python, Java, Full-Stack, AI/ML with expert mentors. 100% placement support.",
    images: ["/og-courses.jpg"],
  },
  alternates: {
    canonical: "https://thanjaitechguru.com/courses",
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

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add structured data for Course catalog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Programming Courses at Thanjai Tech Guru",
    "description": "Comprehensive programming and technology courses in Thanjavur",
    "url": "https://thanjaitechguru.com/courses",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Thanjai Tech Guru",
      "url": "https://thanjaitechguru.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thanjavur",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99999-99999",
        "contactType": "Admissions",
        "availableLanguage": ["English", "Tamil"]
      }
    },
    "numberOfItems": 23,
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Python Programming Fundamentals",
        "description": "Master Python from basics to advanced with hands-on projects",
        "provider": {
          "@type": "Organization",
          "name": "Thanjai Tech Guru"
        },
        "courseMode": "Blended",
        "educationalLevel": "Beginner to Advanced",
        "inLanguage": "en-IN"
      },
      {
        "@type": "Course",
        "name": "Full-Stack Web Development",
        "description": "Complete MERN/MEAN stack development with real projects",
        "provider": {
          "@type": "Organization",
          "name": "Thanjai Tech Guru"
        },
        "courseMode": "Blended",
        "educationalLevel": "Intermediate",
        "inLanguage": "en-IN"
      },
      {
        "@type": "Course",
        "name": "Generative AI & Machine Learning",
        "description": "Learn AI, ML, and generative models with LangChain and OpenAI",
        "provider": {
          "@type": "Organization",
          "name": "Thanjai Tech Guru"
        },
        "courseMode": "Blended",
        "educationalLevel": "Intermediate to Advanced",
        "inLanguage": "en-IN"
      },
      {
        "@type": "Course",
        "name": "React & Next.js Development",
        "description": "Build modern web apps with React and Next.js",
        "provider": {
          "@type": "Organization",
          "name": "Thanjai Tech Guru"
        },
        "courseMode": "Blended",
        "educationalLevel": "Intermediate",
        "inLanguage": "en-IN"
      },
      {
        "@type": "Course",
        "name": "Cloud Computing & DevOps",
        "description": "Master AWS, Azure, Docker, Kubernetes, and CI/CD",
        "provider": {
          "@type": "Organization",
          "name": "Thanjai Tech Guru"
        },
        "courseMode": "Blended",
        "educationalLevel": "Intermediate to Advanced",
        "inLanguage": "en-IN"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "5000",
      "highPrice": "50000",
      "offerCount": "23"
    }
  };

  // FAQ Schema for courses page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What programming courses are available in Thanjavur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thanjai Tech Guru offers 23+ programming courses including Python, Java, JavaScript, React, Node.js, Full-Stack Development, AI/ML, Cloud Computing, DevOps, and more. All courses include hands-on projects and placement support."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide placement assistance after course completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% placement assistance including resume building, interview preparation, mock interviews, and direct referrals to partner companies. We have placed 500+ students in top companies."
        }
      },
      {
        "@type": "Question",
        "name": "Are the courses suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer courses for all levels - beginner, intermediate, and advanced. Our beginner-friendly courses like Python Fundamentals and Web Development Basics start from scratch with no prior coding experience required."
        }
      },
      {
        "@type": "Question",
        "name": "What is the duration of the courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Course durations vary from 6 weeks to 6 months depending on the program. We offer flexible batch timings including weekend batches for working professionals."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer online and offline classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both online and offline (in-person) classes with flexible batch options. You can choose the mode that suits you best."
        }
      }
    ]
  };

  // Breadcrumb Schema
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
        "name": "Courses",
        "item": "https://thanjaitechguru.com/courses"
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

