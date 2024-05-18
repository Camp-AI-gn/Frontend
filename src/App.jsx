// import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Playground from './pages/playground/playground'
import './App.css'
function App() {
  const Layout = () => {
    return (
      
          <Outlet />
        
  ) ;
  };

  const router = createBrowserRouter([
    {

      path: "/",
      element: <Playground />,
      
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App