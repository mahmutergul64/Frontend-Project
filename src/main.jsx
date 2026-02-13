import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SiteContextProvider } from './context/SiteContext.jsx' 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SiteContextProvider>
    <App />
    <ToastContainer />
  </SiteContextProvider>,
)