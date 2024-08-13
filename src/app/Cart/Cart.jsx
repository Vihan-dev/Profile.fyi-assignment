import React, { useState, useEffect } from "react";
import "./Cart.css";
import PriceDetails from "../PriceDetails/PriceDetails";

function Cart({ cartDetails, setCartDetails }) {
  //to decrease the quantity of the selected item
  const decreamentQuantity = (name, price) => {
    const updatedCart = cartDetails.map((item) => {
      if (item.name === name && item.price === price && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartDetails(updatedCart);
  };

  //to increase the quantity of the selected item
  const increamentQuantity = (name, price) => {
    const updatedCart = cartDetails.map((item) => {
      if (item.name === name && item.price === price) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartDetails(updatedCart);
  };

  //remove item from the cart
  const removeItem = (name) => {
    const index = cartDetails.findIndex((item) => item.name === name);
    if (index !== -1) {
      const updatedItems = [...cartDetails];
      updatedItems.splice(index, 1);
      setCartDetails(updatedItems);
    }
  };

  return (
    <div className="cart-container">
      <div className="grid-container-cart">
        {cartDetails.length > 0 ? (
          cartDetails.map((e) => (
            <div className="card-cart" key={e.price + e.name}>
              <img src="/FalseColour_mini.png" alt="product" />
              <p>{e.name}</p>
              <p>Rs. {e.price}</p>
              <div className="quantity-btn">
                <button onClick={() => decreamentQuantity(e.name, e.price)}>
                  -
                </button>
                <p>{e.quantity}</p>
                <button onClick={() => increamentQuantity(e.name, e.price)}>
                  +
                </button>
              </div>
              <div
                className="delete-btn"
                onClick={() => {
                  removeItem(e.name);
                }}
              >
                Remove from Cart
              </div>
            </div>
          ))
        ) : (
          <div>Cart is empty!!!</div>
        )}
      </div>
      <PriceDetails cartDetails={cartDetails} />
    </div>
  );
}

export default Cart;
