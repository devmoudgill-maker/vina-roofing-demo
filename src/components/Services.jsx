import { useEffect, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ROOFING, CONSTRUCTION } from '../lib/content'
import { Chip, Reveal } from './ui'
import { EASE } from '../lib/motion'

const TABS = [
  { id: 'roofing', label: 'Roofing', data: ROOFING },
  { id: 'construction', label: 'Exteriors', data: CONSTRUCTION },
]

export default function Services() {
  const [active, setActive] = useState('roofing')

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace('#', '')
      if (h === 'roofing' || h === 'construction') setActive(h)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const activeIndex = TABS.findIndex((t) => t.id === active)
  const current = TABS[activeIndex]

  return (
    <section id="roofing" className="py-20 sm:py-28">
      <span id="construction" className="relative -top-24 block" aria-hidden />
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Chip>What we do</Chip>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-section mt-5 text-balance">
                Two trades, <span className="accent">one accountable crew.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                Everything that keeps weather out and your home standing — from the ridge cap to
                the last eavestrough.
              </p>
            </Reveal>
          </div>

          {/* Segmented control — CSS slider (no layout animation) */}
          <Reveal delay={0.1}>
            <div className="relative inline-flex rounded-full bg-white p-1.5 shadow-[var(--shadow-sm)]">
              <span aria-hidden className="pointer-events-none absolute inset-1.5">
                <span
                  className="block h-full w-1/2 rounded-full bg-orange transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(${activeIndex * 100}%)` }}
                />
              </span>
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`relative z-10 flex-1 whitespace-nowrap rounded-full px-6 py-2.5 text-[0.92rem] font-semibold tracking-tight transition-colors duration-300 ${
                    active === t.id ? 'text-white' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <m.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.data.map((s) => (
              <a
                key={s.n}
                href="#quote"
                className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm tabular-nums text-ink-mute">{s.n}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-tint text-ink-mute transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl tracking-tight text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{s.body}</p>
              </a>
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
