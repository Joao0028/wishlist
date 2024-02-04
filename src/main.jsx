import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/EstilosGlobais.scss'
import AppRoutes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode> Removi para que não renderize 2 vezes quando iniciar por padrão.
    <AppRoutes />
//  </React.StrictMode>,
)
