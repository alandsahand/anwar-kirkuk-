import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { dictionaries, languages, type Dict, type Lang } from './dictionaries'

export { languages, type Lang }

type Ctx = { lang: Lang; dir: 'ltr' | 'rtl'; t: Dict; setLang: (l: Lang) => void }
const LangContext = createContext<Ctx | null>(null)
const KEY = 'ak-lang'

const isLang = (v: unknown): v is Lang => v === 'en' || v === 'ar' || v === 'ku' || v === 'fa'

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(KEY)
    if (isLang(saved)) return saved
  } catch {
    /* storage blocked */
  }
  for (const l of navigator.languages ?? [navigator.language]) {
    const code = l.toLowerCase()
    if (code.startsWith('ckb') || code.startsWith('ku')) return 'ku'
    if (code.startsWith('fa') || code.startsWith('prs')) return 'fa'
    if (code.startsWith('ar')) return 'ar'
    if (code.startsWith('en')) return 'en'
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const dir = languages.find((l) => l.code === lang)!.dir
  const t = dictionaries[lang]

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang === 'ku' ? 'ckb' : lang
    html.dir = dir
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, dir, t])

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir,
      t,
      setLang: (l) => {
        setLangState(l)
        try {
          localStorage.setItem(KEY, l)
        } catch {
          /* storage blocked */
        }
      },
    }),
    [lang, dir, t],
  )
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
