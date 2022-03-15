import React from "react";
import SectionCard from "./SectionCard/SectionCard";
import "./Section.css";

const Section = (props) => {
  let { pizzas } = props;
  return (
    <div className="pizzas-list">
      {pizzas.map((item) => (
        <SectionCard pizza={item} key={item.id} />
      ))}
    </div>
  );
};

export default Section;
