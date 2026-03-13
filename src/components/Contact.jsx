import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Twitter,
  Layers,
  ArrowUpRight,
  Phone,
  Globe,
  Github,
} from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Big."
          subtitle="If you're building bold products or looking to collaborate, reach out."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            className="glass rounded-[2rem] p-8"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-10%" }}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
              <input
                className="rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </div>
            <input
              className="mt-4 w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
              placeholder="Company or Startup"
              type="text"
              name="company"
            />
            <textarea
              className="mt-4 h-36 w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
              placeholder="Tell me about your idea."
              name="message"
              required
            />
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 disabled:opacity-60"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <ArrowUpRight size={16} />
            </button>
            {status === "success" ? (
              <p className="mt-4 text-sm text-[color:var(--accent)]">
                Message sent successfully.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm text-red-400">{error}</p>
            ) : null}
          </motion.form>
          <motion.div
            className="gradient-border glass rounded-[2rem] p-8"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <div className="space-y-5 text-sm text-[color:var(--muted)]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em]">Email</p>
                <p className="mt-2 text-[color:var(--text)]">
                  hello@kelvinibeh.work
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: "Phone", value: "+234 8036135712" },
                  { icon: Globe, label: "Website", value: "techspareng.online" },
                  { icon: Github, label: "GitHub", value: "github.com/papikelscode" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kelvinibeh" },
                  { icon: Mail, label: "Email", value: "hello@kelvinibeh.work" },
                  { icon: Twitter, label: "Twitter/X", value: "x.com/kelvinibeh" },
                  { icon: Layers, label: "Product Hunt", value: "producthunt.com/@kelvinibeh" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-[color:var(--line)] px-4 py-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
                      <item.icon size={16} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-[color:var(--text)]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                Available for founder conversations, product strategy, and
                technical due diligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
