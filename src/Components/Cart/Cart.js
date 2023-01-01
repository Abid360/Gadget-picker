import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [random, setRandom] = useState([]);

  const randomGear = (cart) => {
    var randomItem = cart[Math.floor(Math.random() * cart.length)];
    const newRandom = [randomItem];
    setRandom(newRandom);
  };
  //   const { name } = cart;
  return (
    <div className="cart">
      <h4>Selected Items</h4>
      <p>Selected Items: {cart.length}</p>
      {cart.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
      <div className="select-button">
        <button className="choose-button" onClick={randomGear}>
          <p>Choose 1 For Me</p>
        </button>
        <button>
          <p className="reset-button">Reset Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
