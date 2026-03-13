import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Senior developer focused on scalable, founder-led products."
          subtitle="Senior Developer with 7+ years of experience building scalable web applications using JavaScript, React, React Native, Node.js, Python, and AWS."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="glass rounded-[2rem] p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <p className="text-lg text-[color:var(--muted)]">
              Passionate about solving complex problems through clean, efficient
              code and mentoring junior developers. I build products that are
              reliable, secure, and ready to scale.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Full-stack web and mobile delivery",
                "Cloud-native systems on AWS",
                "Mentorship and team development",
                "Modern product engineering",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[color:var(--line)] p-4 text-sm text-[color:var(--text)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="gradient-border glass rounded-[2rem] p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Profile
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Founder + Engineer</h3>
            <p className="mt-4 text-[color:var(--muted)]">
              I blend product strategy with senior engineering execution,
              delivering systems that scale and teams that move faster.
            </p>
            <div className="mt-6 rounded-2xl border border-[color:var(--line)] p-4 text-sm text-[color:var(--muted)]">
              Based in Abuja, Nigeria. Open to high-impact collaborations.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
