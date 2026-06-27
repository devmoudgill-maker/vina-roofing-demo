import { m } from 'framer-motion'
import { Phone, ShieldCheck } from 'lucide-react'
import { BUSINESS } from '../lib/content'
import { PHOTOS } from '../lib/images'
import Img from './Img'
import { Chip, Reveal, ButtonSoft } from './ui'
import { viewport } from '../lib/motion'

const STATS = [
  { v: '30+', l: 'Years in business' },
  { v: 'BBB', l: 'Accredited business' },
  { v: 'WSIB', l: 'Certified & insured' },
  { v: '5★', l: 'Google-reviewed' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* copy */}
        <div>
          <Reveal>
            <Chip>About Vina</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-section mt-5 text-balance">
              The roofers North York has trusted for{' '}
              <span className="accent">over 30 years.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
              For over 30 years, Vina Roofing Inc. has protected North York homes — from a single
              slipped shingle to full replacements, eavestroughs and aluminum exteriors. WSIB &
              MSA certified, BBB accredited, and honest about what your roof actually needs.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonSoft href="#why">Why homeowners choose us</ButtonSoft>
              <a
                href={BUSINESS.tollFreeHref}
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-orange"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-soft text-orange">
                  <Phone size={16} />
                </span>
                {BUSINESS.tollFree}
              </a>
            </div>
          </Reveal>
        </div>

        {/* image composition */}
        <Reveal delay={0.1} className="relative">
          <div className="overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-card)]">
            <Img
              id={PHOTOS.homeSunset}
              alt="A completed roofing project at dusk"
              sizes="(min-width: 1024px) 45vw, 100vw"
              widths={[480, 768, 1040]}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-2xl ring-4 ring-canvas sm:block">
            <Img id={PHOTOS.craftDetail} alt="Detail of weatherproofing work" sizes="176px" widths={[176, 352]} className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -right-3 -top-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-float)]">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-verify/12 text-verify">
              <ShieldCheck size={20} />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg text-ink">Vina</div>
              <div className="text-[0.7rem] font-medium text-ink-mute">standard of work</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* stats */}
      <div className="shell mt-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <m.div
              key={s.l}
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-white p-6 shadow-[var(--shadow-sm)] sm:p-7"
            >
              <div className="font-display text-4xl tracking-tight text-ink sm:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm font-medium text-ink-soft">{s.l}</div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
