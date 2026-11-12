import { motion } from 'motion/react'
import { languages, useLang } from '../i18n'

export function LangSwitch({ full = false }: { full?: boolean }) {
  const { lang, setLang } = useLang()
  return (
    <div dir="ltr" className="relative flex items-center rounded-full bg-white/[0.05] p-1 ring-1 ring-white/10" role="group" aria-label="Language">
      {languages.map((l) => {
        const active = l.code === lang
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.label}
            lang={l.code === 'ku' ? 'ckb' : l.code}
            className={`relative z-10 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
              full ? 'flex-1 py-2.5 text-base' : ''
            } ${active ? 'text-white' : 'text-white/55 hover:text-white'}`}
            style={l.code === 'en' ? undefined : { fontFamily: l.code === 'fa' ? "'Vazirmatn Variable', sans-serif" : "'Noto Kufi Arabic Variable', sans-serif" }}
          >
            {active && (
              <motion.span layoutId={full ? 'lang-pill-full' : 'lang-pill'} className="absolute inset-0 -z-10 rounded-full bg-brand shadow-[0_4px_16px_-4px_rgb(227_20_11/0.9)]" />
            )}
            {full ? l.label : l.short}
          </button>
        )
      })}
    </div>
  )
}
