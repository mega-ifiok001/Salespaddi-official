'use client';

import React from 'react';
import Link from 'next/link';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { RiRobot3Line } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#14211B] text-[#E7E5E4]/60 pt-16 pb-8 px-4 border-t border-white/5 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-[#75a38d]/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] -z-10 pointer-events-none" />

      <div className="container mx-auto flex flex-col items-center text-center">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-2xl font-bold text-white tracking-tight"
        >
          <div className="p-1.5 bg-gradient-to-br from-[#75a38d] to-[#f97316] rounded-lg">
            <RiRobot3Line className="text-white text-xl" />
          </div>
          <span>
            SALES
            <span className="bg-gradient-to-r from-[#75a38d] to-[#f97316] bg-clip-text text-transparent">
              PADDI
            </span>
          </span>
        </Link>

        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <li>
              <Link href="/#home" className="hover:text-[#75a38d] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-[#75a38d] transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#workflow" className="hover:text-[#75a38d] transition-colors">
                Workflow
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[#75a38d] transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-5 mb-8">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E7E5E4]/40 hover:text-[#75a38d] hover:border-[#75a38d]/50 transition-colors"
          >
            <FaXTwitter size={16} />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E7E5E4]/40 hover:text-[#75a38d] hover:border-[#75a38d]/50 transition-colors"
          >
            <FaLinkedinIn size={16} />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E7E5E4]/40 hover:text-[#75a38d] hover:border-[#75a38d]/50 transition-colors"
          >
            <FaGithub size={16} />
          </Link>
        </div>

        <p className="text-xs opacity-50 border-t border-white/5 pt-6 w-full max-w-xs">
          &copy; {currentYear} SalesPaddi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;