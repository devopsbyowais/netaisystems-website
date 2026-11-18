# NetAISystems

NetAISystems is a technology agency website presenting six service divisions — AI Automation & Agentic Engineering, Web & Software Development, DevOps & Cloud Engineering, CRM/ERP & Business Systems, CGI/3D Animation & VFX, and UI/UX & Creative Design — alongside company information, client work, industries served, the ZodAgent AI-powered ERP product, and a single "Start Your Project" enquiry flow.

The site uses a deep-navy visual identity with cyan accents, glassmorphism panels and subtle animated backgrounds. It is a responsive React single-page application with dedicated pages for each service and product.

## Technologies

Based on the actual project dependencies:

- **React 18** and **React Router 6** (client-side routing)
- **Vite 8** with `@vitejs/plugin-react` (development server and bundler)
- **Tailwind CSS 3** with a custom theme
- **Radix UI** primitives with shadcn-style components
- **Framer Motion 10** (interface animation)
- **Lucide React** (icons) and **Sonner** (notifications)
- **Node.js 22** (see `.nvmrc`) with npm workspaces; a `bun.lock` is also provided
- **PocketBase** hooks and migrations for the optional local backend (`apps/pocketbase`)
- **Google Apps Script** web app endpoints for public enquiry form submissions

## Installation

```bash
# Use the Node version pinned for this project
nvm use                # Node 22

# Install all workspace dependencies from the repository root
npm install
```

Alternatively, with Bun installed: `bun install`.

## Local development

```bash
# Frontend only — http://localhost:3000
npm run dev --workspace apps/web

# Frontend + local PocketBase backend (requires a PocketBase binary)
npm run dev
```

The frontend development server listens on port **3000**.

## Build

```bash
npm run build
```

The production bundle is written to `dist/apps/web`. To preview it locally:

```bash
npm run preview --workspace apps/web
```

Lint the frontend with:

```bash
npm run lint --workspace apps/web
```

## Repository information

- **GitHub repository:** https://github.com/devopsbyowais/netaisystems-website
- **Clone URL:** https://github.com/devopsbyowais/netaisystems-website.git
- **Main branch:** `main`
- **Structure:** npm workspace monorepo — `apps/web` (frontend) and `apps/pocketbase` (backend hooks/migrations)

Environment files, credentials, private keys, dependencies, build output and logs are excluded via `.gitignore`. No private secrets are stored in this repository; the public enquiry form and chat widget use client-side endpoints that are part of the site's normal operation.
