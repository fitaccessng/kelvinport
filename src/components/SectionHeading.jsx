import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-10">
      <motion.p
        className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-3 text-3xl font-semibold text-[color:var(--text)] md:text-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-4 max-w-2xl text-[color:var(--muted)]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
