# NavyaUI

A fully custom, modern, production-ready UI component library built entirely from scratch with React, TypeScript, and TailwindCSS (for utility only). No third-party UI libraries are used.

## Architecture

This project is structured as an NPM Workspace Monorepo:

- **`apps/docs`**: The documentation website built with Vite, React, and MDX.
- **`packages/core`**: Design tokens, custom animations, and CSS variables for the NavyaUI theme system.
- **`packages/react`**: The fully accessible custom UI React component library.
- **`packages/utils`**: Shared utilities like `cn` (class merger).

## Getting Started

To run the project locally, run the following commands from the project root directory:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Documentation Site:**
   ```bash
   npm run dev --workspace=docs
   ```
   Or simply:
   ```bash
   npm run dev
   ```
   *(This starts the Vite dev server for the docs app.)*

3. **View the Components:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.
   Navigate to the Components section (`/components/button`) to see the live examples.

## Building for Production

To build the React library and Documentation app:
```bash
npm run build
```
This runs the workspace build scripts for creating the optimized `dist` folders across all packages.
