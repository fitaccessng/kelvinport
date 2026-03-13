import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { philosophy } from "../data/content.js";

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How I Think"
          title="Founder philosophy"
          subtitle="A few beliefs that shape what I build and how I build it."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {philosophy.map((statement, index) => (
            <motion.div
              key={statement}
              className="glass rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
                <Quote size={18} />
              </div>
              <p className="mt-6 text-lg text-[color:var(--text)]">
                {statement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
