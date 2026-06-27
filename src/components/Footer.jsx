import { Phone, MapPin } from 'lucide-react'
import { BUSINESS } from '../lib/content'
import { Wordmark } from './Wordmark'

const COLS = [
  {
    title: 'Roofing',
    links: ['Residential roofing', 'Roof replacement', 'Leak repair', 'Flat roofing', 'Inspections', 'Maintenance'],
  },
  {
    title: 'Exteriors',
    links: ['Eavestroughs', 'Drainage', 'Soffit & fascia', 'Aluminum capping', 'Siding', 'Exterior envelope'],
  },
  {
    title: 'Company',
    links: [
      ['About', '#about'],
      ['Why choose us', '#why'],
      ['Reviews', '#reviews'],
      ['Free quote', '#quote'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 text-paper">
      <div className="shell">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-navy-line pb-14 lg:grid-cols-[1.5fr_repeat(3,0.9fr)]">
          <div className="col-span-2 lg:col-span-1">
            <Wordmark dark />
            <p className="mt-6 max-w-xs text-[0.92rem] leading-relaxed text-paper-mute">
              North York’s roofing &amp; exteriors team for 30+ years. WSIB &amp; MSA certified,
              BBB accredited, and honest about what your roof actually needs.
            </p>
            <div className="mt-7 flex flex-col gap-3 text-sm">
              <a href={BUSINESS.tollFreeHref} className="flex items-center gap-3 text-paper/80 transition-colors hover:text-paper">
                <Phone size={15} className="text-orange-bright" />
                {BUSINESS.tollFree} <span className="text-paper-mute">· toll-free</span>
              </a>
              <a href={BUSINESS.localHref} className="flex items-center gap-3 text-paper/80 transition-colors hover:text-paper">
                <Phone size={15} className="text-orange-bright" />
                {BUSINESS.local} <span className="text-paper-mute">· local</span>
              </a>
              <span className="flex items-center gap-3 text-paper/80">
                <MapPin size={15} className="text-orange-bright" />
                {BUSINESS.address}
              </span>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="overline text-paper-mute">{col.title}</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => {
                  const [label, href] = Array.isArray(l) ? l : [l, '#quote']
                  return (
                    <li key={label}>
                      <a href={href} className="text-[0.92rem] text-paper-mute transition-colors hover:text-paper">
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-7 text-sm text-paper-mute sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-verify" />
            WSIB certified · Serving North York &amp; the GTA
          </span>
        </div>
      </div>
    </footer>
  )
}
