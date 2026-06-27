// Licensed, free-to-use imagery (Unsplash) — swap for the company's own
// photos in production. Auto-format (AVIF/WebP) + per-device srcset sizing.

export const PHOTOS = {
  heroRoofer: '1632759145351-1d592919f522',
  craftDetail: '1607400201515-c2c41c07d307',
  homeDeck: '1593604340846-4fbe9763a8f3',
  homeSunset: '1558036117-15d82a90b9b1',
  worker: '1581578731548-c64695cc6952',
  modernHome: '1600585154340-be6161a56a0c',
  houseAerial: '1416339306562-f3d12fefd36f',
}

const Q = 58

export const uns = (id, w, q = Q) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const srcSet = (id, widths, q = Q) =>
  widths.map((w) => `${uns(id, w, q)} ${w}w`).join(', ')
