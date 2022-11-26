import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
)
