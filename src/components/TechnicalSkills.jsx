import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { technicalSkills } from "../data/content.js";

const TechnicalSkills = () => {
  return (
    <section id="technical-skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Hands-on engineering depth"
          subtitle="Balanced execution across frontend, backend, and cloud."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {technicalSkills.map((group, index) => (
            <motion.div
              key={group.label}
              className="gradient-border glass rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
