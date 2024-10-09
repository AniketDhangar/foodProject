import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Menu from './Menu';
import Review from './Review';
import Order from './Order';
import OffCanvas from './OffCanvas';


function Router() {
  return (
    <div className='text-center '>
        <BrowserRouter>
      {/* <Navbar/> */}
      <OffCanvas/>

        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/menu' element={<Menu/>}/>
           <Route path='/review' element={<Review/>}/>
           <Route path='/order' element={<Order/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router