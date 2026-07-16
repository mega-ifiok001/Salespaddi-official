'use client';

import React from 'react';
import Background from '../Background';
import Navbar from './Navbar';
import LandingHome from './LandingHome';
import Features from './Features';
import Workflow from './Workflow';
import About from './About';
import Stats from './Stats';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-[#14211B] selection:bg-[#75a38d]/20 selection:text-white">
      {/* Background */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
     <div className="mt-200">
         <LandingHome />
     </div>

      {/* Features */}
      <Features />

      {/* Workflow */}
      <Workflow />

      {/* About */}
      <About />

      {/* Stats */}
      <Stats />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;