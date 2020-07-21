import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Form from "./components/Form";
// import Order from "./components/Order";
import HomePage from "./components/HomePage";

const App = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <AppContainer>
      <Nav />
      <Switch>
        <Route path="/Pizza">
          <Form addOrder={addOrder} />
        </Route>
        <Route exact path="/">
          <>
            <h1>Lambda Eats</h1>
            <p>Create Your Pizza</p>
          </>
          <HomePage orders={orders} />
          // link to Order
        </Route>
      </Switch>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background: #000;
`;

export default App;
