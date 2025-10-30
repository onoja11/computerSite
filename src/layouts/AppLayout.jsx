import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const AppLayout = () => {
  return (
<div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>   )
}

export default AppLayout