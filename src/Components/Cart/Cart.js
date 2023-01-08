import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [random, setRandom] = useState([]);
  //   const [num, setNum] = useState(0);

  //   function randomNumberRange(min, max) {
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  //   const handleClick = () => {
  //     setNum(randomNumberRange(1, 10));
  //   };
  const [num, setNum] = useState([]);

  const randomGear = (cart) => {
    let randomValue = cart[Math.floor(Math.random() * cart.length)];
    setNum(randomValue);
  };

  //   const randomGear = (cart) => {
  //     var randomItem = cart[Math.floor(Math.random() * cart.length)];
  //     console.log(randomItem);
  //     const newRandom = [randomItem];
  //     setRandom(newRandom);
  //   };
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
        <div>
          {cart.map((item) => (
            <h3 key={item.id}>number is:{item.id}</h3>
          ))}
        </div>
        <div>
          <p>Choosen One: {num}</p>
        </div>
        <button>
          <p className="reset-button">Reset Cart</p>
          <h2>number is: {num}</h2>
        </button>
      </div>
    </div>
  );
};

export default Cart;
