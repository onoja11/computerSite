import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const AppLayout = () => {
  return (
<div className="bg-blue-950 min-h-screen">
      <Navbar />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>   )
}

export default AppLayout