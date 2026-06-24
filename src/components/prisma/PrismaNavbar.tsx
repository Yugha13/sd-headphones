"use client";

import { useEffect, useState } from "react";

const navLinks = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];

export default function PrismaNavbar() {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The hero container has p-4 (16px) or p-6 (24px).
      // When we scroll past that, snap to the top.
      setIsStuck(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        isStuck ? "top-0" : "top-4 md:top-6"
      }`}
    >
      <nav
        className={`bg-black px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 transition-all duration-300 ${
          isStuck ? "rounded-b-2xl md:rounded-b-3xl" : "rounded-2xl md:rounded-3xl shadow-2xl"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-[10px] sm:text-xs md:text-sm text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors"
            style={{ color: "rgba(225, 224, 204, 0.8)" }}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}
