import React from "react";
import "./Discounts.css";

const discounts = () => {
  return (
    <div className="discounts">
      <div className="discount">
        <p>Buy 5 pizzas and get one for free!</p>
      </div>
      <div className="discount">
        <p>
          Buy 2 big pizzas and 2 big smoothies and get 3rd smoothie for free!
        </p>
      </div>
      <div className="discount">
        <p>
          Have dinner with us on your birthday and get -30% off from your check
        </p>
      </div>
    </div>
  );
};

export default discounts;
