import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartApp } from './assets/CartApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartApp/>
    </BrowserRouter>
  </StrictMode>,
)
