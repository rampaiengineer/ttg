"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/bootcamps", label: "Bootcamps" },
  { href: "/corporate", label: "Corporate Training" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-orange-100/50 bg-white/95 backdrop-blur-xl shadow-lg">
      {/* Main Navigation */}
      <div className="ttg-container">
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src="/images.png"
                alt="Thanjai Tech Guru"
                fill
                sizes="44px"
                className="object-contain p-1"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-[0.25em] text-orange-600 font-bold">
                Thanjai Tech Guru
              </p>
              <p className="text-[11px] font-bold text-slate-900 tracking-tight">
                Knowledge Meets Technology
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919025032130"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat Now</span>
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all"
            >
              Book Free Demo
            </Link>
            <button className="lg:hidden p-2 text-slate-700 hover:text-orange-600">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


