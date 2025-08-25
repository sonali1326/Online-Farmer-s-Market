import React, { useState } from 'react' 
import './home.css'
import Header from '../../components/Header/Header' 
import Exploremenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


const home = () => { 
    const[category, setCategory]= useState("Home");
  return (
    <div> 
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/> 
        <FoodDisplay category={category}/> 
        <AppDownload/>
      
    </div>
  )
}

export default home
