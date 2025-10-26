import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'Stellar Labs',
    role: 'Senior Software Engineer',
    period: '2022 — Present',
    location: 'Remote',
    summary:
      'Leading development of high-impact web platforms. Drove performance initiatives that improved core web vitals and conversion.',
    highlights: ['Led 6 engineers', '50% faster page loads', 'Design systems'],
  },
  {
    company: 'Nebula Systems',
    role: 'Full‑Stack Engineer',
    period: '2019 — 2022',
    location: 'San Francisco, CA',
    summary:
      'Shipped end‑to‑end features across React, FastAPI, and cloud infrastructure. Built robust APIs and data pipelines.',
    highlights: ['API architecture', 'Type‑safe frontends', 'Cloud automation'],
  },
  {
    company: 'Quantum Apps',
    role: 'Software Engineer',
    period: '2017 — 2019',
    location: 'New York, NY',
    summary:
      'Contributed to core product experiences and collaborated closely with design to craft delightful interfaces.',
    highlights: ['UX collaboration', 'Testing culture', 'Accessibility'],
  },
];

function ExperienceCard({ item, index }) {
  return (
    <div
      className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.4)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute -left-3 top-7 h-6 w-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_0_4px_rgba(12,12,18,1)]" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-white/90">
            <Briefcase size={18} className="text-cyan-300" />
            <h3 className="text-lg font-semibold">{item.role}</h3>
          </div>
          <p className="text-white/70">{item.company}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-1"><Calendar size={14} />{item.period}</span>
          <span className="inline-flex items-center gap-1"><MapPin size={14} />{item.location}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.highlights.map((h) => (
          <span key={h} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">{h}</span>
        ))}
      </div>
      <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
        Let’s connect <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Experience</h2>
          <p className="mt-2 text-white/70 max-w-2xl">A snapshot of roles where I led complex builds, elevated quality, and delivered measurable impact.</p>
        </div>
        <div className="relative grid gap-6 sm:gap-8">
          <div className="pointer-events-none absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          {experiences.map((item, i) => (
            <ExperienceCard key={item.company + i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
