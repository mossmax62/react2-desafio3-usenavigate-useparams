import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PokemonesContextProvider from './context/PokemonesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonesContextProvider>
  </React.StrictMode>
)
