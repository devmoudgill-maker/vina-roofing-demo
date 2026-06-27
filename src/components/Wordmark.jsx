/* Bespoke mark: a roof peak whose right slope continues into a
   verification check — "the roof, verified" in a single stroke. */
export function RoofMark({ size = 30, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M3 17.5 16 6l13 11.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.35"
      />
      <path
        d="M8.5 16.5 14.5 22 27 9.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Wordmark({ dark = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange text-white shadow-[var(--shadow-orange)]">
        <RoofMark size={20} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.2rem] tracking-tight ${dark ? 'text-paper' : 'text-ink'}`}>
          Vina
        </span>
        <span className={`overline mt-1 !text-[0.52rem] !tracking-[0.24em] ${dark ? 'text-paper-mute' : 'text-ink-mute'}`}>
          Roofing&nbsp;Inc.
        </span>
      </span>
    </span>
  )
}
