import { motion } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050914]/90 py-12 text-slate-300 reveal-item sm:py-16">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70 sm:text-sm sm:tracking-[0.3em]">Premium Portfolio</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Haris Khan - Full Stack Developer</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
              Delivering cinematic digital experiences with neon glass design, optimized performance, and thoughtful full stack development.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-3xl border border-white/10 bg-[#08101f]/80 p-5 shadow-glow sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70 sm:text-sm sm:tracking-[0.3em]">Contact</p>
              <p className="mt-4 text-lg font-semibold text-white">Ready for your next immersive project.</p>
              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p className="break-all">Email: hkkharis010@gmail.com</p>
                <p>Phone: +92 303 5733138</p>
                <p>Location: Peshawar, Pakistan</p>
              </div>
              <div className="mt-8">
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          (c) {currentYear} Haris Khan - Full Stack Developer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
