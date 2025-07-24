import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import SplashCursor from './cursor/SplashCursor/SplashCursor';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <SplashCursor/>
  </BrowserRouter>
);
