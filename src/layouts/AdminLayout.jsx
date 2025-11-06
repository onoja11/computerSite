import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Admin/NavBar'
import Sidebar from '../Admin/SideBar'
import { toast, ToastContainer } from 'react-toastify'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  useEffect(() => {
    const justLoggedIn = localStorage.getItem('justLoggedIn');
    if (justLoggedIn) {
      toast.success('Welcome back, Admin! 🎉');
      localStorage.removeItem('justLoggedIn');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <AdminNavbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <ToastContainer/>
      <main className="lg:ml-20 pt-20 p-6 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout