import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { toast, ToastContainer } from 'react-toastify';

const AppLayout = () => {
  useEffect(() => {
      const justLoggedOut = localStorage.getItem('justLoggedOut');
      if (justLoggedOut) {
        toast.success('Logged out successfully.');
        localStorage.removeItem('justLoggedOut');
      }
    }, []);
  return (
<div className="bg-blue-950 min-h-screen">
      <Navbar />
      <ToastContainer/>
      <main className="pt-4">
        <Outlet />
      </main>
    </div>   )
}

export default AppLayout