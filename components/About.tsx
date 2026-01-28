"use client";

import { Orbitron, Space_Mono } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const images = [
  "https://static.wixstatic.com/media/a2f2e2_5648afe3ae434beda91d44e9ce181e95~mv2.png/v1/crop/x_4,y_0,w_1075,h_1825/fill/w_284,h_566,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cults_FINAL.png",
"https://static.wixstatic.com/media/a2f2e2_6025a5e9e4c946928a9ba784fbdcf9ee~mv2.png/v1/fill/w_183,h_365,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sports_FINAL.png",  
  "https://static.wixstatic.com/media/a2f2e2_8ca480f30f124f5eabe4604f07807660~mv2.png/v1/fill/w_224,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Manlit_FINAL.png",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
];

export default function About(): React.ReactElement {
  return (
    <section className="relative bg-black text-white overflow-hidden py-20">
      {/* Subtle cyan grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.05,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-4">
          <h1
            className={`text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight ${orbitron.className}`}
          >
            About the
            <br />
            <span className="block text-cyan-400">Hackathon</span>
          </h1>

          <p
            className={`text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed ${spaceMono.className}`}
          >
            <span className="text-white">Hack GHRCE</span> is a national-level
            hackathon where innovators build bold solutions, fast.
          </p>

          <p
            className={`text-cyan-300 text-sm tracking-wide ${spaceMono.className}`}
          >
            ⚡ Build • Compete • Innovate
          </p>
        </div>

        {/* RIGHT IMAGE GRID (UNCHANGED STRUCTURE) */}
        <div className="grid grid-cols-2 gap-6 justify-end">
          
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
              <img src={images[1]} className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
              <img src={images[3]} className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-10">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
              <img src={images[0]} className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30 bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-[1.02]">
              <img src={images[2]} className="w-full h-80 object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
