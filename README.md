# anwarkirkuk.com

Showcase website for **Anwar Kirkuk**: a dark, glassy, Apple-style single page. Visitors contact us by WhatsApp, email or phone.

Stack: Vite + React + TypeScript + Tailwind CSS v4 + Motion. It builds to plain static files, which makes it fast and free to host on Cloudflare Pages.

## Edit content

Almost everything lives in **`src/config/site.ts`**: WhatsApp number, email, phone, address, about text, products and videos. Search it for `TODO`.

- **Products:** put images in `public/products/` and set `image: '/products/your-file.webp'`.
- **Videos:** put small MP4s in `public/videos/` (`src: '/videos/ad-1.mp4'`), or paste a YouTube link. Cloudflare Pages allows at most 25 MB per file, so host bigger videos on YouTube or Cloudflare Stream.
- **Logo:** `src/components/Logo.tsx` holds a vector trace of the logo. The original images are in `public/brand/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploy to Cloudflare (Workers)

`wrangler.jsonc` tells Cloudflare to serve the built `dist/` folder.

1. Cloudflare dashboard → **Workers & Pages → Create → Import a repository** → pick this repo.
2. Project name: `anwar-kirkuk` (it must match `name` in `wrangler.jsonc`). Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. Worker → **Settings → Build → Branch control**: set the production branch to the branch that has the site.
4. Worker → **Settings → Domains & Routes → Add → Custom domain**: add `anwarkirkuk.com` and `www.anwarkirkuk.com`.

Every push to the production branch redeploys the site.
