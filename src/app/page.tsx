"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { LeadFormModal } from "@/components/LeadFormModal";
import { 
  Code2, 
  Cpu, 
  Database, 
  Layout, 
  LineChart, 
  Terminal, 
  Users, 
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Globe,
  GraduationCap,
  Brain,
  Code,
  Clock
} from "lucide-react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-[72px]"></div>
      
      {/* Full Width Hero Section */}
      <div className="w-full">
        <HeroSlider />
      </div>

      <main>

        {/* Future of Tech & AI Market Growth Section */}
        <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 py-16 lg:py-24 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          
          <div className="ttg-container relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 backdrop-blur-sm">
                    <LineChart className="h-3.5 w-3.5" /> Market Outlook 2025-2030
                  </div>
                  <h2 className="mt-6 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                    The Rise of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Full-Stack AI Engineer</span>
                  </h2>
                </div>
                
                <div className="space-y-5 text-base lg:text-lg text-slate-300 leading-relaxed">
                  <p>
                    The era of isolated roles is ending. In the next 5 years, <strong className="text-white font-semibold">every software engineer will need AI literacy</strong>. 
                    The market isn't just demanding chatbot builders—it needs architects who can integrate LLMs into scalable, production-grade applications that solve real business problems.
                  </p>
                  <p>
                    At Thanjai Tech Guru, we teach the <strong className="text-orange-400 font-semibold">"Full Stack AI Mindset"</strong>: blending traditional engineering excellence (APIs, databases, security, DevOps) with cutting-edge AI capabilities (RAG, Autonomous Agents, Fine-tuning, Vector Databases).
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-white bg-clip-text">42%</p>
                    <p className="text-sm font-medium text-slate-400">Annual AI Market Growth Rate</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-white">120M+</p>
                    <p className="text-sm font-medium text-slate-400">New AI Jobs by 2030</p>
                  </div>
                </div>
              </div>

              {/* Interactive-looking Visualization */}
              <div className="relative h-[400px] w-full rounded-3xl border border-slate-700 bg-slate-800/50 p-8 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fbbf2415,transparent_50%)]" />
                <div className="flex h-full flex-col justify-between">
                   <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                      <p className="text-sm font-semibold text-slate-300">Engineering Value Chain</p>
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                      </div>
                   </div>
                   
                   {/* Growth Curve SVG */}
                   <div className="relative flex-1 py-6">
                      <svg viewBox="0 0 300 150" className="h-full w-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 150 C 100 140, 150 100, 300 20" fill="url(#chartGradient)" />
                        <path d="M0 150 C 100 140, 150 100, 300 20" stroke="#F59E0B" strokeWidth="3" fill="none" className="animate-[dash_3s_ease-out]" strokeDasharray="500" />
                        
                        {/* Data Points */}
                        <circle cx="150" cy="100" r="4" fill="#fff" className="animate-ping" />
                        <circle cx="300" cy="20" r="4" fill="#fff" />
                      </svg>
                      
                      {/* Labels floating on chart */}
                      <div className="absolute left-[40%] top-[50%] rounded-lg bg-slate-900/90 px-3 py-1 text-xs font-medium text-amber-400 shadow-lg backdrop-blur-md border border-slate-700">
                        AI Integration Era
                      </div>
                      <div className="absolute right-0 top-[10%] rounded-lg bg-slate-900/90 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-md border border-slate-700">
                        Autonomous Agents
                      </div>
                   </div>
                   
                   <div className="flex justify-between text-xs text-slate-500">
                      <span>2023</span>
                      <span>2024</span>
                      <span>2025</span>
                      <span>2028+</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses with Modern Layout */}
        <section className="relative bg-gradient-to-b from-white via-orange-50/30 to-white py-12 lg:py-16">
          <div className="ttg-container space-y-12">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700 mb-4">
                🎓 Signature Programs
              </div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Transform Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Industry-Ready Skills</span>
              </h2>
              <p className="mt-5 max-w-3xl text-lg text-slate-600 leading-relaxed">
                Master in-demand skills with our intensive, project-based programs. Designed by industry experts, validated by hiring partners.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr,1fr]">
              {/* Featured Highlight Course */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 lg:p-12 text-white transition-all hover:shadow-2xl border border-white/5">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_70%)]" />
                <div className="absolute right-0 top-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl transition-all group-hover:bg-orange-500/30" />
                <div className="absolute left-0 bottom-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
                
                <div className="relative z-10 flex h-full flex-col justify-between space-y-6 lg:space-y-8">
                  <div className="space-y-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300 backdrop-blur-sm">
                      ⭐ Flagship Program
                    </span>
                    <h3 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">
                      GenAI Mastery Program
                    </h3>
                    <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                      Master the art of building production-grade AI agents, RAG pipelines, and enterprise LLM applications. Learn the skills that companies are desperately seeking.
                    </p>
                    <ul className="space-y-3 text-sm lg:text-base">
                      <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0" /> <span className="text-slate-300">Build 5+ Real-World AI Products</span></li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0" /> <span className="text-slate-300">Master LangChain, OpenAI & Vector DBs</span></li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0" /> <span className="text-slate-300">Guaranteed Placement Assistance</span></li>
                    </ul>
                  </div>
                  <Link 
                    href="/courses/genai-mastery" 
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
                  >
                    View Full Syllabus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Secondary Courses Grid */}
              <div className="grid gap-5">
                {[
                  {
                    title: "Full-Stack Developer Bootcamp",
                    desc: "Master MERN Stack, Next.js 14, TypeScript, and AWS deployment. Build scalable web applications.",
                    tags: ["React", "Node.js", "AWS"],
                    link: "/courses/full-stack-developer",
                    icon: <Code2 className="h-6 w-6" />,
                    gradient: "from-blue-500 to-indigo-600"
                  },
                  {
                    title: "Python Backend Engineering",
                    desc: "Build production-grade APIs with Django, FastAPI, PostgreSQL, Redis, and Docker containers.",
                    tags: ["Python", "FastAPI", "Docker"],
                    link: "/courses/python-backend",
                    icon: <Database className="h-6 w-6" />,
                    gradient: "from-emerald-500 to-teal-600"
                  },
                  {
                    title: "AI Strategy for Leaders",
                    desc: "AI transformation roadmap, no-code automation, and strategic implementation for business growth.",
                    tags: ["Strategy", "Automation", "AI Tools"],
                    link: "/courses/ai-for-business",
                    icon: <LineChart className="h-6 w-6" />,
                    gradient: "from-purple-500 to-pink-600"
                  }
                ].map((course) => (
                  <Link 
                    key={course.title} 
                    href={course.link}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white transition-all hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Glow Effect */}
                    <div className={`absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${course.gradient} opacity-20 blur-3xl transition-all group-hover:opacity-30`} />
                    
                    <div className="relative space-y-5">
                      <div className="flex items-start justify-between">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                          {course.icon}
                        </div>
                        <div className="rounded-full bg-white/10 p-2.5 backdrop-blur-sm transition-all group-hover:bg-white/20">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all">
                          {course.title}
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {course.desc}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        {course.tags.map(tag => (
                          <span key={tag} className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white border border-white/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Link href="/courses" className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-orange-600 border-2 border-orange-200 rounded-full hover:bg-orange-50 hover:border-orange-300 transition-all">
                Explore All Programs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Master the Modern Tech Stack */}
        <section className="relative w-full bg-white py-12 lg:py-16">
          <div className="ttg-container space-y-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
                💻 Industry-Standard Tools
              </span>
              <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Modern Tech Stack</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                We don't teach legacy technologies. Our curriculum mirrors the exact stack used by unicorn startups, 
                Fortune 500 companies, and cutting-edge AI labs worldwide.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              
              {/* Programming Languages */}
              <div className="group space-y-6 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/50 to-white p-6 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600 border border-orange-200">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Programming</h3>
                </div>
                <div className="space-y-3">
                  {["Python", "JavaScript", "TypeScript", "Java", "C++"].map(tech => (
                    <div key={tech} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend Frameworks */}
              <div className="group space-y-6 rounded-2xl border border-orange-100 bg-gradient-to-br from-amber-50/50 to-white p-6 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-orange-600 border border-orange-200">
                    <Layout className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Frontend</h3>
                </div>
                <div className="space-y-3">
                  {["React 18", "Next.js 14", "Vue.js", "Tailwind CSS", "Redux"].map(tech => (
                    <div key={tech} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Frameworks */}
              <div className="group space-y-6 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/50 to-white p-6 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600 border border-orange-200">
                    <Database className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Backend</h3>
                </div>
                <div className="space-y-3">
                  {["Node.js", "FastAPI", "Django", "Express.js", "NestJS"].map(tech => (
                    <div key={tech} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* AI & ML */}
              <div className="group space-y-6 rounded-2xl border border-orange-100 bg-gradient-to-br from-amber-50/50 to-white p-6 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-orange-600 border border-orange-200">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">AI & ML</h3>
                </div>
                <div className="space-y-3">
                  {["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Scikit-learn"].map(tech => (
                    <div key={tech} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="group space-y-6 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/50 to-white p-6 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600 border border-orange-200">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Cloud & DevOps</h3>
                </div>
                <div className="space-y-3">
                  {["AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"].map(tech => (
                    <div key={tech} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Why Thanjai Tech Guru */}
        <section className="relative bg-gradient-to-b from-orange-50/50 via-white to-orange-50/30 py-12 lg:py-16">
          <div className="ttg-container space-y-12">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
                ⚡ Why Choose Us
              </span>
              <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
                Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Next-Gen Engineers</span>
              </h2>
              <p className="mt-5 max-w-3xl text-lg text-slate-600 leading-relaxed">
                We don't just teach syntax and frameworks—we build engineering mindsets. Our curriculum is reverse-engineered 
                from hiring requirements of top product companies and unicorn startups.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Production-Grade GenAI",
                  desc: "Build real AI agents, RAG pipelines, and fine-tune LLMs for enterprise use cases. Go beyond simple API calls to create production-ready AI systems.",
                  icon: <Cpu className="h-6 w-6" />
                },
                {
                  title: "Modern Full-Stack Engineering",
                  desc: "Master Next.js 14, Server Components, TypeScript, and scalable database architectures. Build apps that can handle millions of users.",
                  icon: <Code2 className="h-6 w-6" />
                },
                {
                  title: "AI Strategy & Business",
                  desc: "Learn to implement AI-driven automation workflows, no-code tools, and strategic AI transformation for businesses and startups.",
                  icon: <LineChart className="h-6 w-6" />
                }
              ].map((feature, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-8 transition-all hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 hover:border-orange-300">
                  <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 opacity-20 blur-2xl transition-all group-hover:scale-150 group-hover:opacity-30" />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 text-orange-600 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* College & School Training Section */}
        <section className="relative py-12 lg:py-16">
          <div className="ttg-container">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 md:p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-orange-500/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
              
              <div className="relative grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
                    <GraduationCap className="h-3 w-3 md:h-4 md:w-4" />
                    For Colleges & Schools
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Free Tech Workshops for Educational Institutions
                  </h2>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    We bring cutting-edge technology training directly to your college or school campus. Our expert mentors conduct engaging, hands-on workshops—absolutely free for educational institutions.
                  </p>
                  
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-base md:text-lg">One-Day Workshops</p>
                        <p className="text-white/80 text-xs md:text-sm">Interactive sessions on latest tech</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-base md:text-lg">Hands-On Learning</p>
                        <p className="text-white/80 text-xs md:text-sm">Students build real projects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-base md:text-lg">100% Free</p>
                        <p className="text-white/80 text-xs md:text-sm">Our commitment to education</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border-2 border-orange-500/20 rounded-2xl p-5 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold">Workshop Topics:</h3>
                  <div className="grid gap-3 md:gap-4">
                    <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-white/5 border border-orange-500/10 hover:bg-white/10 hover:border-orange-500/30 transition-all">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500">
                        <Brain className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm md:text-base">Introduction to GenAI</p>
                        <p className="text-xs md:text-sm text-white/80">ChatGPT & AI Tools</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-white/5 border border-orange-500/10 hover:bg-white/10 hover:border-orange-500/30 transition-all">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-amber-600">
                        <Code className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm md:text-base">Web Development</p>
                        <p className="text-xs md:text-sm text-white/80">HTML, CSS, JavaScript</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-white/5 border border-orange-500/10 hover:bg-white/10 hover:border-orange-500/30 transition-all">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
                        <Terminal className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm md:text-base">Python Programming</p>
                        <p className="text-xs md:text-sm text-white/80">Fundamentals & Projects</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-bold text-white hover:scale-105 transition-all shadow-xl shadow-orange-500/30"
                  >
                    Request Free Workshop
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-12 lg:py-16">
          <div className="ttg-container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 px-8 py-16 lg:py-20 text-center text-white shadow-2xl shadow-orange-500/30">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
              
              {/* Decorative Elements */}
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
              <div className="absolute top-1/2 left-1/4 h-48 w-48 rounded-full bg-orange-300/10 blur-2xl" />
              
              <div className="relative z-10 mx-auto max-w-3xl space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  🚀 Start Your Journey Today
                </div>
                
                <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">
                  Ready to Accelerate Your Tech Career?
                </h2>
                
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                  Join Thanjavur's most advanced tech community. Book a free 1:1 counselling session with our 
                  industry expert mentors and discover your personalized learning path.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-xl shadow-black/20 transition-all hover:scale-105 hover:bg-orange-50"
                  >
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <a 
                    href="https://wa.me/919025032130" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      
      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source="demo_booking"
      />
    </div>
  );
}

