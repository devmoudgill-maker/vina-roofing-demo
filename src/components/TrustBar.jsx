import { BadgeCheck } from 'lucide-react'
import { BADGES } from '../lib/content'

export default function TrustBar() {
  return (
    <section className="py-6 sm:py-8" aria-label="Recognition and guarantees">
      <div className="shell">
        <p className="mb-5 text-center text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-mute">
          Trusted &amp; recognised across the GTA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {BADGES.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.85rem] font-semibold tracking-tight text-ink shadow-[var(--shadow-sm)]"
            >
              <BadgeCheck size={15} className="text-orange" strokeWidth={2.2} />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
