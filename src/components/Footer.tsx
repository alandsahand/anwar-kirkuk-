import { site, whatsappLink } from '../config/site'
import { useLang } from '../i18n'
import { WhatsAppIcon } from './Icons'
import { LogoMark, Wordmark } from './Logo'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-white/[0.06] px-4 pt-16 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <LogoMark className="h-14 w-auto" />
        <Wordmark className="text-xs" />
        <p className="text-white/60">{t.company}</p>
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} {t.company}. {t.footer.rights} · <span className="latin">{site.domain}</span>
        </p>
      </div>

      <a
        href={whatsappLink(t.whatsappDefault)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.hero.primary}
        className="fixed end-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-brand text-white shadow-[0_12px_40px_-8px_rgb(227_20_11/0.9),inset_0_1px_0_rgb(255_255_255/0.3)] transition hover:scale-105 hover:bg-brand-hi"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </footer>
  )
}
