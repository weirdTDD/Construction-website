import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout.js'
import About from './pages/public/About.js'
import LandingPage from './pages/home/LandingPage.js'
import Login from './pages/auth/Login.js'
import Register from './pages/auth/Register.tsx'
import Services from './pages/public/Services.tsx'

function App() {
  return (
    <Routes>
      {/* Public Routes with Navbar/Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
      </Route>
      

      {/* Auth Routes (no Navbar/Footer) */}
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
