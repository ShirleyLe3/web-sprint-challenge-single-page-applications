import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = (props) => {
  return (
    <Navigation>
      <Link to="/">Home</Link>
    </Navigation>
  );
};

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: red;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5rem;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    margin-right: 40px;
    font-size: 2rem;
  }
`;

export default Nav;
