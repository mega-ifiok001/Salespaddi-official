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
      'Every call transcript is tagged by objection and followed up automatically, plus a replay and no-show recovery for everyone who missed it',
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
    <section className="relative flex flex-col items-center py-24 px-6 overflow-hidden bg-[#14211B]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#75a38d]/10 via-transparent to-transparent -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          How It{' '}
          <span className="bg-gradient-to-r from-[#75a38d] to-[#f97316] bg-clip-text text-transparent">
            Works
          </span>
        </h2>
        <p className="text-[#E7E5E4]/50 text-lg leading-relaxed">
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
            className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#f97316]/30 transition-colors duration-500"
          >
            <div className="relative bg-[#14211B]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6 h-full">
              <div className="absolute top-3 right-4 text-[#75a38d]/30 font-bold text-2xl">
                {String(step.id).padStart(2, '0')}
              </div>

              <div className="relative w-11 h-11 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute inset-0 bg-[#f97316]/15 blur-xl rounded-full"
                />
                <div className="relative w-11 h-11 rounded-xl bg-white/5 border border-[#75a38d]/20 flex items-center justify-center text-[#75a38d] group-hover:scale-110 group-hover:border-[#f97316]/40 group-hover:text-[#f97316] transition-all duration-300">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-[#E7E5E4]/50 text-sm leading-relaxed group-hover:text-[#E7E5E4]/70 transition-colors">
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