import React from "react";
import styled from "styled-components";
const Div = styled.div`
  text-align: center;
  & > p {
    font-size: 25px;
    font-weight: 700;
  }
`;

export default function NotFound() {
  return (
    <Div>
      <p>404 | Page not found</p>
    </Div>
  );
}
