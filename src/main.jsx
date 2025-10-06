import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Servicos from './pages/Servicos'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'empresa', element: <Empresa /> },
      { path: 'serviços', element: <Servicos /> },
      { path: 'produtos', element: <Produtos /> },
      { path: 'contato', element: <Contato /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
