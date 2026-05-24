import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { Icon: Github, href: 'https://github.com/HKharis6', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/haris-khan-17b7842b8/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:hkkharis010@gmail.com', label: 'Email' }
];

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-4">
      {socials.map(({ Icon, href, label }, i) => (
        <motion.a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 6, scale: 1.02 }}
          className="group flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#081020]/80 px-4 py-3 text-sm text-gray-300 transition duration-300 hover:border-cyan-300/40 hover:text-white"
          title={label}
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/10 text-cyan-300 shadow-glow">
            <Icon size={18} />
          </span>
          <span>{label}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
