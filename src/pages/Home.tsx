import Navbar from "../components/Navbar";
import CloudAnimation from "../components/CloudAnimation";
import SnowfallAnimation from "../components/SnowfallAnimation";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";



const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <SnowfallAnimation />
      <CloudAnimation />
      <Navbar />
      
      <Hero />
      
      <section
        id="about"
        className="min-h-screen bg-[#eef4fa] flex items-center relative z-10"
      >
        <About />
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen bg-[#f0f6fb] flex items-center"
      >
        <Skills />
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen bg-[#f0f6fb] flex items-center"
      >
        <Project />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen bg-[#f0f6fb] flex items-center"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Home;
