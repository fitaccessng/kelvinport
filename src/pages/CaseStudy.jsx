import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo.jsx";
import { products } from "../data/content.js";

const CaseStudy = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-32">
        <Seo title="Not Found" />
        <h1 className="font-display text-4xl font-semibold">Not found</h1>
        <p className="mt-4 text-[color:var(--muted)]">
          This case study doesn't exist yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text)]"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-28">
      <Seo title={`${product.name} Case Study`} description={product.summary} />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)]"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>
      <motion.div
        className="glass mt-8 rounded-[2rem] p-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Case Study
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold">
          {product.name}
        </h1>
        <p className="mt-4 text-lg text-[color:var(--muted)]">
          {product.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass mt-10 overflow-hidden rounded-[2rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <img
          src={product.heroImage}
          alt={`${product.name} product interface`}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="glass rounded-[2rem] p-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold">Problem</h2>
          <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
            {product.problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="glass rounded-[2rem] p-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-4 text-[color:var(--muted)]">
            {product.solution}
          </p>
          <div className="mt-6 grid gap-3">
            {product.metrics.map((metric) => (
              <div
                key={metric}
                className="rounded-xl border border-[color:var(--line)] px-4 py-3 text-sm"
              >
                {metric}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="gradient-border glass mt-10 rounded-[2rem] p-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold">Want the full deck?</h3>
        <p className="mt-2 text-[color:var(--muted)]">
          I share deeper research, traction metrics, and roadmap insights on
          request.
        </p>
        <Link
          to="/#contact"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text)]"
        >
          Contact me
          <ArrowUpRight size={16} />
        </Link>
      </motion.div>

      {product.gallery?.length ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {product.gallery.map((image, index) => (
            <motion.div
              key={image}
              className="glass overflow-hidden rounded-[2rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <img
                src={image}
                alt={`${product.name} screenshot ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CaseStudy;
