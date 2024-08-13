import React, { useState, useEffect } from "react";
import "./PriceDetails.css";

function PriceDetails({ cartDetails }) {
  //total price of the cart
  const [totalPrice, setTotalPrice] = useState(0);
  // total discount
  const [totalDiscount, setTotalDiscount] = useState(0);
  // total items in the cart
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let sum = 0,
      items = 0;
    cartDetails.map((e) => {
      sum += e.price * e.quantity;
      items += e.quantity;
    });
    setTotalPrice(sum);
    setTotalItem(items);
    let discount = (sum / 100) * 10;
    setTotalDiscount(discount);
  }, [cartDetails]);

  return (
    <div className="price-details">
      <h3>PRICE DETAILS</h3>
      <div className="price-row">
        <span>Price ({totalItem} items)</span>
        <span>₹{totalPrice}</span>
      </div>
      <div className="price-row">
        <span>Discount (10% off)</span>
        <span className="discount">- ₹{totalDiscount}</span>
      </div>
      <hr />
      <div className="price-row total">
        <span>Total Amount</span>
        <span>₹{totalPrice - totalDiscount}</span>
      </div>
      <div className="savings">
        You will save ₹{totalDiscount} on this order
      </div>
    </div>
  );
}

export default PriceDetails;
