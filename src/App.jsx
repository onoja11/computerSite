
import './App.css'
import AppLayout from './layouts/AppLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginForm from './Auth/Login'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './Admin/Dashboard'
import Messages from './Admin/Messages'
import Products from './Admin/Products'
import Settings from './Admin/Settings'
import { AppProvider } from './context/AppContext'

function App() {

  return (
    <AppProvider>
    <Router>
      <Routes>
        {/* regular user routes */}
        <Route element={<AppLayout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
          {/* admin routes */}
        <Route element={<AdminLayout/>}>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/admin/messages' element={<Messages/>}/>
          <Route path='/admin/products' element={<Products/>}/>
          <Route path='/admin/settings' element={<Settings/>}/>
        </Route>
        {/* Auth route */}
        <Route path='/login/7cOD7LQu9ajR4VkP9zU1qtiW26EtAlwhNwWm0ogGt45t8f3IJPFnoIkU2fbA' element={<LoginForm/>}/>
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App
