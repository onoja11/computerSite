
import './App.css'
import AppLayout from './layouts/AppLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
