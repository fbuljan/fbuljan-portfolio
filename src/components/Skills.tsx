"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "Python", "C#", "JavaScript", "MATLAB"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "ASP.NET", "PostgreSQL", "Firebase", "REST APIs"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["Vue.js", "React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    title: "AI & Data Science",
    skills: ["PyTorch", "YOLO", "OpenCV", "NumPy", "Scikit-learn"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "GCP", "Git", "Unity", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[#6C63FF] text-sm font-mono tracking-wider uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Technologies I use most
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono text-[#6C63FF] uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-sm font-medium hover:bg-[#6C63FF]/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
