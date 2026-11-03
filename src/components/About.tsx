import { useLang } from '../i18n'
import { Eyebrow, Reveal, sheen, Title } from './ui'

export function About() {
  const { t } = useLang()
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <Title>{t.about.title}</Title>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl leading-relaxed text-white/60 lg:pt-12 rtl:text-lg rtl:leading-loose">{t.about.body}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {t.about.values.map((v, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <article {...sheen} className="glass glass-sheen h-full rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1">
                <span className="latin text-gradient-red text-5xl font-semibold tracking-tight">0{i + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-white/55 rtl:leading-loose">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
