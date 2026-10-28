# Moroccan Cosmetics Wholesale

B2B website for a Moroccan cosmetics manufacturer, wholesaler, and exporter. The site presents wholesale products, private label manufacturing, export support, and buyer resources in English, French, and Arabic.

Live site: [www.moroccancosmeticswholesale.com](https://www.moroccancosmeticswholesale.com)

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (`en`, `fr`, `ar`)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project notes

- Product, blog, factory, and brand images live in `public/assets/` with SEO-friendly filenames.
- Copy and translations are in `src/messages/`.
- Do not commit `.env` files, `node_modules`, or `.next`.
