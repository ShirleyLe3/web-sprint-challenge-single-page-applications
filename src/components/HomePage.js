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
      <Link to="/Pizza">Create Your Pizza</Link>
      {props.orders.map((order, i) => (
        <OrderCard key={i} order={order} />
      ))}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: url(https://media1.popsugar-assets.com/files/thumbor/oYivacUQxsjybVn80tgpJo2bahw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/06/10/017/n/1922398/bc378e5c_shutterstock_93720934.jpg);
  background-repeat: no-repeat, repeat;
  background-size: 1600px 1200px;
  background-position: center;
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
      color: white;
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
      background: black;
      color: red;
    }
  }
  div {
    color: white;
  }
`;

export default HomePage;
