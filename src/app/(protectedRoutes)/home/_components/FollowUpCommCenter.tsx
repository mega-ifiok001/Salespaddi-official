
// src/app/dashboard/components/FollowUpCommCenter.tsx
'use client'; // Recharts and Headless UI Tabs require client-side interactivity
import React from 'react';
import { Mail, MessageSquare, Briefcase, Plus, UserPlus } from 'lucide-react';
import { Tab } from '@headlessui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ViewDetailsLink } from '../../../../components/ViewDetailsLink/page';

const inboxItems = [
  { id: 1, channel: 'WhatsApp', user: '+1 (555) 123-4567', message: '"Is there a trial?"', icon: MessageSquare, color: 'text-orange', bgColor: 'bg-orange/10' },
  { id: 2, channel: 'Email', user: 'user@example.com', message: '"Demo request"', icon: Mail, color: 'text-sage', bgColor: 'bg-sage-light' },
  { id: 3, channel: 'Instagram', user: '@user_b', message: '"Price list?"', icon: Plus, color: 'text-sage', bgColor: 'bg-sage-light' },
];

const analyticsData = [
  { day: 1, Replies: 8, Conversion: 2 },
  { day: 2, Replies: 12, Conversion: 3 },
  { day: 3, Replies: 9, Conversion: 2 },
  { day: 4, Replies: 15, Conversion: 5 },
  { day: 5, Replies: 13, Conversion: 4 },
  { day: 6, Replies: 17, Conversion: 6 },
  { day: 7, Replies: 21, Conversion: 8 },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FollowUpCommCenter() {
  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 md:gap-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-sm h-full xl:col-span-1">
      
      {/* Omni-Channel Section */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-light mb-4">
          FOLLOW-UP COMM CENTER
        </h3>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <p className="text-charcoal-light">Follow-Up Channels:</p>
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-orange" />
            <Briefcase size={16} className="text-sage" />
            <Mail size={16} className="text-sage" />
          </div>
          <p className="text-sage font-semibold uppercase tracking-widest text-[10px]">OMNI-CHANNEL SYNC ACTIVE</p>
          <div className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-charcoal-lighter p-1 border border-white/10">
            {['INBOX', 'REPLIES SENT'].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-semibold uppercase leading-5 tracking-widest',
                    'transition-all focus:outline-none',
                    selected
                      ? 'bg-charcoal text-white shadow'
                      : 'text-charcoal-light hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          {/* SYNTAX FIX: Changed <Tab.Panel> to <Tab.Panels> (plural) to wrap multiple panels */}
          <Tab.Panels className="mt-2">
            <Tab.Panel className="p-3 space-y-4">
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-light">
                  FEED ITEMS
              </h4>
              {inboxItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-background border border-charcoal-lighter">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${item.bgColor}`}>
                        <item.icon size={16} className={item.color} />
                    </div>
                    <div>
                        <p className={`text-[10px] font-medium tracking-tight ${item.color} flex items-center gap-1.5`}>
                        {item.channel.toUpperCase()} 
                        <span className="text-white/60">from {item.user}</span>
                        </p>
                        <p className="text-xs text-white/90 font-medium leading-relaxed">{item.message}</p>
                    </div>
                  </div>
                  {/* Lead ID Badge */}
                  {item.id === 1 && (
                     <div className="flex items-center gap-2 p-2 rounded-lg bg-sage-light/20 border border-sage/10 text-xs font-semibold text-sage">
                       <UserPlus size={14} className="text-sage" />
                        <span className="text-white/60">Lead ID:</span> 12301
                    </div>
                  )}
                </div>
              ))}
            </Tab.Panel>
            <Tab.Panel className="p-3">
                <p className="text-sm text-charcoal-light">Sent messages appear here...</p>
            </Tab.Panel>
          {/* SYNTAX FIX: Changed </Tap.Panel> (typo) to </Tab.Panels> to correctly close the wrapper */}
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Follow-Up Analytics & CRM Lead Matching */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-charcoal-lighter pt-6 mt-2">
        
        {/* Analytics & Graph */}
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-light">
                    FOLLOW-UP ANALYTICS
                </h4>
                <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-1 bg-sage rounded" /> Replies
                    <div className="w-3 h-1 bg-orange rounded" /> Conversion
                </div>
            </div>
            
            {/* Graph Container */}
            <div className="h-40 w-full rounded-xl p-2 bg-background/50 border border-charcoal-lighter">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid stroke="rgba(231, 229, 228, 0.04)" horizontal={false} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="rgba(231, 229, 228, 0.4)" fontSize={9} />
                        <YAxis axisLine={false} tickLine={false} stroke="rgba(231, 229, 228, 0.4)" fontSize={9} />
                        <Tooltip
                          contentStyle={{ background: '#14211B', border: '1px solid rgba(231, 229, 228, 0.1)', borderRadius: '8px' }}
                          labelStyle={{ color: 'rgba(231, 229, 228, 0.4)', fontSize: '10px' }}
                          itemStyle={{ color: 'white', fontSize: '11px' }}
                        />
                        <Line type="monotone" dataKey="Replies" stroke="#75a38d" strokeWidth={1.5} dot={{ fill: '#75a38d', r: 1.5 }} activeDot={{ r: 3 }} />
                        <Line type="monotone" dataKey="Conversion" stroke="#f97316" strokeWidth={1.5} dot={{ fill: '#f97316', r: 1.5 }} activeDot={{ r: 3 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* CRM Status */}
        <div className="space-y-4 border-l md:border-l-0 pl-6 md:pl-0 border-charcoal-lighter">
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-light">
                CRM LEAD MATCHING
            </h4>
            <div className="flex flex-col gap-2.5">
                {[
                  { key: 'Total Replies (L7D)', value: 48 },
                  { key: 'Conversion Rate', value: '12%', color: 'text-sage' },
                  { key: 'Average Response Time', value: '4m' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between gap-4 text-xs font-semibold">
                    <span className="text-charcoal-light font-medium">{item.key}:</span>
                    <span className={`text-white ${item.color || ''}`}>{item.value}</span>
                  </div>
                ))}
            </div>
        </div>
      </div>

      <div className="border-t border-charcoal-lighter pt-4 mt-auto">
         <ViewDetailsLink link="/dashboard/follow-up" />
      </div>
    </div>
  );
}
