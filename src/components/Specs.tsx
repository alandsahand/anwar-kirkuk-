import { animate, motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { Reveal, sheen } from './ui'

/** Counts up to a number once visible; non-numeric values (e.g. 24/7) just appear. */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const n = /^\d+$/.test(value) ? Number(value) : null
  const [shown, setShown] = useState(n === null ? value : '0')
  useEffect(() => {
    if (!inView || n === null) return
    const c = animate(0, n, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setShown(String(Math.round(v))) })
    return () => c.stop()
  }, [inView, n])
  return <span ref={ref}>{shown}</span>
}

export function Specs() {
  const { t } = useLang()
  return (
    <section className="relative px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {t.specs.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div {...sheen} className="glass glass-sheen rounded-[1.75rem] p-6 sm:p-8">
              <div dir="ltr" className="latin flex items-baseline gap-1.5 rtl:justify-end">
                <motion.span className="text-gradient text-4xl font-semibold tracking-tight whitespace-nowrap tabular-nums sm:text-5xl xl:text-6xl">
                  <CountUp value={s.value} />
                </motion.span>
                {s.unit && <span className="text-lg font-semibold text-brand-hi sm:text-2xl">{s.unit}</span>}
              </div>
              <p className="mt-2 text-sm text-white/50 sm:text-base">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
