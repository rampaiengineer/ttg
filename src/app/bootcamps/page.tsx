"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadFormModal } from "@/components/LeadFormModal";
import {
  Zap,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  Award,
  Briefcase,
  Code,
  Rocket,
  TrendingUp,
  BookOpen,
  Laptop,
  Brain,
  Globe
} from "lucide-react";

const bootcamps = [
  {
    id: "genai-builder",
    name: "GenAI Builder Bootcamp",
    tagline: "Intensive · Project-First",
    duration: "12 Weeks",
    mode: "Hybrid (Online + Offline)",
    cadence: "Weekday evenings + Weekend labs",
    level: "Intermediate",
    icon: <Brain className="h-8 w-8" />,
    gradient: "from-purple-500 to-pink-600",
    description: "Transform into a GenAI developer with hands-on projects using LangChain, OpenAI, and modern AI frameworks.",
    highlights: [
      "Build 3-4 production-ready GenAI applications",
      "Deep dive into LLMs, RAG systems, and AI agents",
      "Real-world automation projects with LangChain",
      "Portfolio suitable for AI Engineer roles",
    ],
    outcomes: [
      "Ship 3–4 production-style GenAI mini products",
      "Deep understanding of LLMs, RAG, and automation agents",
      "Portfolio suitable for junior AI engineer / GenAI developer roles",
      "Master prompt engineering and fine-tuning",
      "Deploy AI applications to production",
    ],
    curriculum: [
      { week: "1-2", topic: "Python & AI Fundamentals", details: "Environment setup, Python for AI, API fundamentals" },
      { week: "3-4", topic: "LangChain & LLMs", details: "OpenAI API, LangChain basics, prompt engineering" },
      { week: "5-6", topic: "RAG Systems", details: "Vector databases, embeddings, semantic search" },
      { week: "7-8", topic: "AI Agents & Tools", details: "Multi-agent systems, tool calling, function calling" },
      { week: "9-10", topic: "Production AI Apps", details: "Deployment, monitoring, optimization" },
      { week: "11-12", topic: "Capstone Project", details: "Build and deploy your own GenAI product" },
    ],
    batchInfo: {
      nextBatch: "January 15, 2025",
      seats: "Limited to 15 students",
      price: "₹45,000",
      installment: "Available",
    }
  },
  {
    id: "fullstack-bootcamp",
    name: "Full-Stack Developer Bootcamp",
    tagline: "MERN + Next.js",
    duration: "12 Weeks",
    mode: "Hybrid (Online + Offline)",
    cadence: "Weekday evenings + Weekend labs",
    level: "Beginner to Intermediate",
    icon: <Code className="h-8 w-8" />,
    gradient: "from-orange-500 to-amber-600",
    description: "Master modern web development with React, Node.js, MongoDB, and Next.js. Build production-ready full-stack applications.",
    highlights: [
      "Complete MERN stack mastery",
      "Build 3 portfolio-ready applications",
      "Authentication, APIs, and databases",
      "Ready for full-stack developer interviews",
    ],
    outcomes: [
      "End-to-end understanding of frontend, backend and database",
      "3 portfolio-ready applications (auth, dashboards, APIs)",
      "Ready for full-stack / frontend developer interviews",
      "Deployment and DevOps fundamentals",
      "Interview preparation and mock tests",
    ],
    curriculum: [
      { week: "1-2", topic: "HTML, CSS & JavaScript", details: "Modern JS, ES6+, DOM manipulation, responsive design" },
      { week: "3-4", topic: "React & State Management", details: "Components, hooks, context API, Redux" },
      { week: "5-6", topic: "Next.js & SSR", details: "Server components, routing, API routes" },
      { week: "7-8", topic: "Node.js & Express", details: "REST APIs, middleware, authentication" },
      { week: "9-10", topic: "MongoDB & Databases", details: "CRUD operations, aggregation, relationships" },
      { week: "11-12", topic: "Capstone Project", details: "Full-stack e-commerce or SaaS application" },
    ],
    batchInfo: {
      nextBatch: "January 20, 2025",
      seats: "Limited to 20 students",
      price: "₹42,000",
      installment: "Available",
    }
  },
  {
    id: "weekend-workshops",
    name: "Weekend Tech Workshops",
    tagline: "Micro Bootcamps",
    duration: "2-4 Weekends",
    mode: "Hybrid (Online + Offline)",
    cadence: "Saturday & Sunday",
    level: "All Levels",
    icon: <Rocket className="h-8 w-8" />,
    gradient: "from-emerald-500 to-teal-600",
    description: "Rapid upskilling in focused technologies. Perfect for college students and working professionals to explore new tech.",
    highlights: [
      "Focused single-technology workshops",
      "Ideal for college students and professionals",
      "Hands-on project-based learning",
      "Great way to experience Thanjai Tech Guru",
    ],
    outcomes: [
      "Rapid upskilling in focused topics",
      "Ideal for college students and working professionals",
      "Great way to experience Thanjai Tech Guru before longer programs",
      "Complete mini-project by end of workshop",
      "Certificate of completion",
    ],
    curriculum: [
      { topic: "React Workshop", details: "Build modern web apps in 2 weekends" },
      { topic: "Python for Data Science", details: "NumPy, Pandas, data visualization" },
      { topic: "API Development with Node.js", details: "RESTful APIs from scratch" },
      { topic: "AI Prompt Engineering", details: "Master ChatGPT and AI tools" },
      { topic: "Git & GitHub Mastery", details: "Version control for developers" },
    ],
    batchInfo: {
      nextBatch: "Rolling batches",
      seats: "Limited to 25 students",
      price: "₹3,500 - ₹8,500",
      installment: "Not required",
    }
  },
];

const benefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Small Batch Sizes",
    description: "15-20 students per batch for personalized attention and mentoring",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Hands-On Learning",
    description: "70% practical projects, 30% theory. Learn by building real applications",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Job-Ready Skills",
    description: "Curriculum designed with hiring managers. Focus on in-demand tech",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry Mentors",
    description: "Learn from working professionals with 5+ years of industry experience",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "100% Placement Support",
    description: "Resume building, mock interviews, and direct company referrals",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Lifetime Access",
    description: "Course materials, recordings, and community access forever",
  },
];

export default function BootcampsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBootcamp, setSelectedBootcamp] = useState<{ name: string; slug: string } | null>(null);

  const handleApply = (bootcampName: string, bootcampSlug: string) => {
    setSelectedBootcamp({ name: bootcampName, slug: bootcampSlug });
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-[72px]"></div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="ttg-container relative space-y-8">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400">
              <Zap className="h-4 w-4" /> Intensive Training Programs
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              High-Intensity Bootcamps for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Faster Career Outcomes</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              Structured weekly breakdowns, capstone projects, and mentor-led reviews designed to move you from learning to doing as quickly as possible. Transform your career in just 12 weeks.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-slate-400">Weeks Duration</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">15-20</p>
                <p className="text-slate-400">Students per Batch</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-slate-400">Placement Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ttg-container py-16">
        {/* Bootcamp Cards */}
        <section className="space-y-12">
          {bootcamps.map((bootcamp, index) => (
            <article
              key={bootcamp.id}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${bootcamp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.01]`} />
              
              <div className="relative bg-white rounded-3xl p-8 lg:p-10">
                <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${bootcamp.gradient} text-white shadow-lg`}>
                        {bootcamp.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                          {bootcamp.tagline}
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                          {bootcamp.name}
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                          {bootcamp.description}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span className="font-semibold text-slate-700">{bootcamp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100">
                        <Laptop className="h-4 w-4 text-orange-500" />
                        <span className="font-semibold text-slate-700">{bootcamp.mode}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100">
                        <TrendingUp className="h-4 w-4 text-orange-500" />
                        <span className="font-semibold text-slate-700">{bootcamp.level}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-slate-900">Key Highlights</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {bootcamp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Curriculum Overview */}
                    {bootcamp.curriculum && bootcamp.curriculum.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-orange-500" />
                          Curriculum Overview
                        </h3>
                        <div className="space-y-2">
                          {bootcamp.curriculum.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                              <div className="flex-shrink-0 w-16 text-xs font-bold text-orange-600">
                                {item.week || item.topic}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-slate-900">{item.topic || item.details}</p>
                                {item.details && item.week && (
                                  <p className="text-xs text-slate-600 mt-1">{item.details}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Batch Info & CTA */}
                  <div className="space-y-6">
                    {/* Batch Information */}
                    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white space-y-4">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-orange-400" />
                        Batch Information
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-slate-400">Next Batch Starts</p>
                          <p className="font-bold text-lg text-orange-400">{bootcamp.batchInfo.nextBatch}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Available Seats</p>
                          <p className="font-bold">{bootcamp.batchInfo.seats}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => handleApply(bootcamp.name, bootcamp.id)}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] transition-all"
                      >
                        Apply for this Bootcamp
                      </button>
                      <a
                        href="https://wa.me/919025032130"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-bold hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 transition-all"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Chat with Mentor
                      </a>
                    </div>

                    {/* Schedule */}
                    <div className="rounded-2xl bg-orange-50 border-2 border-orange-100 p-5 space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        Schedule
                      </h4>
                      <p className="text-sm text-slate-700">{bootcamp.cadence}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Why Choose Our Bootcamps */}
        <section className="mt-20 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Bootcamps</span>
            </h2>
            <p className="text-lg text-slate-600">
              We've designed our bootcamps to give you the best learning experience and career outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Rhythm Section */}
        <section className="mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Clock className="h-6 w-6 text-orange-400" />
                Weekly Learning Rhythm
              </h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>2–3 live mentor sessions per week with Q&A</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Structured self-practice tasks with checkpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Weekly project reviews and doubt-clearing sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Peer learning through group projects</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Award className="h-6 w-6 text-orange-400" />
                Capstone & Career Support
              </h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>One flagship capstone project per bootcamp</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Resume, LinkedIn and GitHub polishing sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Interview guidance and mock interviews for relevant roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Direct referrals to partner companies</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 text-center space-y-8 p-12 rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-100">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Ready to Accelerate Your Tech Career?
            </h2>
            <p className="text-lg text-slate-600">
              Join hundreds of students who've transformed their careers through our intensive bootcamps. Limited seats available!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setSelectedBootcamp(null);
                setIsFormOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/30"
            >
              Apply Now
            </button>
            <a
              href="https://wa.me/919025032130"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-bold hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 transition-all"
            >
              Chat with Us
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source="demo_booking"
        courseName={selectedBootcamp?.name}
        courseSlug={selectedBootcamp?.slug}
      />
    </div>
  );
}
