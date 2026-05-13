# Project Guidelines - Portfolio

This document provides foundational mandates and technical context for developing and maintaining the Portfolio project.

## Project Overview

- **Purpose**: Personal professional portfolio for Rajat Sharma.
- **Tech Stack**:
    - **Framework**: React 19 (Vite 8)
    - **Styling**: Tailwind CSS 3
    - **Icons**: Lucide-React
    - **Tooling**: Biome (Linting & Formatting)
- **Architecture**: Single Page Application (SPA) with a component-based structure. The primary entry point is `src/main.jsx`, and the main layout/content is managed in `src/App.jsx`.

## Building and Running

- **Development**: `npm run dev` (Starts Vite development server)
- **Build**: `npm run build` (Generates production assets in `dist/`)
- **Preview**: `npm run preview` (Serves the production build locally)
- **Linting/Formatting**:
    - `npm run lint`: Checks for lint errors using Biome.
    - `npm run lint:fix`: Automatically fixes lint errors.
    - `npm run format`: Formats code according to Biome configuration.

## Development Conventions

### Code Style & Formatting (Enforced by Biome)
- **Indentation**: Tabs (Width: 4)
- **Quotes**: Single quotes (`'`) for JavaScript/JSX.
- **Semicolons**: Always used.
- **Line Width**: Max 180 characters.
- **Trailing Commas**: Always included (`all`).
- **Bracket Spacing**: Enabled.
- **Bracket Same Line**: True for closing brackets.

### Styling & UI
- **Tailwind CSS**: Use utility classes for all styling. Avoid custom CSS unless necessary (manage via `src/index.css`).
- **Dark Mode**: Configured with `media` strategy. Use `dark:` variants for all dark-theme specific styling. The UI should automatically adapt to system preferences.
- **Icons**: Use `lucide-react` for consistent iconography.

### Workflow
- **Verification**: Always run `npm run lint` before finalizing changes.
- **Consistency**: Maintain the established Bento-style grid layout and minimalist aesthetic in `src/App.jsx`.
