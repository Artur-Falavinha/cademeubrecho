import { motion } from 'framer-motion';
import backgroundImage from '../../images/backgroundFirtsSection.png';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-display font-light mb-8 tracking-tight"
        >
          Roupas com memórias,<br />estilo e propósito.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-90"
        >
          Descubra as histórias da moda de segunda mão em Curitiba através de conteúdos multimídia, 
          podcasts e reportagens que conectam consumidores e empreendedores da moda circular.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;