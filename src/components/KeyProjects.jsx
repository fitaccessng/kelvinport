import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { keyProjects } from "../data/content.js";

const KeyProjects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Key Projects"
          title="Selected delivery highlights"
          subtitle="Deep technical builds with measurable business outcomes."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {keyProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="glass rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]"
                  >
                    Visit
                  </a>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {project.description}
              </p>
              {project.impacts.length ? (
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  {project.impacts.map((impact) => (
                    <li key={impact}>{impact}</li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyProjects;
