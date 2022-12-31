import React from "react";
import Gears from "../Gears/Gears";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 className="text-info">Welcome to Gadget Picker</h1>
      <h3>You can select 4 products that you like</h3>
      <h3>We will choose perfect one for you</h3>
      <Gears></Gears>
    </div>
  );
};

export default Header;
