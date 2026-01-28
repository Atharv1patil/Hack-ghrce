"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";
import { Orbitron, Space_Mono } from "next/font/google";

/* ===================== FONTS ===================== */

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

/* ===================== DATA ===================== */

const sponsors = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

const communityPartners: LogoItem[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google Developer Groups",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    alt: "ACM",
  },
  {
    src: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
    alt: "Microsoft Learn",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    alt: "IEEE",
  },
];

/* ===================== COMPONENT ===================== */

export default function Sponser() {
  return (
    <section className="w-full bg-black py-32 px-4 md:px-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ===================== SPONSORS ===================== */}
        <div className="mb-40 text-center">
          <h2
            className={`text-6xl md:text-7xl font-extrabold mb-6
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
              bg-clip-text text-transparent
              ${orbitron.className}`}
          >
            Our Sponsors
          </h2>

          <p
            className={`text-neutral-400 tracking-widest mb-16 ${spaceMono.className}`}
          >
            POWERING INNOVATION
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-2xl p-8 hover:scale-105 transition"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===================== COMMUNITY PARTNERS ===================== */}
        <div className="text-center">
          <h2
            className={`text-6xl md:text-7xl font-extrabold mb-6
              bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400
              bg-clip-text text-transparent
              ${orbitron.className}`}
          >
            Community Partners
          </h2>

          <p
            className={`text-neutral-400 tracking-widest mb-20 ${spaceMono.className}`}
          >
            BUILDING THE ECOSYSTEM
          </p>

          {/* LOGO LOOP – LEFT TO RIGHT */}
          <LogoLoop
            logos={communityPartners}
            speed={90}
            gap={56}
            logoHeight={64}
            pauseOnHover
            fadeOut
            fadeOutColor="#000000"
            className="py-10"
            renderItem={(item, key) => (
              <div
                key={key}
                className="flex items-center justify-center bg-white rounded-2xl px-10 py-8 shadow-lg"
              >
                {"src" in item && (
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    className="h-14 object-contain"
                    draggable={false}
                  />
                )}
              </div>
            )}
          />

          {/* LOGO LOOP – REVERSE DIRECTION */}
          <LogoLoop
            logos={communityPartners}
            speed={-70} // 🔁 REVERSE
            gap={56}
            logoHeight={64}
            pauseOnHover
            fadeOut
            fadeOutColor="#000000"
            className="py-10 mt-6"
            renderItem={(item, key) => (
              <div
                key={key}
                className="flex items-center justify-center bg-white rounded-2xl px-10 py-8 shadow-lg"
              >
                {"src" in item && (
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    className="h-14 object-contain"
                    draggable={false}
                  />
                )}
              </div>
            )}
          />
        </div>

      </div>
    </section>
  );
}
