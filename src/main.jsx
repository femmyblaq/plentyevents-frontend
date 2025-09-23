import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './store/AuthContext';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

//Sidebar Toggle Context
import { SidebarProvider } from './store/SidebarToggleContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
    <SidebarProvider>
      <App />
      </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
