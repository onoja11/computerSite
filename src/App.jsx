
import './App.css'
import AppLayout from './layouts/AppLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginForm from './Auth/Login'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
