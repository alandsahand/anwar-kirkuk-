import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'
import { useLang } from '../i18n'

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const highlight = word.includes('*')
  return (
    <motion.span style={{ opacity }} className={highlight ? 'text-shimmer' : undefined}>
      {word.replace(/\*/g, '')}{' '}
    </motion.span>
  )
}

/** Apple-style paragraph that lights up word by word as you scroll. */
export function Statement() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  // keep *multi word* highlights marked on every word
  let inside = false
  const words = t.statement.split(' ').map((w) => {
    const starts = w.startsWith('*')
    const ends = w.endsWith('*') || w.endsWith('*.')
    const marked = inside || starts
    if (starts && !ends) inside = true
    if (ends) inside = false
    return marked ? `*${w}` : w
  })
  return (
    <section className="px-4 py-32 sm:py-44">
      <div ref={ref} className="mx-auto max-w-5xl">
        <p className="rtl-loose text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.15] font-semibold tracking-[-0.03em]">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>
      </div>
    </section>
  )
}
