import React from "react";
import styled from "styled-components";

const Order = ({ order }) => {
  const displayToppings = () => {
    const toppings = Object.keys(order.toppings);

    const orderedToppings = [];

    condiments.forEach((key) => {
      if (order.toppings[key]) {
        orderedToppings.push(key);
      }
    });
    return orderedCondiments;
  };
  return (
    <div>
      <h2>{order.name}</h2>
      <h3>{order.phone}</h3>
      <p>{order.crust}</p>
      <p>{order.topping1} topping1</p>
      {displayToppings().map((toppings, i) => (
        <p key={i}>{topping}</p>
      ))}
      <p>{order.instructions}</p>
    </div>
  );
};

export default Order;
