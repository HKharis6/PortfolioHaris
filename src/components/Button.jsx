import { motion } from 'framer-motion';

const Button = ({ children, className = '', href, ...props }) => {
  const ButtonTag = href ? 'a' : 'button';
  const isFullWidth = className.includes('w-full');

  return (
    <motion.div className={isFullWidth ? 'w-full sm:w-auto' : 'inline-flex'} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
      <ButtonTag
        href={href}
        className={`relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-[#08101f]/90 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 shadow-glow transition duration-300 hover:border-cyan-300/60 hover:bg-[#0b1629]/95 sm:px-8 sm:text-sm sm:tracking-[0.2em] ${className}`}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-400/10 to-purple-500/20 opacity-0 transition duration-300 hover:opacity-100" />
        <span className="relative z-10">{children}</span>
      </ButtonTag>
    </motion.div>
  );
};

export default Button;
