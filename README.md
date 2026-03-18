# Aradhi - Premium Real Estate Developer Website

A modern, high-performance real estate developer website built with Next.js and Progressive Web App (PWA) capabilities. 

## 🚀 Features

- **Modern Architecture**: Built with Next.js 15+ App Router for superior performance and SEO.
- **PWA Ready**: Offline support, home screen installation, and a fast, app-like experience.
- **Premium Design**: A dark-themed, sophisticated aesthetic using carefully curated color palettes and typography.
- **Mobile First**: Fully responsive design that looks stunning on all devices.
- **Modular Styling**: Scoped CSS Modules for maintainable and collision-free styling.
- **SEO Optimized**: Pre-configured meta tags, manifest, and semantic HTML.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules) (Vanilla CSS)
- **PWA**: [@ducanh2912/next-pwa](https://github.com/ducanh2912/next-pwa)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter & Outfit)

## 📂 Project Structure

```text
src/
├── app/              # App Router pages and layout
│   ├── about/        # About Us page
│   ├── contact/      # Contact & Enquiry page
│   ├── projects/     # Property listings page
│   ├── globals.css   # Global styles and resets
│   └── layout.tsx    # Root layout with Header/Footer
├── components/       # Reusable UI components
│   ├── common/       # Atomic components (Buttons, Cards)
│   ├── layout/       # Layout parts (Header, Footer)
│   └── sections/     # Page-specific sections (Hero, Projects)
├── styles/           # Design tokens and shared CSS variables
└── lib/              # Utility functions and shared logic
```

## 🏁 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📱 PWA Details

The application is configured as a standalone PWA. The manifest is located at `/public/manifest.json`. To test PWA features locally, build the project and run it in production mode (`npm run start`).

---
Built with ❤️ for Aradhi Real Estate Developers.
