import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App'
import './reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
