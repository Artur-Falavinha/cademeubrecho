import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import textoLogo from '../../images/Logo.png';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="bg-gradient-to-br from-pink-50 to-green-50 section-padding relative">
      {/* Separador visual */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-300 to-green-300 rounded-full"></div>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-headline font-light text-gray-800 mb-8">
              Quem Somos?
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              O projeto "Cadê meu Brechó?" nasce para contar as histórias da moda de segunda mão em Curitiba. 
              Mais do que roupas, cada peça carrega memórias, estilo e propósito.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 font-light mt-6">
              Aqui você encontra conteúdos multimídia, podcasts, vídeos, reportagens e mapas interativos 
              que conectam consumidores, empreendedores e especialistas em moda circular. Nosso objetivo 
              é fortalecer a economia local, valorizar iniciativas sustentáveis e mostrar que estilo e 
              consciência andam juntos.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img 
              src={textoLogo} 
              alt="Cadê Meu Brechó Logo" 
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;