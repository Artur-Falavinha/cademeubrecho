import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Calendar, Heart, Sparkles, ArrowRight } from 'lucide-react';
import Button from './Button';

const NewsletterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="newsletter" className="relative section-padding overflow-hidden">
      {/* Background gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-bl from-green-50/80 via-white/50 to-pink-50/80"></div>
      
      {/* Elementos decorativos sutis - apenas desktop */}
      <div className="hidden md:block">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green-200/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-16 w-80 h-80 rounded-full bg-pink-200/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Cards na esquerda */}
          <div className="space-y-8 relative">
            {/* Elemento decorativo */}
            <motion.div
              className="absolute -left-20 top-1/2 w-40 h-40 border-2 border-pink-200/30 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-pink-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 to-pink-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 glow-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-pink-600" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 text-gray-800">
                  Newsletter Semanal
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed font-light">
                  Toda semana, as melhores descobertas: novos brechós, dicas de styling sustentável e histórias inspiradoras da moda circular curitibana.
                </p>
                
                <Button variant="primary" icon={ArrowRight} className="w-full">
                  Receber Newsletter
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-green-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 glow-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                >
                  <Calendar className="w-8 h-8 text-green-600" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 text-gray-800">
                  Newsletter Mensal
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed font-light">
                  Um compilado mensal com entrevistas exclusivas, tendências da moda sustentável e um mapa atualizado dos melhores brechós da cidade.
                </p>
                
                <Button variant="primary" icon={ArrowRight} className="w-full">
                  Receber Newsletter
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Título e subtítulo na direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-8 relative"
          >
            {/* Elemento decorativo */}
            <motion.div
              className="absolute -right-16 bottom-0 w-32 h-32 border-2 border-green-200/30 rounded-full"
              animate={{ rotate: -360, scale: [1, 1.15, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div>
              <h2 className="text-3xl md:text-headline font-light text-gray-800 mb-4">
                Newsletters
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mb-6 md:mb-8"></div>
            </div>
            <p className="text-base md:text-xl leading-relaxed text-gray-700 font-light">
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