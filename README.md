# Macaron AI Tools Website

Official website for Macaron AI Tools - Your pocket of AI inspirations.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

## 📁 Project Structure

```
MacaronPlaybookWebsite/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with global styles
│       ├── page.tsx        # Home page
│       ├── globals.css     # Global CSS and Tailwind
│       └── privacy/
│           └── page.tsx    # Privacy policy page
├── public/                 # Static assets (screenshots, etc.)
├── tailwind.config.ts      # Tailwind configuration with Macaron colors
└── package.json
```

## 🎨 Customization

### Adding Screenshots

1. Add your app screenshots to the `public/` folder
2. Update the screenshot section in `src/app/page.tsx`
3. Replace the placeholder content with actual images

### Updating Privacy Policy

Replace the content in `src/app/privacy/page.tsx` with your actual privacy policy.

### Google Play Link

Update the Google Play link in `src/app/page.tsx` - search for `href="#"` in the download section.

## 🌐 Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🎨 Color Palette

The website uses a custom Macaron color palette:

- **Pink**: `#FFB6C1`
- **Rose**: `#FFD1DC`
- **Peach**: `#FFDAB9`
- **Mint**: `#98FB98`
- **Lavender**: `#E6E6FA`
- **Lilac**: `#DDA0DD`
- **Sky**: `#87CEEB`
- **Cream**: `#FFFDD0`
- **Coral**: `#F88379`

## 📝 License

© 2024 Macaron AI Tools. All rights reserved.

