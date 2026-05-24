import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import DeveloperOrb from '../three/DeveloperOrb';
import { fadeInLeft, fadeInRight } from '../animations/variants';

const stats = [
  {
    title: '10+ Projects Completed',
    description:
      'Delivered modern portfolio, dashboard and full stack web experiences.',
  },
  {
    title: '2+ Years Experience',
    description:
      'Building responsive frontend and backend web applications.',
  },
  {
    title: '100% Responsive Design',
    description:
      'Mobile-first layouts optimized for all screen sizes.',
  },
  {
    title: 'Modern UI/UX Specialist',
    description:
      'Crafting futuristic interfaces with smooth interactions.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24 reveal-item"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Section Title */}
        <SectionTitle
          title="About Me"
          subtitle="Full Stack Web Developer from Peshawar building modern digital experiences"
        />

        {/* Main Layout */}
        <div className="grid items-center gap-10 overflow-hidden lg:grid-cols-[420px_1fr]">
          
          {/* Left Side Orb */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="
              relative
              h-[260px]
              sm:h-[340px]
              md:h-[420px]
              lg:h-[520px]
              w-full
              overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-[#08101e]/80
              shadow-glow
            "
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(44,242,255,0.16),_transparent_30%)]" />

            {/* 3D Orb */}
            <DeveloperOrb />

            {/* Extra Floating Glow */}
            <div className="pointer-events-none absolute -right-10 top-10 h-20 w-20 rounded-full border border-purple-400/20 bg-purple-500/10 blur-3xl" />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Paragraphs */}
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">
              I am a passionate Full Stack Web Developer from Peshawar,
              Pakistan currently pursuing BS Computer Science. I specialize in
              building responsive, modern and user-friendly web applications
              using React.js, JavaScript and Supabase.
            </p>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">
              I enjoy creating beautiful digital experiences with clean UI/UX
              and powerful backend integrations that feel immersive, polished
              and high-performance.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="
                    glass
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    p-4
                    sm:p-5
                    shadow-glow
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-300/30
                  "
                >
                  <h3 className="break-words text-base font-semibold leading-6 text-white sm:text-lg md:text-xl">
                    {stat.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;