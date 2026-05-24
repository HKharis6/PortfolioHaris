import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { fadeInUp } from '../animations/variants';

const testimonials = [
  {
    quote: 'Haris delivered a modern and responsive website with excellent UI/UX design. The product felt polished, interactive, and fast.',
    name: 'Client Review',
    role: 'Product Owner',
  },
  {
    quote: 'The full stack solution was executed flawlessly. The interface and backend integration exceeded expectations.',
    name: 'Senior Manager',
    role: 'Startup Founder',
  },
];

const highlights = [
  'Developed responsive web applications with a polished neon cyberpunk aesthetic.',
  'Integrated frontend and backend systems using Supabase and modern APIs.',
  'Improved performance and UX across mobile and desktop devices.',
  'Deployed apps on Netlify and Vercel with fast-loading production builds.',
];

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-16 sm:py-20 md:py-24 reveal-item">
      <div className="absolute left-0 top-24 h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience & Journey"
          subtitle="Freelance web development with full stack delivery and SaaS-grade polish"
        />

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl border border-white/10 p-5 shadow-glow transition duration-300 hover:border-cyan-300/30 sm:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80 sm:tracking-[0.3em]">2023 - Present</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Full Stack Web Developer (Freelance)</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">Delivering responsive web applications, backend integration, and premium UI/UX experiences.</p>
                </div>
                <div className="rounded-2xl border border-cyan-500/10 bg-[#07101f]/80 px-4 py-3 text-sm leading-6 text-cyan-200">Supabase, React, REST APIs, Authentication</div>
              </div>

              <div className="mt-6 grid gap-4">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-slate-300">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">✓</span>
                    <p className="text-sm leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl border border-white/10 p-5 shadow-glow sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80 sm:tracking-[0.3em]">Client Review</p>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">What clients say</h3>
              <div className="mt-8 space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="rounded-2xl border border-cyan-400/10 bg-[#08101f]/90 p-5 text-slate-300 sm:p-6">
                    <p className="text-sm leading-7 sm:text-base">"{testimonial.quote}"</p>
                    <div className="mt-4 text-sm text-cyan-300">
                      <span className="font-semibold text-white">{testimonial.name}</span>, {testimonial.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
