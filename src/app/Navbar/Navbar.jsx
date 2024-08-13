import React from "react";
import "./Navbar.css";

function navbar({ showCartSection, setShowCartSection }) {
  return (
    <div className="main-navbar">
      <div
        onClick={() => {
          setShowCartSection(false);
        }}
      >
        Profile.fyi Assignment
      </div>
      {!showCartSection ? (
        <div
          className="cart-btn"
          onClick={() => {
            setShowCartSection(true);
          }}
        >
          Cart
        </div>
      ) : (
        <div
          className="cart-btn"
          onClick={() => {
            setShowCartSection(false);
          }}
        >
          Home
        </div>
      )}
    </div>
  );
}

export default navbar;
