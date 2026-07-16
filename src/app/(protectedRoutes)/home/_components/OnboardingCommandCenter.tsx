// src/app/dashboard/components/OnboardingCommandCenter.tsx
import React from 'react';
import { CircleCheck, Circle } from 'lucide-react';

const onboardingSteps = [
  { id: 1, title: 'CREATE WEBINARS', complete: true, progress: 100 },
  { id: 2, title: 'CREATE PRODUCTS', complete: false, progress: 100 },
  { id: 3, title: 'CREATE AI AGENTS', complete: false, progress: 100 },
];

export default function OnboardingCommandCenter() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-charcoal-light">
          Sell with ease
        </p>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight leading-[1.1] mt-2 text-white">
          Make your selling and marketing process seamless and efficient with <span className="text-sage mt-1">SalesPaddi</span>
        </h1>
        <p className="text-sm md:text-base text-charcoal-light max-w-2xl mt-3 md:mt-4">
          Welcome to your command center, User! Complete the onboarding milestones to maximize your results.
        </p>
      </div>

      {/* Checklist */}
      <div className="space-y-4 md:space-y-6 max-w-sm">
        {onboardingSteps.map((step) => (
          <div key={step.id} className="relative">
            <div className={`px-2 rounded-xl flex items-center justify-between gap-4 ${step.complete ? 'bg-sage/10' : 'bg-charcoal-lighter'}`}>
              <div className="flex items-center mr-2 ">
                {step.complete ? (
                  <CircleCheck size={20} className="text-sage" />
                ) : (
                  <Circle size={20} className="text-charcoal-light" />
                )}
                <span className={`text-sm ml-2 font-semibold uppercase tracking-wider ${step.complete ? 'text-sage' : 'text-charcoal-light'}`}>
                  {step.title}
                </span>
              </div>
              <p className={`text-xs font-semibold ${step.complete ? 'text-sage' : 'text-charcoal-light'}`}>
                {step.progress}%
              </p>
            </div>
            {/* ProgressBar */}
            <div className="absolute left-0 right-0 -bottom-1 h-1.5 bg-charcoal-lighter rounded-full overflow-hidden">
                <div 
                  className="h-full bg-sage rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${step.progress}%` }}
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}