import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import OrderCard from "./Order";

const HomePage = (props) => {
  return (
    <HomeContainer>
      <header>
        <h1>Make the Pizza You've Always Wanted</h1>
      </header>
      <Link to="/CustomPizza">Create Your Pizza</Link>
      {props.orders.map((order, i) => (
        <OrderCard key={i} order={order} />
      ))}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #fff;
      margin-top: 5rem;
      font-size: 3.6rem;
      padding: 20px;
      border-radius: 15px;
    }
  }
  a {
    text-decoration: none;
    font-size: 2.4rem;
    padding: 20px;
    border: 3px solid #fff;
    color: #fff;
    margin: 5rem 0 5rem 0;
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
  div {
    color: white;
  }
`;

export default HomePage;
