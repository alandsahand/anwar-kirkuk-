import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { whatsappLink } from '../config/site'
import { useLang } from '../i18n'
import { WhatsAppIcon } from './Icons'
import { LangSwitch } from './LangSwitch'
import { LogoMark } from './Logo'

export function Nav() {
  const { t } = useLang()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#products', label: t.nav.products },
    { href: '#videos', label: t.nav.videos },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled || open ? 'glass-strong' : 'border border-transparent'
        }`}
      >
        <a href="#top" dir="ltr" className="flex shrink-0 items-center gap-2.5 rounded-full px-2 py-1" aria-label="Anwar Kirkuk">
          <LogoMark className="h-7 w-auto" />
          <span className="latin hidden text-[13px] font-semibold tracking-[0.22em] sm:inline">
            <span className="latin text-brand">ANWAR</span> <span className="latin text-silver">KIRKUK</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3.5 py-2 text-sm whitespace-nowrap text-white/70 transition hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangSwitch />
          </div>
          <a
            href={whatsappLink(t.whatsappDefault)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-[0_6px_24px_-6px_rgb(227_20_11/0.9)] transition hover:bg-brand-hi md:inline-flex"
          >
            <WhatsAppIcon className="size-4" /> {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full text-white/80 hover:bg-white/5 lg:hidden"
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-px w-5 bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="glass-strong absolute inset-x-4 top-20 rounded-3xl p-3 lg:hidden"
          >
            <div className="mb-2">
              <LangSwitch full />
            </div>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3.5 text-lg text-white/85 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink(t.whatsappDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3.5 font-medium"
            >
              <WhatsAppIcon className="size-5" /> {t.hero.primary}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
