import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { experiences } from "../data/content.js";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Leadership across high-impact teams"
          subtitle="A track record of scaling products, people, and infrastructure."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              className="glass rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {item.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
