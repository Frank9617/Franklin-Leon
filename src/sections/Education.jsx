import { motion } from "framer-motion";

export default function Education() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const educationData = [
    // {
    //   image: "/JEGA.webp",
    //   alt: "Institución Educativa Jorge Eliécer Gaitán",
    //   title: "Bachiller Académico",
    //   institution: "Institución Educativa Jorge Eliécer Gaitán",
    //   period: "2019 - 2024",
    //   description: "Formación académica integral con énfasis en ciencias y tecnología."
    // },
    // {
    //   image: "/SENA.webp",
    //   alt: "SENA",
    //   title: "Técnico en Monitoreo Ambiental",
    //   institution: "Servicio Nacional de Aprendizaje - SENA",
    //   period: "2021 - 2023",
    //   description: "Técnico en Monitoreo Ambiental, desarrollando competencias en seguimiento y evaluación de parámetros ambientales."
    // },
    // {
    //   image: "/UTP.webp",
    //   alt: "Universidad Tecnológica del Putumayo",
    //   title: "Ingeniería en Sistemas",
    //   institution: "Universidad Tecnológica del Putumayo",
    //   period: "2024 - Presente",
    //   description: "Cursando Ingeniería en Sistemas, enfocándome en desarrollo web, bases de datos y programación."
    // }
  ];

  // return (
  //   <section id="education" className="pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 relative" style={{ scrollMarginTop: '120px' }}>
  //     <div className="max-w-6xl mx-auto">
  //       <motion.h2
  //         initial={isMobile ? {} : { opacity: 0, y: 20 }}
  //         whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
  //       >
  //         Educación
  //       </motion.h2>

  //       {/* Versión móvil: lista simple */}
  //       {isMobile ? (
  //         <div className="space-y-6">
  //           {educationData.map((edu, index) => (
  //             <div key={index} className="bg-gray-900 border border-gray-700 rounded-2xl p-4 flex flex-col gap-4">
  //               <div className="flex items-center gap-4">
  //                 <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white p-2">
  //                   <img 
  //                     src={edu.image} 
  //                     alt={edu.alt}
  //                     className="w-full h-full object-contain"
  //                   />
  //                 </div>
  //                 <div className="flex-1 min-w-0">
  //                   <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3>
  //                   <p className="text-sm text-cyan-400">{edu.period}</p>
  //                 </div>
  //               </div>
  //               <div>
  //                 <p className="text-sm font-semibold text-gray-300 mb-1">{edu.institution}</p>
  //                 <p className="text-sm text-gray-400">{edu.description}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       ) : (
  //         /* Versión desktop: Grid profesional */
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //           {educationData.map((edu, index) => (
  //             <motion.div
  //               key={index}
  //               initial={{ opacity: 0, y: 30 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               viewport={{ once: true }}
  //               transition={{ delay: index * 0.1 }}
  //               className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition-transform"
  //             >
  //               <div className="w-20 h-20 rounded-xl overflow-hidden bg-white p-3 mb-4">
  //                 <img 
  //                   src={edu.image} 
  //                   alt={edu.alt}
  //                   className="w-full h-full object-contain"
  //                 />
  //               </div>

  //               <h3 className="text-xl font-bold text-white mb-1">
  //                 {edu.title}
  //               </h3>

  //               <p className="text-sm text-cyan-400 mb-2">
  //                 {edu.period}
  //               </p>

  //               <p className="text-sm font-semibold text-gray-300 mb-2">
  //                 {edu.institution}
  //               </p>

  //               <p className="text-sm text-gray-400 flex-grow">
  //                 {edu.description}
  //               </p>
  //             </motion.div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </section>
  // );
}
