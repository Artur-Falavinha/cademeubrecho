import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, X, ArrowRight, Leaf } from 'lucide-react';

const GlossarySection = () => {
  const [openModal, setOpenModal] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const glossaryItems = [
    {
      id: 'moda-sustentavel',
      title: 'Moda sustentável',
      description: 'Conjunto de práticas que buscam reduzir o impacto ambiental e social da indústria da moda. Envolve desde o uso de matérias-primas ecológicas até a valorização do trabalho justo e do consumo responsável. A moda sustentável propõe um repensar sobre como as roupas são produzidas, consumidas e descartadas.',
      accent: 'green'
    },
    {
      id: 'brechos-curitiba',
      title: 'Brechós Curitiba',
      description: 'Espaços físicos ou virtuais localizados na cidade de Curitiba que comercializam roupas e acessórios de segunda mão. Além de incentivar o reaproveitamento de peças, os brechós promovem o consumo consciente e fortalecem a economia local, contribuindo para a popularização da moda circular na região.',
      accent: 'pink'
    },
    {
      id: 'consumo-consciente',
      title: 'Consumo consciente',
      description: 'Atitude de repensar os hábitos de compra, levando em consideração os impactos ambientais, sociais e econômicos de cada produto. No contexto da moda, o consumo consciente implica escolher marcas éticas, reutilizar peças e evitar o desperdício, priorizando qualidade e propósito em vez de quantidade.',
      accent: 'green'
    },
    {
      id: 'economia-circular',
      title: 'Economia circular',
      description: 'Modelo econômico que se opõe à lógica do "extrair, produzir, descartar". Propõe a reutilização, o reaproveitamento e a reciclagem de materiais, prolongando o ciclo de vida dos produtos. Na moda, significa dar novos usos às roupas, promover trocas e incentivar a compra de itens de segunda mão.',
      accent: 'pink'
    },
    {
      id: 'moda-segunda-mao',
      title: 'Moda de segunda mão',
      description: 'Refere-se à comercialização e ao uso de roupas e acessórios que já tiveram um dono anterior. Essa prática estimula a sustentabilidade, reduz o descarte têxtil e democratiza o acesso à moda, tornando-a mais acessível e menos poluente.',
      accent: 'green'
    },
    {
      id: 'estilo-acessivel',
      title: 'Estilo acessível',
      description: 'Ideia de que é possível se vestir bem, com autenticidade e personalidade, sem depender de grandes marcas ou altos custos. O estilo acessível valoriza a criatividade, o garimpo em brechós e o reaproveitamento de peças, mostrando que moda e economia podem andar juntas.',
      accent: 'pink'
    }
  ];

  return (
    <section id="glossario" className="bg-gradient-to-tl from-green-50 to-pink-50 section-padding relative overflow-hidden">
      {/* Separador visual */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-green-300 to-pink-300 rounded-full"></div>
      <div className="absolute top-20 left-16 w-32 h-32 border border-gray-100 rounded-full"></div>
      <div className="absolute bottom-16 right-20 w-24 h-24 border border-gray-100 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Cards na esquerda */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {glossaryItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-50 hover:bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-gray-100 cursor-pointer relative overflow-hidden"
                onClick={() => setOpenModal(item.id)}
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${item.accent === 'green' ? 'bg-green-200' : 'bg-pink-200'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 ${item.accent === 'green' ? 'bg-green-100' : 'bg-pink-100'} rounded-lg flex items-center justify-center mb-4 group-hover:${item.accent === 'green' ? 'bg-green-200' : 'bg-pink-200'} transition-colors duration-300`}
                  >
                    <Leaf className={`w-5 h-5 ${item.accent === 'green' ? 'text-green-600' : 'text-pink-600'}`} />
                  </motion.div>
                  
                  <h3 className="text-lg font-medium mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 group-hover:text-gray-800 font-light transition-colors text-sm"
                  >
                    <span className="mr-2">Saiba mais</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Título e subtítulo na direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-8"
            >
              <BookOpen className="w-8 h-8 text-gray-700" />
            </motion.div>
            
            <h2 className="text-headline font-light text-gray-800 mb-8">
              Glossário
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              Entenda os conceitos fundamentais que guiam nossa jornada pela moda sustentável e circular.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 font-light mt-6">
              Cada termo carrega o peso de uma transformação necessária na forma como pensamos, consumimos e nos relacionamos com a moda. Explore e descubra novos significados.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setOpenModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${glossaryItems.find(item => item.id === openModal)?.accent === 'green' ? 'bg-green-100' : 'bg-pink-100'} rounded-lg flex items-center justify-center`}>
                      <Leaf className={`w-6 h-6 ${glossaryItems.find(item => item.id === openModal)?.accent === 'green' ? 'text-green-600' : 'text-pink-600'}`} />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-800">
                      {glossaryItems.find(item => item.id === openModal)?.title}
                    </h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setOpenModal(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-700 leading-relaxed text-lg font-light"
                >
                  {glossaryItems.find(item => item.id === openModal)?.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GlossarySection;