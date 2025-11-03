
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
          <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App
