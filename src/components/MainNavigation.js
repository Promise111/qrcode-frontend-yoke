import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  height: 1rem;
  //   background-color: gray;
  margin-top: 0;
  & ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
  & .active {
    color: black !important;
  }
`;

export default function MainNavigation() {
  return (
    <Div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Code
            </NavLink>
          </li>
        </ul>
      </nav>
    </Div>
  );
}
