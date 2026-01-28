"use client";

import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
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

/* ===================== COMPONENT ===================== */

export function Time() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  /* ===================== DAY 01 ===================== */

  const day1Data = [
    {
      title: "Hackathon Kick-Off",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Official inauguration and briefing session at GHRCE.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            ⏰ 03:00 PM · 12 April
          </p>
        </div>
      ),
    },
    {
      title: "Hackathon Begins",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Teams begin 24–48 hours of continuous hacking.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            ⏰ 03:30 PM · 12 April
          </p>
        </div>
      ),
    },
    {
      title: "Midnight Hacking Session",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Overnight development with full momentum.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            ⏰ 12:00 AM · 13 April
          </p>
        </div>
      ),
    },
    {
      title: "Deliverable 01 — Project Summary",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Submission of project overview and approach.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            ⏰ 03:00 PM · 13 April
          </p>
        </div>
      ),
    },
  ];

  /* ===================== DAY 02 ===================== */

  const day2Data = [
    {
      title: "Final Stretch Development",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Teams finalize features and polish solutions.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            ⏰ 08:00 AM · 14 April
          </p>
        </div>
      ),
    },
    {
      title: "Deliverable 02 — Presentation",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Final deck and demo preparation.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            ⏰ 11:59 PM · 14 April
          </p>
        </div>
      ),
    },
    {
      title: "Deliverable 03 — Recorded Pitch",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Recorded demo or pitch submission.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            ⏰ 11:59 PM · 14 April
          </p>
        </div>
      ),
    },
    {
      title: "Evaluation & Results",
      content: (
        <div>
          <p className={`text-sm text-neutral-200 leading-relaxed ${spaceMono.className}`}>
            Jury evaluation followed by results and prize distribution.
          </p>
          <p
            className={`mt-3 text-xs font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent ${spaceMono.className}`}
          >
            🏆 Awards Ceremony · 15 April
          </p>
        </div>
      ),
    },
  ];

  /* ===================== RENDER ===================== */

  return (
    <div className="relative w-full bg-black overflow-hidden">
      
      {/* TOP GLOW LINE */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* TITLE */}
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1
          className={`text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.4)] ${orbitron.className}`}
        >
          Schedule
        </h1>

        <p
          className={`mt-4 text-sm tracking-[0.35em] text-neutral-400 ${spaceMono.className}`}
        >
          HACKATHON TIMELINE
        </p>

        {/* DAY SWITCH */}
        <div className="flex justify-center gap-6 mt-16">
          <button
            onClick={() => setActiveDay("day1")}
            className={`px-10 py-4 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${
              activeDay === "day1"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                : "bg-neutral-900 text-neutral-400 hover:text-cyan-300"
            } ${spaceMono.className}`}
          >
            DAY 01
          </button>

          <button
            onClick={() => setActiveDay("day2")}
            className={`px-10 py-4 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${
              activeDay === "day2"
                ? "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                : "bg-neutral-900 text-neutral-400 hover:text-purple-300"
            } ${spaceMono.className}`}
          >
            DAY 02
          </button>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative pb-32">
        {activeDay === "day1" && <Timeline data={day1Data} />}
        {activeDay === "day2" && <Timeline data={day2Data} />}
      </div>
    </div>
  );
}
