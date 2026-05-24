import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../utils/data';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 md:py-24 reveal-item">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="High-end applications with premium UI, motion, and full-stack experience"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 xl:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a href="#contact" className="rounded-full border border-white/10 bg-[#09101f]/90 px-8 py-3 text-xs sm:px-10 sm:text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 shadow-glow transition hover:border-cyan-400/40 hover:text-white">
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
