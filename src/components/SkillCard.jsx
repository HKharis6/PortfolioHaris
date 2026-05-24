import { motion } from 'framer-motion';
import { scaleIn } from '../animations/variants';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#08101f]/95 p-5 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 sm:p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-60" />
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,_rgba(44,242,255,0.18),_transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative space-y-5">
        <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
        <div className="space-y-3">
          {skill.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
