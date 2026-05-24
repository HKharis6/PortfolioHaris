import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050713]"
        >
          <div className="relative flex flex-col items-center gap-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-24 rounded-full border-[3px] border-cyan-400/30 border-t-cyan-400 border-r-purple-500 shadow-glow"
            />
            <div className="space-y-4 text-center">
              <motion.h1
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-5xl font-extrabold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300"
              >
                HARIS KHAN
              </motion.h1>
              <p className="text-sm uppercase text-gray-400 tracking-[0.4em]">Loading Welcome to my portfolio!</p>
            </div>
            <div className="absolute rounded-full top-10 left-10 w-28 h-28 bg-cyan-500/10 blur-3xl" />
            <div className="absolute w-24 h-24 rounded-full bottom-12 right-12 bg-purple-500/10 blur-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
