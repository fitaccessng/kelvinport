import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data/content.js";

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Core skills and languages"
          subtitle="Product leadership backed by full-stack delivery."
        />
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="glass rounded-full px-5 py-2 text-sm text-[color:var(--text)]"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
