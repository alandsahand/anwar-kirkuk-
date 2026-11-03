// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE for contact details, product images and videos.
//  All website TEXT (EN / AR / KU) lives in src/i18n/dictionaries.ts.
// ─────────────────────────────────────────────────────────────

export const site = {
  domain: 'anwarkirkuk.com',
  contact: {
    // WhatsApp number in international format, digits only
    whatsapp: '9647750181710', // TODO: confirm which number has WhatsApp
    phones: ['07750181710', '07850181710'],
    emails: [
      { role: 'sales', address: 'sales@anwarkirkuk.com' },
      { role: 'office', address: 'office@anwarkirkuk.com' },
      { role: 'info', address: 'info@anwarkirkuk.com' },
    ] as const,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Darman+Erbil+Road+Kirkuk', // TODO: paste your exact Google Maps pin
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61586249863573',
    instagram: '',
    tiktok: '',
  },
}

/**
 * Optional photo for each product, in the same order as the products in
 * src/i18n/dictionaries.ts. Put the files in public/products/.
 */
export const productImages: (string | undefined)[] = []

export type Video = {
  /** A file in public/videos (e.g. '/videos/ad-1.mp4'), a YouTube link, or a Facebook video/reel link */
  src: string
  poster?: string
  /** true for phone-style 9:16 videos (reels / stories) */
  vertical?: boolean
  /** Optional link to the same video on Facebook / YouTube, shown as a button */
  link?: string
}

export const videos: Video[] = [
  {
    src: `${import.meta.env.BASE_URL}videos/reel-imported-vs-local.mp4`,
    link: 'https://www.facebook.com/reel/1533507298797026/',
    poster: `${import.meta.env.BASE_URL}videos/reel-imported-vs-local.jpg`,
    vertical: true,
  },
]

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`

/** 07750181710 → tel:+9647750181710 */
export const telLink = (local: string) => `tel:+964${local.replace(/^0/, '')}`
