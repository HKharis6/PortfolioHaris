import SectionTitle from '../components/SectionTitle';

const testimonials = [
  {
    name: 'Amina Rahman',
    title: 'Product Manager at Nexa Labs',
    quote: 'Haris created a polished and high-converting portfolio with a standout neon aesthetic. Every detail feels premium and the animations are smooth without being distracting.',
  },
  {
    name: 'Zayn Malik',
    title: 'Founder, TechPulse',
    quote: 'The design is futuristic, yet professional. Haris brought strong UX and clarity into the experience while keeping the portfolio visually bold.',
  },
  {
    name: 'Sara Khan',
    title: 'Lead Designer at Flux Studio',
    quote: 'Impressive storytelling through visuals and motion. The layout flows naturally and the hero section is a strong first impression.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(44,242,255,0.12),_transparent_40%)]" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Testimonials"
          subtitle="Client feedback and review highlights for premium portfolio design work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#08101f]/95 p-5 shadow-glow transition duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-60" />
              <div className="relative z-10 space-y-5">
                <p className="text-base leading-7 text-slate-300 sm:text-lg">"{item.quote}"</p>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{item.name}</h3>
                  <p className="text-xs leading-5 text-cyan-300/80 sm:text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
