'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Users, ThumbsUp, Clock, DollarSign, Activity } from 'lucide-react';

const stats = [
  {
    value: 50000,
    suffix: '+',
    label: 'Webinars Hosted',
    icon: BarChart3,
    increment: 5,
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Active Users',
    icon: Users,
    increment: 2,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    icon: ThumbsUp,
    increment: 1,
  },
  {
    value: 40,
    suffix: '%',
    label: 'Avg. Time Saved',
    icon: Clock,
    increment: 1,
  },
  {
    value: 3.2,
    suffix: 'x',
    label: 'Revenue Lift',
    icon: DollarSign,
    increment: 0.1,
    isDecimal: true,
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Platform Uptime',
    icon: Activity,
    increment: 0.1,
    isDecimal: true,
  },
];

const Stats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((stat, i) => {
            const duration = 2000;
            const steps = duration / 50;
            const increment = stat.value / steps;
            let current = 0;
            const interval = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(interval);
              }
              setCounters((prev) => {
                const next = [...prev];
                next[i] = current;
                return next;
              });
            }, 50);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatValue = (value: number, isDecimal?: boolean) => {
    if (isDecimal) return value.toFixed(1);
    return Math.floor(value).toLocaleString();
  };

  return (
    <section id="stats" ref={sectionRef} className="relative py-24 md:py-32 px-4 overflow-hidden bg-[#14211B]">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#75a38d]/8 blur-[200px] rounded-full" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#75a38d]/10 border border-[#75a38d]/20 text-[#f97316] text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles size={14} />
            <span>By the Numbers</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#75a38d] to-[#f97316] bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-[#E7E5E4]/50 text-lg max-w-2xl mx-auto">
            Our platform delivers measurable results for businesses worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#75a38d]/30 transition-all duration-500"
            >
              <div className="relative bg-[#14211B]/80 backdrop-blur-xl rounded-2xl p-8 text-center h-full border border-white/5 group">
                <div className="w-12 h-12 rounded-xl bg-[#75a38d]/10 border border-[#75a38d]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#f97316]/10 group-hover:border-[#f97316]/30 transition-all duration-300">
                  <stat.icon className="text-[#75a38d] group-hover:text-[#f97316] transition-colors" size={20} />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#75a38d] to-[#f97316] bg-clip-text text-transparent mb-1">
                  {formatValue(counters[i], stat.isDecimal)}{stat.suffix}
                </div>
                <div className="text-[#E7E5E4]/40 text-xs font-bold tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;