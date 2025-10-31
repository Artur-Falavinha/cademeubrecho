import { motion } from 'framer-motion';

const DecorativePattern = () => {
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {/* Linhas diagonais sutis */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
          style={{
            width: '200%',
            top: `${i * 15}%`,
            left: '-50%',
            transform: 'rotate(-45deg)',
          }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Círculos decorativos */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 border border-pink-200/20 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 border border-green-200/20 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default DecorativePattern;
