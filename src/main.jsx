import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NaturalPicProvider from './context/NaturalPicContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NaturalPicProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NaturalPicProvider>
  </React.StrictMode>
)
