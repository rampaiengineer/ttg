"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { submitLead } from "@/lib/supabase";
import {
  Building2,
  Users,
  TrendingUp,
  CheckCircle2,
  Briefcase,
  Target,
  Award,
  Zap,
  Brain,
  Code,
  Cpu,
  Globe,
  Rocket,
  MessageSquare,
  Phone,
  Mail,
  Loader2,
  GraduationCap
} from "lucide-react";

const trainingTracks = [
  {
    id: "genai-developers",
    icon: <Brain className="h-8 w-8" />,
    gradient: "from-purple-500 to-pink-600",
    title: "GenAI for Developers & Engineers",
    description: "Upskill your engineering team with cutting-edge GenAI technologies",
    topics: [
      "LLM fundamentals and prompt engineering",
      "LangChain and AI agents development",
      "RAG systems and vector databases",
      "Production AI deployment and monitoring",
      "Custom GPT and fine-tuning techniques",
    ],
    duration: "2-4 weeks",
    audience: "Software engineers, developers, tech leads",
  },
  {
    id: "ai-business",
    icon: <Target className="h-8 w-8" />,
    gradient: "from-blue-500 to-indigo-600",
    title: "AI for Business Leaders & Decision Makers",
    description: "Strategic AI implementation for non-technical executives",
    topics: [
      "AI landscape and business opportunities",
      "ROI calculation for AI projects",
      "Ethical AI and responsible implementation",
      "Team restructuring for AI adoption",
      "Vendor evaluation and selection",
    ],
    duration: "1-2 weeks",
    audience: "C-suite, managers, business leaders",
  },
  {
    id: "fullstack-teams",
    icon: <Code className="h-8 w-8" />,
    gradient: "from-orange-500 to-amber-600",
    title: "Modern Full-Stack for Product Teams",
    description: "Build modern web applications with latest frameworks",
    topics: [
      "React and Next.js best practices",
      "API design and microservices",
      "Cloud deployment (AWS/Azure)",
      "DevOps and CI/CD pipelines",
      "Testing and quality assurance",
    ],
    duration: "3-6 weeks",
    audience: "Development teams, product engineers",
  },
];

const automationServices = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "AI Chatbots & Support Assistants",
    description: "Custom chatbots for customer support, lead qualification, and internal knowledge bases",
    examples: ["24/7 customer support automation", "Lead qualification bots", "Internal FAQ assistants"],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline business processes with AI",
    examples: ["Email and document processing", "Data entry automation", "Report generation"],
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Custom AI Solutions",
    description: "Bespoke AI applications tailored to your specific business needs",
    examples: ["Predictive analytics", "Content generation", "Sentiment analysis"],
  },
];

const collegePrograms = [
  {
    title: "Workshop Series",
    duration: "1-3 days",
    description: "Intensive hands-on workshops on GenAI, Full-Stack, or specialized topics",
    format: "On-campus or virtual",
  },
  {
    title: "Semester-Aligned Bootcamps",
    duration: "8-12 weeks",
    description: "Comprehensive training programs aligned with academic semester schedules",
    format: "Blended (on-campus + online)",
  },
  {
    title: "Hackathons & Competitions",
    duration: "2-3 days",
    description: "Organize and mentor student hackathons with industry-relevant challenges",
    format: "On-campus with mentor support",
  },
  {
    title: "Placement Training",
    duration: "4-6 weeks",
    description: "Interview preparation, coding practice, and soft skills for final-year students",
    format: "On-campus or virtual",
  },
];

const benefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Customized Curriculum",
    description: "Training designed specifically for your team's skill level and business goals",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry-Expert Trainers",
    description: "Learn from professionals with 5-10+ years of hands-on industry experience",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Practical, Project-Based",
    description: "70% hands-on work with real-world projects relevant to your industry",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Flexible Engagement Models",
    description: "On-site, remote, or hybrid training options to suit your team's needs",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Measurable Outcomes",
    description: "Clear KPIs, assessments, and post-training support to track progress",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Certification & Documentation",
    description: "Certificates of completion and comprehensive training documentation",
  },
];

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.organization.trim()) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "").slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      setError("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }

    const result = await submitLead({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: cleanPhone,
      message: `Organization: ${formData.organization}\n\n${formData.message}`.trim(),
      source: "contact",
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setFormData({ name: "", organization: "", email: "", phone: "", message: "" });
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
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
              <Building2 className="h-4 w-4" /> Corporate & Institutional Training
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Corporate Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">AI Automation</span> for Modern Teams
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              Partner with Thanjai Tech Guru to upskill your teams with GenAI and Full-Stack expertise, design custom workshops, and implement AI automation solutions that drive real business value.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-slate-400">Corporate Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1000+</p>
                <p className="text-slate-400">Employees Trained</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="text-slate-400">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ttg-container py-16 space-y-20">
        {/* Corporate Training Tracks */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Training Tracks</span>
            </h2>
            <p className="text-lg text-slate-600">
              Customized programs designed to upskill your teams with the latest technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {trainingTracks.map((track) => (
              <article
                key={track.id}
                className="group relative overflow-hidden rounded-3xl bg-white border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`} />
                
                <div className="relative bg-white rounded-3xl p-6 lg:p-8 h-full flex flex-col">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${track.gradient} text-white shadow-lg mb-4`}>
                    {track.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{track.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{track.description}</p>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Key Topics</p>
                      <ul className="space-y-2">
                        {track.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                    <div>
                      <p className="text-xs text-slate-500">Duration</p>
                      <p className="font-semibold text-slate-900">{track.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Target</p>
                      <p className="font-semibold text-slate-900 text-right">{track.audience.split(',')[0]}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AI Automation for SMEs */}
        <section className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                AI Automation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">SMEs</span>
              </h2>
              <p className="text-lg text-slate-300">
                Transform your business operations with custom AI solutions that save time and reduce costs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {automationServices.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Examples</p>
                    <ul className="space-y-1">
                      {service.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-orange-400"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Colleges & Institutions */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Programs for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Colleges & Institutions</span>
            </h2>
            <p className="text-lg text-slate-600">
              Empower your students with industry-relevant skills through our comprehensive training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collegePrograms.map((program, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{program.title}</h3>
                <p className="text-xs font-semibold text-orange-600 mb-3">{program.duration} • {program.format}</p>
                <p className="text-sm text-slate-600">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Thanjai Tech Guru</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-100">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Rocket className="h-6 w-6 text-orange-500" />
                Flexible Engagement Models
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>On-site training at your office or campus</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Virtual live cohorts across multiple locations</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Blended programs with follow-up clinics</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Weekend or weekday batches as per your schedule</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Target className="h-6 w-6 text-orange-500" />
                Measurable Outcomes
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Hands-on teams able to drive AI and full-stack projects</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Documented playbooks and internal use-cases</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Clear skills uplift across targeted roles</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Post-training support and consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8 space-y-3">
              <h2 className="text-3xl font-bold text-slate-900">Let's Discuss Your Training Needs</h2>
              <p className="text-slate-600">
                Share a few details about your organization and training requirements. We'll get back within one business day.
              </p>
            </div>

            {isSuccess && (
              <div className="mb-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-6 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">Thank You! 🎉</h3>
                  <p className="text-sm text-emerald-700">
                    We've received your enquiry. Our team will contact you within one business day.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-2xl bg-red-50 border-2 border-red-200 px-5 py-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="Company / College name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 pl-14 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="9876543210"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  What would you like to explore?
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="Example: GenAI upskilling for 30 engineers, AI for Business workshop for leadership, AI automation for customer support, etc."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </button>
                <a
                  href="https://wa.me/919025032130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
