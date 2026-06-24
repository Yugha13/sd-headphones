"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact Me", href: "/contact" }
];

export default function GlobalNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav className="bg-black px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 rounded-b-2xl md:rounded-b-3xl shadow-2xl">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[10px] sm:text-xs md:text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors"
            style={{ color: "rgba(225, 224, 204, 0.8)" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
