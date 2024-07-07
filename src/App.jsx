import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Coin from "./pages/Coin/Coin"


import './index.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

const App = () => {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/coin/:coinId' element={<Coin />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App