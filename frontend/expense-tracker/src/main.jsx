import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ import HashRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* ✅ wrap App with HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>,
);
