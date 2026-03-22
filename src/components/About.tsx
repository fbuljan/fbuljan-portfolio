"use client";

import { motion } from "framer-motion";

const highlights = [
  { value: "4+ Years", label: "Experience" },
  { value: "FER", label: "Education" },
  { value: "3 Companies", label: "Worked at" },
  { value: "Zagreb", label: "Based in" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[#6C63FF] text-sm font-mono tracking-wider uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Building things that matter
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-zinc-400 text-lg leading-relaxed mb-6"
        >
          I&apos;m a Software Engineer and Computer Science Master&apos;s student
          at FER, University of Zagreb. Over the past 4+ years I&apos;ve worked
          across game development, fintech, and mobile - shipping products
          end-to-end from architecture to production.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-zinc-400 text-lg leading-relaxed mb-12"
        >
          Outside of work, I&apos;m a Rector&apos;s Award recipient at the
          University of Zagreb and an active member of EESTEC LC Zagreb. I enjoy hackathons, side projects, and picking up
          whatever tech the problem calls for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-5 text-center"
            >
              <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-sm text-zinc-500">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
