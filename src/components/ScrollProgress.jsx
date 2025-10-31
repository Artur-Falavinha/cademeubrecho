import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-green-500 to-pink-500 origin-left z-[100] shadow-lg shadow-pink-500/50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
