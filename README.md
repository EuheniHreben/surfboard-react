# 🏄 Surfboard — Premium Interactive Web Application

A high-performance, fully responsive web application built with **React**, **Vite**, and **SCSS**. This project features custom multimedia integrations, advanced interactive UI components, and modular style architecture.

![Website Preview](./preview.png) 

---

## 🚀 Key Features

- **Production-Ready Responsive Layout** — Pixel-perfect adaptive interface optimized for desktop, tablet, and mobile viewports using CSS Grid, Flexbox, and fluid typography.
- **Dynamic Product Showcase** — State-managed catalog for exploring various surfboard models with smooth data switching.
- **Custom HTML5 Video Player** — Engineered from scratch with custom playback controls, an interactive progress bar, live timestamps, and advanced volume management via React Hooks.
- **Rich Interactive UI Components** — Custom multi-level accordions for the team section and an advanced testimonial slider with animated transitions and interactive avatar navigation.
- **Comprehensive Checkout & Order Form** — Fully functional interface capturing customer details, precise delivery address fields, payment options, and submission state management.
- **Optimized Performance** — Bundled with Vite for fast loading times, asset optimization, and clean production builds.

## 🛠️ Tech Stack

- **Core:** React 18+ (Component-based architecture)
- **Logic:** JavaScript (ES6+ / State Management via React Hooks)
- **Tooling:** Vite (Development server & production bundler), ESLint (Code quality linting)
- **Styling:** SCSS / Sass (Modular BEM-like structures, variables, advanced media queries)

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```
2. **Install dependencies:**
   ```bash
   cd surfboard-react
   ```
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```

### Production Build

To generate and preview a highly optimized production build:

```bash
npm run build
npm run preview
```

## 🏗️ Architecture & Best Practices

- **Component-Driven Development:** UI is broken down into highly reusable, independent React components.
- **Clean State Management:** Leverages native React Hooks (`useState`, `useEffect`, `useRef`) for explicit, predictable UI behavior.
- **Scalable SCSS Structure:** Organized styling sheets with centralized variables, responsive mixins, and strict component-level scoping.
