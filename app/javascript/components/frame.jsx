import React from "react";
import styled from "styled-components";

const Frame = styled.div`

  display: grid;
  background-color: #28282c;
  padding: 0 40px 40px 40px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  grid-template-rows: repeat(${props => props.rows}, 1fr);
  width: 70vw;
  margin: 0 auto;
  height: calc(70vh - 60px);
`;

export default Frame;