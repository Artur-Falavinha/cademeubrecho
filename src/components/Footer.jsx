import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Music, Youtube } from 'lucide-react';
import 'swiper/css';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const idealizadoras = [
    { id: 1, name: 'Idealizadora 1' },
    { id: 2, name: 'Idealizadora 2' },
    { id: 3, name: 'Idealizadora 3' },
    { id: 4, name: 'Idealizadora 4' },
    { id: 5, name: 'Idealizadora 5' },
    { id: 6, name: 'Idealizadora 6' },
  ];

  const handleSocialClick = (platform) => {
    switch (platform) {
      case 'whatsapp':
        window.open('https://wa.me/', '_blank');
        break;
      case 'spotify':
        window.open('https://open.spotify.com/', '_blank');
        break;
      case 'youtube':
        window.open('https://youtube.com/', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <footer id="footer" className="relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-pink-50/50 to-green-50/80"></div>
      
      {/* Elementos decorativos sutis - apenas desktop */}
      <div className="hidden md:block">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-pink-200/10 blur-3xl"
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
          className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-green-200/10 blur-3xl"
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
        {/* Carrossel de Idealizadoras */}
        <motion.div 
          className="mb-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-shrink-0">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800">
              Idealizadoras
            </h3>
          </div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            speed={5000}
            breakpoints={{
              480: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="idealizadoras-swiper flex-1"
          >
            {idealizadoras.map((person) => (
              <SwiperSlide key={person.id}>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-green-400 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="w-20 h-20 rounded-full mx-auto mb-2 bg-gradient-to-br from-pink-100 to-green-100 flex items-center justify-center relative z-10 border-2 border-white shadow-lg">
                      <span className="text-2xl font-light text-gray-600">{person.name.charAt(0)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-light">{person.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Social Media Buttons */}
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { platform: 'whatsapp', color: 'from-green-500 to-green-600', Icon: MessageCircle },
            { platform: 'spotify', color: 'from-green-500 to-emerald-600', Icon: Music },
            { platform: 'youtube', color: 'from-red-500 to-red-600', Icon: Youtube }
          ].map((social, index) => (
            <motion.button
              key={social.platform}
              onClick={() => handleSocialClick(social.platform)}
              className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center shadow-lg relative group overflow-hidden`}
              aria-label={social.platform}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <social.Icon className="w-6 h-6 text-white relative z-10" />
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="text-center pt-6 border-t border-gray-200/50"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 font-light">
            © 2025 Cadê Meu Brechó?. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2 font-light">
            Feito com ♥️ para a moda sustentável
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;