import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/Routes.jsx';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import AuthProviders from './Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
  
)
