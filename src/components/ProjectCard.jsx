import { motion } from 'framer-motion';
import { scaleIn } from '../animations/variants';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -6, scale: 1.005 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#08101f]/95 shadow-glow"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={project.image}
          alt={`${project.title} Project Preview`}
          loading="lazy"
          decoding="async"
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80 md:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050712]/90 via-transparent to-transparent" />
      </div>

      <div className="relative space-y-4 p-5 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-cyan-300 sm:tracking-[0.25em]">
            Featured
          </span>
          <div className="flex gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
            <a href={project.github} className="text-cyan-300 transition hover:text-white">
              <Github size={20} />
            </a>
            <a href={project.link} className="text-cyan-300 transition hover:text-white">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
        <p className="text-sm leading-7 text-slate-400">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-cyan-200 sm:tracking-[0.3em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050712]/100 via-transparent to-transparent" />
    </motion.div>
  );
};

export default ProjectCard;
