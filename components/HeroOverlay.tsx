"use client";

import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">

      {/* Gradient Heading: Red → Gold */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
        className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
      >
        Hack GHRCE
      </motion.h1>

      {/* Underline / Scanline */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "10rem" }}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 mt-2 rounded-full animate-pulse"
      ></motion.div>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8"
      >
        <CountdownTimer
          /* Optional: you can pass props if you want to style differently */
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-6 text-yellow-100 text-center max-w-xl text-lg md:text-xl drop-shadow-md"
      >
        Join us for a weekend of innovation, collaboration, and creativity. 
        Code, compete, and create your future at Hack GHRCE.
      </motion.p>

    </div>
  );
}
