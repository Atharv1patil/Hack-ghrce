"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Orbitron, Space_Mono } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const faqs = [
  {
    question: "What is Hack GHRCE?",
    answer:
      "Hack GHRCE is a national-level hackathon organized by the GHRCE ACM Student Chapter, bringing together innovators to build impactful tech solutions under intense time constraints.",
  },
  {
    question: "Who can participate?",
    answer:
      "Students from any branch or year with a passion for technology, problem-solving, or innovation are welcome — beginners included.",
  },
  {
    question: "Do I need prior hackathon experience?",
    answer:
      "No prior experience is required. Mentors, workshops, and collaboration help beginners get started quickly.",
  },
  {
    question: "What domains can I build in?",
    answer:
      "Participants can choose from domains like Web, AI/ML, IoT, Cyber Security, Blockchain, or Open Innovation.",
  },
  {
    question: "What do participants gain?",
    answer:
      "Cash prizes, certificates, mentorship, networking opportunities, swag, and hands-on real-world experience.",
  },
  {
    question: "How do I register?",
    answer:
      "Registration details will be shared through our official website and social media channels.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-32 px-6 md:px-16 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)] pointer-events-none" />

      {/* ================= HEADER ================= */}
      <div className="relative max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${orbitron.className}`}
        >
          FAQs
        </motion.h2>

        <p
          className={`mt-6 text-neutral-400 text-sm md:text-base tracking-widest ${spaceMono.className}`}
        >
          Everything you need to know before entering the arena
        </p>
      </div>

      {/* ================= ACCORDION ================= */}
      <div className="relative max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-500/20 bg-neutral-900/60 backdrop-blur-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center px-6 py-6 text-left"
              >
                <span
                  className={`text-lg md:text-xl font-semibold transition-colors ${
                    isOpen
                      ? "text-cyan-400"
                      : "text-white"
                  } ${orbitron.className}`}
                >
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-cyan-400"
                      : "text-neutral-400"
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden px-6"
              >
                <p
                  className={`pb-6 text-neutral-400 leading-relaxed ${spaceMono.className}`}
                >
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="relative text-center mt-16">
        <p
          className={`text-neutral-500 ${spaceMono.className}`}
        >
          Still curious?{" "}
          <Link
            href="/contact"
            className="text-cyan-400 hover:text-purple-400 transition-colors font-semibold"
          >
            Contact Us
          </Link>{" "}
          — we’ve got you covered.
        </p>
      </div>
    </section>
  );
}
