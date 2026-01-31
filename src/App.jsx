import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Particles from "./components/Particles";

function App() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  useEffect(() => { // Borra el hash de la URL y fuerza scroll al inicio 
   if (window.location.hash) 
    { window.location.hash = ""; 

    } 
    window.scrollTo(0, 0);
   }, []);
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={isMobile ? 30 : 100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={!isMobile}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={isMobile ? 0.5 : 1}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="py-4 px-4 md:px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-500 text-sm md:text-base">
              ©Copyrigth 2026
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
