import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="about" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute -inset-24 opacity-40 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(167,139,250,0.35),rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 sm:pt-36 text-center">
        <p className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-lg">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Open to new opportunities
        </p>
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]">
          Futuristic Resume<br />
          <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">Crafted for Recruiters</span>
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-white/70 text-base sm:text-lg">
          I build elegant systems and scalable products. Explore selected experience and achievements below. The interface is interactive—feel free to play with the scene.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#experience" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
            View Experience
          </a>
          <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
