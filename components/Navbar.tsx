"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Prize", id: "prize" },
    { name: "Sponsors", id: "sponsor" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/10 text-white h-24">

      {/* LEFT LOGO – EXTREME LEFT */}
      <div
        onClick={() => scrollToSection("hero")}
        className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <img
          src="/aat.png"
          alt="AAT Logo"
          className="h-18 w-auto mt-4"
        />
      </div>

      {/* RIGHT LOGO – EXTREME RIGHT */}
      <div
        onClick={() => scrollToSection("hero")}
        className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer hidden md:block"
      >
        <img
          src="/src.png"
          alt="SRC Logo"
          className="h-30 w-auto mt-4"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center px-6">

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-12 items-center text-lg font-semibold">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative group text-gray-200 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
              {/* Underline */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden absolute right-6">
          <button
            onClick={toggleMenu}
            className="text-cyan-400 text-3xl p-2 rounded hover:bg-white/10 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-cyan-500/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left py-3 text-lg font-medium text-gray-200 hover:text-cyan-400 border-b border-white/10 last:border-b-0"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
