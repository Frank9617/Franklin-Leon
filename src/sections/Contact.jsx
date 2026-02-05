import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `*Nuevo contacto desde Portafolio*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Asunto:* ${formData.subject}%0A%0A*Mensaje:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/573045656447?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const socialLinks = [
    
    { name: "Gmail", logo: "/gmail.webp", text: "Fleon2330@gmail.com", isEmail: true },
    
  ];

  return (
    <section id="contact" className=" py-4 md:py-6 px-4 md:px-6 pb-12 md:pb-16 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Contacto
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Asunto</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Mensaje</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-transform duration-200 hover:scale-[1.02]"
              >
                Enviar por WhatsApp
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </form>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Encuéntrame en
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  social.isEmail ? (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-xl transition"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-2">
                        <img src={social.logo} alt={social.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-white font-semibold">{social.name}</span>
                        <span className="block text-gray-300 text-sm break-all">{social.text}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-xl transition"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-2">
                        <img src={social.logo} alt={social.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-white font-semibold">{social.name}</span>
                    </motion.a>
                  )
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                📍 Ubicación
              </h3>
              <p className="text-gray-300 mb-6">
                Colombia
              </p>

              <h3 className="text-lg font-semibold text-white mb-2">
                🕐 Disponibilidad
              </h3>
              <p className="text-gray-300">
                Disponible
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Llamada a la acción final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-20 text-center px-8 md:mb-2"
        >
          <p className="text-xl sm:text-2xl text-gray-400 mb-300">
            ¿Tienes un proyecto en mente?
          </p>
          <p className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold leading-normal bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            ¡Trabajemos juntos! 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
