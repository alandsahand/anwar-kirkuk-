// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the website's content.
//  Everything marked TODO is a placeholder waiting for real info.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Anwar Kirkuk',
  domain: 'anwarkirkuk.com',
  tagline: 'Crafted with precision. Delivered with trust.', // TODO: your slogan
  intro:
    'We bring carefully selected products to Kirkuk and beyond — quality you can see, service you can count on.', // TODO

  contact: {
    // WhatsApp number in international format, digits only (e.g. 9647701234567)
    whatsapp: '9647700000000', // TODO
    phone: '+964 770 000 0000', // TODO (as shown on the site)
    email: 'info@anwarkirkuk.com', // TODO
    address: 'Kirkuk, Iraq', // TODO: full address
    hours: 'Sat – Thu · 9:00 – 18:00', // TODO
  },

  social: {
    instagram: '', // TODO e.g. https://instagram.com/anwarkirkuk
    facebook: '',
    tiktok: '',
  },

  about: {
    title: 'Who we are',
    body: 'Anwar Kirkuk is built on a simple idea: offer products we truly believe in, and stand behind every one of them. From the first message to after-sale support, you deal with real people who care.', // TODO
    values: [
      { title: 'Quality first', text: 'Every product is chosen and checked before it reaches you.' },
      { title: 'Direct contact', text: 'No forms, no waiting — talk to us on WhatsApp or email.' },
      { title: 'Local & trusted', text: 'Proudly based in Kirkuk, serving customers across Iraq.' },
    ],
  },
}

export type Product = {
  name: string
  category: string
  description: string
  /** Optional image path, e.g. '/products/item-1.webp' (put the file in public/products) */
  image?: string
}

// TODO: replace with your real products. Add or remove as many as you like.
export const products: Product[] = [
  { name: 'Product One', category: 'Featured', description: 'A short, clear line about what makes this product special.' },
  { name: 'Product Two', category: 'Best seller', description: 'Describe the key benefit in one sentence.' },
  { name: 'Product Three', category: 'New', description: 'Size, material or feature — whatever matters most.' },
  { name: 'Product Four', category: 'Premium', description: 'A short, clear line about what makes this product special.' },
  { name: 'Product Five', category: 'Classic', description: 'Describe the key benefit in one sentence.' },
]

export type Video = {
  title: string
  /** A file in public/videos (e.g. '/videos/ad-1.mp4') OR a YouTube link */
  src: string
  /** Optional poster image shown before playing */
  poster?: string
}

// TODO: add your video ads here.
export const videos: Video[] = []

export const whatsappLink = (message = `Hello ${site.name}, I would like to know more.`) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`

export const emailLink = (subject = `Inquiry from ${site.domain}`) =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`
