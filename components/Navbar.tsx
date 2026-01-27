"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "About Us", id: "about" },
  { label: "Problem Statement", id: "problem" },
  { label: "Contact Us", id: "contact" },
];

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 flex h-16 w-full items-center bg-black/70 px-10 backdrop-blur-md"
    >
      {/* LEFT: LOGO */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex-1 cursor-pointer text-xl font-bold text-cyan-400"
        onClick={() => scrollToSection("hero")}
      >
        Hack-GHRCE
      </motion.div>

      {/* CENTER: NAV LINKS */}
      <div className="flex flex-1 justify-center gap-10">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-sm font-medium text-gray-200 transition hover:text-cyan-400"
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* RIGHT: EMPTY SPACER (keeps center aligned) */}
      <div className="flex-1" />
    </motion.nav>
  );
}
