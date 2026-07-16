'use client';

import Link from 'next/link';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip,
} from 'recharts';

/* ------------------------------------------------------------------ */
/*  AI Agents tile — Real radar chart: capability coverage per channel */
/* ------------------------------------------------------------------ */

const AGENT_CAPABILITY = [
  { skill: 'Voice', value: 82 },
  { skill: 'Chat', value: 95 },
  { skill: 'Email', value: 70 },
  { skill: 'Workflow', value: 88 },
];

const AIAgentsContent = () => {
  return (
    <div className="w-full p-2">
      <Link href="/ai-agents" className="group block w-full">
        <div className="relative rounded-2xl border border-border bg-card/60 p-5 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-card/80">
          
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-10 bg-emerald-400 transition-opacity duration-300 group-hover:opacity-20" />

          {/* Header row */}
          <div className="relative flex items-center justify-between mb-4">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
              Agent Capability
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded-full border border-emerald-500/10">
              <span className="relative flex h-1.5 w-1.5">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Active
            </span>
          </div>

          {/* Chart Wrapper */}
          <div className="relative h-[160px] w-full my-2 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={AGENT_CAPABILITY} outerRadius="68%">
                <PolarGrid stroke="rgba(255,255,255,0.06)" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 10, fontWeight: 500 }}
                />
                <Radar
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={1.5}
                  fill="#10b981"
                  fillOpacity={0.15}
                />
                <Tooltip
                  cursor={false}
                  contentStyle={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    fontSize: 11,
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                  }}
                  itemStyle={{ color: 'var(--foreground)' }}
                  labelStyle={{ color: 'var(--muted-foreground)', fontWeight: 500 }}
                  formatter={(value: number) => [`${value}%`, 'Coverage']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-center text-xs text-muted-foreground/80 mt-2">
            Optimized channel response intent metrics
          </p>
        </div>
      </Link>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Settings tile — Real bar chart on live counts + revenue hero stat  */
/* ------------------------------------------------------------------ */

type Props = {
  totalWebinars: number;
  stripeId: string | null;
  totalProducts: number;
  revenue: string;
};

const CustomBarTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: { name: string; value: number } }[];
}) => {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card/90 backdrop-blur-md px-2.5 py-1.5 text-xs shadow-xl">
      <span className="text-muted-foreground font-medium">{name}: </span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
};

const SettingsContent = ({
  totalWebinars,
  stripeId,
  totalProducts,
  revenue,
}: Props) => {
  const isActive = !!stripeId;

  const usageData = [
    { name: 'Webinars', value: totalWebinars, fill: 'rgba(255, 255, 255, 0.15)' },
    { name: 'Products', value: totalProducts, fill: '#10b981' },
  ];

  return (
    <div className="w-full p-2">
      <Link href="/settings" className="group block w-full">
        <div className="relative rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-card/80">
          
          {/* Header Block */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="space-y-0.5">
              <p className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
                Total Revenue
              </p>
              <p className="text-2xl font-bold tabular-nums tracking-tight text-foreground">
                {revenue}
              </p>
            </div>
            
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                isActive
                  ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5'
                  : 'border-border bg-secondary/50 text-muted-foreground'
              }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                {isActive && (
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                    isActive ? 'bg-emerald-400' : 'bg-muted-foreground/60'
                  }`}
                />
              </span>
              {isActive ? 'Stripe Active' : 'Stripe Inactive'}
            </span>
          </div>

          {/* Bar Chart Container */}
          <div className="my-4 h-[110px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData} barCategoryGap="40%">
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.02)', radius: 6 }} 
                  content={<CustomBarTooltip />} 
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {usageData.map((entry, idx) => (
                    <Cell 
                      key={`cell-${idx}`} 
                      fill={entry.fill} 
                      className="transition-opacity duration-300 group-hover:opacity-90"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend/Data Indicators Layout */}
          <div className="grid grid-cols-2 gap-4 border-t border-border/40 pt-3 mt-2">
            {usageData.map((row) => (
              <div key={row.name} className="flex flex-col items-center justify-center text-center">
                <p className="text-[11px] font-medium text-muted-foreground">{row.name}</p>
                <p className="text-base font-semibold tabular-nums text-foreground mt-0.5">{row.value}</p>
              </div>
            ))}
          </div>
          
        </div>
      </Link>
    </div>
  );
};

export { AIAgentsContent, SettingsContent };