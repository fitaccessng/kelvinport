import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { timeline } from "../data/content.js";

const Timeline = () => {
  return (
    <section id="timeline" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Timeline"
          title="Founder journey"
          subtitle="From early experiments to scalable startup systems."
        />
        <div className="relative mt-10 border-l border-[color:var(--line)] pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className="mb-10 last:mb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-[color:var(--accent)] shadow-glow" />
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {item.year}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
