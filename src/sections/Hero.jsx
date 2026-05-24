import { motion } from 'framer-motion';
import PlanetScene from '../three/PlanetScene';
import Button from '../components/Button';
import SocialIcons from '../components/SocialIcons';
import { fadeInUp, fadeInRight } from '../animations/variants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100svh-4rem)] overflow-hidden pt-24 sm:pt-28 md:min-h-screen md:pt-32">
      <div className="absolute inset-0 -z-10 hero-background">
        <PlanetScene />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(44,242,255,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(155,92,255,0.12),_transparent_18%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="min-w-0 max-w-full space-y-6 sm:space-y-8"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-cyan-300 shadow-glow sm:text-xs sm:tracking-[0.3em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
              <span className="min-w-0 truncate">Haris Khan - Full Stack Developer</span>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70 sm:text-sm sm:tracking-[0.35em]">Full Stack Web Developer</p>
              <h1 className="font-display text-4xl font-semibold leading-none text-white sm:text-5xl md:text-[5rem] lg:text-[6rem]">
                Haris Khan
              </h1>
            </div>

            <p className="max-w-full text-base leading-7 text-slate-300/90 sm:text-lg sm:leading-8 md:text-xl">
              <span className="typing">I build modern, responsive and high-performance web applications with immersive UI/UX experiences.</span>
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {['React.js', 'JavaScript', 'Supabase', 'APIs', 'Tailwind CSS', 'GSAP'].map((item) => (
                <div key={item} className="glass rounded-2xl border border-white/10 p-3 text-xs text-cyan-100 shadow-glow transition duration-300 hover:border-cyan-300/30 hover:bg-white/5 sm:text-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#projects" className="w-full sm:w-auto">View Projects</Button>
              <Button href="/Haris-Khan-CV.pdf" download className="w-full sm:w-auto">Download CV</Button>
              <Button href="#contact" className="w-full sm:w-auto">Contact Me</Button>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInRight}
            className="relative w-full max-w-full"
          >
            <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-5 shadow-glow sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(44,242,255,0.16),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(155,92,255,0.14),_transparent_20%)]" />
              <div className="relative z-10 space-y-8">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-white sm:text-xl">Immersive design system</h2>
                  <p className="text-sm leading-6 text-slate-300">A cinematic cyberpunk interface built for modern developer portfolios with glowing panels, subtle depth, and rich motion.</p>
                </div>
                <SocialIcons />
              </div>
            </div>
            <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-purple-400/20 bg-purple-500/10 blur-3xl sm:h-24 sm:w-24" />
            <div className="absolute bottom-6 right-6 h-16 w-16 rounded-full border border-cyan-300/20 bg-cyan-500/10 blur-3xl sm:h-20 sm:w-20" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-4 sm:flex lg:bottom-10"
      >
        <span className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Scroll down</span>
        <div className="flex h-14 w-8 items-start justify-center rounded-full border border-cyan-400/40 p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="block h-2 w-2 rounded-full bg-cyan-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
