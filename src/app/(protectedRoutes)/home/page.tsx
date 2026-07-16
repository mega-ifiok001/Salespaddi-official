// src/app/dashboard/page.tsx
import React from 'react';
import OnboardingCommandCenter from './_components/OnboardingCommandCenter';
import QuickActions from './_components/QuickActions';
import AiAgentOptimization from './_components/AiAgentOptimization';
import FollowUpCommCenter from './_components/FollowUpCommCenter';
import OperationalMetrics from './_components/OperationalMetrics';
// import { ViewDetailsLink } from '../../../components/ViewDetailsLink/page';

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-background sm:p-6 lg:p- text-white selection:bg-sage-light">
      
      {/* 1. TOP RESPONSIVE LAYER: Command Center & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
        
        {/* Onboarding COMMAND CENTER: 1 col on mobile, 2 col md, 3 col lg */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <OnboardingCommandCenter />
        </div>
        
        {/* Quick Actions: 1 col on mobile, 2 col lg */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <QuickActions />
        </div>
      </div>

      {/* 2. DEEP DIVE SECTION: Dynamic Grid, rearranges based on content type */}
      <div className="mt-8 md:mt-10 lg:mt-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-6 md:mb-8">
          DEEP DIVE
        </h2>

        {/* 
           Responsive Deep Dive Grid Strategy:
           - Mobile/Tablet: AI Agent Optimization on top of Operational Metrics.
           - Desktop (3 Col): All three components side-by-side, Follow-Up Comm center is central.
           The Follow-Up Comm center is the most central and largest, handling complex data.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch">
          
          {/* Bottom Left: AI Agent Optimization */}
          <AiAgentOptimization />
          
          {/* Main Central Area: Follow-Up Comm Center */}
          {/* xl:col-span-1 (Standard), but it's central by grid placement. 
             If you want it larger on intermediate screens, you could use xl:col-span-2 
             and push Operational Metrics. For this design, let's keep them equal. */}
          <FollowUpCommCenter />
          
          {/* Bottom Right: Operational Metrics */}
          <OperationalMetrics />
        </div>
      </div>

    </div>
  );
}