import React, { useEffect, useState } from "react";
import Gear from "./Gear/Gear";
import "./Gears.css";

const Gears = () => {
  const [gears, setGears] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setGears(data));
  });
  return (
    <div className="shop-container">
      <div className="gear-container">
        {gears.map((gear) => (
          <Gear key={gear.id} gear={gear}></Gear>
        ))}
      </div>
      <div className="cart-container">
        <h4>Cart Summery</h4>
      </div>
    </div>
  );
};

export default Gears;
