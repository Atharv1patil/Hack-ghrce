"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = new Date("2026-01-31T09:00:00");

function usePrevious<T>(value: T) {
  const [prev, setPrev] = useState(value);
  useEffect(() => setPrev(value), [value]);
  return prev;
}

export default function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const diff = TARGET_DATE.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const totalSeconds = Math.floor(diff / 1000);
    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft(calculateTimeLeft()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-14 flex flex-wrap justify-center gap-8">
      <TimeCard value={timeLeft.days} label="DAYS" rotate={-10} />
      <TimeCard value={timeLeft.hours} label="HOURS" rotate={-4} />
      <TimeCard value={timeLeft.minutes} label="MINUTES" rotate={6} />
      <TimeCard value={timeLeft.seconds} label="SECONDS" rotate={12} />
    </div>
  );
}

function TimeCard({
  value,
  label,
  rotate,
}: {
  value: number;
  label: string;
  rotate: number;
}) {
  const prev = usePrevious(value);
  const changed = prev !== value;

  return (
    <motion.div
      style={{ rotate }}
      whileHover={{ scale: 1.08, rotate: rotate * 0.6 }}
      className={`
        ${spaceMono.className}
        relative flex h-36 w-36 flex-col items-center justify-center
        rounded-3xl
        bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-blue-500/20
        backdrop-blur-xl
        border border-cyan-400/30
        shadow-[0_0_50px_rgba(34,211,238,0.25)]
      `}
    >
      <motion.span
        animate={changed ? { y: [-12, 0], opacity: [0.6, 1] } : {}}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-5xl font-extrabold text-cyan-300"
      >
        {value.toString().padStart(2, "0")}
      </motion.span>

      <span className="mt-3 text-xs tracking-[0.35em] text-cyan-200/80">
        {label}
      </span>
    </motion.div>
  );
}
