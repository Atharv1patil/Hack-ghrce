"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* ===================== COUNT UP HOOK (SAFE) ===================== */
function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

/* ===================== PRIZE COMPONENT ===================== */
export default function Prize() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  // ✅ Hooks ALWAYS called (correct)
  const totalPrize = useCountUp(40000, isInView);
  const winnerPrize = useCountUp(15000, isInView);
  const runnerPrize = useCountUp(10000, isInView);

  return (
    <section
      ref={ref}
      id="prize"
      className="w-full bg-black py-32 px-4 md:px-10 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* ===================== TITLE ===================== */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Prizes & Rewards
          </h2>
          <p className="mt-4 text-neutral-400 text-sm tracking-widest uppercase">
            Compete • Win • Celebrate
          </p>
        </div>

        {/* ===================== MAIN GRID ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ===================== LEFT BIG CARD ===================== */}
          <div className="lg:col-span-2 rounded-3xl p-12 bg-gradient-to-br from-cyan-900/40 via-black to-black border border-cyan-500/20 relative overflow-hidden">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.35),transparent_60%)]" />

            <div className="relative z-10">
              <p className="uppercase tracking-widest text-sm text-cyan-300 mb-6">
                Total Prize Pool
              </p>

              <h3 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                ₹{totalPrize.toLocaleString()}+
              </h3>

              <p className="text-neutral-300 mb-16">
                Cash prizes + exclusive tech goodies
              </p>

              <div className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Winner</p>
                  <p className="text-2xl font-bold text-cyan-400">
                    ₹{winnerPrize.toLocaleString()}+
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-400 mb-1">Runner Up</p>
                  <p className="text-2xl font-bold text-purple-400">
                    ₹{runnerPrize.toLocaleString()}+
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-400 mb-1">
                    Special Mentions
                  </p>
                  <p className="text-2xl font-bold text-blue-400">
                    Tech Goodies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== RIGHT CARD ===================== */}
          <div className="rounded-3xl p-10 bg-neutral-900 border border-white/10 flex flex-col justify-between">

            <div>
              <p className="uppercase tracking-widest text-sm text-neutral-400 mb-8">
                Participant Perks
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-1">
                    Certificates
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Digital certificates for all qualified participants.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-1">
                    Exclusive Swag
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Hackathon merchandise and goodies.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-1">
                    Mentorship
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Guidance from industry professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-cyan-800/20 to-black border border-cyan-500/20 p-6">
              <p className="text-sm text-cyan-300 mb-2">
                ● Prize distribution details
              </p>
              <p className="text-sm text-neutral-300">
                Final breakdown will be announced during the closing ceremony.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== BOTTOM PERKS ===================== */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 text-sm text-neutral-300">
          <span className="flex items-center gap-2">
            <span className="text-cyan-400">●</span> Internship Opportunities
          </span>
          <span className="flex items-center gap-2">
            <span className="text-purple-400">●</span> Premium Swag Kits
          </span>
          <span className="flex items-center gap-2">
            <span className="text-blue-400">●</span> Industry Recognition
          </span>
        </div>

      </div>
    </section>
  );
}
