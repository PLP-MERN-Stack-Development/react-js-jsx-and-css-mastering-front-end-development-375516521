import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // ✅ Must come *after* App import for Tailwind + custom CSS to load correctly

// ✅ Ensure there’s an element with id="root" in index.html
const root = document.getElementById('root')

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
