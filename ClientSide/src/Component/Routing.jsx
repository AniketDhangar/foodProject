import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Dishes from './Dishes'
import Login  from './Login'
import Order from './Order'
import Navbar from './Navbar'


const ClientRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default ClientRouter