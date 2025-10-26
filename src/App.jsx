import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ExperienceTimeline from './components/ExperienceTimeline';
import AchievementsGrid from './components/AchievementsGrid';

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-white text-xl font-semibold">Let’s build something remarkable</h3>
            <p className="mt-2 text-white/70 max-w-md">If you’re hiring or exploring collaborations, I’d love to chat. I can share tailored case studies upon request.</p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
              Email me
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition">Download resume (PDF)</a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /> Available for full‑time roles
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white antialiased">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[60vh] w-[90vw] rounded-full blur-3xl opacity-40 bg-gradient-to-r from-violet-600/30 via-cyan-500/20 to-violet-600/30" />
      </div>

      <Navbar />
      <main>
        <Hero3D />
        <ExperienceTimeline />
        <AchievementsGrid />
      </main>
      <Footer />
    </div>
  );
}
