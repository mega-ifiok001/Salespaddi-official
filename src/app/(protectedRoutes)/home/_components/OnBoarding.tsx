'use client';
import { CircleCheckBig, Circle } from 'lucide-react';
import Link from 'next/link';

// Keeps layout decoupled cleanly
const onBoardingSteps = [
  { id: 1, title: 'Create webinars', complete: true, link: '/webinars' },
  { id: 2, title: 'Create Products', complete: false, link: '/products' },
  { id: 3, title: 'Create AI Agents', complete: false, link: '/ai-agents' },
];

const OnBoarding = () => {
  return (
    <div className="flex flex-col gap-2 bg-card/40 border border-border/50 p-4 rounded-xl max-w-sm backdrop-blur-xs">
      {onBoardingSteps.map((step) => (
        <Link
          key={step.id}
          href={step.link}
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group"
        >
          {step.complete ? (
            <CircleCheckBig className="h-4 w-4 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="h-4 w-4 text-muted-foreground/60 group-hover:text-amber-400 shrink-0" />
          )}
          <span className={`${step.complete ? 'line-through text-muted-foreground/50' : 'font-medium'}`}>
            {step.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default OnBoarding;