import { motion } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Products", href: "/#products" },
  { label: "Skills", href: "/#skills" },
  { label: "Tech Stack", href: "/#technical-skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Ideas", href: "/#ideas" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = ({ theme, onToggle }) => {
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass gradient-border flex items-center justify-between rounded-full px-5 py-3"
        >
          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
              <Sparkles size={16} />
            </span>
            <span className="font-display text-base font-semibold">
              Kelvin Ibeh
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={onToggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
