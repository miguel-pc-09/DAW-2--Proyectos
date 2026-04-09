import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Ejecucion metodo createRoot que viene desde la libreria react-dom/client,
//  y dentro del document.getElementById('root') se le pasa el identificador del div que se encuentra
// y renderiza 
createRoot(document.getElementById('root')!).render(
  // renderiza el componente App.tsx
  <StrictMode>
    <App />
  </StrictMode>,
)
