import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializerFirebase } from './Firebase/config.js'
import './index.css'

initializerFirebase()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
