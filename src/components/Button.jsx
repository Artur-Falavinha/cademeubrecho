import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', icon: Icon, className = '' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800',
    secondary: 'bg-gradient-to-r from-pink-500 to-green-500 text-white hover:from-pink-600 hover:to-green-600',
    outline: 'bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden
        px-8 py-3.5 rounded-xl
        font-medium text-sm
        transition-all duration-300
        shadow-lg hover:shadow-xl
        flex items-center justify-center gap-2
        group
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Efeito de brilho ao hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-4 h-4" />
          </motion.span>
        )}
      </span>
    </motion.button>
  );
};

export default Button;
