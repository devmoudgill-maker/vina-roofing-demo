import { m } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../lib/content'
import { Chip, Reveal } from './ui'
import { viewport } from '../lib/motion'

function GoogleG({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.1z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.4l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7C8.1 41.1 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.8 28.2c-.4-1.3-.7-2.7-.7-4.2s.2-2.9.7-4.2v-5.7H4.5C3 17.1 2.1 20.4 2.1 24s.9 6.9 2.4 9.9l7.3-5.7z" />
      <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8.1 6.9 4.5 14.1l7.3 5.7c1.7-5.2 6.5-9.1 12.2-9.1z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Chip>Reviews</Chip>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-section mt-5 text-balance">
                What homeowners say <span className="accent">weeks later.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-[var(--shadow-sm)]">
              <GoogleG size={22} />
              <div className="leading-tight">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-gold text-gold" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-ink">5.0</span>
                </div>
                <div className="text-[0.72rem] font-medium text-ink-mute">Google rating</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <m.figure
              key={t.name}
              variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-[1.5rem] bg-white p-7 shadow-[var(--shadow-card)] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <GoogleG size={20} />
              </div>
              <blockquote className="mt-5 text-[1.08rem] leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-orange-soft font-display text-lg text-orange">
                  {t.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <div className="font-semibold tracking-tight text-ink">{t.name}</div>
                  <div className="text-sm text-ink-mute">
                    {t.place} · {t.date}
                  </div>
                </div>
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
