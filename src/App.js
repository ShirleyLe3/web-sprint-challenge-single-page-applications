import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Navr from "./components/Nav";
import Form from "./components/Form";
import HomePage from "./components/HomePage";

const App = () => {

  const [orders, setOrders] = useState([]);

  const addOrder = order => {
    setOrders([...orders, order]);
  }

  return (
    <AppContainer>
      <NavBar />
      <Switch>
        <Route path='/buildaburger'>
          <Form addOrder={addOrder} />
        </Route>
        <Route exact path='/'>
        <>
        <h1>Lambda Eats</h1>
        <p>Create Your Pizza</p>
      </>
          <HomePage orders={orders} />
        </Route>
      </Switch>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background: #000;
`

  return (

  );
};
export default App;
