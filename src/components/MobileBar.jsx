import { useEffect, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Phone, ArrowUpRight } from 'lucide-react'
import { BUSINESS } from '../lib/content'

/* Persistent conversion bar — mobile only. Appears once the hero
   scrolls away, hides while the quote form is in view. */
export default function MobileBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.85
      const quote = document.getElementById('quote')
      const inQuote = quote ? quote.getBoundingClientRect().top < window.innerHeight * 0.85 : false
      setShow(past && !inQuote)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        >
          <div className="m-3 flex items-center gap-2.5 rounded-2xl bg-white/95 p-2 shadow-[var(--shadow-float)] ring-1 ring-line backdrop-blur-[20px]">
            <a
              href={BUSINESS.tollFreeHref}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-tint text-[0.95rem] font-semibold tracking-tight text-ink"
            >
              <Phone size={16} className="text-orange" strokeWidth={2.2} />
              Call
            </a>
            <a
              href="#quote"
              className="flex h-12 flex-[1.5] items-center justify-center gap-2 rounded-xl bg-orange text-[0.95rem] font-semibold tracking-tight text-white"
            >
              Get a free quote
              <ArrowUpRight size={16} />
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
