# Localists Professional Matching Platform Clone

A modern React + Vite web app that helps users connect with top professionals and local service providers. Find, hire, and collaborate with experts in your area easily and securely.

## Features

- React 18 with Vite for fast development and HMR
- Tailwind CSS for rapid, utility-first styling
- Responsive design for desktop and mobile
- Professional matching cards with filters and sorting
- SEO and social meta tags included
- Accessible, animated dropdowns and menus

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/localists-clone.git
   cd localists-clone
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

### Lint

To lint the codebase:

```sh
npm run lint
```

## Project Structure

- `src/` - Main source code
  - `components/` - React components (Header, MainContent, Card, etc.)
  - `assets/` - Static assets
  - `App.jsx` - Main app entry
  - `main.jsx` - React DOM entry point
- `public/` - Static public files (favicon, etc.)
- `index.html` - HTML entry point
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite configuration

## Customization

- Update meta tags in [index.html](index.html) for your branding.
- Modify styles in [src/App.css](src/App.css) and [src/index.css](src/index.css).
- Add or update professional data in [`MainContent`](src/components/MainContent.jsx).

## License

This project is for educational/demo purposes. Please replace branding and assets before using in production.

---

Built with ❤️ using [React](https://react.dev/) and [Vite](https://vitejs.dev/).
