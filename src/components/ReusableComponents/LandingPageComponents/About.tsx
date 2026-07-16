import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 bg-[#14211B]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          About Us
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 max-w-6xl w-full">
        <div className="text-center lg:text-left lg:w-1/2 rounded-2xl bg-[#14211B]/80 backdrop-blur-xl border border-white/5 p-5 sm:p-8 sm:py-10">
          <h3 className="text-xl font-bold text-white mb-2 sm:mb-4">
            About SalesPaddi
          </h3>
          <p className="text-[#E7E5E4]/50 text-sm leading-relaxed">
            SalesPaddi is an AI-powered webinar and sales platform that automates your entire funnel, from registration to checkout to follow-up. We help creators, coaches, and businesses close more sales with less manual work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;