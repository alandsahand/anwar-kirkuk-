import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'

const TEXT = 'We don’t just sell products. We choose them, test them, and stand behind every single one — so you can buy with confidence.' // TODO

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const highlight = word.startsWith('confidence')
  return (
    <motion.span style={{ opacity }} className={highlight ? 'text-brand-hi' : undefined}>
      {word}{' '}
    </motion.span>
  )
}

/** Apple-style paragraph that lights up word by word as you scroll. */
export function Statement() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = TEXT.split(' ')
  return (
    <section className="px-4 py-32 sm:py-48">
      <div ref={ref} className="mx-auto max-w-5xl">
        <p className="text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.15] font-semibold tracking-[-0.03em]">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>
      </div>
    </section>
  )
}
