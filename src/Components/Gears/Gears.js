import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Gear from "./Gear/Gear";
import "./Gears.css";

const Gears = () => {
  const [gears, setGears] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setGears(data));
  });

  const handleAddToCart = (gear) => {
    console.log(gear);
    const newCart = [...cart, gear];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="gear-container">
        {gears.map((gear) => (
          <Gear
            key={gear.id}
            gear={gear}
            handleAddToCart={handleAddToCart}
          ></Gear>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Gears;
