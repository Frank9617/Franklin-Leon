import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export default function About() {
  const [showPlayer, setShowPlayer] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const containerVariants = {
    hidden: isMobile ? {} : { opacity: 0 },
    visible: isMobile ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: isMobile ? {} : { opacity: 0, y: 20 },
    visible: isMobile ? {} : { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className=" min-h-screen py-20 md:py-24 px-4 md:px-6 relative scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Sobre mí
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          {/* Tarjeta principal */}
          <motion.div
            variants={itemVariants}
            className="gradient-card-wrapper"
          >
            <div className="gradient-card">
              <div className="gradient-card-inner">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400">
                    <img src="/avatar.webp" alt="Franklin León" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    {/* <h3 className="text-2xl font-bold text-white">Franklin León</h3> */}
                    <h3 className="text-cyan-400 font-bold text-2xl">Desarrollador de Software</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Soy tecnólogo en Análisis y Desarrollo de Software con experiencia en integración de servicios 
                  empresariales, especialmente usando WSO2 Integration Studio. He trabajado en proyectos de facturación
                  electrónica, transformando mensajes XML a JSON y viceversa mediante XSLT, consumiendo APIs REST y servicios SOAP,
                  y gestionando autenticación con tokens Bearer.
                  Me interesa crear soluciones confiables, bien estructuradas y fáciles de mantener, combinando lógica backend con buenas 
                  prácticas de desarrollo. Aunque también desarrollo aplicaciones web, mi enfoque principal está en integración, 
                  automatización de procesos y arquitectura de servicios.
                  Me caracterizo por ser una persona responsable, autodidacta y comprometida con el aprendizaje continuo, siempre buscando 
                  mejorar tanto a nivel técnico como profesional.
                </p>
              </div>
            </div>
          </motion.div>          
        </motion.div>

        {/* Intereses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 gradient-card-wrapper"
        >
          <div className="gradient-card">
            <div className="gradient-card-inner">
              <h3 className="text-2xl font-bold mb-6 text-white">Áreas de Interés</h3>
              <div className="flex flex-wrap gap-3">
                {[
                "Integración de Sistemas",
                "WSO2",
                "APIs REST y SOAP",
                "Transformación XML / JSON",
                "Api Manager",
                "Back-end",
                "Bases de Datos",
                "Automatización de Procesos",
                "Arquitectura de Servicios",
                "Microservicios",
                "Html",
                "Css",
                "Python"
                ].map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-cyan-400 hover:bg-blue-600/30 transition cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}
