"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// 🔥 Set 2 days countdown from now
const TARGET_DATE = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);

export default function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const diff = TARGET_DATE.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // update every second

    return () => clearInterval(timer);
  }, []);

  const timerItem = (value: number, label: string) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center rounded-xl bg-black/60 px-6 py-4 backdrop-blur-md shadow-lg"
    >
      <motion.span
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-3xl font-bold text-cyan-400"
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className="text-xs uppercase tracking-widest text-gray-300">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="mt-6 flex gap-6 justify-center">
      {timerItem(timeLeft.days, "Days")}
      {timerItem(timeLeft.hours, "Hours")}
      {timerItem(timeLeft.minutes, "Minutes")}
      {timerItem(timeLeft.seconds, "Seconds")}
    </div>
  );
}
