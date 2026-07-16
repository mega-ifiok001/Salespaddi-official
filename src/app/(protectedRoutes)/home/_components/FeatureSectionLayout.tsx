import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  children: React.ReactNode;
  heading: string;
  link: string;
  className?: string;
};

const FeatureSectionLayout = ({ children, heading, link, className = '' }: Props) => {
  return (
    <div className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm shadow-sm gap-6 ${className}`}>
      <div className="w-full flex items-center justify-center py-4 bg-secondary/20 rounded-xl border border-border/40">
        {children}
      </div>

      <div className="flex items-end justify-between gap-6 pt-2">
        <h3 className="font-semibold text-lg sm:text-xl text-foreground tracking-tight leading-snug flex-1">
          {heading}
        </h3>
        <Link
          href={link}
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors shrink-0 group"
        >
          View 
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureSectionLayout;