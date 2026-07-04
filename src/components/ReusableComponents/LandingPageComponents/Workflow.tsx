'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FiUserPlus,
  FiCreditCard,
  FiBox,
  FiCalendar,
  FiVideo,
} from 'react-icons/fi';
import { LuMessageSquareText } from 'react-icons/lu';

const workflowSteps = [
  {
    id: 1,
    icon: <FiUserPlus size={20} />,
    title: 'Sign Up',
    description: 'Create your account in seconds',
  },
  {
    id: 2,
    icon: <FiCreditCard size={20} />,
    title: 'Connect Stripe',
    description: 'Link your real Stripe account to accept live payments',
  },
  {
    id: 3,
    icon: <FiBox size={20} />,
    title: 'Create Products',
    description: 'Add the products or offers you want to sell',
  },
  {
    id: 4,
    icon: <FiCalendar size={20} />,
    title: 'Schedule Your Webinar',
    description:
      'Attendees register ahead of time and get automatic reminders as it approaches',
  },
  {
    id: 5,
    icon: <FiVideo size={20} />,
    title: 'Go Live',
    description:
      'Attendees can be pulled into 1-on-1 AI voice calls mid-webinar, and buy directly through real checkout',
  },
  {
    id: 6,
    icon: <LuMessageSquareText size={20} />,
    title: 'Smart Follow-Up',
    description:
      'Every call transcript is tagged by objection and followed up automatically — plus a replay and no-show recovery for everyone who missed it',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const Workflow = () => {
  return (
    <section className="relative flex flex-col items-center py-24 px-6 overflow-hidden bg-[#050806]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2c8c8815] via-transparent to-transparent -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          How It{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c8c88] to-[#4ade80]">
            Works
          </span>
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed">
          From sign-up to a closed sale, with nothing manual in between.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        {workflowSteps.map((step) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#2c8c88]/50 transition-colors duration-500"
          >
            <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/5 p-6 h-full">
              <div className="absolute top-3 right-4 text-[#2c8c88]/40 font-black text-2xl">
                {String(step.id).padStart(2, '0')}
              </div>

              <div className="relative w-11 h-11 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute inset-0 bg-[#2c8c88]/20 blur-xl rounded-full"
                />
                <div className="relative w-11 h-11 rounded-lg bg-white/5 border border-[#2c8c88]/30 flex items-center justify-center text-[#2c8c88] group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Workflow;