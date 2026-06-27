import { Phone, Clock, ShieldCheck, BadgeCheck } from 'lucide-react'
import { BUSINESS } from '../lib/content'
import { Chip, Reveal } from './ui'
import LeadForm from './LeadForm'

const POINTS = [
  { icon: Clock, text: 'Same-day estimates, 7 days a week' },
  { icon: ShieldCheck, text: 'WSIB & MSA certified · fully insured' },
  { icon: BadgeCheck, text: '30+ years on North York & GTA roofs' },
]

export default function CTA() {
  return (
    <section id="quote" className="py-16 sm:py-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange to-orange-deep px-6 py-12 shadow-[var(--shadow-float)] sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[32rem] w-[32rem]"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)' }}
          />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            {/* pitch */}
            <div className="lg:py-2">
              <Chip tone="light">Free estimate</Chip>
              <Reveal delay={0.05}>
                <h2 className="text-section mt-5 text-white text-balance">
                  Tell us about your roof. We'll tell you the truth.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md leading-relaxed text-white/85">
                  A no-pressure assessment and a clear, itemised quote — usually same day. If the
                  honest answer is "it can wait," that's what you'll hear.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-col gap-3">
                {POINTS.map((p) => (
                  <div key={p.text} className="flex items-center gap-3 text-[0.95rem] text-white">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20">
                      <p.icon size={16} strokeWidth={2.2} />
                    </span>
                    {p.text}
                  </div>
                ))}
              </div>

              <a
                href={BUSINESS.tollFreeHref}
                className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white/12 px-5 py-3.5 ring-1 ring-white/20 transition-colors hover:bg-white/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-orange">
                  <Phone size={18} strokeWidth={2.2} />
                </span>
                <span className="leading-tight text-white">
                  <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-white/70">
                    Prefer to call?
                  </span>
                  <span className="font-display text-xl">{BUSINESS.tollFree}</span>
                </span>
              </a>
            </div>

            {/* form */}
            <div className="rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-float)] sm:p-8">
              <h3 className="font-display text-2xl tracking-tight text-ink">Request my free quote</h3>
              <p className="mb-5 mt-1.5 text-sm text-ink-soft">
                Reply within the hour during business hours.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
