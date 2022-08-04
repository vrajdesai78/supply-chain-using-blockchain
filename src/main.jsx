import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { LogIn } from './components'
import Navbar from './components/NavBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    {/* <LogIn/> */}
  </React.StrictMode>
)
