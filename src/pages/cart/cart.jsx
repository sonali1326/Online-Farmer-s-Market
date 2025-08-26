import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const cart = () => {
  const { cartItems, food_list, removefromcart, getTotalCartAmount } = useContext(StoreContext); 
  const navigate= useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p> Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p> Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img width="100px" src={item.image} />
                  <p> {item.name}</p>
                  <p>₹{item.price}</p>
                  <p> {cartItems[item._id]}</p>
                  <p>₹{parseInt(item.price) * cartItems[item._id]}</p>
                  <p onClick={() => removefromcart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
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
          <button onClick={()=> navigate('/order')}> Proceed to check out</button> 

        </div>

        
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="promo code" />
              <button> SUBMIT</button>
            </div>
          </div>
        </div>


      </div> 


    </div>
  );
};

export default cart;
