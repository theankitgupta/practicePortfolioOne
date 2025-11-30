import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Root DOM Element - Grabs the root container from index.html
const rootElement = document.getElementById('root');

// Defensive check (useful in production builds)
if (!rootElement) {
  throw new Error('Root element not found. Check your index.html file for <div id="root"></div>');
}

// React Root Initialization 
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* Wrap BrowserRouter for app-wide routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
