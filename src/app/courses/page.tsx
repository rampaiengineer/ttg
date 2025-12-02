"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadFormModal } from "@/components/LeadFormModal";
import { courses } from "@/config/courses";
import { 
  Search, 
  Clock, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Code2, 
  Database, 
  Layout, 
  Cpu, 
  Zap, 
  Terminal,
  GraduationCap,
  Star,
  CheckCircle2
} from "lucide-react";

const categories = [
  { id: "all", label: "All Courses", icon: <Layout className="h-4 w-4" /> },
  { id: "frontend", label: "Frontend", icon: <Code2 className="h-4 w-4" /> },
  { id: "backend", label: "Backend", icon: <Database className="h-4 w-4" /> },
  { id: "fullstack", label: "Full Stack", icon: <Terminal className="h-4 w-4" /> },
  { id: "ai", label: "AI & ML", icon: <Cpu className="h-4 w-4" /> },
  { id: "cloud", label: "Cloud & DevOps", icon: <Zap className="h-4 w-4" /> },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-500",
  Intermediate: "bg-amber-500",
  Advanced: "bg-red-500",
};

const categoryGradients: Record<string, string> = {
  frontend: "from-blue-500 to-indigo-600",
  backend: "from-emerald-500 to-teal-600",
  fullstack: "from-orange-500 to-amber-600",
  ai: "from-purple-500 to-pink-600",
  cloud: "from-cyan-500 to-blue-600",
};

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{ name: string; slug: string } | null>(null);
  const [formSource, setFormSource] = useState<"course_inquiry" | "demo_booking">("course_inquiry");

  // Handle URL category parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortTag.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const openCourseInquiry = (courseName: string, courseSlug: string) => {
    setSelectedCourse({ name: courseName, slug: courseSlug });
    setFormSource("course_inquiry");
    setIsFormOpen(true);
  };

  const openDemoBooking = () => {
    setSelectedCourse(null);
    setFormSource("demo_booking");
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
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400">
              <TrendingUp className="h-4 w-4" /> Expert-Led Programs
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Programming Courses</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From frontend to AI, master the skills that matter. Industry-designed curriculum, hands-on projects, and 100% placement support.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses by name, technology, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-orange-400" />
              <span className="text-slate-300"><strong className="text-white">23+</strong> Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-400" />
              <span className="text-slate-300"><strong className="text-white">500+</strong> Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-orange-400" />
              <span className="text-slate-300"><strong className="text-white">4.9</strong> Rating</span>
            </div>
          </div>
        </div>
      </section>

      <main className="ttg-container py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white border-2 border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-slate-600">
            Showing <span className="font-bold text-orange-600">{filteredCourses.length}</span> {filteredCourses.length === 1 ? 'course' : 'courses'}
          </p>
          <button
            onClick={openDemoBooking}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm hover:bg-orange-200 transition-all"
          >
            <Star className="h-4 w-4" />
            Book Free Demo
          </button>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <article
                key={course.slug}
                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2"
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categoryGradients[course.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`} />
                
                {/* Card Content */}
                <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full ${levelColors[course.level]} text-white text-[10px] font-bold uppercase tracking-wider`}>
                      {course.level}
                    </span>
                  </div>

                  <div className="space-y-4 flex-1">
                    {/* Icon & Tag */}
                    <div className="space-y-3">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${categoryGradients[course.category]} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {course.category === 'frontend' && <Code2 className="h-6 w-6" />}
                        {course.category === 'backend' && <Database className="h-6 w-6" />}
                        {course.category === 'fullstack' && <Terminal className="h-6 w-6" />}
                        {course.category === 'ai' && <Cpu className="h-6 w-6" />}
                        {course.category === 'cloud' && <Zap className="h-6 w-6" />}
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        {course.shortTag}
                      </p>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {course.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {course.summary}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-orange-500" />
                        <span>{course.mode}</span>
                      </div>
                    </div>

                    {/* Highlight */}
                    <div className="py-3 border-t border-slate-100">
                      <p className="text-xs text-emerald-600 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        {course.highlight}
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => openCourseInquiry(course.name, course.slug)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex items-center justify-center px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50 transition-all"
                    >
                      Syllabus
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-600 mb-6">
              <Search className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No courses found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)]" />
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Can't Find What You're Looking For?</h2>
            <p className="text-slate-300 text-lg">
              We offer custom training programs for individuals and corporate teams. Let's discuss your learning goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openDemoBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/30"
              >
                Book Free Counselling
              </button>
              <a
                href="https://wa.me/919025032130"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source={formSource}
        courseName={selectedCourse?.name}
        courseSlug={selectedCourse?.slug}
      />
    </div>
  );
}
