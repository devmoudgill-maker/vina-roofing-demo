import { uns, srcSet } from '../lib/images'

/* Responsive, lazy-by-default image.
   - priority (hero / above-the-fold): eager + high fetch priority, no lazy.
   - everything else: lazy-loaded, async-decoded, low priority. */
export default function Img({
  id,
  alt = '',
  sizes = '100vw',
  widths = [400, 640, 900, 1200],
  priority = false,
  className = '',
  fallbackW = 800,
}) {
  return (
    <img
      src={uns(id, fallbackW)}
      srcSet={srcSet(id, widths)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'low'}
      decoding="async"
      className={className}
    />
  )
}
