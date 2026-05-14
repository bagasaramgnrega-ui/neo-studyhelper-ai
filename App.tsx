import { useEffect, useState } from 'react';
import { Bot, Brain, FileText, Menu, NotebookPen, Sparkles, X } from 'lucide-react';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: 'chat' | 'pdf' | 'quiz' | 'notes';
  gradient: string;
};

const iconMap = {
  chat: Bot,
  pdf: FileText,
  quiz: Brain,
  notes: NotebookPen,
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFeatures = async () => {
    try {
      const res = await fetch('/api/features');
      const data = await res.json();
      setFeatures(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#070B1A] text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(129,140,248,0.22),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.20),transparent_45%)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

        <header className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <div className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-white/10 shadow-[0_0_35px_rgba(34,211,238,0.25)] backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm text-cyan-300/90">Neo</p>
              <p className="text-lg font-semibold tracking-wide">StudyHelper AI</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200/90 backdrop-blur-xl md:flex">
            <a className="transition hover:text-cyan-300" href="#hero">Home</a>
            <a className="transition hover:text-cyan-300" href="#features">Features</a>
            <a className="transition hover:text-cyan-300" href="#cta">Get Started</a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </header>

        {menuOpen && (
          <div className="relative z-20 mx-5 mb-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3 text-sm">
              <a className="rounded-lg px-3 py-2 hover:bg-white/5" href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
              <a className="rounded-lg px-3 py-2 hover:bg-white/5" href="#features" onClick={() => setMenuOpen(false)}>Features</a>
              <a className="rounded-lg px-3 py-2 hover:bg-white/5" href="#cta" onClick={() => setMenuOpen(false)}>Get Started</a>
            </div>
          </div>
        )}

        <main className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
          <section id="hero" className="grid items-center gap-10 py-10 lg:grid-cols-2 lg:py-16">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                Future of Learning
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Learn Smarter with <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">AI</span>
              </h1>
              <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Your AI-powered study assistant for instant explanations, intelligent summaries, auto-generated quizzes, and organized smart notes—all in one premium workspace.
              </p>
              <div id="cta" className="flex flex-wrap gap-4">
                <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(56,189,248,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(56,189,248,0.55)]">
                  Start Learning
                </button>
                <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/10">
                  Try AI Chat
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_10px_60px_rgba(56,189,248,0.18)] backdrop-blur-2xl">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-purple-300" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-4">
                    <p className="text-xs uppercase tracking-wide text-cyan-300/80">AI Insight</p>
                    <p className="mt-2 text-sm text-slate-200">"I turned your 42-page chapter into key points, flashcards, and a 10-question quiz in 8 seconds."</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className="text-xl font-semibold text-cyan-300">24/7</p>
                      <p className="text-xs text-slate-300">Always available</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className="text-xl font-semibold text-purple-300">4 Tools</p>
                      <p className="text-xs text-slate-300">One workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-8 sm:py-12">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Core Features</p>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Powerful AI Tools for Every Study Session</h2>
              </div>
            </div>

            {loading ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="h-44 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
                ))}
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <article
                      key={feature.id}
                      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
                    >
                      <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-purple-300/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
