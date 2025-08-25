import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({setshowLogin}) => { 
    const [currState, setcurrState]= useState("Login")
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title"> 
            <h2> {currState}</h2> 
            <img  onClick={()=> setshowLogin(false)}src={assets.cross_icon} alt="" />

        </div> 
        <div className="login-popup-inputs">  
            {currState==="Login"?<></>:<input type="text" placeholder="your name" required/> }
            
            <input type="email" placeholder="your email" required/>
            <input type="password" placeholder="your password" required/>

        </div> 
        <button>{currState==="Sign up"? "Create account":"Login"}</button> 
        <div className="login-popup-condition"> 
            <input type="checkbox" required/>
            <p> By continuing, I agree to the terms of use and privacy policy</p>

        </div>  
        {currState==="Login"?<p> Create a new account? <span onClick={()=>setcurrState("Sign up")}>Click here</span></p>
         :<p> Already have an account? <span onClick={()=>setcurrState("Login")}> Login here</span></p>}
        
        
      </form>
    </div>
  );
};

export default LoginPopup;
