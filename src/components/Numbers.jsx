import { useEffect, useRef, useState } from 'react'
import { useInView, animate, m } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Chip, ButtonPrimary } from './ui'
import { BUSINESS } from '../lib/content'
import { EASE } from '../lib/motion'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: (v) => setVal(Math.round(v)) })
    return c.stop
  }, [inView, to])
  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

const STATS = [
  { to: 30, suffix: '+', label: 'Years of experience' },
  { to: 100, suffix: '%', label: 'WSIB-covered & insured' },
  { to: 5, suffix: '★', label: 'Average Google rating' },
]

export default function Numbers() {
  return (
    <section className="py-6 sm:py-10">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem]"
            style={{ background: 'radial-gradient(circle, var(--color-orange-glow), transparent 70%)' }}
          />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Chip tone="navy">The promise, in numbers</Chip>
              <h2 className="text-section mt-5 text-white text-balance">
                A roof you forget about is a roof <span className="text-orange-bright">done right.</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-paper-mute">
                These aren't slogans — they're 30 years of climbing North York roofs, and the
                reason so much of our work now comes by referral.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonPrimary href="#quote">Book a free estimate</ButtonPrimary>
                <a href={BUSINESS.tollFreeHref} className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-paper transition-colors hover:text-orange-bright">
                  <Phone size={16} className="text-orange-bright" />
                  {BUSINESS.tollFree}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {STATS.map((s, i) => (
                <m.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10"
                >
                  <div className="font-display text-4xl text-white sm:text-[2.7rem]">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[0.82rem] font-medium text-paper-mute">{s.label}</div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
