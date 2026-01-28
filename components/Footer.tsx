"use client";

import React from "react";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Orbitron, Space_Mono } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <footer className="relative w-full bg-black text-white pt-24 px-6 md:px-12 overflow-hidden">
      {/* Neon divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 items-start">

        {/* ================= LOGO + SOCIAL ================= */}
        <div>
          {/* LOGO */}
          <img
            src="/src.png" // 👉 replace with your footer logo path
            alt="Hack GHRCE Logo"
            className="h-38 mb-6"
          />

          <p
            className={`text-sm text-neutral-400 max-w-xs ${spaceMono.className}`}
          >
            National Level Hackathon bringing innovators, creators, and problem
            solvers together.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6">
            <a href="#" className="hover:text-cyan-400 transition">
              <Github />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <Twitter />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <MessageCircle /> {/* Discord alt */}
            </a>
          </div>
        </div>

        {/* ================= VENUE ================= */}
        <div>
          <h4 className={`text-xl font-semibold mb-4 ${orbitron.className}`}>
            Venue Address
          </h4>

          <p
            className={`text-sm leading-relaxed text-neutral-400 ${spaceMono.className}`}
          >
            G. H. Raisoni College of Engineering<br />
            Hingna Road, Nagpur<br />
            Maharashtra – 440016
          </p>
        </div>

        {/* ================= LINKS ================= */}
        <div>
          <h4 className={`text-xl font-semibold mb-4 ${orbitron.className}`}>
            Additional Links
          </h4>

          <ul
            className={`space-y-3 text-sm text-neutral-400 ${spaceMono.className}`}
          >
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                › Code of Conduct
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                › College Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                › ACM Student Chapter
              </a>
            </li>
          </ul>
        </div>

        {/* ================= MAP ================= */}
        <div>
          <h4 className={`text-xl font-semibold mb-4 ${orbitron.className}`}>
            Location
          </h4>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="GHRCE Location"
              src="https://www.google.com/maps?q=GHRCE%20Nagpur&output=embed"
              className="w-full h-48"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div
        className={`mt-20 pt-6 border-t border-white/10 text-center text-sm text-neutral-500 ${spaceMono.className}`}
      >
        © {new Date().getFullYear()} Hack GHRCE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
