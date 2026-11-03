import { site, telLink, whatsappLink } from '../config/site'
import { useLang } from '../i18n'
import { FacebookIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'
import { LogoMark } from './Logo'
import { Button, Eyebrow, Reveal, sheen, Title } from './ui'

export function Contact() {
  const { t } = useLang()
  const { contact } = site
  type Card = { icon: React.ReactNode; label: string; lines: string[]; href?: string; external?: boolean; ltr?: boolean }
  const cards: Card[] = [
    { icon: <WhatsAppIcon className="size-6" />, label: t.contact.labels.whatsapp, lines: [`0${contact.whatsapp.slice(3)}`], href: whatsappLink(t.whatsappDefault), external: true, ltr: true },
    { icon: <PhoneIcon className="size-6" />, label: t.contact.labels.call, lines: contact.phones, href: telLink(contact.phones[0]), ltr: true },
    { icon: <PinIcon className="size-6" />, label: t.contact.labels.visit, lines: [t.contact.address, t.contact.hours], href: contact.mapsUrl, external: true },
    { icon: <FacebookIcon className="size-6" />, label: t.contact.labels.facebook, lines: [t.company], href: site.social.facebook, external: true },
  ]
  if (contact.email) cards.push({ icon: <MailIcon className="size-6" />, label: 'Email', lines: [contact.email], href: `mailto:${contact.email}`, ltr: true })

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.75rem] px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[100px]" />
            <LogoMark glow className="relative mx-auto h-16 w-auto" />
            <div className="relative mt-8">
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            </div>
            <Title className="relative mx-auto max-w-3xl">{t.contact.title}</Title>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/60 rtl:leading-loose">{t.contact.lead}</p>
            <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={whatsappLink(t.whatsappDefault)} external>
                <WhatsAppIcon /> {t.contact.whatsapp}
              </Button>
              <Button href={telLink(contact.phones[0])} variant="glass">
                <PhoneIcon /> {t.contact.call}
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a
                href={c.href}
                {...sheen}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="glass glass-sheen block h-full rounded-[2rem] p-7 transition duration-500 hover:-translate-y-1"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-brand-hi ring-1 ring-brand/30">{c.icon}</span>
                <span className="mt-6 block text-sm text-white/45">{c.label}</span>
                {c.lines.map((l, k) => (
                  <span
                    key={k}
                    dir={c.ltr ? 'ltr' : undefined}
                    className={`mt-1 block break-words ${k === 0 || c.ltr ? 'text-lg font-medium' : 'text-sm text-white/45'} ${c.ltr ? 'latin text-start rtl:text-end' : ''}`}
                  >
                    {l}
                  </span>
                ))}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
