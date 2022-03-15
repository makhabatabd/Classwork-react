import React from "react";
import "./SectionCard.css";

const SectionCard = (props) => {
  let { pizza } = props;
  return (
    <div className="pizza-list">
      <h2 className="pizza-type">{pizza.type}</h2>
      <img src={pizza.image} alt="pizza" />
      <h4>{pizza.price}</h4>
      <h4>{pizza.rate}</h4>
    </div>
  );
};

export default SectionCard;
