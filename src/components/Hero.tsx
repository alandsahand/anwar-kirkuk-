import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { whatsappLink } from '../config/site'
import { useLang } from '../i18n'
import { ArrowIcon, BoltIcon, WhatsAppIcon } from './Icons'
import { LogoMark } from './Logo'
import { Button, ease } from './ui'

function Rotating({ items }: { items: string[] }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % items.length), 2600)
    return () => clearInterval(id)
  }, [items.length])
  return (
    <span className="glass inline-flex items-center gap-3 rounded-full py-2 ps-2 pe-5 text-sm sm:text-base">
      <span className="grid size-8 place-items-center rounded-full bg-brand text-white shadow-[0_0_20px_rgb(227_20_11/0.7)]">
        <BoltIcon className="size-4" />
      </span>
      <span className="relative inline-grid h-7 min-w-[14rem] items-center overflow-hidden text-start sm:min-w-[16rem]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={i}
            initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-110%', opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6, ease }}
            className="col-start-1 row-start-1 font-medium whitespace-nowrap text-white/90"
          >
            {items[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}

export function Hero() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  // 3D tilt following the pointer
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 120, damping: 18 })
  const glare = useTransform([mx, my], ([x, y]) => `radial-gradient(circle at ${50 + (x as number) * 70}% ${50 + (y as number) * 90}%, rgb(255 255 255 / 0.2), transparent 55%)`)

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 1.1, ease, delay },
  })

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28 pb-20"
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        mx.set(e.clientX / window.innerWidth - 0.5)
        my.set(e.clientY / window.innerHeight - 0.5)
      }}
      onPointerLeave={() => {
        mx.set(0)
        my.set(0)
      }}
    >
      <motion.div style={{ scale, opacity, y }} className="flex w-full max-w-5xl flex-col items-center text-center">
        <div className="[perspective:1200px]">
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease }}
            className="glass relative grid size-44 place-items-center rounded-[2.5rem] sm:size-60"
          >
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-brand/25 blur-3xl" />
            <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 rounded-[2.5rem]" />
            <div style={{ transform: 'translateZ(60px)' }}>
              <LogoMark glow className="h-24 w-auto drop-shadow-[0_20px_30px_rgb(0_0_0/0.6)] sm:h-32" />
            </div>
          </motion.div>
        </div>

        <motion.p {...fade(0.4)} className="mt-10 text-xs font-medium tracking-[0.3em] text-white/50 uppercase sm:text-sm rtl:text-base">
          {t.hero.kicker}
        </motion.p>

        <h1 className="mt-5 text-[clamp(2.8rem,8.5vw,6.5rem)] leading-[1] font-semibold tracking-[-0.045em]">
          <motion.span {...fade(0.55)} className="text-gradient block pb-1">
            {t.hero.line1}
          </motion.span>
          <motion.span {...fade(0.75)} className="text-shimmer block pb-2">
            {t.hero.line2}
          </motion.span>
        </h1>

        <motion.div {...fade(0.95)} className="mt-8">
          <Rotating items={t.hero.rotating} />
        </motion.div>

        <motion.p {...fade(1.05)} className="mt-7 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl rtl:leading-loose">
          {t.hero.intro}
        </motion.p>

        <motion.div {...fade(1.2)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappLink(t.whatsappDefault)} external>
            <WhatsAppIcon /> {t.hero.primary}
          </Button>
          <Button href="#products" variant="glass">
            {t.hero.secondary} <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
