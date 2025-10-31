import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionDivider = ({ variant = 'default' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const variants = {
    default: {
      gradient: 'from-pink-200/30 via-green-200/30 to-pink-200/30',
      dots: 'bg-pink-300/40'
    },
    reverse: {
      gradient: 'from-green-200/30 via-pink-200/30 to-green-200/30',
      dots: 'bg-green-300/40'
    }
  };

  const currentVariant = variants[variant];

  return (
    <div ref={ref} className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      {/* Linha gradiente animada */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`absolute h-px w-full bg-gradient-to-r ${currentVariant.gradient}`}
      />
      
      {/* Círculo central */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-green-100 flex items-center justify-center shadow-lg"
        >
          <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className={`w-2 h-2 rounded-full ${currentVariant.dots}`}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Pontos decorativos */}
      {[-200, -100, 100, 200].map((offset, index) => (
        <motion.div
          key={offset}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          className={`absolute w-1.5 h-1.5 rounded-full ${currentVariant.dots}`}
          style={{ left: `calc(50% + ${offset}px)` }}
        />
      ))}
    </div>
  );
};

export default SectionDivider;
