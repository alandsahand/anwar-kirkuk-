// Tiny Cloudflare Worker in front of the static site.
// It only runs for /videos/* (see wrangler.jsonc) and adds HTTP range
// support, which Safari / iPhone need to play MP4 video.

export default {
  async fetch(request, env) {
    const range = request.headers.get('Range')
    // Fetch the whole file from the static assets (without the Range header)
    const headers = new Headers(request.headers)
    headers.delete('Range')
    const res = await env.ASSETS.fetch(new Request(request.url, { method: request.method, headers }))

    const out = new Headers(res.headers)
    out.set('Accept-Ranges', 'bytes')
    if (!range || res.status !== 200 || request.method !== 'GET') {
      return new Response(res.body, { status: res.status, headers: out })
    }

    const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim())
    if (!m || (m[1] === '' && m[2] === '')) return new Response(res.body, { status: 200, headers: out })

    const buf = await res.arrayBuffer()
    const size = buf.byteLength
    let start
    let end
    if (m[1] === '') {
      start = Math.max(0, size - Number(m[2])) // last N bytes
      end = size - 1
    } else {
      start = Number(m[1])
      end = m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1)
    }
    if (start > end || start >= size) {
      return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } })
    }
    out.set('Content-Range', `bytes ${start}-${end}/${size}`)
    out.set('Content-Length', String(end - start + 1))
    return new Response(buf.slice(start, end + 1), { status: 206, headers: out })
  },
}
