import React from 'react'
import ReactDOM from 'react-dom/client'
import MyselfProvider from './context/myContext'
import App from './App'
import './reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyselfProvider>
      <App />
    </MyselfProvider>
  </React.StrictMode>
)
