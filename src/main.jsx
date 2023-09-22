import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'
import './tailwindcss/index.css'
import './for_js/index.css'
 import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='402153649668-e552o6kl6j16tkle1id3t91sk3j9r5sc.apps.googleusercontent.com'>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
