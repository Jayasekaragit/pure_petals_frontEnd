import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='flex flex-col h-screen overflow-hidden bg-custom-blue'>
      <Header />
      <div className='flex-1 p-4 overflow-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
