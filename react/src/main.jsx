import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './services-layout.css'
import './styles.css'
import './styles-gtm.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
