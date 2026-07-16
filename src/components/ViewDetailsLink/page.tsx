
// src/components/ViewDetailsLink.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ViewDetailsLinkProps {
  link: string;
}

export const ViewDetailsLink: React.FC<ViewDetailsLinkProps> = ({ link }) => {
  return (
    <Link href={link} className="w-full">
      <button className="w-full px-5 py-2.5 bg-sage-light/20 border border-sage/10 text-sage hover:bg-sage/10 hover:border-sage/20 transition-all duration-300 font-semibold rounded-xl flex items-center justify-center gap-2.5 group">
        View Details 
        <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
      </button>
    </Link>
  );
};
