import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Register/>
      <Login/>
    </div>
  )
}

export default App