import { Award, Rocket, Star, Code2 } from 'lucide-react';

const achievements = [
  {
    title: 'Performance Champion',
    description: 'Cut TTFB and LCP across critical pages leading to 18% conversion uplift.',
    Icon: Rocket,
    metric: '+18% conv.',
  },
  {
    title: 'Open Source Maintainer',
    description: 'Maintainer of a React utilities library used by 5k+ developers monthly.',
    Icon: Code2,
    metric: '5k+ devs',
  },
  {
    title: 'Industry Award',
    description: 'Recognized for building accessible, inclusive interfaces at scale.',
    Icon: Award,
    metric: 'Top 1%',
  },
  {
    title: 'Star Project',
    description: 'Launched a data visualization suite with real‑time 3D interactions.',
    Icon: Star,
    metric: '3D UI',
  },
];

function AchievementCard({ a }) {
  const { Icon } = a;
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(167,139,250,0.35)]" style={{ transformStyle: 'preserve-3d' }}>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-violet-500/10 to-cyan-500/10" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.35)]">
              <Icon className="text-white" size={18} />
            </div>
            <h3 className="text-white font-semibold">{a.title}</h3>
          </div>
          <span className="text-xs text-cyan-300 border border-cyan-500/30 rounded-full px-2 py-1 bg-cyan-500/10">{a.metric}</span>
        </div>
        <p className="mt-3 text-sm text-white/70">{a.description}</p>
      </div>
    </div>
  );
}

export default function AchievementsGrid() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(167,139,250,0.15),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Achievements</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Highlights that reflect my approach: impact, craft, and long‑term maintainability.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <AchievementCard key={a.title} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
