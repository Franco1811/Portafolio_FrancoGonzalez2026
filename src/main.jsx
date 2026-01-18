import React from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'

/**
 * Punto de entrada principal de la aplicación.
 * Se envuelve la App en el ThemeProvider para manejar el modo oscuro globalmente.
 * Se utiliza StrictMode para destacar problemas potenciales en la aplicación.
 */
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)