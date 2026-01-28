"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = [
      "#22d3ee", // cyan
      "#6366f1", // indigo
      "#a855f7", // purple
      "#ec4899", // pink
    ];

    const defaults = {
      startVelocity: 35,
      spread: 360,
      ticks: 70,
      gravity: 0.9,
      zIndex: 1000,
      colors,
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = Math.floor(60 * (timeLeft / duration));

      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.2, y: 0.4 },
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.8, y: 0.4 },
      });
    }, 220);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-10"
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative overflow-hidden
          rounded-full px-8 py-4
          text-lg font-semibold text-white
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
          shadow-[0_0_40px_rgba(34,211,238,0.6)]
        "
      >
        {/* Glow pulse */}
        <span className="absolute inset-0 animate-pulse bg-white/10 rounded-full" />

        {/* Button text */}
        <span className="relative z-5 tracking-wide">
          Celebrate Hack GHRCE 🎉
        </span>
      </motion.button>
    </motion.div>
  );
}
