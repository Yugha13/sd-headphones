"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter text-white/90">
        ALEX<span className="text-white/50">.DEV</span>
      </Link>

      <div className="flex items-center gap-6">
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
    </motion.nav>
  );
}
