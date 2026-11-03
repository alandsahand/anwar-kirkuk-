import { dictionaries } from '../i18n/dictionaries'
import { BoltIcon } from './Icons'

/** Endless band mixing all three languages — a nod to who we serve. */
export function Marquee() {
  const words = [...dictionaries.en.marquee.slice(0, 4), ...dictionaries.ar.marquee.slice(0, 4), ...dictionaries.ku.marquee.slice(0, 4), ...dictionaries.en.marquee.slice(4)]
  const row = (
    <div className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`px-6 text-3xl font-semibold whitespace-nowrap sm:text-5xl ${i % 3 === 1 ? 'text-shimmer' : 'text-white/[0.85]'}`}
            style={/[؀-ۿ]/.test(w) ? { fontFamily: "'Noto Kufi Arabic Variable', sans-serif", letterSpacing: 0 } : { letterSpacing: '-0.03em' }}
          >
            {w}
          </span>
          <BoltIcon className="size-5 shrink-0 text-brand sm:size-7" />
        </span>
      ))}
    </div>
  )
  return (
    <section aria-hidden className="relative mt-24 overflow-hidden py-6 sm:mt-32" dir="ltr">
      <div className="glass -mx-4 -rotate-2 py-6">
        <div className="marquee-track flex w-max">
          {row}
          {row}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </section>
  )
}
