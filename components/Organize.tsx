"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ===================== DATA ===================== */

const faculty = [
  {
    name: "Dr. Sangeeta Kulkarni",
    role: "Faculty Sponsor",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkedin: "#",
  },
  {
    name: "Dr. Pallavi Deshmukh",
    role: "Faculty Mentor",
    image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkedin: "#",
  },
];

const coreTeam = [
  { name: "Atharva Patil", role: "Organizing Lead", image: "/boy.png" },
  { name: "Rohit Sharma", role: "Technical Lead", image: "/boy2.png" },
  {
    name: "Sneha Joshi",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Aditya Kulkarni",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Pooja Deshpande",
    role: "Sponsorship Lead",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b",
  },
];

export default function Organize() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-32 overflow-hidden">

      {/* ===================== FACULTY SECTION (RESTORED) ===================== */}
      <div className="max-w-6xl mx-auto mb-40 px-6">
        <h2 className="text-center text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-20">
          FACULTY COORDINATORS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
          {faculty.map((f, i) => (
            <div key={i} className="text-center group">
              {/* IMAGE */}
              <div className="mx-auto w-[300px] h-[360px] rounded-xl overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <p className="mt-6 text-sm uppercase tracking-widest text-cyan-400">
                {f.role}
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                {f.name}
              </h3>

              {/* LINKEDIN */}
              <a
                href={f.linkedin}
                target="_blank"
                className="inline-block mt-3 text-sm text-gray-400 hover:text-cyan-400 transition"
              >
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== CORE TEAM ===================== */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          CORE TEAM
        </h2>
        <p className="mt-4 text-gray-400 tracking-widest text-sm">
          THE MINDS BEHIND HACK GHRCE
        </p>
      </div>

      {/* ===================== 3D CAROUSEL ===================== */}
      <div className="relative flex justify-center perspective-[1600px]">
        <Carousel
          opts={{ align: "center", loop: true }}
          setApi={(api) => {
            if (!api) return;
            setActiveIndex(api.selectedScrollSnap());
            api.on("select", () =>
              setActiveIndex(api.selectedScrollSnap())
            );
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent className="items-center">
            {coreTeam.map((member, index) => {
              const offset = Math.abs(index - activeIndex);
              const isActive = offset === 0;
              const isNear = offset === 1;

              return (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/3 flex justify-center"
                >
                  <div
                    className="relative transition-all duration-700 ease-out"
                    style={{
                      transform: isActive
                        ? "translateZ(0px) scale(1)"
                        : isNear
                        ? "translateZ(-180px) scale(0.85)"
                        : "translateZ(-360px) scale(0.7)",
                      opacity: isActive ? 1 : 0.25,
                      filter: isActive
                        ? "none"
                        : "grayscale(100%) blur(1px)",
                    }}
                  >
                    <div className="w-[280px] h-[380px] rounded-xl overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {isActive && (
                      <div className="mt-10 text-center">
                        <p className="text-sm uppercase tracking-widest text-purple-400">
                          {member.role}
                        </p>
                        <h3 className="mt-2 text-3xl font-bold">
                          {member.name}
                        </h3>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="left-4 bg-black/60 border border-white/10 hover:bg-black" />
          <CarouselNext className="right-4 bg-black/60 border border-white/10 hover:bg-black" />
        </Carousel>

        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </section>
  );
}
