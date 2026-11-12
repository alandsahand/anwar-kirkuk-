import { motion } from 'motion/react'
import { useState } from 'react'
import { videos, type Video } from '../config/site'
import { languages, useLang } from '../i18n'
import { FacebookIcon, PlayIcon } from './Icons'
import { Eyebrow, Reveal, Title } from './ui'

const youtubeId = (src: string) => src.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/)?.[1]
const isFacebook = (src: string) => /facebook\.com|fb\.watch/.test(src)

function embedSrc(v: Video) {
  const yt = youtubeId(v.src)
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0&modestbranding=1`
  if (isFacebook(v.src)) return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v.src)}&show_text=false&autoplay=true&mute=false`
  return null
}

/** Shows the poster first; the heavy player loads only after a tap (keeps the page fast). */
function Player({ video, label }: { video: Video; label: string }) {
  const { lang } = useLang()
  const [playing, setPlaying] = useState(false)
  const subtitle = video.subtitles?.[lang]
  const embed = embedSrc(video)
  if (playing) {
    return embed ? (
      <iframe className="size-full" src={embed} title="video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
    ) : (
      <video className="size-full object-cover" src={video.src} poster={video.poster} controls autoPlay playsInline>
        {subtitle && <track kind="subtitles" src={subtitle} srcLang={lang === 'ku' ? 'ckb' : lang} label={languages.find((l) => l.code === lang)?.label} default />}
      </video>
    )
  }
  return (
    <button onClick={() => setPlaying(true)} className="group relative block size-full" aria-label={label}>
      {video.poster && <img src={video.poster} alt="" loading="lazy" className="size-full object-cover transition-transform duration-1000 group-hover:scale-105" />}
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
      <span className="absolute inset-0 grid place-items-center">
        <motion.span
          animate={{ boxShadow: ['0 0 0 0 rgb(227 20 11 / 0.6)', '0 0 0 22px rgb(227 20 11 / 0)'] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="grid size-20 place-items-center rounded-full bg-brand/90 text-white backdrop-blur-md transition-transform group-hover:scale-110"
        >
          <PlayIcon className="ms-1 size-8" />
        </motion.span>
      </span>
    </button>
  )
}

export function Videos() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const current = videos[active]
  if (!current) return null
  const vertical = !!current.vertical

  return (
    <section id="videos" className="scroll-mt-24 px-4 py-24 sm:py-32">
      <div className={`mx-auto max-w-6xl ${vertical ? 'grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20' : ''}`}>
        <Reveal className={vertical ? '' : 'mx-auto max-w-2xl text-center'}>
          <Eyebrow>{t.videos.eyebrow}</Eyebrow>
          <Title>{t.videos.title}</Title>
          <p className="mt-6 max-w-lg text-xl leading-relaxed text-white/55 rtl:leading-loose">{t.videos.lead}</p>
          {current.link && (
            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass mt-8 inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
            >
              <FacebookIcon className="size-4 text-[#4b8bff]" /> {t.videos.facebook}
            </a>
          )}
        </Reveal>

        <Reveal delay={0.15} className={vertical ? 'mx-auto' : 'mt-14'}>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-full bg-brand/20 blur-[80px]" />
            <div className={`glass rounded-[2.75rem] p-2.5 ${vertical ? 'w-[min(78vw,340px)]' : ''}`}>
              <div className={`relative overflow-hidden rounded-[2.25rem] bg-black ${vertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <Player key={current.src} video={current} label={t.videos.play} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {videos.length > 1 && (
        <div className="mx-auto mt-6 flex max-w-6xl gap-3 overflow-x-auto pb-2">
          {videos.map((v, i) => (
            <button
              key={v.src}
              onClick={() => setActive(i)}
              className={`latin shrink-0 rounded-full px-5 py-2.5 text-sm transition ${i === active ? 'bg-brand text-white' : 'glass text-white/70 hover:text-white'}`}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
