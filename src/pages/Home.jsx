import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Products from "../components/Products.jsx";
import Skills from "../components/Skills.jsx";
import TechnicalSkills from "../components/TechnicalSkills.jsx";
import KeyProjects from "../components/KeyProjects.jsx";
import Philosophy from "../components/Philosophy.jsx";
import Timeline from "../components/Timeline.jsx";
import Ideas from "../components/Ideas.jsx";
import Contact from "../components/Contact.jsx";
import Education from "../components/Education.jsx";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Seo />
      <Hero />
      <About />
      <Experience />
      <Products />
      <Skills />
      <TechnicalSkills />
      <KeyProjects />
      <Philosophy />
      <Timeline />
      <Ideas />
      <Education />
      <Contact />
    </motion.main>
  );
};

export default Home;
