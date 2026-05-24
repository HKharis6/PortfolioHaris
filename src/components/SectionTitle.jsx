import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations/variants';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mb-10 sm:mb-16"
    >
      <motion.div variants={staggerItem} className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cyan-300/70 sm:text-sm sm:tracking-[0.3em]">
        <span className="block h-0.5 w-8 rounded-full bg-cyan-400/70 sm:w-12" />
        Section
      </motion.div>
      <motion.h2 variants={staggerItem} className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p variants={staggerItem} className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
