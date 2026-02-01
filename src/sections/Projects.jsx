import { motion } from "framer-motion";
import { useState } from "react";
import CardSwap, { Card } from '../components/CardSwap';
import { projects } from '../data/projects';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="pt-20 md:pt-32 pb-8 px-4 md:px-6 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-20 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent relative z-10"
        >
          Proyectos Destacados
        </motion.h2>

        {/* Versión móvil: Carrusel simple */}
        <div className="block md:hidden">
          <div className="relative">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-3 h-auto flex flex-col"
            >
              {projects[currentProject].image && (
                <div className="relative h-40 overflow-hidden rounded-xl mb-3">
                  <img 
                    src={projects[currentProject].image} 
                    alt={`Proyecto ${projects[currentProject].title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-2 mb-3">
                <img 
                  src={projects[currentProject].logo} 
                  alt={`Logo ${projects[currentProject].title}`}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {projects[currentProject].title}
              </h3>

              <p className="text-sm text-gray-300 mb-3 flex-grow">
                {projects[currentProject].description}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {projects[currentProject].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-cyan-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botón compacto en móvil */}
              {projects[currentProject].link && (
                <a
                  href={projects[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-1.5 px-3 rounded-lg bg-gradient-to-r ${projects[currentProject].gradient} text-white font-semibold text-center text-sm`}
                >
                  Ver proyecto
                </a>
              )}
            </motion.div>

            {/* Controles del carrusel */}
            <div className="flex justify-between items-center mt-3">
              <button
                onClick={prevProject}
                className="p-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 transition"
                aria-label="Proyecto anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentProject ? 'bg-cyan-400 w-5' : 'bg-gray-600'
                    }`}
                    aria-label={`Ir a proyecto ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="p-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 transition"
                aria-label="Proyecto siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Versión desktop: Grid de 3 cards alineadas */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-4 flex flex-col overflow-hidden hover:scale-[1.02] transition-transform"
            >
              {project.image && (
                <div className="relative h-40 overflow-hidden rounded-xl mb-3">
                  <img 
                    src={project.image} 
                    alt={`Proyecto ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 mb-3">
                <img 
                  src={project.logo} 
                  alt={`Logo ${project.title}`}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 mb-3 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-cyan-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-1 mt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-1.5 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold text-center text-sm hover:shadow-lg transition`}
                  >
                    Ver proyecto
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition font-semibold text-center text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
