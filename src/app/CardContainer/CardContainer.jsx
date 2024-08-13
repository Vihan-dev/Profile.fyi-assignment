import React, { useState, useEffect } from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

function CardContainer({ cartDetails, setCartDetails, setShowCartSection }) {
  
  // to store the details of the item from api
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    // function to get the data
    const fetchData = async () => {
      const response = await fetch("/data/details.json");
      const data = await response.json();
      setCardDetails(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid-container">
        {cardDetails &&
          cardDetails.map((e) => (
            <Card
              name={e.name}
              color={e.color}
              price={e.price}
              cartDetails={cartDetails}
              setCartDetails={setCartDetails}
              setShowCartSection={setShowCartSection}
            />
          ))}
      </div>
    </>
  );
}

export default CardContainer;
