import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import styled from "styled-components";
const Div = styled.div`
  & main {
    margin-top: 1rem;
  }
`;

export default function RootLayout() {
  return (
    <Div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Div>
  );
}
