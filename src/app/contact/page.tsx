"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { submitLead } from "@/lib/supabase";
import { Loader2, CheckCircle2, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Phone validation
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
      message: `Course Interest: ${formData.course || 'Not specified'}\n\n${formData.message}`.trim(),
      source: "contact",
      course_name: formData.course || undefined,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-[72px]"></div>

      <main className="ttg-container py-12 lg:py-16">
        <section className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <MessageSquare className="h-4 w-4" /> Book a Demo
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Schedule a Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Counselling Call</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tell us where you are today and where you want to go. We will
                recommend the right course or bootcamp and share fees, batch
                details and next steps.
              </p>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-6 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">Thank You! 🎉</h3>
                  <p className="text-sm text-emerald-700">
                    We've received your details. Our team will contact you within 24 hours to confirm your demo slot.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="rounded-2xl bg-red-50 border-2 border-red-200 px-5 py-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white border-2 border-slate-100 shadow-lg p-6 lg:p-8 space-y-6"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Phone */}
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

                {/* Course Interest */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Interested Course
                  </label>
                  <select 
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                  >
                    <option value="">Select a course (optional)</option>
                    <option>GenAI Mastery Program</option>
                    <option>Full-Stack Developer Program</option>
                    <option>AI for Business & Automation</option>
                    <option>Prompt Engineering Specialisation</option>
                    <option>GenAI Builder Bootcamp</option>
                    <option>Full-Stack Bootcamp</option>
                    <option>Python Programming</option>
                    <option>JavaScript Development</option>
                    <option>React.js & Next.js</option>
                    <option>Node.js & Backend</option>
                    <option>Weekend Workshops</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  What would you like to discuss?
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="Example: I am a final-year student looking for placement support, or I am a working professional planning a career switch."
                />
              </div>

              {/* Submit Buttons */}
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
                    <>
                      Submit & Request Demo
                    </>
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
                  Talk on WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Contact Information Sidebar */}
          <aside className="space-y-6">
            {/* Location Card */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                  <MapPin className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-xl font-bold">Visit Our Academy</h2>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Thanjai Tech Guru<br />
                Thanjavur, Tamil Nadu, India
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:+919025032130"
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 90250 32130</span>
                </a>
                <a 
                  href="mailto:info@thanjaitechguru.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@thanjaitechguru.com</span>
                </a>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="rounded-3xl bg-orange-50 border-2 border-orange-100 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Expert mentors with industry experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Hands-on projects and real-world experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>100% placement assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Flexible batch timings</span>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}


