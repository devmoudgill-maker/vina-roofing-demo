import { useEffect, useState } from 'react'
import { m, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { BUSINESS } from '../lib/content'
import { ButtonPrimary } from './ui'
import { Wordmark } from './Wordmark'

const LINKS = [
  ['Home', '#top'],
  ['About', '#about'],
  ['Services', '#roofing'],
  ['Why us', '#why'],
  ['Reviews', '#reviews'],
  ['Contact', '#quote'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 20))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <>
      <m.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
      >
        <div className="shell">
          <nav
            className={`flex items-center justify-between rounded-full pl-5 pr-2.5 transition-all duration-500 ${
              scrolled
                ? 'h-16 bg-white/90 shadow-[var(--shadow-card)] backdrop-blur-[20px]'
                : 'h-[4.25rem] bg-white/70 shadow-[var(--shadow-sm)] backdrop-blur-md'
            }`}
          >
            <a href="#top" aria-label={BUSINESS.name}>
              <Wordmark />
            </a>

            {/* center pill links */}
            <div className="hidden items-center gap-1 rounded-full bg-tint/70 p-1 lg:flex">
              {LINKS.slice(0, 6).map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full px-4 py-2 text-[0.9rem] font-medium tracking-tight text-ink-soft transition-colors hover:bg-white hover:text-ink hover:shadow-[var(--shadow-sm)]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={BUSINESS.tollFreeHref}
                className="flex items-center gap-2 text-[0.9rem] font-semibold tracking-tight text-ink transition-colors hover:text-orange"
              >
                <Phone size={15} className="text-orange" />
                {BUSINESS.tollFree}
              </a>
              <ButtonPrimary href="#quote" className="!py-1.5 !pl-5">
                Free quote
              </ButtonPrimary>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full bg-tint text-ink transition-colors hover:bg-tint-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </nav>
        </div>
      </m.header>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-navy text-paper lg:hidden"
          >
            <div className="shell flex h-[4.75rem] items-center justify-between pt-3">
              <Wordmark dark />
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-paper"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <m.div
              className="shell mt-8 flex flex-col"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
            >
              {LINKS.map(([label, href]) => (
                <m.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="border-b border-white/10 py-4 font-display text-3xl tracking-tight"
                >
                  {label}
                </m.a>
              ))}
            </m.div>
            <div className="shell mt-8 flex flex-col gap-4">
              <ButtonPrimary href="#quote" onClick={() => setOpen(false)} className="justify-center !pl-7">
                Get a free quote
              </ButtonPrimary>
              <a href={BUSINESS.tollFreeHref} className="flex items-center justify-center gap-2 py-2 text-paper/85">
                <Phone size={16} className="text-orange-bright" />
                {BUSINESS.tollFree}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
