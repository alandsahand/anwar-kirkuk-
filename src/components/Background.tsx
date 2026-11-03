import { motion, useScroll, useTransform } from 'motion/react'

export function Background() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[20%] left-1/2 h-[80vmax] w-[80vmax] -translate-x-[70%] rounded-full bg-[radial-gradient(circle,rgb(227_20_11/0.28),transparent_60%)] blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[30%] right-0 h-[70vmax] w-[70vmax] translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgb(110_120_150/0.16),transparent_60%)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(0_0_0/0.7))]" />
      <div className="grain absolute inset-0" />
    </div>
  )
}
