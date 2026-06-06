import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './components/Home/Home';
import MainLayout from './Layout/MainLayout';
import Error from './Shared/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/Home',
        element:<Home></Home>
      }
    ]
  },
])

export default router;