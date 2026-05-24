import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

import { fadeInUp, fadeInRight } from '../animations/variants';
import FloatingCube from '../three/FloatingCube';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showOptions, setShowOptions] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Generate Message
  const generatedMessage = `
Hello Haris Khan,

My name is ${formData.name}.

${formData.message}

You can contact me back on:
${formData.email}

Sent from your portfolio website.
`;

  // WhatsApp Send
  const handleWhatsApp = () => {
    const whatsappMessage = encodeURIComponent(generatedMessage);

    window.open(
      `https://wa.me/923035733138?text=${whatsappMessage}`,
      '_blank'
    );
  };

  // Email Send
  const handleEmail = () => {
    const subject = encodeURIComponent(
      `Portfolio Contact From ${formData.name}`
    );

    const body = encodeURIComponent(generatedMessage);

    window.location.href = `mailto:hkkharis010@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 reveal-item"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's build your next futuristic product together"
        />

        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          
          {/* LEFT CONTACT FORM */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="glass rounded-3xl border border-white/10 p-5 shadow-glow sm:p-8"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowOptions(true);
              }}
              className="space-y-6"
            >
              {/* Inputs */}
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    label: 'Name',
                    type: 'text',
                    placeholder: 'Your name',
                    name: 'name',
                  },
                  {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'you@domain.com',
                    name: 'email',
                  },
                ].map((field) => (
                  <div key={field.label} className="space-y-3">
                    <label className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/80 sm:tracking-[0.25em]">
                      {field.label}
                    </label>

                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="
                        w-full rounded-3xl border border-white/10
                        bg-[#08101f]/95 px-4 py-3 text-sm text-white
                        outline-none transition duration-300
                        focus:border-cyan-400/60
                      "
                    />
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/80 sm:tracking-[0.25em]">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full rounded-3xl border border-white/10
                    bg-[#08101f]/95 px-4 py-3 text-sm text-white
                    outline-none transition duration-300
                    focus:border-cyan-400/60 resize-none
                  "
                />
              </div>

              {/* Send Button */}
              <div className="flex flex-wrap gap-4">
                <Button
                  type="submit"
                  className="px-8 py-3"
                >
                  Send Message
                </Button>
              </div>

              {/* OPTIONS */}
              {showOptions && (
                <div
                  className="
                    mt-6 flex flex-col gap-4 rounded-3xl
                    border border-cyan-400/20
                    bg-[#07101f]/95 p-5
                  "
                >
                  <p className="text-sm text-cyan-200">
                    Choose where you want to send your message:
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {/* WhatsApp */}
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="
                        rounded-2xl border border-green-400/30
                        bg-green-500/10 px-6 py-3 text-sm
                        font-semibold text-green-300
                        transition duration-300
                        hover:bg-green-500/20
                      "
                    >
                      Send to WhatsApp
                    </button>

                    {/* Email */}
                    <button
                      type="button"
                      onClick={handleEmail}
                      className="
                        rounded-2xl border border-cyan-400/30
                        bg-cyan-500/10 px-6 py-3 text-sm
                        font-semibold text-cyan-300
                        transition duration-300
                        hover:bg-cyan-500/20
                      "
                    >
                      Send to Email
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          {/* RIGHT 3D CARD */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="
              relative h-[320px]
              sm:h-[420px]
              md:h-[520px]
              rounded-3xl
              border border-white/10
              bg-[#08101f]/95
              shadow-glow
              overflow-hidden
            "
          >
            {/* 3D Canvas */}
            <Canvas
              className="h-full w-full"
              camera={{ position: [0, 0, 6], fov: 50 }}
              dpr={[1, 1.5]}
              gl={{ antialias: false, powerPreference: 'high-performance' }}
            >
              <ambientLight intensity={0.5} />

              <directionalLight
                position={[4, 5, 5]}
                intensity={0.9}
              />

              <FloatingCube position={[0, 0, 0]} />
            </Canvas>

            {/* Contact Info */}
            <div
              className="
                absolute inset-x-4 bottom-4
                rounded-2xl border border-cyan-400/10
                bg-[#07101f]/95 p-5
                sm:inset-x-6 sm:bottom-6
              "
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300/70 sm:tracking-[0.3em]">
                Contact Info
              </p>

              <p className="mt-3 break-all text-sm font-semibold text-white sm:text-base">
                Email: hkkharis010@gmail.com
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Phone: +92 303 5733138
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Location: Peshawar, Pakistan
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
