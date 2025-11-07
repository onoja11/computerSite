import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))

  if (!token || !user ) {
    return <Navigate to="/login/7cOD7LQu9ajR4VkP9zU1qtiW26EtAlwhNwWm0ogGt45t8f3IJPFnoIkU2fbA" />
  }

  return children
}

export default AdminRoute
