import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import logo from '../../images/textoLogo.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
  );
  const blur = useTransform(scrollY, [0, 100], [8, 16]);

  const navItems = [
    { name: 'Início', to: 'inicio' },
    { name: 'Quem somos', to: 'quem-somos' },
    { name: 'Newsletter', to: 'newsletter' },
    { name: 'Conteúdos', to: 'conteudos' },
    { name: 'Glossário', to: 'glossario' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ backgroundColor }}
      className="backdrop-blur-xl fixed w-full top-0 z-50 border-b border-gray-100/50 shadow-lg shadow-black/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center h-20 w-full">
          <motion.div 
            className="absolute left-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img className="h-10 w-auto" src={logo} alt="Cadê Meu Brechó" />
          </motion.div>
          
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-10">
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveSection(item.to)}
                  className="relative text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer transition-colors duration-200 whitespace-nowrap tracking-wide uppercase group"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-green-500 group-hover:w-full transition-all duration-300"
                    initial={false}
                    animate={{ width: activeSection === item.to ? '100%' : '0%' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;