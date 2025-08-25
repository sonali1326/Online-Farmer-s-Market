import React, { useState } from 'react'  
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setshowLogin}) => { 
    const[menu, setMenu]=useState("Home");
  return (
    <div className='navbar'> 
    <Link to="/"><img src={assets.generatedImage} width="170" height="auto" alt="" className='logo'/> </Link>
    <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"? "active":""}>Home</Link> 
        <a href= '#explore-menu'onClick={()=>setMenu("Produce")} className={menu==="Produce"? "active":""}> Produce</a>  
        <a href='#app-download' onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"? "active":""}> Mobile App</a>
        <a href ='#footer' onClick={()=>setMenu("About us")} className={menu==="About us"? "active":""}> About us</a>  
        {/* <li onClick={()=>setMenu("Profile")} className={menu==="Profile"? "active":""}> Profile</li> */}

    </ul> 
    <div className='navbar-right'> 
        <img src={assets.search} width="45" height="auto"alt=""/> 
        <div className="navbar-search-icon" > 
            <Link to="/cart"><img src={assets.basket}width="80" height="auto" alt=""/> </Link>
            <div className='dot'> 

            </div>

        </div> 
        <button onClick={()=>setshowLogin(true)} >Sign in</button>
    </div>
      
    </div>
  )
}

export default Navbar
