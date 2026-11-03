import { useState } from 'react'
import { videos, type Video } from '../config/site'
import { PlayIcon } from './Icons'
import { LogoMark } from './Logo'
import { Eyebrow, Reveal } from './ui'

function youtubeId(src: string) {
  const m = src.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/)
  return m?.[1]
}

function Player({ video }: { video: Video }) {
  const yt = youtubeId(video.src)
  if (yt) {
    return (
      <iframe
        className="size-full"
        src={`https://www.youtube-nocookie.com/embed/${yt}?rel=0&modestbranding=1`}
        title={video.title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }
  return <video key={video.src} className="size-full object-cover" src={video.src} poster={video.poster} controls playsInline preload="metadata" />
}

export function Videos() {
  const [active, setActive] = useState(0)
  const current = videos[active]

  return (
    <section id="videos" className="scroll-mt-24 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Watch</Eyebrow>
          <h2 className="text-gradient text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] font-semibold tracking-[-0.04em]">See it in action.</h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="glass rounded-[2.5rem] p-2.5 sm:p-3">
            <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-black">
              {current ? (
                <Player video={current} />
              ) : (
                <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_50%_40%,rgb(227_20_11/0.25),transparent_60%)]">
                  <div className="flex flex-col items-center gap-5 text-center">
                    <LogoMark glow className="h-16 w-auto sm:h-24" />
                    <span className="glass grid size-14 place-items-center rounded-full sm:size-16">
                      <PlayIcon className="ml-0.5 size-6" />
                    </span>
                    <p className="text-sm tracking-[0.25em] text-white/50 uppercase">Our video ads are coming soon</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {videos.length > 1 && (
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {videos.map((v, i) => (
              <button
                key={v.src}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm transition ${
                  i === active ? 'bg-brand text-white' : 'glass text-white/70 hover:text-white'
                }`}
              >
                {v.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
