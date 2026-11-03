import { emailLink, site, whatsappLink } from '../config/site'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'
import { LogoMark } from './Logo'
import { Button, Eyebrow, Reveal, sheen } from './ui'

export function Contact() {
  const { contact } = site
  const cards = [
    { icon: <WhatsAppIcon className="size-6" />, label: 'WhatsApp', value: contact.phone, href: whatsappLink(), external: true },
    { icon: <MailIcon className="size-6" />, label: 'Email', value: contact.email, href: emailLink() },
    { icon: <PhoneIcon className="size-6" />, label: 'Call us', value: contact.phone, href: `tel:+${contact.whatsapp}` },
    { icon: <PinIcon className="size-6" />, label: 'Visit', value: contact.address, sub: contact.hours },
  ]
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.75rem] px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[100px]" />
            <LogoMark glow className="relative mx-auto h-16 w-auto" />
            <div className="relative mt-8">
              <Eyebrow>Contact</Eyebrow>
            </div>
            <h2 className="text-gradient relative mx-auto max-w-3xl text-[clamp(2.4rem,6vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
              Let’s talk.
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-white/60">
              Prices, availability, orders — just send us a message. A real person will answer you.
            </p>
            <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={whatsappLink()} external>
                <WhatsAppIcon /> Message on WhatsApp
              </Button>
              <Button href={emailLink()} variant="glass">
                <MailIcon /> Send an email
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const inner = (
              <>
                <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-brand-hi ring-1 ring-brand/30">{c.icon}</span>
                <span className="mt-6 block text-sm text-white/45">{c.label}</span>
                <span className="mt-1 block text-lg font-medium break-words">{c.value}</span>
                {c.sub && <span className="mt-1 block text-sm text-white/45">{c.sub}</span>}
              </>
            )
            const cls = 'glass glass-sheen block h-full rounded-[2rem] p-7 transition duration-500 hover:-translate-y-1'
            return (
              <Reveal key={c.label} delay={i * 0.08}>
                {c.href ? (
                  <a href={c.href} {...sheen} className={cls} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {inner}
                  </a>
                ) : (
                  <div {...sheen} className={cls}>
                    {inner}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
