"use client";

import React, { useState } from "react";
import CardContainer from "./CardContainer/CardContainer";
import Navbar from "./Navbar/Navbar";
import Cart from "./Cart/Cart";
export default function Home() {
  // to switch between shopping section and cart section
  const [showCartSection, setShowCartSection] = useState(false);
  // to store the details of products added in cart
  const [cartDetails, setCartDetails] = useState([]);
  
  return (
    <>
      <Navbar
        showCartSection={showCartSection}
        setShowCartSection={setShowCartSection}
      />
      {!showCartSection ? (
        <CardContainer
          cartDetails={cartDetails}
          setCartDetails={setCartDetails}
          setShowCartSection={setShowCartSection}
        />
      ) : (
        <Cart cartDetails={cartDetails} setCartDetails={setCartDetails} />
      )}
    </>
  );
}
