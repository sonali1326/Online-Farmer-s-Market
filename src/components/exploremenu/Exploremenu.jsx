import React from 'react' 
import './exploremenu.css' 
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu"> 
    <h1> Explore Fresh from the Rooftop</h1> 
    <p className='explore-menu-text'>From rooftop farms to your table, shop healthy, local, and sustainable produce.</p> 
    <div className='explore-menu-list'>
    {menu_list.map((item, index)=>{
        return (
            <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All": item.menu_name)} key ={index} className='explore-menu-list-item'>  
                <img className={category===item.menu_name?"active":""} src={item.menu_img} width={120} height="auto"/> 
                <p>{item.menu_name}</p>
            </div>

        )
    })} 
    </div>  
    <hr/>
      
    </div>
  )
}

export default Exploremenu
