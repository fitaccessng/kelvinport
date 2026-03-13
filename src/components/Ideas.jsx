import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { ideas } from "../data/content.js";

const Ideas = () => {
  return (
    <section id="ideas" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Ideas"
          title="Ideas I'm exploring"
          subtitle="Spaces that feel underbuilt and full of potential."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea}
              className="glass flex items-center gap-4 rounded-[2rem] p-5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
                <Lightbulb size={18} />
              </div>
              <p className="text-sm font-semibold">{idea}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ideas;
