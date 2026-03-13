import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { products } from "../data/content.js";

const Products = () => {
  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Products"
          title="Products I'm Building"
          subtitle="Each startup is built with a clear thesis, a specific customer, and a measurable outcome."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group glass relative overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/30 via-transparent to-[color:var(--accent-2)]/30" />
                <div className="absolute inset-0 backdrop-blur-2xl" />
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-semibold">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {product.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-[color:var(--text)]">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[color:var(--accent)]"
                  >
                    Visit
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 rounded-2xl border border-[color:var(--line)] bg-white/80 p-4 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] opacity-0 transition duration-500 group-hover:opacity-100 dark:bg-black/40">
                Hover preview
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
