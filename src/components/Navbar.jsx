import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION } from '../utils/data';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'bg-[#070a18]/80 shadow-glowStrong' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3 font-display text-lg text-white md:text-xl">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-glow">HK</span>
          <span className="truncate uppercase tracking-[0.14em] text-cyan-200 sm:tracking-[0.2em]">Haris Khan</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium uppercase tracking-[0.2em] text-gray-300 transition-colors duration-300 hover:text-cyan-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-cyan-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="overflow-hidden border-t border-white/5 bg-[#070a18]/95 lg:hidden"
      >
        <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:px-6">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-gray-300 transition-colors duration-300 hover:text-cyan-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
