import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { site, whatsappLink } from '../config/site'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import { LogoMark, Wordmark } from './Logo'
import { Button, ease } from './ui'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // 3D tilt following the pointer
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 120, damping: 18 })
  const glareX = useTransform(mx, [-0.5, 0.5], ['20%', '80%'])
  const glareY = useTransform(my, [-0.5, 0.5], ['10%', '90%'])
  const glare = useTransform([glareX, glareY], ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgb(255 255 255 / 0.18), transparent 55%)`)

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28 pb-16"
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
        {/* Logo tile */}
        <div className="[perspective:1200px]">
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease }}
            className="glass relative grid size-56 place-items-center rounded-[2.75rem] sm:size-72"
          >
            <div className="absolute inset-0 -z-10 rounded-[2.75rem] bg-brand/25 blur-3xl" />
            <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 rounded-[2.75rem]" />
            <div style={{ transform: 'translateZ(60px)' }}>
              <LogoMark glow className="h-32 w-auto drop-shadow-[0_20px_30px_rgb(0_0_0/0.6)] sm:h-40" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="mt-12"
        >
          <Wordmark className="text-sm sm:text-base" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease, delay: 0.7 }}
          className="text-gradient mt-6 max-w-4xl text-[clamp(2.6rem,7.5vw,5.75rem)] leading-[1.02] font-semibold tracking-[-0.04em]"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.9 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.1 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button href={whatsappLink()} external>
            <WhatsAppIcon /> Chat on WhatsApp
          </Button>
          <Button href="#products" variant="glass">
            Explore products <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="glass flex h-11 w-7 justify-center rounded-full pt-2">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="block h-2 w-1 rounded-full bg-white/80"
          />
        </span>
      </motion.a>
    </section>
  )
}
