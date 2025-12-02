import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-14">
          <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-5">
            
            {/* Brand Column - Larger */}
            <div className="lg:col-span-2 space-y-5">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border-2 border-orange-400/30 bg-gradient-to-br from-orange-500/20 to-amber-500/20 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src="/images.png"
                    alt="Thanjai Tech Guru"
                    fill
                    sizes="56px"
                    className="object-contain p-2"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-400 font-bold">
                    Thanjai Tech Guru
                  </p>
                  <p className="text-lg font-bold text-white">
                    AI & Tech Academy
                  </p>
                </div>
              </Link>
              
              <p className="text-sm leading-relaxed text-slate-400 max-w-md pr-4">
                Building the next generation of AI Engineers and Full-Stack Developers from Thanjavur. 
                We bridge the gap between academic theory and enterprise-grade production skills.
              </p>
              
              <div className="flex gap-3">
                <a href="#" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-transparent hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-transparent hover:scale-110" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-transparent hover:scale-110" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="#" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-transparent hover:scale-110" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="mb-5 text-sm font-bold text-white uppercase tracking-wider">Programs</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/courses/genai-mastery" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  GenAI Mastery
                </Link></li>
                <li><Link href="/courses/full-stack-developer" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  Full-Stack Developer
                </Link></li>
                <li><Link href="/courses/python-backend" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  Python Backend
                </Link></li>
                <li><Link href="/courses/ai-for-business" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  AI for Business
                </Link></li>
                <li><Link href="/bootcamps" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  Bootcamps
                </Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-5 text-sm font-bold text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  About Us
                </Link></li>
                <li><Link href="/corporate" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  Corporate Training
                </Link></li>
                <li><Link href="/placement" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  Placements
                </Link></li>
                <li><Link href="/resources" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  Resources
                </Link></li>
                <li><Link href="/contact" className="hover:text-orange-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-orange-400/50 group-hover:bg-orange-400"></span>
                  Contact
                </Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-5 text-sm font-bold text-white uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange-400" />
                  <span className="leading-relaxed">
                    No. 123, Tech Park Road,<br />
                    Thanjavur, Tamil Nadu 613005<br />
                    India
                  </span>
                </li>
                <li>
                  <a href="tel:+919025032130" className="flex items-center gap-3 hover:text-orange-400 transition-colors group">
                    <Phone className="h-5 w-5 shrink-0 text-orange-400" />
                    <span className="group-hover:underline">+91 90250 32130</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@thanjaitechguru.com" className="flex items-center gap-3 hover:text-orange-400 transition-colors group">
                    <Mail className="h-5 w-5 shrink-0 text-orange-400" />
                    <span className="group-hover:underline break-all">hello@thanjaitechguru.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-10 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <p className="font-medium">© {new Date().getFullYear()} Thanjai Tech Guru. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link href="/privacy" className="hover:text-orange-400 transition-colors font-medium">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-orange-400 transition-colors font-medium">Terms of Service</Link>
                <Link href="/cookie" className="hover:text-orange-400 transition-colors font-medium">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


