import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Calendar, Heart, Sparkles } from 'lucide-react';

const NewsletterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="newsletter" className="bg-gradient-to-bl from-green-50 to-pink-50 section-padding relative overflow-hidden">
      {/* Separador visual */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-300 to-pink-300 rounded-full"></div>
      <div className="absolute top-20 left-10 w-24 h-24 border border-pink-200/30 rounded-full"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 border border-pink-200/20 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Cards na esquerda */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-pink-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300"
                >
                  <Mail className="w-7 h-7 text-pink-600" />
                </motion.div>
                
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Newsletter Semanal
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Toda semana, as melhores descobertas: novos brechós, dicas de styling sustentável e histórias inspiradoras da moda circular curitibana.
                </p>
                
                <motion.button 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Receber Newsletter
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-green-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300"
                >
                  <Calendar className="w-7 h-7 text-green-600" />
                </motion.div>
                
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Resumo Mensal
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Um compilado mensal com entrevistas exclusivas, tendências da moda sustentável e um mapa atualizado dos melhores brechós da cidade.
                </p>
                
                <motion.button 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Receber Resumo
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Título e subtítulo na direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-8"
            >
              <Heart className="w-8 h-8 text-pink-500" />
            </motion.div>
            
            <h2 className="text-headline font-light text-gray-800 mb-8">
              Newsletters
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              Receba conteúdos exclusivos sobre moda sustentável e descubra as melhores histórias dos brechós de Curitiba.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 font-light mt-6">
              Conecte-se com uma comunidade que valoriza a moda circular e descubra como cada peça pode contar uma história única de estilo e propósito.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;