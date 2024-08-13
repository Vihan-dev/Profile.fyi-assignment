import React, { useState, useEffect } from "react";
import "./Card.css";

function Card({
  name,
  color,
  price,
  cartDetails,
  setCartDetails,
  setShowCartSection,
}) {
  // to show add to cart btn or go to cart btn
  const [showAddToCart, setShowAddToCart] = useState(true);
  // to show popup msg after item is added to cart
  const [showPopUp, setShowPopUp] = useState(false);
  // total number of items added to the cart
  const [totalCartItems, setTotalCartItems] = useState(0);

  //to check if the item is added to the cart or not
  useEffect(() => {
    const flag = cartDetails.find((e) => {
      return e.name == name && e.price == price;
    });
    setShowAddToCart(!flag);
  }, [cartDetails]);

  //to update the cart items
  const addToCart = () => {
    const newItem = {
      name: name,
      price: price,
      quantity: 1,
    };
    setCartDetails([...cartDetails, newItem]);
    setShowAddToCart(false);

    setShowPopUp(true);
  };

  // to cnt total number of items in cart + to remove the popup after 2s
  useEffect(() => {
    if (showPopUp) {
      let cnt = 0;
      cartDetails.map((e) => {
        cnt += e.quantity;
      });
      setTotalCartItems(cnt);
      setTimeout(() => {
        setShowPopUp(false);
      }, 2000);
    }
  }, [showPopUp]);

  return (
    <>
      <div className="card">
        <img src="/FalseColour_mini.png" alt="product" />
        <p>{name}</p>
        <p>{color}</p>
        <p>Rs. {price}</p>
        {showAddToCart ? (
          <div className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </div>
        ) : (
          <div
            className="add-to-cart-btn"
            onClick={() => {
              setShowCartSection(true);
            }}
          >
            Go to Cart
          </div>
        )}
      </div>
      {showPopUp && (
        <div className="popup-msg">
          <p>Successfully added to cart!!!</p>
          <p>Total items: {totalCartItems}</p>
        </div>
      )}
    </>
  );
}

export default Card;
