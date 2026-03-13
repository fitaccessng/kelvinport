/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        glow: "var(--glow)",
      },
      boxShadow: {
        glow: "0 0 40px var(--glow)",
        soft: "0 20px 60px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(1200px 600px at 10% 10%, rgba(108, 99, 255, 0.18), transparent 60%), radial-gradient(1000px 600px at 90% 20%, rgba(34, 211, 238, 0.16), transparent 55%), radial-gradient(800px 500px at 30% 80%, rgba(14, 165, 233, 0.14), transparent 60%)",
      },
    },
  },
  plugins: [],
};
