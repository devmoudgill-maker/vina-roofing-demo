// Shared motion language — restrained, editorial, never bouncy.
// One easing curve, one timing rhythm, applied consistently.

export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  // No animated filter: blur() animating on many elements janks iOS Safari.
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE } },
}

export const stagger = (delay = 0, each = 0.09) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: each, delayChildren: delay },
  },
})

// Per-word reveal for headline craft
export const wordParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
}
export const wordChild = {
  hidden: { opacity: 0, y: '0.6em' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
}

export const viewport = { once: true, margin: '-12% 0px -12% 0px' }
