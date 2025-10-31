import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, MessageCircle, Play, Phone, Mic, ArrowRight } from 'lucide-react';
import Button from './Button';

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
    <section id="conteudos" className="relative section-padding overflow-hidden">
      {/* Background gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/80 via-white/50 to-green-50/80"></div>
      
      {/* Elementos decorativos sutis - apenas desktop */}
      <div className="hidden md:block">
        <motion.div 
          className="absolute top-16 right-20 w-72 h-72 rounded-full bg-green-200/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-24 left-12 w-80 h-80 rounded-full bg-pink-200/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Título na esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-8 relative"
          >
            {/* Elemento decorativo */}
            <motion.div
              className="absolute -left-12 top-1/4 w-24 h-24 bg-gradient-to-br from-green-200/20 to-pink-200/20 rounded-full blur-xl"
              animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div>
              <h2 className="text-3xl md:text-headline font-light text-gray-800 mb-4">
                Conteúdos
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mb-6 md:mb-8"></div>
            </div>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              Mergulhe nas histórias da moda sustentável através dos nossos podcasts e conecte-se com uma comunidade apaixonada.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 font-light mt-6">
              Conversas íntimas com empreendedores, especialistas e pessoas que transformaram seu guarda-roupa através da moda circular. Faça parte dessa rede de mudança.
            </p>
          </motion.div>

          {/* Cards na direita */}
          <div className="space-y-8 relative">
            {/* Elemento decorativo */}
            <motion.div
              className="absolute -right-16 top-0 w-36 h-36 border-2 border-pink-200/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-green-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 glow-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                >
                  <Headphones className="w-8 h-8 text-green-600" />
                </motion.div>
                
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Podcast
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Conversas íntimas com empreendedores de brechós, especialistas em moda sustentável e pessoas que transformaram seu guarda-roupa através da moda circular.
                </p>
                
                <Button onClick={handleSpotifyClick} variant="primary" icon={Play} className="w-full">
                  Ouvir no Spotify
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-pink-100/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 to-pink-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 glow-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-8 h-8 text-pink-600" />
                </motion.div>
                
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Comunidade
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Faça parte de uma rede de pessoas que acreditam na moda como forma de expressão consciente. Compartilhe achados, dicas e inspire-se com outros.
                </p>
                
                <Button onClick={handleWhatsAppClick} variant="primary" icon={Phone} className="w-full">
                  Entrar na Comunidade
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;