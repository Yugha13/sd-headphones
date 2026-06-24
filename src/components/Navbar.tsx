"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-black/50 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white/90 z-50">
          ALEX<span className="text-white/50">.DEV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="#contact"
            className="ml-4 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-transform active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-white/90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 text-lg font-medium text-black bg-white rounded-full"
          >
            Hire Me
          </Link>
        </div>
      )}
    </>
  );
}
