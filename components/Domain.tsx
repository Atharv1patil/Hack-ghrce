"use client";

import React, { useState } from "react";
import { Orbitron, Space_Mono } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type DomainType = {
  title: string;
  description: string;
  image: string;
  details: string[];
};

function Domain() {
  const [activeDomain, setActiveDomain] = useState<DomainType | null>(null);

  const domains: DomainType[] = [
    {
      title: "Web Development",
      description: "Build scalable, high-performance web platforms.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      details: [
        "Smart campus portals",
        "Event management systems",
        "AI-powered dashboards",
      ],
    },
    {
      title: "Artificial Intelligence",
      description: "Leverage data & intelligence to solve real problems.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      details: [
        "Predictive analytics",
        "AI chatbots",
        "Computer vision solutions",
      ],
    },
    {
      title: "Internet of Things",
      description: "Bridge the gap between hardware and software.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      details: [
        "Smart energy systems",
        "IoT healthcare",
        "Campus automation",
      ],
    },
    {
      title: "Blockchain",
      description: "Decentralized, secure & transparent solutions.",
      image: "https://images.unsplash.com/photo-1624996379697-f01d168b1c7d",
      details: [
        "Secure voting",
        "Decentralized identity",
        "Supply-chain transparency",
      ],
    },
    {
      title: "Cyber Security",
      description: "Defend systems against modern digital threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      details: [
        "Threat detection",
        "Secure authentication",
        "Security dashboards",
      ],
    },
    {
      title: "Open Innovation",
      description: "Think beyond limits & domains.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      details: [
        "Social impact ideas",
        "EdTech platforms",
        "Healthcare innovation",
      ],
    },
  ];

  return (
    <section
      id="domain"
      className="w-full bg-black py-32 px-4 md:px-10 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24">
          <h2
            className={`text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${orbitron.className}`}
          >
            Hackathon Domains
          </h2>
          <p
            className={`mt-6 text-neutral-400 text-sm md:text-base tracking-widest ${spaceMono.className}`}
          >
            Choose your battlefield. Build something legendary.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {domains.map((domain, index) => (
            <div
              key={index}
              onClick={() => setActiveDomain(domain)}
              className="cursor-pointer group rounded-3xl overflow-hidden border border-cyan-500/20 bg-neutral-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3
                  className={`text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ${orbitron.className}`}
                >
                  {domain.title}
                </h3>

                <p
                  className={`text-neutral-400 text-sm leading-relaxed ${spaceMono.className}`}
                >
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        {activeDomain && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
            <div className="relative max-w-2xl w-full rounded-3xl bg-neutral-900 border border-cyan-500/30 p-10 shadow-[0_0_60px_rgba(34,211,238,0.25)]">

              {/* Close */}
              <button
                onClick={() => setActiveDomain(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              <h3
                className={`text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ${orbitron.className}`}
              >
                {activeDomain.title}
              </h3>

              <p
                className={`text-neutral-300 mb-8 ${spaceMono.className}`}
              >
                {activeDomain.description}
              </p>

              <h4
                className={`text-lg font-semibold mb-4 text-cyan-400 ${spaceMono.className}`}
              >
                Example Problem Areas
              </h4>

              <ul className="list-disc list-inside space-y-2 text-neutral-400">
                {activeDomain.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Domain;
