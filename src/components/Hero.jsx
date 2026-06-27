import { Star, ShieldCheck, Clock, Phone } from 'lucide-react'
import { BUSINESS, PROOF } from '../lib/content'
import { PHOTOS, uns } from '../lib/images'
import { Chip, ButtonSoft } from './ui'
import Img from './Img'
import LeadForm from './LeadForm'

function ReviewProof() {
  const avatars = [PHOTOS.worker, PHOTOS.homeDeck, PHOTOS.craftDetail]
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/12 px-3.5 py-2.5 ring-1 ring-white/15 backdrop-blur-md">
      <div className="flex -space-x-2">
        {avatars.map((id, i) => (
          <img
            key={i}
            src={uns(id, 64)}
            alt=""
            width="32"
            height="32"
            loading="eager"
            decoding="async"
            className="h-8 w-8 rounded-full object-cover ring-2 ring-white/80"
          />
        ))}
      </div>
      <div className="leading-tight">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-gold text-gold" />
          ))}
          <span className="ml-1 text-sm font-bold text-white">5.0</span>
        </div>
        <div className="text-[0.72rem] font-medium text-white/80">
          30+ years on GTA roofs · Google &amp; BBB
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-6 pt-24 sm:pt-28 lg:pb-10 lg:pt-32">
      {/* soft ambient blooms */}
      <div
        className="pointer-events-none absolute -left-48 top-0 h-[42rem] w-[42rem]"
        style={{ background: 'radial-gradient(circle, var(--color-orange-glow), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-28 h-[36rem] w-[36rem]"
        style={{ background: 'radial-gradient(circle, rgba(201,210,245,0.45), transparent 70%)' }}
      />

      <div className="shell relative grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
        {/* ── Photo stage (rendered immediately — this is the LCP) ── */}
        <div className="relative flex min-h-[30rem] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 sm:p-8 lg:min-h-[34rem]">
          <Img
            id={PHOTOS.heroRoofer}
            alt="A Vina Roofing crew member working on a residential roof"
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            widths={[480, 720, 1000, 1280]}
            fallbackW={1000}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/25" />

          <div className="relative flex items-start justify-between">
            <Chip tone="light">North York &amp; the GTA</Chip>
            <div className="hidden items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-[0.78rem] font-semibold text-ink shadow-sm backdrop-blur sm:flex">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-verify/15 text-verify">
                <ShieldCheck size={12} />
              </span>
              WSIB certified · Fully insured
            </div>
          </div>

          <div className="relative">
            <h1 className="text-display max-w-[15ch] text-white text-balance" style={{ lineHeight: 1.08 }}>
              A roof over your head, <span className="text-orange-bright">peace of mind under it.</span>
            </h1>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-white/90">
              Residential &amp; commercial roofing, eavestroughs and aluminum exteriors — installed by a
              WSIB-certified crew with 30+ years on GTA roofs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonSoft href={BUSINESS.tollFreeHref} onNavy>
                <Phone size={16} className="text-orange-bright" />
                {BUSINESS.tollFree}
              </ButtonSoft>
              <ReviewProof />
            </div>
          </div>
        </div>

        {/* ── Lead form card ── */}
        <div className="flex flex-col rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-float)] sm:p-7">
          <div className="mb-5">
            <h2 className="font-display text-[1.75rem] leading-tight tracking-tight text-ink">
              Get your free roofing quote
            </h2>
            <p className="mt-1.5 flex items-center gap-2 text-sm text-ink-soft">
              <Clock size={15} className="text-orange" />
              Same-day estimates · No pressure, ever
            </p>
          </div>
          <LeadForm compact />
        </div>
      </div>
    </section>
  )
}
