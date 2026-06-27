import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Loader2 } from 'lucide-react'
import { BUSINESS } from '../lib/content'
import { EASE } from '../lib/motion'

const SERVICES = [
  'Roof replacement',
  'Roof repair',
  'Leak / emergency',
  'Flat roofing',
  'Inspection',
  ...['Masonry / chimney', 'Waterproofing', 'Other'],
]

export default function LeadForm({ compact = false }) {
  const [state, setState] = useState('idle') // idle | sending | done

  const submit = (e) => {
    e.preventDefault()
    setState('sending')
    setTimeout(() => setState('done'), 900)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state !== 'done' ? (
          <m.form
            key="form"
            onSubmit={submit}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            <input required placeholder="Your name" className="field sm:col-span-2" name="name" />
            <input required type="tel" placeholder="Phone number" className="field" name="phone" />
            <input required type="email" placeholder="Email address" className="field" name="email" />
            <select required defaultValue="" className="field text-ink" name="service">
              <option value="" disabled>
                Service needed
              </option>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <input placeholder="Postal code" className="field" name="postal" />
            {!compact && (
              <input placeholder="Property address" className="field sm:col-span-2" name="address" />
            )}
            <textarea
              rows={compact ? 2 : 3}
              placeholder="Tell us what's going on with your roof…"
              className="field resize-none sm:col-span-2"
              name="message"
            />
            <button
              type="submit"
              disabled={state === 'sending'}
              className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-orange py-3.5 text-[0.98rem] font-semibold tracking-tight text-white shadow-[var(--shadow-orange)] transition-colors duration-300 hover:bg-orange-deep disabled:opacity-70 sm:col-span-2"
            >
              {state === 'sending' ? (
                <>
                  <Loader2 size={17} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Get my free quote
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-ink-mute sm:col-span-2">
              Free &amp; no-obligation · We reply same day · Emergencies within 60 min
            </p>
          </m.form>
        ) : (
          <m.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-verify/15 text-verify">
              <Check size={30} strokeWidth={2.4} />
            </span>
            <h3 className="mt-5 font-display text-2xl text-ink">Request received</h3>
            <p className="mt-2 max-w-xs text-ink-soft">
              Thanks — a {BUSINESS.short} estimator will reach out shortly. Need us now? Call{' '}
              <a href={BUSINESS.tollFreeHref} className="font-semibold text-orange">
                {BUSINESS.tollFree}
              </a>
              .
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
