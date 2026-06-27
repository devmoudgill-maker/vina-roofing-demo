import { m } from 'framer-motion'
import { Award, ShieldCheck, ReceiptText, MapPin } from 'lucide-react'
import { PHOTOS } from '../lib/images'
import Img from './Img'
import { Chip, Reveal, ButtonPrimary } from './ui'
import { viewport } from '../lib/motion'

const FEATURES = [
  {
    icon: Award,
    title: 'Certified experts',
    body: 'Fully trained, WSIB & MSA-certified crews. The people who quote your roof are the people who stand behind it.',
  },
  {
    icon: ShieldCheck,
    title: '30 years of experience',
    body: 'Three decades on GTA roofs, and an accredited, fully-insured business behind every job.',
  },
  {
    icon: ReceiptText,
    title: 'Transparent pricing',
    body: 'Detailed, up-front estimates with no hidden line items. The number we write down is the one you plan around.',
  },
  {
    icon: MapPin,
    title: 'Local & reliable',
    body: 'A North York team that answers fast and treats your home like the neighbour’s it probably is.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* photo collage */}
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Img id={PHOTOS.worker} alt="" sizes="(min-width: 1024px) 24vw, 45vw" widths={[320, 480, 640]} className="aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]" />
            <div className="mt-8 flex flex-col gap-3 sm:gap-4">
              <Img id={PHOTOS.homeDeck} alt="" sizes="(min-width: 1024px) 24vw, 45vw" widths={[320, 480, 640]} className="aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-card)]" />
              <div className="flex items-center justify-center rounded-3xl bg-navy p-6 text-center shadow-[var(--shadow-card)]">
                <div>
                  <div className="font-display text-4xl text-white">100%</div>
                  <div className="mt-1 text-xs font-medium text-paper-mute">satisfaction focus</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* features */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Chip>Why choose us</Chip>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-section mt-5 text-balance">
              Why homeowners pick <span className="accent">Vina</span> over the rest.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              Dependable roofing isn't just about shingles. It's about who shows up, what they
              promise, and whether they keep it. Here's where we don't cut corners.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <m.div
                key={f.title}
                variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl bg-white p-5 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-soft text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                  <f.icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-tight text-ink">{f.title}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">{f.body}</p>
              </m.div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <ButtonPrimary href="#quote">Get a free quote</ButtonPrimary>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
