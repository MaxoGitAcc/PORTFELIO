import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import About from '../components/layout/About';
import Hero from '../components/layout/Hero'
import Projects from '../components/layout/Projects'
import Skills from '../components/layout/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
