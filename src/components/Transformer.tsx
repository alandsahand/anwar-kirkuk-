import type React from 'react'
import { useId } from 'react'

/** Stylised line-art transformer used as a product placeholder. */
export function Transformer({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const id = useId().replace(/:/g, '')
  const fins = [0, 1, 2, 3, 4]
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden>
      <defs>
        <linearGradient id={`t${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3d44" />
          <stop offset="1" stopColor="#101114" />
        </linearGradient>
        <linearGradient id={`e${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id={`r${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff4a3d" />
          <stop offset="1" stopColor="#a10c06" />
        </linearGradient>
      </defs>
      {/* radiator fins */}
      {fins.map((i) => (
        <g key={i}>
          <rect x={34 + i * 5} y={84} width={3} height={66} rx={1.5} fill={`url(#t${id})`} stroke={`url(#e${id})`} strokeWidth={0.6} />
          <rect x={143 + i * 5} y={84} width={3} height={66} rx={1.5} fill={`url(#t${id})`} stroke={`url(#e${id})`} strokeWidth={0.6} />
        </g>
      ))}
      {/* conservator */}
      <rect x={118} y={34} width={52} height={16} rx={8} fill={`url(#t${id})`} stroke={`url(#e${id})`} strokeWidth={1} />
      <path d="M140 50 v18" stroke={`url(#e${id})`} strokeWidth={1.5} />
      {/* bushings */}
      {[78, 100, 122].map((x, i) => (
        <g key={x}>
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={x - 6 + k * 0.6} y={56 - k * 7} width={12 - k * 1.2} height={6} rx={3} fill={`url(#t${id})`} stroke={`url(#e${id})`} strokeWidth={0.8} />
          ))}
          <circle cx={x} cy={i === 1 ? 30 : 30} r={3.2} fill={`url(#r${id})`} />
        </g>
      ))}
      {/* cover + tank */}
      <rect x={56} y={62} width={88} height={10} rx={3} fill={`url(#t${id})`} stroke={`url(#e${id})`} strokeWidth={1} />
      <rect x={60} y={72} width={80} height={86} rx={6} fill={`url(#t${id})`} stroke={`url(#e${id})`} strokeWidth={1.2} />
      {/* nameplate with bolt */}
      <rect x={84} y={96} width={32} height={34} rx={5} fill="#0b0b0e" stroke="#ffffff" strokeOpacity={0.15} />
      <path d="M103 101 L92 116 h7 l-3 10 l11 -16 h-7 z" fill={`url(#r${id})`} />
      {/* base */}
      <rect x={52} y={158} width={96} height={8} rx={3} fill={`url(#t${id})`} stroke={`url(#e${id})`} strokeWidth={1} />
      <circle cx={66} cy={172} r={5} fill="#0b0b0e" stroke={`url(#e${id})`} />
      <circle cx={134} cy={172} r={5} fill="#0b0b0e" stroke={`url(#e${id})`} />
    </svg>
  )
}
