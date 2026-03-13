import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const BlogPlaceholder = () => {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Founder notes & experiments"
          subtitle="A space for lessons, product strategy, and behind-the-scenes build logs."
        />
        <motion.div
          className="gradient-border glass rounded-[2rem] p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
              <PenLine size={18} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Coming soon
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Long-form thinking for founders.
              </h3>
            </div>
          </div>
          <p className="mt-6 text-[color:var(--muted)]">
            I’m building a publishing space for product playbooks, launch
            retrospectives, and experiments from Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPlaceholder;
