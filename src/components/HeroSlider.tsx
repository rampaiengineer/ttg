"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Globe, CheckCircle2 } from "lucide-react";

const slides = [
  {
    id: 1,
    pill: "GenAI & LLM Specialization",
    title: "Build the Future with Generative AI",
    subtitle:
      "Master LLMs, Agents, and RAG pipelines. Move beyond ChatGPT prompts to building production-grade AI applications.",
    cta: "Explore AI Courses",
    link: "/courses?category=ai",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-amber-500 to-orange-600",
    bgPattern: "bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]",
    illustration: "ai" as const,
    displayText: "AI"
  },
  {
    id: 2,
    pill: "Full-Stack Development",
    title: "Become a Modern Full-Stack Engineer",
    subtitle:
      "From React & Next.js to Python & Node.js backends. Learn the complete stack demanded by top product companies.",
    cta: "View Full-Stack Courses",
    link: "/courses?category=fullstack",
    icon: <Globe className="h-6 w-6" />,
    color: "from-blue-600 to-indigo-600",
    bgPattern: "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]",
    illustration: "code" as const,
    displayText: "FS"
  },
  {
    id: 3,
    pill: "Corporate & Careers",
    title: "Placement Support & Corporate Training",
    subtitle:
      "We don't just teach; we transform careers. Resume building, mock interviews, and corporate upskilling workshops.",
    cta: "Explore All Courses",
    link: "/courses",
    icon: <Terminal className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-600",
    bgPattern: "bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]",
    illustration: "corp" as const,
    displayText: "JOB"
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30">
      <div className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Modern Gradient Background */}
            <div className="absolute inset-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-[0.03]`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.08),transparent_50%)]" />
              <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl" />
            </div>
            
            <div className="ttg-container relative flex h-full items-center py-12 lg:py-16">
              <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="max-w-3xl space-y-5 lg:space-y-7">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wider shadow-lg ${
                      index === current ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : ""
                    } border-orange-200 bg-white text-slate-700`}
                  >
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${slide.color} text-white shadow-md`}>
                      {slide.icon}
                    </span>
                    {slide.pill}
                  </div>

                  <h1
                    className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 ${
                      index === current ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100" : ""
                    }`}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed ${
                      index === current ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200" : ""
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  <div
                    className={`pt-2 flex flex-wrap gap-4 items-center ${
                      index === current ? "animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300" : ""
                    }`}
                  >
                    <Link
                      href={slide.link}
                      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 bg-gradient-to-r ${slide.color}`}
                    >
                      {slide.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    {/* Trust badges */}
                    <div className="flex items-center gap-4 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span className="font-semibold">500+ Students</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span className="font-semibold">Placement Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Modern Illustration - Fills Right Side */}
                <div className={`relative hidden lg:flex items-center justify-center ${
                   index === current ? "animate-in fade-in slide-in-from-right-8 duration-1000 delay-200" : ""
                }`}>
                  <div className="relative w-full flex items-center justify-center">
                    {/* Animated Floating Elements Container - Centered and Full Height */}
                    <div className="relative w-full max-w-[480px] h-[480px]">
                      {/* Main Circle Background */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${slide.color} opacity-[0.08] animate-pulse`} />
                      </div>
                      
                      {/* Floating Cards - Positioned to Fill Space */}
                      <div className="absolute top-12 right-16 w-40 h-32 bg-white rounded-2xl shadow-2xl p-5 rotate-6 hover:rotate-3 transition-all duration-300 hover:shadow-3xl border border-slate-100">
                        <div className="h-3.5 w-3.5 rounded-full bg-emerald-500 mb-3" />
                        <div className="h-2.5 bg-slate-200 rounded mb-2.5" />
                        <div className="h-2.5 bg-slate-200 rounded w-3/4" />
                      </div>
                      
                      <div className="absolute bottom-16 left-12 w-44 h-36 bg-white rounded-2xl shadow-2xl p-6 -rotate-6 hover:-rotate-3 transition-all duration-300 hover:shadow-3xl border border-slate-100">
                        <div className="flex gap-2 mb-3">
                          <div className="h-3 w-3 rounded-full bg-orange-500" />
                          <div className="h-3 w-3 rounded-full bg-amber-500" />
                        </div>
                        <div className="h-2.5 bg-slate-200 rounded mb-2.5" />
                        <div className="h-2.5 bg-slate-200 rounded mb-2.5" />
                        <div className="h-2.5 bg-slate-200 rounded w-2/3" />
                      </div>
                      
                      <div className="absolute top-1/2 -translate-y-1/2 right-8 w-36 h-36 bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300 border border-slate-100">
                        <div className={`h-full w-full rounded-xl bg-gradient-to-br ${slide.color} flex items-center justify-center text-white font-black text-3xl shadow-lg`}>
                          {slide.displayText}
                        </div>
                      </div>
                      
                      {/* Top Left Accent Card */}
                      <div className="absolute top-20 left-16 w-28 h-24 bg-white rounded-xl shadow-xl p-4 rotate-3 hover:rotate-0 transition-all duration-300 border border-slate-100">
                        <div className="h-2 bg-slate-200 rounded mb-2" />
                        <div className="h-2 bg-slate-200 rounded w-2/3 mb-2" />
                        <div className="h-2 bg-slate-200 rounded w-1/2" />
                      </div>
                      
                      {/* Additional decorative elements */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-orange-400 animate-ping opacity-60" />
                      <div className="absolute top-24 left-1/3 w-3 h-3 rounded-full bg-amber-400 animate-bounce opacity-80" />
                      <div className="absolute bottom-28 right-1/3 w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
