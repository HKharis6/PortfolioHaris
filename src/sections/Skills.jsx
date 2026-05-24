import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { SKILLS } from '../utils/data';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24 overflow-hidden reveal-item">
      <div className="absolute left-0 rounded-full top-20 h-72 w-72 bg-blue-500/10 blur-3xl" />
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="Core technologies for full stack and modern interfaces"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {SKILLS.map((skill, index) => (
            <motion.div key={index} variants={staggerItem}>
              <SkillCard skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 rounded-[30px] border border-white/10 bg-[#08101f]/85 p-6 sm:p-8 shadow-glow"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              { label: 'HTML5', value: 100 },
              { label: 'CSS3', value: 100 },
              { label: 'JavaScript ES6+', value: 100 },
              { label: 'React.js', value: 100 },
              { label: 'Tailwind CSS', value: 100 },
              { label: 'Supabase', value: 100 }
            ].map((skill) => (
              <div key={skill.label} className="space-y-2">
                <div className="flex items-center justify-between text-[0.75rem] uppercase tracking-[0.25em] text-cyan-300/80">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full transition-all rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
