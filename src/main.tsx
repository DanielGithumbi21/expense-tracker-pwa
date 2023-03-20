import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom"
import { DataProvider } from './Context/ContextProvider'
import "./index.css"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>

  </React.StrictMode>,
)
