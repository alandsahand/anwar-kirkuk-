import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { whatsappLink } from '../config/site'
import { WhatsAppIcon } from './Icons'
import { LogoMark } from './Logo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#videos', label: 'Videos' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled ? 'glass-strong' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full px-2 py-1" aria-label="Anwar Kirkuk — home">
          <LogoMark className="h-7 w-auto" />
          <span className="text-[13px] font-semibold tracking-[0.22em]">
            <span className="text-brand">ANWAR</span> <span className="text-silver">KIRKUK</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white shadow-[0_6px_24px_-6px_rgb(227_20_11/0.9)] transition hover:bg-brand-hi sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" /> Contact us
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full text-white/80 hover:bg-white/5 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-px w-5 bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="glass-strong absolute inset-x-4 top-20 rounded-3xl p-3 md:hidden"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3.5 text-lg text-white/85 hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3.5 font-medium"
          >
            <WhatsAppIcon className="size-5" /> Chat on WhatsApp
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
