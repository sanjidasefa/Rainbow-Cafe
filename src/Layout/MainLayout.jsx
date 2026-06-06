import React from 'react';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <Navber></Navber>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;