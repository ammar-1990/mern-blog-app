
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
}from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Layout from './components/Layout'
import Single from './pages/Single'
import Write from './pages/Write'
import AuthRequire from './components/AuthRequire'
import { useEffect } from 'react'





function App() {

 

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:'/post/:id',
          element:<AuthRequire><Single /></AuthRequire>
        },
        {
          path:'/write',
          element:<AuthRequire><Write /></AuthRequire>
        },
      ]
    },
    {
      path:'/register',
      element:<Register />
    },
    {
      path:'/login',
      element:<Login />
    },
  
  
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
