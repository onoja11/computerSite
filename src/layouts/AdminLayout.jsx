import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Admin/NavBar'
import Sidebar from '../Admin/SideBar'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <AdminNavbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="lg:ml-20 pt-20 p-6 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout