import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Controler from './Controler.jsx'
import { BrowserRouter, Navigate } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import 'react-toastify/ReactToastify.css'
import {useNavigate} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="navbar bg-info text-primary-content">
        <button className="btn btn-ghost text-xl text-white" onClick={()=>Navigate('/')}>Liveness Detection & Verification</button>
    </div>
    <BrowserRouter>
      <Controler/>
      <ToastContainer/>
    </BrowserRouter>
  </StrictMode>,
)