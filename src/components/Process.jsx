import { m } from 'framer-motion'
import { PROCESS } from '../lib/content'
import { Chip, Reveal } from './ui'
import { viewport } from '../lib/motion'

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <Chip>How it works</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-section mt-5 text-balance">
              Four steps. <span className="accent">No surprises.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <m.div
              key={p.step}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl bg-white p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-orange font-display text-lg text-white shadow-[var(--shadow-orange)]">
                  {i + 1}
                </span>
                {i < PROCESS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-line lg:block" />
                )}
              </div>
              <h3 className="mt-5 font-display text-xl tracking-tight text-ink">{p.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{p.body}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
