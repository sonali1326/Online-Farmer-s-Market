import React, { useContext } from 'react' 
import  './cart.css' 
import { StoreContext } from '../../context/StoreContext';

const cart = () => { 
  const{cartItems, food_list, removefromcart}= useContext(StoreContext);
  return (
    <div className='cart'> 
    <div className='cart-items'>
      <div className='cart-items-title'>  
        <p>Items</p>
        <p>Title</p>
        <p> Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p> Remove</p>
        </div>  
        <br/> 
        <hr/> 
        {food_list.map((item, index)=>{ 
          if(cartItems[item._id]>0){
            return(
              <div className='cart-items-title cart-items-item'>   
                <img src={item.image}/>  
                <p> {item.name}</p> 
                <p>{item.price}</p> 
                <p> {cartItems[item._id]}</p> 
                <p>₹{parseInt(item.price) * cartItems[item._id]}</p>
                <p>x</p>
              </div>
            )
          }

        })}

    </div>
      
    </div>
  )
}

export default cart
