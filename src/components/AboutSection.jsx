import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import textoLogo from '../../images/Logo.png';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="relative section-padding overflow-hidden">
      {/* Background gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-white/50 to-green-50/80"></div>
      
      {/* Elementos decorativos sutis - apenas desktop */}
      <div className="hidden md:block">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-pink-200/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-green-200/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-8 relative"
          >
            {/* Padrão decorativo */}
            <motion.div
              className="absolute -left-8 top-0 w-2 h-32 bg-gradient-to-b from-pink-200/40 to-transparent rounded-full"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-8 bottom-0 w-2 h-24 bg-gradient-to-t from-green-200/40 to-transparent rounded-full"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-headline font-light text-gray-800 mb-4">
                Quem Somos?
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mb-6 md:mb-8"></div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-xl leading-relaxed text-gray-700 font-light"
            >
              O projeto "Cadê meu Brechó?" nasce para contar as histórias da moda de segunda mão em Curitiba. 
              Mais do que roupas, cada peça carrega memórias, estilo e propósito.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-xl leading-relaxed text-gray-700 font-light"
            >
              Aqui você encontra conteúdos multimídia, podcasts, vídeos, reportagens e mapas interativos 
              que conectam consumidores, empreendedores e especialistas em moda circular. Nosso objetivo 
              é fortalecer a economia local, valorizar iniciativas sustentáveis e mostrar que estilo e 
              consciência andam juntos.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-green-200/20 rounded-3xl blur-2xl"></div>
              <img 
                src={textoLogo} 
                alt="Cadê Meu Brechó Logo" 
                className="max-w-full h-auto relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;