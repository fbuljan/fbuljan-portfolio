"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Farseer",
    period: "Apr 2024 - Present",
    location: "Zagreb",
    bullets: [
      "Backend services, system design, and API architecture",
      "Built and shipped AI agent-powered products",
      "Cross-functional collaboration across engineering and business teams",
    ],
  },
  {
    role: "Software Engineer",
    company: "MyStones",
    period: "Aug 2025 - Present",
    bullets: [
      "Backend and mobile development, building core product features",
    ],
  },
  {
    role: "Game Developer",
    company: "Fearem",
    period: "Dec 2021 - Apr 2024",
    location: "Remote",
    bullets: [
      "Game development for Steam and web platforms",
      "Real-time multiplayer systems and gameplay engineering",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[#6C63FF] text-sm font-mono tracking-wider uppercase mb-2">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-8 top-1.5 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-[#6C63FF] ring-4 ring-[#0a0a0a]" />

                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-mono text-zinc-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#6C63FF] text-sm font-medium mb-4">
                    {exp.company}
                    {exp.location && (
                      <span className="text-zinc-500">
                        {" "}
                        &middot; {exp.location}
                      </span>
                    )}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-zinc-400 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-[#6C63FF] shrink-0 leading-relaxed">
                          &rsaquo;
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
