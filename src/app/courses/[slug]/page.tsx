import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { courses, getCourseBySlug, type CourseSlug } from "@/config/courses";

interface CourseDetailPageProps {
  params: { slug: CourseSlug };
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({
  params,
}: CourseDetailPageProps): Metadata | undefined {
  const course = getCourseBySlug(params.slug);
  if (!course) return;

  const title = `${course.name} | Thanjai Tech Guru`;
  const description = course.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="ttg-container pb-20 pt-10">
        <section className="ttg-section grid gap-10 md:grid-cols-[1.6fr,1fr] md:items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="ttg-section-eyebrow">{course.shortTag}</p>
              <h1 className="ttg-section-heading">{course.name}</h1>
              <p className="ttg-section-subtitle text-sm">{course.overview}</p>
              <div className="flex flex-wrap gap-3 text-[11px] text-zinc-400">
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.mode}</span>
                <span>•</span>
                <span>{course.level}</span>
              </div>
            </div>

            <div className="ttg-card space-y-4 p-5">
              <h2 className="text-sm font-semibold text-white">Why this course</h2>
              <ul className="space-y-2 text-xs text-zinc-300">
                {course.whyThisCourse.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-white">Syllabus</h2>
              <div className="space-y-3">
                {course.syllabus.map((module) => (
                  <details
                    key={module.title}
                    className="group rounded-xl border border-white/10 bg-black/30 p-4"
                    open
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {module.title}
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          {module.weeks}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-zinc-300">
                        View topics
                      </span>
                    </summary>
                    <ul className="mt-3 space-y-1.5 text-xs text-zinc-300">
                      {module.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="ttg-card p-4">
                <h3 className="text-xs font-semibold text-white">Tools & stack</h3>
                <ul className="mt-2 space-y-1 text-[11px] text-zinc-300">
                  {course.tools.map((tool) => (
                    <li key={tool}>• {tool}</li>
                  ))}
                </ul>
              </div>
              <div className="ttg-card p-4">
                <h3 className="text-xs font-semibold text-white">
                  Real-world projects
                </h3>
                <ul className="mt-2 space-y-1 text-[11px] text-zinc-300">
                  {course.projects.map((project) => (
                    <li key={project}>• {project}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ttg-card p-4">
              <h3 className="text-xs font-semibold text-white">Mentors</h3>
              <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                {course.mentors.map((mentor) => (
                  <li key={mentor.name}>
                    <p className="font-semibold text-zinc-100">{mentor.name}</p>
                    <p>{mentor.role}</p>
                    <p className="text-[11px] text-zinc-400">
                      {mentor.experience}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-white">FAQs</h2>
              <div className="space-y-3">
                {course.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="rounded-xl border border-white/10 bg-black/40 p-3 text-xs"
                    open
                  >
                    <summary className="cursor-pointer font-semibold text-white">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-zinc-300">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar – enrollment */}
          <aside className="space-y-4">
            <div className="ttg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Enrollment
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                {course.pricingNote}
              </p>
              {course.installmentAvailable && (
                <p className="mt-1 text-[11px] text-emerald-300">
                  Installment / EMI options available for eligible learners.
                </p>
              )}
              <div className="mt-4 flex flex-col gap-2 text-xs">
                <Link href="/contact" className="ttg-btn-primary text-xs">
                  Book a free counselling call
                </Link>
                <a
                  href="https://wa.me/919025032130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ttg-btn-outline text-xs"
                >
                  Discuss on WhatsApp
                </a>
                <button
                  type="button"
                  className="ttg-btn-outline text-xs"
                  onClick={() => {
                    // Placeholder for PDF download – to be wired with real file later
                    alert("We will add the full syllabus PDF soon.");
                  }}
                >
                  Download full syllabus PDF
                </button>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}


