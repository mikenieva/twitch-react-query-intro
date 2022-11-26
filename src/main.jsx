import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools} from '@tanstack/react-query-devtools'

import EjemploReactQuery from './pages/EjemploReactQuery'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root /> , 
    errorElement: <ErrorPage />
  },
  {
    path: '/ejemploreactquery',
    element: <EjemploReactQuery />
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}  />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
)
