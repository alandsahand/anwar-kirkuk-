import type { ReactNode } from 'react'
import { useLang } from '../i18n'
import { Eyebrow, Reveal, sheen, Title } from './ui'

const icons: ReactNode[] = [
  // manufacturing – factory
  <path key="m" d="M3 21V10l5 3V10l5 3V6l8 4v11zM7 17h2m3 0h2m3 0h2" />,
  // maintenance – wrench
  <path key="w" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />,
  // rehabilitation – coil / refresh
  <path key="r" d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9M18 3v4.5h-4.5M6 21v-4.5h4.5" />,
  // equipping – truck
  <path key="e" d="M2 6h11v10H2zM13 10h4l4 4v2h-8zM6 19.5a1.5 1.5 0 1 0 0-.01M17 19.5a1.5 1.5 0 1 0 0-.01" />,
]

export function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="scroll-mt-24 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
          <Title>{t.services.title}</Title>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {t.services.items.map((s, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <article
                {...sheen}
                className="glass glass-sheen group relative h-full overflow-hidden rounded-[2.25rem] p-8 sm:p-10"
              >
                <span className="latin pointer-events-none absolute -end-4 -bottom-10 text-[10rem] leading-none font-bold text-white/[0.03] transition-colors duration-700 group-hover:text-brand/10">
                  0{i + 1}
                </span>
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-brand-hi to-brand-lo text-white shadow-[0_10px_30px_-8px_rgb(227_20_11/0.8),inset_0_1px_0_rgb(255_255_255/0.3)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
                    {icons[i]}
                  </svg>
                </span>
                <h3 className="mt-10 text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-white/55 rtl:leading-loose">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
