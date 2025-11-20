import { motion } from 'framer-motion';

const items = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A playful hero powered by Spline and smooth motion transitions.',
    tags: ['React', 'Spline', 'Framer Motion'],
  },
  {
    title: 'E-commerce UI Kit',
    desc: 'A modular interface system with accessible components.',
    tags: ['Design System', 'Tailwind', 'Radix UI'],
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming charts and metrics with WebSockets.',
    tags: ['FastAPI', 'WebSockets', 'Charts'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
        <p className="mt-2 text-blue-200/80">A few things I loved building recently.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05 * i, duration: 0.5 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-emerald-400/10 ring-1 ring-inset ring-white/10 transition group-hover:scale-[1.02]" />
            <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-blue-100/80">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="rounded-md border border-white/10 bg-white/10 px-2 py-1 text-[11px] text-blue-100/80">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
