"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogs } from "@/config/blogs";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Search,
  Brain,
  Code,
  Zap
} from "lucide-react";

const categoryIcons: Record<string, JSX.Element> = {
  "Generative AI": <Brain className="h-5 w-5" />,
  "Full-Stack Development": <Code className="h-5 w-5" />,
  "AI Automation": <Zap className="h-5 w-5" />,
};

const categoryGradients: Record<string, string> = {
  "Generative AI": "from-purple-500 to-pink-600",
  "Full-Stack Development": "from-orange-500 to-amber-600",
  "AI Automation": "from-emerald-500 to-teal-600",
};

export default function ResourcesPage() {
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
              <BookOpen className="h-4 w-4" /> Learning Resources
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tech Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Learning Resources</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              Expert guides, career insights, and industry trends to help you succeed in tech. Written by our experienced mentors at Thanjai Tech Guru.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-400" />
              <span className="text-slate-300"><strong className="text-white">{blogs.length}</strong> Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-400" />
              <span className="text-slate-300">Updated <strong className="text-white">Weekly</strong></span>
            </div>
          </div>
        </div>
      </section>

      <main className="ttg-container py-16">
        {/* Featured Blog */}
        {blogs[0] && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">Featured Article</h2>
            </div>
            
            <Link href={`/resources/${blogs[0].slug}`}>
              <article className="group relative overflow-hidden rounded-3xl bg-white border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${categoryGradients[blogs[0].category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.01]`} />
                
                <div className="relative bg-white rounded-3xl p-8 lg:p-10">
                  <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
                    <div className="space-y-5">
                      {/* Category Badge */}
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${categoryGradients[blogs[0].category]} text-white`}>
                          {categoryIcons[blogs[0].category]}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                          {blogs[0].category}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                          {blogs[0].title}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {blogs[0].excerpt}
                        </p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-orange-500" />
                          <span>{blogs[0].publishedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span>{blogs[0].readTime}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {blogs[0].tags.slice(0, 4).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Side */}
                    <div className="flex flex-col justify-center items-start lg:items-end space-y-4">
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold group-hover:scale-105 transition-all">
                        Read Full Article
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-sm text-slate-600">
                        By <strong className="text-slate-900">{blogs[0].author}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        {/* All Blog Posts */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/resources/${blog.slug}`}>
                <article className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categoryGradients[blog.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`} />
                  
                  <div className="relative bg-white rounded-2xl p-6 flex-1 flex flex-col">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${categoryGradients[blog.category]} text-white group-hover:scale-110 transition-transform`}>
                        {categoryIcons[blog.category]}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{blog.readTime}</span>
                      </div>
                      <span className="text-orange-600 font-semibold group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-100 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Want to Learn More?
            </h2>
            <p className="text-lg text-slate-600">
              Explore our comprehensive courses and bootcamps designed to help you master the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/30"
              >
                Browse Courses
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-bold hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
