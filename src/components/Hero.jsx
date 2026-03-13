import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32">
      <div className="aurora" />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={14} />
              kelvin's Portfolio
            </motion.p>
            <motion.h1
              className="font-display text-4xl font-semibold leading-tight md:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Building Technology That Solves Real Problems.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-lg text-[color:var(--muted)]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I’m Kelvin Ibeh, a founder and product builder creating startups in
              security, fitness, and digital commerce.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href="/#products"
                className="flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-2px]"
              >
                Products I'm Building
                <ArrowRight size={16} />
              </a>
              <a
                href="/#contact"
                className="flex items-center gap-2 rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          <motion.div
            className="glass gradient-border relative h-full rounded-[2rem] p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Based in
                </p>
                <h3 className="mt-2 text-2xl font-semibold">Abuja, Nigeria</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Startup Founder | Product Builder | Full-Stack Developer
                </p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-[color:var(--accent)]/20" />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Years building", value: "6+" },
                { label: "Active products", value: "3" },
                { label: "Focus areas", value: "Security, Fitness, Commerce" },
                { label: "Location", value: "Abuja Nigeria" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[color:var(--line)] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-[color:var(--line)] p-4">
              <p className="text-sm text-[color:var(--muted)]">
                Currently exploring AI-native products and digital access systems
                that unlock new markets across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
