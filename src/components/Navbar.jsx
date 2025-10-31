import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../../images/textoLogo.png';

const Navbar = () => {
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
      className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center h-20 w-full">
          <div className="absolute left-0">
            <img className="h-10 w-auto" src={logo} alt="Cadê Meu Brechó" />
          </div>
          
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer transition-colors duration-200 whitespace-nowrap tracking-wide uppercase"
                >
                  {item.name}
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