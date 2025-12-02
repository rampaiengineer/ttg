import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogs, getBlogBySlug, type BlogSlug } from "@/config/blogs";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  BookOpen,
  CheckCircle2
} from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return;

  return {
    title: blog.seo.metaTitle,
    description: blog.seo.metaDescription,
    keywords: blog.seo.keywords.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedDate,
      authors: [blog.author],
      tags: blog.tags,
      url: `https://thanjaitechguru.com/resources/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
    alternates: {
      canonical: `https://thanjaitechguru.com/resources/${blog.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Schema.org Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.excerpt,
    "author": {
      "@type": "Organization",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Thanjai Tech Guru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thanjaitechguru.com/logo.png"
      }
    },
    "datePublished": blog.publishedDate,
    "dateModified": blog.publishedDate,
    "articleSection": blog.category,
    "keywords": blog.tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://thanjaitechguru.com/resources/${blog.slug}`
    }
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
        "name": "Resources",
        "item": "https://thanjaitechguru.com/resources"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `https://thanjaitechguru.com/resources/${blog.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/10 to-white">
        <Header />
        
        {/* Spacer for fixed header */}
        <div className="h-[72px]"></div>

        {/* Article Header */}
        <article className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-20 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          
          <div className="ttg-container relative">
            {/* Back Button */}
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Resources</span>
            </Link>

            <div className="max-w-4xl space-y-6">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <Tag className="h-3 w-3" />
                {blog.category}
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {blog.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg text-slate-300 leading-relaxed">
                {blog.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 text-sm border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-orange-400" />
                  <span className="text-slate-300">
                    <strong className="text-white">{blog.author}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  <span className="text-slate-300">{blog.publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span className="text-slate-300">{blog.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Article Content */}
        <main className="ttg-container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl text-slate-700 leading-relaxed">
                  {blog.content.introduction}
                </p>
              </div>

              {/* Content Sections */}
              {blog.content.sections.map((section, idx) => (
                <section key={idx} className="mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white text-lg font-bold">
                      {idx + 1}
                    </span>
                    {section.heading}
                  </h2>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {section.points && section.points.length > 0 && (
                    <ul className="space-y-3">
                      {section.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                          <span className="text-slate-700 text-lg leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Conclusion */}
              <section className="mt-16 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                  Final Thoughts
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {blog.content.conclusion}
                </p>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join Thanjai Tech Guru and transform your career with our industry-leading training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/30"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
                >
                  Book Free Demo
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">More Articles You Might Like</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogs
                  .filter((b) => b.slug !== blog.slug)
                  .slice(0, 2)
                  .map((relatedBlog) => (
                    <Link key={relatedBlog.slug} href={`/resources/${relatedBlog.slug}`}>
                      <article className="group p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all">
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2 block">
                          {relatedBlog.category}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                          {relatedBlog.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="h-3 w-3" />
                          <span>{relatedBlog.readTime}</span>
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

