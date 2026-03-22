"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "CS Master's Student @ FER",
  "Computer Vision & AI",
];

function useTypingEffect(strings: string[], typingSpeed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];

    if (!deleting && charIndex < current.length) {
      const timeout = setTimeout(
        () => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        },
        typingSpeed + Math.random() * 40,
      );
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % strings.length);
    }
  }, [charIndex, deleting, index, strings, typingSpeed, pause]);

  return displayed;
}

export default function Hero() {
  const typed = useTypingEffect(roles);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6C63FF]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6C63FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#6C63FF] text-sm font-mono tracking-wider uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Filip{" "}
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] bg-clip-text text-transparent">
            Buljan
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-8 mb-8"
        >
          <span className="text-lg sm:text-xl text-zinc-400 font-mono">
            {typed}
            <span className="animate-pulse text-[#6C63FF]">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[#6C63FF] text-white font-medium hover:bg-[#5b54e0] transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/10 text-zinc-300 font-medium hover:border-white/25 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
