import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Gear.css";

const Gear = (props) => {
  const { id, name, price, img } = props.gear;
  return (
    <Card
      className="shadow p-3 mb-5 bg-white rounded"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{id}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
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
