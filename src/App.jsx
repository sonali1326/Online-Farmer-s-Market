import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom' 
import Home from './pages/home/home';
import Cart from './pages/cart/cart'; 
import Orders from './pages/orders/order'; 
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';


const App = () => { 
  const[showLogin, setshowLogin]=useState(false)
  return ( 
    <>  
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
    <div className='app'> 
    <Navbar setshowLogin={setshowLogin}/> 
    <Routes> 
      <Route path= '/' element= {<Home/>}/> 
      <Route path= '/cart' element= {<Cart/>}/>   
      <Route path= '/order' element= {<Orders/>}/>  
      

    </Routes>
      
    </div> 
    <Footer/> 
    </>
  )
}

export default App
