import React from "react";
import styled from "styled-components";

const Order = ({ order }) => {
  const displayToppings = () => {
    const toppings = Object.keys(order.toppings);

    const orderedToppings = [];

    toppings.forEach((key) => {
      if (order.toppings[key]) {
        orderedToppings.push(key);
      }
    });
    return orderedToppings;
  };
  return (
    <div>
      <h1>Congrats! Pizza is on its way!</h1>

      <h2>{order.name}</h2>
      <h3>{order.phone}</h3>
      <p>{order.crust}</p>
      <p>{order.sauce} sauce</p>
      {displayToppings().map((toppings, i) => (
        <p key={i}>{toppings}</p>
      ))}
      <p>{order.instructions}</p>
    </div>
  );
};

export default Order;
