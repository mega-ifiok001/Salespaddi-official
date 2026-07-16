'use client';

import React from 'react';
import { User } from '@prisma/client';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Sparkles, MessageSquare, 
  Video, Mail, Check, Activity
} from 'lucide-react';
import Link from 'next/link';
import { RiRobot3Line } from 'react-icons/ri';

type Props = { user?: User | null };

const LandingHome = ({  }: Props) => {
  return ( 
    <div className="relative min-h-screen w-full bg-[#14211B] text-white overflow-hidden selection:bg-[#75a38d]/40 font-sans">
      
      {/* 1. BACKGROUND WITH ELEGANT GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#75a38d]/15 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f97316]/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#75a38d]/5 blur-[200px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
      </div>

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-30 min-h-screen gap-12">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="w-full lg:w-5/12 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#75a38d]/10 border border-[#75a38d]/20"
          >
           
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#75a38d]">AI-Powered Webinar Marketing Operating System</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Sales that <br />
            <span className="bg-gradient-to-r from-[#75a38d] to-[#f97316] bg-clip-text text-transparent">
              Scale Themselves.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#E7E5E4]/60 max-w-md leading-relaxed"
          >
            A unified intelligence platform. Deploy AI agents across Video, Chat, and Email to close deals at light speed.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4">
            <Link href="/sign-up">
              <button className="px-8 py-4 bg-[#f97316] hover:bg-[#D95D08] text-white font-semibold rounded-xl flex items-center gap-3 shadow-[0_15px_30px_rgba(249,115,22,0.2)] transition-all duration-300 active:scale-95 group">
                START FREE TRIAL <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: GRID */}
        <div className="w-full lg:w-7/12 grid grid-cols-2 grid-rows-2 gap-4 h-[600px] relative">
          
          {/* A. VIDEO AGENT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-1 row-span-2 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 flex flex-col items-center justify-between relative overflow-hidden group"
          >
            <div className="w-full flex justify-between items-center text-[10px] font-semibold text-[#E7E5E4]/40">
              <span className="flex items-center gap-1.5"><Video size={12} className="text-[#f97316]" /> LIVE WEBINAR</span>
              <span className="text-[#75a38d]">428 VIEWERS</span>
            </div>
            
            <div className="relative py-12">
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute inset-0 bg-[#75a38d]/10 blur-3xl rounded-full" />
              <div className="relative w-32 h-32 rounded-full border-2 border-[#75a38d]/30 flex items-center justify-center bg-[#14211B] shadow-[0_0_30px_rgba(117,163,141,0.15)]">
                <RiRobot3Line className="text-5xl text-[#75a38d]" />
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div animate={{ x: [-100, 100] }} transition={{ repeat: Infinity, duration: 2 }} className="h-full w-1/2 bg-gradient-to-r from-[#75a38d] to-[#f97316]" />
              </div>
              <p className="text-[10px] text-center font-mono text-[#E7E5E4]/40">SYNCING VOICE LIPS ... 99%</p>
            </div>
          </motion.div>

          {/* B. NEURAL CHAT */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <MessageSquare size={14} className="text-[#75a38d]" />
              <div className="w-2 h-2 rounded-full bg-[#75a38d] animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="p-2.5 bg-white/5 rounded-lg text-[9px] text-[#E7E5E4]/70 w-3/4">How does the ROI look?</div>
              <div className="p-2.5 bg-gradient-to-r from-[#75a38d] to-[#f97316] rounded-lg text-[9px] text-white font-semibold self-end ml-auto w-4/5">Based on your scale, we project 40% growth.</div>
            </div>
          </motion.div>

          {/* C. EMAIL AUTOMATION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-1 row-span-1 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-5 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-[10px] font-semibold text-[#E7E5E4]/40 uppercase tracking-wider">
              <Mail size={14} /> Neural Draft
            </div>
            <div className="space-y-2 py-2">
              <div className="h-2 w-full bg-white/5 rounded-full" />
              <div className="h-2 w-5/6 bg-white/5 rounded-full" />
              <div className="h-2 w-4/6 bg-white/5 rounded-full" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-[#75a38d]">READY TO SEND</span>
              <Check size={14} className="text-[#75a38d]" />
            </div>
          </motion.div>

          {/* D. FLOATING HUD */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#D95D08] text-white font-bold flex flex-col items-center gap-1 shadow-2xl z-20"
          >
            <Activity size={16} />
            <span className="text-[10px]">98%</span>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LandingHome;