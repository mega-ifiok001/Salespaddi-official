import Link from 'next/link';
import React from 'react';

type Props = {
  Icon: React.ReactNode;
  heading: string;
  smHeading: string;
  link: string;
};

const FeatureCard = ({ Icon, heading, smHeading, link }: Props) => {
  return (
    <Link
      href={link}
      className="group relative flex flex-col justify-between p-6 h-48 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_12px_30px_-10px_rgba(16,185,129,0.1)]"
    >
      {/* Subtle Glowing Background Mesh Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="p-3 rounded-xl bg-secondary text-foreground group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors duration-300 text-xl sm:text-2xl">
          {Icon}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 bg-secondary/50 px-2.5 py-1 rounded-full group-hover:text-emerald-400/80 transition-colors">
          {smHeading}
        </span>
      </div>

      <p className="relative z-10 font-medium text-sm sm:text-base text-card-foreground/90 leading-snug group-hover:text-foreground transition-colors">
        {heading}
      </p>
    </Link>
  );
};

export default FeatureCard;