import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Gear.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../Cart/Cart";

const Gear = ({ gear, handleAddToCart }) => {
  const { id, name, price, img } = gear;
  console.log(gear);
  return (
    <Card
      className=" shadow p-3 mb-5 bg-white rounded"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{id}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Button
          onClick={() => handleAddToCart(gear)}
          className="btn"
          variant="primary"
        >
          Add to Cart
          <FontAwesomeIcon
            className="btn-icon"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
        </Button>
      </Card.Body>
    </Card>
    // <div className="gear">
    //   <img src={img} alt="img"></img>
    //   <h4>Buy this: {name}</h4>
    //   <p>Price: {price}</p>
    //   <small>Id: {id}</small>
    // </div>
  );
};

export default Gear;
