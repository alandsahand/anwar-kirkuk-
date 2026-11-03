import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import { products, site, whatsappLink, type Product } from '../config/site'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import { LogoMark } from './Logo'
import { Eyebrow, sheen } from './ui'

function ProductCard({ p, index }: { p: Product; index: number }) {
  return (
    <article
      {...sheen}
      className="glass glass-sheen group flex h-full w-[min(82vw,400px)] shrink-0 flex-col overflow-hidden rounded-[2.25rem] p-3"
    >
      <div className="relative aspect-[4/3.4] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-white/[0.06] to-white/[0.01]">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="grid size-full place-items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(227_20_11/0.35),transparent_55%)]" />
            <LogoMark className="relative h-28 w-auto opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3" />
          </div>
        )}
        <span className="glass-strong absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium tracking-wide text-white/85">
          {p.category}
        </span>
        <span className="absolute top-4 right-5 text-sm font-medium text-white/40 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-4 pt-6 pb-4">
        <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-white/55">{p.description}</p>
        <a
          href={whatsappLink(`Hello ${site.name}, I'm interested in "${p.name}". Can you tell me more?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-between rounded-full bg-white/[0.06] py-2 pr-2 pl-5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-brand hover:ring-brand"
        >
          Ask about this product
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
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth))
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
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -distance]), { stiffness: 200, damping: 40, mass: 0.4 })
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="products" ref={sectionRef} className="relative scroll-mt-0" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-8">
        <div className="mx-auto mb-8 flex w-full max-w-6xl items-end justify-between gap-6 px-4">
          <div>
            <Eyebrow>Our products</Eyebrow>
            <h2 className="text-gradient text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
              Made to impress.
            </h2>
          </div>
          <p className="hidden max-w-xs pb-2 text-white/50 md:block">
            Like something? Tap a product and message us directly — we reply fast.
          </p>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5 px-4 sm:px-[max(1rem,calc((100vw-72rem)/2+1rem))]">
          {products.map((p, i) => (
            <ProductCard key={p.name + i} p={p} index={i} />
          ))}
          <a
            href="#contact"
            className="glass group flex w-[min(70vw,300px)] shrink-0 flex-col items-start justify-end rounded-[2.25rem] p-8 transition hover:bg-white/10"
          >
            <span className="text-3xl font-semibold tracking-tight">Looking for something else?</span>
            <span className="mt-4 inline-flex items-center gap-2 text-brand-hi">
              Get in touch <ArrowIcon className="transition-transform group-hover:translate-x-1" />
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
