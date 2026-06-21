import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './components/Home/Home';
import MainLayout from './Layout/MainLayout';
import Error from './Shared/Error';
import Menu from './components/FoodMenu/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/menu',
        element: <Menu></Menu>,
        loader: () => fetch('/items.json').then((res) => res.json())
      }
    ]
  },
])

export default router;