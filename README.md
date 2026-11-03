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

## Deploy to Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. After the first deploy: **Custom domains → Add** `anwarkirkuk.com` (and `www`). The domain is already on Cloudflare, so DNS is set up automatically.

Every push to the production branch redeploys the site.
