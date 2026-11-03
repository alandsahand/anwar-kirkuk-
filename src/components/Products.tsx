import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import { productImages, whatsappLink } from '../config/site'
import { useLang } from '../i18n'
import type { Dict } from '../i18n/dictionaries'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import { Transformer } from './Transformer'
import { Eyebrow, sheen, Title } from './ui'

type Item = Dict['products']['items'][number]

function ProductCard({ p, index, total }: { p: Item; index: number; total: number }) {
  const { t } = useLang()
  const image = productImages[index]
  const scale = 0.62 + (index / Math.max(1, total - 1)) * 0.38 // bigger rating → bigger drawing
  const [num, unit] = p.name.split(' ')
  return (
    <article {...sheen} className="glass glass-sheen group flex h-full w-[min(80vw,360px)] shrink-0 flex-col overflow-hidden rounded-[2.25rem] p-3">
      <div className="relative aspect-[4/3.3] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-white/[0.06] to-white/[0.01]">
        {image ? (
          <img src={image} alt={p.name} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="grid size-full place-items-end justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgb(227_20_11/0.3),transparent_60%)]" />
            <Transformer
              className="relative mb-2 w-[78%] origin-bottom drop-shadow-[0_25px_25px_rgb(0_0_0/0.6)] transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.04]"
              style={{ scale }}
            />
          </div>
        )}
        <span className="glass-strong absolute top-4 start-4 rounded-full px-3 py-1 text-xs font-medium text-white/85">{p.category}</span>
      </div>
      <div className="flex flex-1 flex-col px-4 pt-6 pb-4">
        <h3 dir="ltr" className="latin flex items-baseline gap-2 rtl:justify-end">
          <span className="text-gradient text-5xl font-semibold tracking-[-0.04em]">{num}</span>
          <span className="text-xl font-semibold text-brand-hi">{unit}</span>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-white/55 rtl:leading-loose">{p.description}</p>
        <a
          href={whatsappLink(t.products.askMessage(p.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-between rounded-full bg-white/[0.06] py-2 ps-5 pe-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-brand hover:ring-brand"
        >
          {t.products.ask}
          <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition group-hover:bg-white group-hover:text-brand">
            <WhatsAppIcon className="size-4" />
          </span>
        </a>
      </div>
    </article>
  )
}

/** Pinned section: scrolling down slides the products sideways. */
export function Products() {
  const { t, dir } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const sign = dir === 'rtl' ? 1 : -1
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, sign * distance]), { stiffness: 200, damping: 40, mass: 0.4 })
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const items = t.products.items

  return (
    <section id="products" ref={sectionRef} className="relative" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-8">
        <div className="mx-auto mb-8 flex w-full max-w-6xl items-end justify-between gap-6 px-4">
          <div>
            <Eyebrow>{t.products.eyebrow}</Eyebrow>
            <Title className="max-w-3xl rtl:text-[clamp(2rem,4vw,3.5rem)]">{t.products.title}</Title>
          </div>
          <p className="hidden max-w-xs pb-2 text-white/50 md:block">{t.products.lead}</p>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5 px-4 sm:px-[max(1rem,calc((100vw-72rem)/2+1rem))]">
          {items.map((p, i) => (
            <ProductCard key={p.name} p={p} index={i} total={items.length} />
          ))}
          <a href="#contact" className="glass group flex w-[min(70vw,300px)] shrink-0 flex-col items-start justify-end rounded-[2.25rem] p-8 transition hover:bg-white/10">
            <span className="text-3xl font-semibold tracking-tight">{t.products.other}</span>
            <span className="mt-4 inline-flex items-center gap-2 text-brand-hi">
              {t.products.otherCta} <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </span>
          </a>
        </motion.div>

        <div className="mx-auto mt-10 h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div style={{ width: bar }} className="h-full rounded-full bg-brand" />
        </div>
      </div>
    </section>
  )
}
