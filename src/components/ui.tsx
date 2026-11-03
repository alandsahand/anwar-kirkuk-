import { motion, type HTMLMotionProps } from 'motion/react'
import type { MouseEvent, ReactNode } from 'react'

export const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({ children, delay = 0, y = 32, ...rest }: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-brand-hi uppercase rtl:text-sm">
      <span className="h-px w-6 bg-brand" />
      {children}
    </p>
  )
}

/** Sets --mx/--my on the element so `.glass-sheen` lights up under the pointer. */
export const sheen = {
  onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
    el.style.setProperty('--sheen', '1')
  },
  onMouseLeave(e: MouseEvent<HTMLElement>) {
    e.currentTarget.style.setProperty('--sheen', '0')
  },
}

export function Button({
  href,
  children,
  variant = 'primary',
  external,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'glass'
  external?: boolean
}) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-hi'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-b from-brand-hi to-brand text-white shadow-[0_10px_40px_-10px_rgb(227_20_11/0.8),inset_0_1px_0_rgb(255_255_255/0.3)] hover:shadow-[0_14px_50px_-8px_rgb(255_59_47/0.9),inset_0_1px_0_rgb(255_255_255/0.35)] hover:brightness-110'
      : 'glass text-white hover:bg-white/10'
  return (
    <a href={href} className={`${base} ${styles}`} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

/** Big section title with consistent sizing. */
export function Title({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-gradient text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.04em] ${className}`}>{children}</h2>
  )
}
