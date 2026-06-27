import { MapPin } from 'lucide-react'
import { AREAS, BUSINESS } from '../lib/content'
import { PHOTOS } from '../lib/images'
import Img from './Img'
import { Chip, Reveal } from './ui'

export default function ServiceArea() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-card)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            <div className="p-8 sm:p-12">
              <Reveal>
                <Chip>Service area</Chip>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-section mt-5 text-balance">
                  North York first. <span className="accent">The GTA always.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                  Rooted in North York, our crews cover the city and the surrounding region — close
                  enough to be there fast when your roof can’t wait.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {AREAS.map((a) => (
                    <li key={a}>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-tint px-3.5 py-2 text-[0.9rem] font-medium text-ink transition-colors duration-300 hover:bg-orange-soft hover:text-orange-deep">
                        <MapPin size={13} className="text-orange" />
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="relative min-h-[16rem] lg:min-h-full">
              <Img id={PHOTOS.modernHome} alt="A home in the Greater Toronto Area" sizes="(min-width: 1024px) 48vw, 100vw" widths={[480, 768, 1040]} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent lg:from-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
