import { m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, viewport, wordParent, wordChild } from '../lib/motion'

/* Scroll reveal */
export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const M = m[as] || m.div
  return (
    <M
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </M>
  )
}

/* Word-by-word headline reveal */
export function WordReveal({ text, className = '' }) {
  const words = text.split(' ')
  return (
    <m.span
      className={className}
      variants={wordParent}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <m.span variants={wordChild} style={{ display: 'inline-block', willChange: 'transform' }}>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </m.span>
        </span>
      ))}
    </m.span>
  )
}

/* Eyebrow chip */
export function Chip({ children, tone = 'orange' }) {
  const map = {
    orange: 'bg-orange-soft text-orange-deep',
    light: 'bg-white text-ink ring-1 ring-line',
    navy: 'bg-white/10 text-paper',
  }
  return (
    <span className={`chip ${map[tone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
      {children}
    </span>
  )
}

/* Circular arrow badge */
function ArrowBadge({ variant }) {
  const styles =
    variant === 'onOrange'
      ? 'bg-white text-orange'
      : variant === 'onNavy'
        ? 'bg-orange text-white'
        : 'bg-orange text-white'
  return (
    <span
      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 ${styles}`}
    >
      <ArrowUpRight size={15} strokeWidth={2.4} />
    </span>
  )
}

/* Primary CTA — orange pill with white arrow badge */
export function ButtonPrimary({ children, href = '#quote', className = '', onClick, type }) {
  const Tag = type ? 'button' : 'a'
  return (
    <Tag
      href={type ? undefined : href}
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 rounded-full bg-orange py-2 pl-6 pr-2 text-[0.95rem] font-semibold tracking-tight text-white shadow-[var(--shadow-orange)] transition-colors duration-300 hover:bg-orange-deep ${className}`}
    >
      {children}
      <ArrowBadge variant="onOrange" />
    </Tag>
  )
}

/* Soft CTA — white pill with orange arrow badge */
export function ButtonSoft({ children, href, className = '', onNavy = false }) {
  const base = onNavy
    ? 'bg-white/10 text-paper ring-1 ring-white/15 hover:bg-white/15'
    : 'bg-white text-ink ring-1 ring-line hover:ring-ink/20'
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full py-2 pl-6 pr-2 text-[0.95rem] font-semibold tracking-tight transition-all duration-300 ${base} ${className}`}
    >
      {children}
      <ArrowBadge variant={onNavy ? 'onNavy' : 'soft'} />
    </a>
  )
}
