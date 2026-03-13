import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/content.js";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Education & Certifications"
          subtitle="Formal training backed by real-world delivery."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={item}
              className="glass rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <p className="text-[color:var(--text)]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
