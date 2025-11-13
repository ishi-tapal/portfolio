import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import ParticleBackground from './Particle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ParticleBackground /> */}
  </StrictMode>,
)
