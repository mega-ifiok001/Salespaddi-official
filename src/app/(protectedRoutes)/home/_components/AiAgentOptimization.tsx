// src/app/dashboard/components/AiAgentOptimization.tsx
'use client'; // Recharts is a client component
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
// import { Briefcase } from 'lucide-react';
import { ViewDetailsLink } from '../../../../components/ViewDetailsLink/page';

const agentData = [
  { subject: 'WhatsApp', value: 92, fullMark: 100 },
  { subject: 'Instagram', value: 81, fullMark: 100 },
  { subject: 'Email', value: 96, fullMark: 100 },
  { subject: 'Workflow', value: 74, fullMark: 100 },
  { subject: 'Outbound Call', value: 89, fullMark: 100 },
];

export default function AiAgentOptimization() {
  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 md:gap-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-sm h-full xl:col-span-1">
      
      {/* 1. Header with Active Status */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-light">
            AI AGENT OPTIMIZATION
          </h3>
          <p className="text-xs text-charcoal-light mt-1 max-w-sm">
            Understand intent &amp; customize your AI agents accordingly.
          </p>
        </div>
        
        {/* Status Badge */}
        {/* <div className="shrink-0 flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-sage-light/20 border border-sage/10 text-[10px] font-semibold text-sage uppercase tracking-wider">
          <div className="relative flex h-1.5 w-1.5">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sage" />
          </div>
          <Briefcase size={12} className="text-sage" />
          Active
        </div> */}
      </div>

      {/* 2. Radar Chart - Integrated Brand Style */}
      <div className="relative flex-grow flex items-center justify-center p-2 rounded-xl bg-background/50 border border-charcoal-lighter max-w-full">
        <div className="h-60 sm:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={agentData}>
              {/* Using sage-light/10 and light sage border */}
              <PolarGrid stroke="rgba(117, 163, 141, 0.08)" gridType="polygon" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: 'rgba(231, 229, 228, 0.4)', fontSize: 10, fontWeight: 500 }} 
                tickLine={false}
                axisLine={{ stroke: 'rgba(231, 229, 228, 0.1)' }}
              />
              <Radar 
                name="AI Efficiency" 
                dataKey="value" 
                stroke="#75a38d"        // Sage DEFAULT
                fill="#75a38d"          // Sage DEFAULT
                fillOpacity={0.15}      // Transparency
                strokeWidth={1.5}
                dot={{ fill: '#75a38d', r: 2.5 }}
                activeDot={{ r: 4 }}
              />
               <Tooltip
                  contentStyle={{ background: '#14211B', border: '1px solid rgba(231, 229, 228, 0.1)', borderRadius: '8px' }}
                  labelStyle={{ color: 'rgba(231, 229, 228, 0.4)', fontSize: '10px' }}
                  itemStyle={{ color: 'white', fontSize: '11px' }}
                  formatter={(value) => [`${value}% Efficiency`]}
                />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Performance Metric */}
      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between text-charcoal-light">
          <p className="text-xs font-semibold">Total Called Leads</p>
          <p className="text-sm font-medium tracking-tight text-white/90">
            Avg. Call Accuracy: <span className="font-semibold text-sage">94%</span>
          </p>
        </div>
        <div className="text-3xl font-bold tracking-tight text-white flex items-center gap-1.5">
          <span className="tabular-nums">98</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-sage">L7D</span>
        </div>
      </div>

      <div className="border-t border-charcoal-lighter pt-4 mt-auto">
         <ViewDetailsLink link="/dashboard/ai-agents" />
      </div>
    </div>
  );
}