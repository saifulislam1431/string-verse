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
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl'>
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>
)
