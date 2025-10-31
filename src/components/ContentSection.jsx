import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, MessageCircle, Play, Phone, Mic } from 'lucide-react';

const ContentSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSpotifyClick = () => {
    window.open('https://open.spotify.com/', '_blank');
  };

  const handleWhatsAppClick = () => {
    const whatsappLink = 'https://wa.me/';
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="conteudos" className="bg-gradient-to-tr from-pink-50 to-green-50 section-padding relative overflow-hidden">
      {/* Separador visual */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-pink-300 to-green-300 rounded-full"></div>
      <div className="absolute top-16 right-20 w-20 h-20 border border-green-200/30 rounded-full"></div>
      <div className="absolute bottom-24 left-12 w-28 h-28 border border-green-200/20 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Título na esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-8"
            >
              <Mic className="w-8 h-8 text-green-600" />
            </motion.div>
            
            <h2 className="text-headline font-light text-gray-800 mb-8">
              Conteúdos
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              Mergulhe nas histórias da moda sustentável através dos nossos podcasts e conecte-se com uma comunidade apaixonada.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 font-light mt-6">
              Conversas íntimas com empreendedores, especialistas e pessoas que transformaram seu guarda-roupa através da moda circular. Faça parte dessa rede de mudança.
            </p>
          </motion.div>

          {/* Cards na direita */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-green-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300"
                >
                  <Headphones className="w-7 h-7 text-green-600" />
                </motion.div>
                
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Podcast
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Conversas íntimas com empreendedores de brechós, especialistas em moda sustentável e pessoas que transformaram seu guarda-roupa através da moda circular.
                </p>
                
                <motion.button 
                  onClick={handleSpotifyClick}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Ouvir no Spotify
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-pink-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300"
                >
                  <MessageCircle className="w-7 h-7 text-pink-600" />
                </motion.div>
                
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Comunidade
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Faça parte de uma rede de pessoas que acreditam na moda como forma de expressão consciente. Compartilhe achados, dicas e inspire-se com outros.
                </p>
                
                <motion.button 
                  onClick={handleWhatsAppClick}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Entrar na Comunidade
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;