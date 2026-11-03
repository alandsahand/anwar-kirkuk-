import { useId } from 'react'

// Vector trace of the Anwar Kirkuk mark (original viewBox from the 1672×941 artwork).
const RED_TOP = 'M836,183 L936,375 L866,394 C770,445 680,505 616,573 Z'
const RED_BLADE = 'M866,394 C760,460 650,555 584,646 L640,646 C705,555 790,470 866,394 Z'
const DARK = 'M1102,278 C1040,315 985,360 963,420 L1089,645 L808,645 C804,560 835,485 893,435 C955,380 1035,320 1102,278 Z'

export function LogoMark({ className = '', glow = false }: { className?: string; glow?: boolean }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="575 175 535 480" className={className} role="img" aria-label="Anwar Kirkuk logo">
      <defs>
        <linearGradient id={`r${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff4a3d" />
          <stop offset="0.5" stopColor="#e3140b" />
          <stop offset="1" stopColor="#8f0904" />
        </linearGradient>
        <linearGradient id={`d${id}`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#3a3d44" />
          <stop offset="0.45" stopColor="#16171b" />
          <stop offset="1" stopColor="#0b0b0e" />
        </linearGradient>
        <linearGradient id={`s${id}`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#c9ccd2" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
        {glow && (
          <filter id={`g${id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <g filter={glow ? `url(#g${id})` : undefined}>
        <path d={RED_TOP} fill={`url(#r${id})`} />
        <path d={RED_BLADE} fill={`url(#r${id})`} />
      </g>
      <path d={DARK} fill={`url(#d${id})`} stroke={`url(#s${id})`} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  )
}

export function Wordmark({ className = '', lines = true }: { className?: string; lines?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-4 font-medium tracking-[0.32em] ${className}`}>
      {lines && <span aria-hidden className="h-px w-8 bg-brand sm:w-12" />}
      <span>
        <span className="text-brand">ANWAR</span> <span className="text-silver">KIRKUK</span>
      </span>
      {lines && <span aria-hidden className="h-px w-8 bg-brand sm:w-12" />}
    </span>
  )
}
