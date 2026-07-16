// src/app/dashboard/components/OperationalMetrics.tsx
'use client'; // Recharts is a client component
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ViewDetailsLink } from '../../../../components/ViewDetailsLink/page';

const crmData = [
  { name: 'Sync Webinars', value: 15, theme: 'charcoal' },
  { name: 'Products', value: 38, theme: 'sage' },
  { name: 'WhatsApp leads', value: 210, theme: 'sage' },
  { name: 'Called Leads', value: 98, theme: 'charcoal' },
];

export default function OperationalMetrics() {
  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 md:gap-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-sm h-full xl:col-span-1">
      
      {/* 1. Header */}
      <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-light">
        OPERATIONAL METRICS
      </h3>

      {/* 2. CRM & Revenue Info */}
      <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between border-b border-charcoal-lighter pb-6 mb-2">
        {/* Revenue */}
        <div className="space-y-1">
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-charcoal-light">
            CRM Integration Status
          </p>
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
            </div>
            <p className="text-sm font-medium text-white/90">Salesforce Connected <span className="text-charcoal-light">(312 leads synced)</span></p>
          </div>
          <p className="text-xs font-medium text-orange/90 pl-4">HubSpot: Paused (token refresh required)</p>
        </div>

        {/* Revenue */}
        <div className="space-y-1 text-left md:text-right">
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-charcoal-light">
             Total CRM-Validated Revenue:
          </p>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
            $18,900.00
          </p>
        </div>
      </div>

      {/* 3. Bar Chart - Integrated Style */}
      <div className="h-56 w-full rounded-xl p-2 bg-background/50 border border-charcoal-lighter">
          <ResponsiveContainer width="100%" height="100%">
              <BarChart data={crmData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(231, 229, 228, 0.04)" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="rgba(231, 229, 228, 0.4)" fontSize={9} />
                  <YAxis axisLine={false} tickLine={false} stroke="rgba(231, 229, 228, 0.4)" fontSize={9} />
                  <Tooltip
                    contentStyle={{ background: '#14211B', border: '1px solid rgba(231, 229, 228, 0.1)', borderRadius: '8px' }}
                    labelStyle={{ color: 'rgba(231, 229, 228, 0.4)', fontSize: '10px' }}
                    itemStyle={{ color: 'white', fontSize: '11px' }}
                    cursor={{ fill: 'rgba(231, 229, 228, 0.04)' }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {crmData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.theme === 'sage' ? '#75a38d' : 'rgba(231, 229, 228, 0.1)'} />
                      ))}
                  </Bar>
              </BarChart>
          </ResponsiveContainer>
      </div>

      <div className="border-t border-charcoal-lighter pt-4 mt-auto">
         <ViewDetailsLink link="/dashboard/metrics" />
      </div>
    </div>
  );
}