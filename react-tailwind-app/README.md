
# React Tailwind v4 Frontend Project


This project is a modern frontend application built using **React**, **Vite**, and **Tailwind CSS v4**. It demonstrates reusable UI components, state management, API integration, responsive design, dark/light theme toggle, and animations.

---

## Features

1. **Reusable UI Components**
   - `Button` with multiple variants (primary, secondary, destructive, ghost, etc.)
   - `Card` for displaying content with header, footer, description, and action slots
   - `Navbar` for navigation
   - `Footer` with links and copyright
   - `Layout` component wrapping pages with `Navbar` and `Footer`

2. **State Management & Hooks**
   - `TaskManager` component for adding, deleting, completing, and filtering tasks
   - Uses `useState`, `useEffect`, and a custom `useLocalStorageTasks` hook for persistence
   - Dark/Light mode toggle

3. **API Integration**
   - `ApiDataFetcher` fetches and displays data from a public API (JSONPlaceholder)
   - Implements loading and error states
   - Includes search and pagination features

4. **Styling & Animations**
   - Tailwind v4 for utility-first styling
   - Dark/Light mode support via `.dark` class
   - Animations using `tw-animate-css` plugin
   - Responsive design for mobile, tablet, and desktop
   - Optional animated backgrounds (comet, lightning, rain)

---

## Folder Structure

```

react-tailwind-app/
├─ public/
├─ src/
│  ├─ assets/                  # Images, logos
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ Button.jsx
│  │  │  ├─ Card.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Footer.jsx
│  │  │  └─ Separator.jsx
│  │  ├─ Layout.jsx
│  │  ├─ TaskManager.jsx
│  │  └─ ApiDataFetcher.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ tailwind.config.js
└─ vite.config.js

````

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd react-tailwind-app
````

### 2. Install dependencies

```bash
npm install
```

This installs:

* `react` & `react-dom`
* `vite` (build tool)
* `tailwindcss@v4` (utility-first CSS)
* `tw-animate-css` (optional animations)
* `class-variance-authority` & `@radix-ui/react-*` components for reusable UI
* `lucide-react` for icons

---

### 3. Initialize Tailwind CSS

Tailwind v4 is already configured in `index.css`:

```css
@import 'tailwindcss';

**Vite configuration** is ready in `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

---

## Running the Project

### 1. Start the development server

```bash
npm run dev
```

* Opens `http://localhost:5173` by default
* Hot Module Replacement (HMR) enabled

### 2. Build for production

```bash
npm run build
```

* Creates an optimized build in the `dist/` folder

### 3. Preview production build

```bash
npm run preview
```

* Serves the production build locally for testing

---

## Usage Notes

* **Theme Toggle:** Uses the `.dark` class to switch between light and dark modes.
* **TaskManager:** Stores tasks in `localStorage` for persistence.
* **API Fetcher:** Handles loading, error states, search, and pagination.
* **Animations:** All interactive elements (buttons, cards) have smooth hover/fade effects.
* **Responsive Design:** Works across mobile, tablet, and desktop using Tailwind's responsive utilities.

---

## Author

**Charles Wambua**
Frontend Developer | React & Tailwind Enthusiast
PLP MERN STACK
---

## License

This project is open source and free to use.
