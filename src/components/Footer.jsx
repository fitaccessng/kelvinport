const Footer = () => {
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-[color:var(--muted)] md:flex-row">
        <p>© 2026 Kelvin Ibeh. Built for ambitious founders.</p>
        <div className="flex items-center gap-4">
          <a href="/#top" className="hover:text-[color:var(--text)]">
            Back to top
          </a>
          <a href="/#contact" className="hover:text-[color:var(--text)]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
