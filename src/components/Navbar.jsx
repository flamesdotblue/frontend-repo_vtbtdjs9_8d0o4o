import { useState } from 'react';
import { Menu, X, User, Briefcase, Trophy, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About', icon: User },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#achievements', label: 'Achievements', icon: Trophy },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(129,140,248,0.25)]">
          <div className="flex items-center justify-between px-4 h-16">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_20px_4px_rgba(167,139,250,0.7)]" />
              <span className="font-semibold tracking-wide text-white/90">Your Name</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white transition-colors"
                >
                  <span className="relative">
                    <Icon size={16} className="opacity-80 group-hover:opacity-100" />
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm border border-white/10 bg-white/5"
                  >
                    <Icon size={16} className="opacity-80" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
