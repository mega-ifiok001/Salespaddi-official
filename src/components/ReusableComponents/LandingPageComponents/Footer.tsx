'use client';

import React from 'react';
import Link from 'next/link';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { RiRobot3Line } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050806] text-zinc-400 pt-16 pb-8 px-4 border-t border-white/10 overflow-hidden">
      {/* Subtle glow, matching the rest of the site */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-[#2c8c8815] blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto flex flex-col items-center text-center">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-2xl font-black text-white tracking-tight"
        >
          <RiRobot3Line className="text-[#2c8c88]" size={28} />
          <span>
            SALES
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c8c88] to-[#4ade80]">
              PADDI
            </span>
          </span>
        </Link>

        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <li>
              <Link href="/#home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-white transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#workflow" className="hover:text-white transition-colors">
                Workflow
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white transition-colors">
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
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#2c8c88] hover:border-[#2c8c88]/50 transition-colors"
          >
            <FaXTwitter size={16} />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#2c8c88] hover:border-[#2c8c88]/50 transition-colors"
          >
            <FaLinkedinIn size={16} />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#2c8c88] hover:border-[#2c8c88]/50 transition-colors"
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