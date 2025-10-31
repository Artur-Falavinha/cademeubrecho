import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import backgroundImage from '../../images/backgroundFirtsSection.png';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={ref}
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          scale,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      
      {/* Elementos decorativos flutuantes */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-green-500/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="relative z-10 text-center text-white max-w-5xl mx-auto px-6"
        style={{ y, opacity }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1, 
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: 0.2 
          }}
          className="text-4xl md:text-display font-light mb-6 md:mb-8 tracking-tight text-glow px-4"
        >
          Roupas com memórias,<br />estilo e propósito.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.5, 
            ease: [0.6, -0.05, 0.01, 0.99] 
          }}
          className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-90 px-4"
        >
          Descubra as histórias da moda de segunda mão em Curitiba através de conteúdos multimídia, 
          podcasts e reportagens que conectam consumidores e empreendedores da moda circular.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;