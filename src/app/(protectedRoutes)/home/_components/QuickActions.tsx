// src/app/dashboard/components/QuickActions.tsx
import React from 'react';
import { ShoppingBag, PenTool, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// IMPORT: The data fetching functions
import { getProductCount, getWebinarCount } from '../../../../actions/dashboard';

interface QuickActionCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  description: string;
  link: string;
  theme: 'sage' | 'orange';
}

/**
 * Presentational component for displaying a single quick action card.
 * Proper destructuring matches actual usage and interface.
 */
const QuickActionCard: React.FC<QuickActionCardProps> = ({ icon, count, label, description, link, theme }) => {
  const isSage = theme === 'sage';
  const themeClass = isSage ? 'text-sage' : 'text-orange';
  const buttonClass = isSage ? 'bg-sage' : 'bg-orange';
  const badgeClass = isSage ? 'bg-sage-light text-sage border-sage/10' : 'bg-orange/10 text-orange border-orange/10';

  return (
    <div className="p-5 flex flex-col items-start justify-between gap-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group h-full">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="p-2 rounded-xl bg-background border-2 border-charcoal-lighter shadow-[0_0_20px_rgba(117,163,141,0.05)]">
            <div className={`text-2xl ${themeClass}`}>{icon}</div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-semibold uppercase ${badgeClass}`}>
            {label}
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
          {/* Main title dynamic count */}
          <span className={`${themeClass} tabular-nums`}>{count} </span>{label}
        </h3>
        <p className="text-xs text-charcoal-light max-w-xs">{description}</p>
      </div>

      <Link href={link} className="flex justify-start">
        <button className={`w-full py-3 ${buttonClass} text-white cursor-pointer font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group`}>
          Start New <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  );
};

/**
 * Container Server Component responsible for fetching real data from Prisma.
 */
export default async function QuickActions() {
  // FETCH: Execute database queries on the server.
  // Using Promise.all allows them to run in parallel, which is faster.
  const [productCount, webinarCount] = await Promise.all([
    getProductCount(),
    getWebinarCount(),
  ]);

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="space-y-6">
        <QuickActionCard
          icon={<ShoppingBag />}
          // DATA: Passing real database count
          count={productCount}
          label="Products"
          description="Create products and attach them to your webinars"
          link="/products"
          theme="orange"
        />
        <QuickActionCard
          icon={<PenTool />}
          // DATA: Passing real database count
          count={webinarCount}
          label="Webinars"
          description="Host webinars and boost your business like never before"
          link="/webinars"
          theme="sage"
        />
      </div>
    </div>
  );
}