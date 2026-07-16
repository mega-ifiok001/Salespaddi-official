'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User } from '@prisma/client';
import { RiRobot3Line } from 'react-icons/ri';

type Props = {
  user?: User | null;
};

const Navbar = ({ user }: Props) => {
   const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'bg-[#14211B]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex gap-2 items-center group">
            <div className="p-1.5 bg-gradient-to-br from-[#75a38d] to-[#f97316] rounded-lg group-hover:rotate-12 transition-all duration-300">
              <RiRobot3Line className="text-white text-lg" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">SalesPaddi</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider text-[#E7E5E4]/60">
            <Link href="#features" className="hover:text-[#75a38d] transition-colors uppercase">Platform</Link>
            <Link href="#engine" className="hover:text-[#75a38d] transition-colors uppercase">Intelligence</Link>
            <Link href={user ? "/home" : "/sign-in"}>
              <button className="px-6 py-2.5 rounded-xl bg-[#75a38d]/10 border border-[#75a38d]/20 hover:bg-[#75a38d]/20 hover:border-[#75a38d]/40 transition-all text-[#75a38d] font-semibold text-xs uppercase tracking-wider">
                {user ? 'Dashboard' : 'Login'}
              </button>
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;