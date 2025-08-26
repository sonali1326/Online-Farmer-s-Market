import React, { useContext } from 'react' 
import './order.css'
import { StoreContext } from '../../context/StoreContext'

const order = () => { 
  const { getTotalCartAmount}= useContext(StoreContext)
  return (
    <form className='placeorder'> 
    <div className='placeorder-left'>  
      <p className='Title'>Delivery Information</p> 
      <div className='multi-fields'> 
        <input type='text' placeholder='first-name'/> 
        <input type='text' placeholder='last-name'/>
        

      </div> 
      <input type="email"  placeholder='Email address'/> 
      <input type="text"  placeholder='Street'/> 
      <div className='multi-fields'> 
        <input type='text' placeholder='city'/> 
        <input type='text' placeholder='state'/>
        

      </div>  
      <div className='multi-fields'> 
        <input type='text' placeholder='zip-code'/> 
        <input type='text' placeholder='country'/>
        

      </div> 
      <input type='text' placeholder='phone'/>

    </div> 
    <div className='placeorder-right'>  
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div> 

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div><hr /> 


            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div><hr /> 


            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div >


          </div> 
          <button > Proceed to Payment</button> 

        </div>

    </div>
      
    </form>
  )
}

export default order
