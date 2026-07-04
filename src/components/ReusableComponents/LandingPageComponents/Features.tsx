'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RiRobot3Line } from 'react-icons/ri';
import { LuMessageSquareText } from 'react-icons/lu';
import { FiVideo } from 'react-icons/fi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const CORE_FEATURES = [
  {
    id: 1,
    icon: <RiRobot3Line aria-hidden="true" />,
    title: 'AI Sales Agents',
    description:
      'AI voice agents take attendees into real 1-on-1 sales calls during your webinar and pitch your offer for you.',
  },
  {
    id: 2,
    icon: <LuMessageSquareText aria-hidden="true" />,
    title: 'Objection-Aware Follow-Up',
    description:
      'Every call gets transcribed and tagged by objection — price, timing, trust — and a matching follow-up goes out automatically. No other webinar tool does this.',
  },
  {
    id: 3,
    icon: <FiVideo aria-hidden="true" />,
    title: 'Live + Automatic Replay',
    description:
      'Go live, and a replay is captured and published automatically the moment the webinar ends — no manual upload, no lost leads.',
  },
  {
    id: 4,
    icon: <MdOutlineAddShoppingCart aria-hidden="true" />,
    title: 'Real Checkout, Built In',
    description:
      'Sell directly inside the webinar with real Stripe checkout — attendees buy without ever leaving the session.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Features = () => {
  return (
    <section className="relative flex flex-col items-center py-24 px-6 overflow-hidden bg-[#050806]">
      {/* Background glow, matching LandingHome */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2c8c8815] via-transparent to-transparent -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 -z-10 pointer-events-none" />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Powerful{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c8c88] to-[#4ade80]">
            Features
          </span>
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed">
          Built for the moment attendees are most ready to buy — not just
          during the webinar, but everywhere the conversation continues after.
        </p>
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full"
      >
        {CORE_FEATURES.map(({ id, icon, title, description }) => (
          <motion.article
            key={id}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#2c8c88]/50 transition-colors duration-500"
          >
            <div className="relative bg-[#0a0a0a] backdrop-blur-xl flex flex-col h-full items-center text-center p-8 rounded-2xl border border-white/5 shadow-2xl">
              <div className="relative mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute inset-0 bg-[#2c8c88]/20 blur-2xl rounded-full"
                />
                <div className="relative p-4 rounded-full bg-white/5 group-hover:bg-[#2c8c88]/10 transition-colors duration-300 text-[35px] text-[#2c8c88]">
                  {icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;