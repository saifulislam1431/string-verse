import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Auth from './Auth/Auth';
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <HelmetProvider>

          <QueryClientProvider client={queryClient}>
<Auth>
<RouterProvider router={router} />
</Auth>
          </QueryClientProvider>

      </HelmetProvider>
    </React.StrictMode>
  </div>
)
