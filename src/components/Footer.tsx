import { site, whatsappLink } from '../config/site'
import { WhatsAppIcon } from './Icons'
import { LogoMark, Wordmark } from './Logo'

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url)
  return (
    <footer className="border-t border-white/[0.06] px-4 pt-16 pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <LogoMark className="h-14 w-auto" />
        <Wordmark className="text-xs" />
        {socials.length > 0 && (
          <div className="flex gap-6 text-sm text-white/55">
            {socials.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-white">
                {name}
              </a>
            ))}
          </div>
        )}
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} {site.name}. All rights reserved. · {site.domain}
        </p>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-brand text-white shadow-[0_12px_40px_-8px_rgb(227_20_11/0.9),inset_0_1px_0_rgb(255_255_255/0.3)] transition hover:scale-105 hover:bg-brand-hi"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </footer>
  )
}
