"use client";

import { useState, useEffect } from "react";
import { X, Send, Loader2, CheckCircle2, User, Mail, Phone, MessageSquare, BookOpen, Sparkles } from "lucide-react";
import { submitLead } from "@/lib/supabase";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: "course_inquiry" | "demo_booking" | "contact";
  courseName?: string;
  courseSlug?: string;
}

export function LeadFormModal({
  isOpen,
  onClose,
  source,
  courseName,
  courseSlug,
}: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSuccess(false);
      setError("");
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

    // Phone validation (Indian format)
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
      message: formData.message.trim(),
      source,
      course_slug: courseSlug,
      course_name: courseName,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
  };

  const getTitle = () => {
    switch (source) {
      case "course_inquiry":
        return `Get Details: ${courseName || "Course"}`;
      case "demo_booking":
        return "Book Your Free Demo";
      default:
        return "Get in Touch";
    }
  };

  const getSubtitle = () => {
    switch (source) {
      case "course_inquiry":
        return "Fill the form below and our team will share the complete syllabus and pricing details.";
      case "demo_booking":
        return "Schedule a free 1-on-1 counselling session with our expert mentors.";
      default:
        return "Have questions? We'd love to hear from you.";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 px-6 py-6 lg:px-8 lg:py-8 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white/80 hover:bg-white/30 hover:text-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              {source === "demo_booking" ? (
                <Sparkles className="h-7 w-7" />
              ) : (
                <BookOpen className="h-7 w-7" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{getTitle()}</h2>
              <p className="mt-1 text-sm text-white/80">{getSubtitle()}</p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <div className="px-6 py-6 lg:px-8 lg:py-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Thank You! 🎉</h3>
              <p className="mt-2 text-slate-600">
                We've received your details. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
              {error && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="grid gap-5 lg:gap-6 lg:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <div className="absolute left-12 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    placeholder="9876543210"
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-[4.5rem] pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Message <span className="text-slate-400">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any questions or specific requirements..."
                    rows={3}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {source === "demo_booking" ? "Book Free Demo" : "Get Course Details"}
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                By submitting, you agree to receive communication from Thanjai Tech Guru.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

