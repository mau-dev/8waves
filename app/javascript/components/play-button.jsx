import React from "react";
import styled from "styled-components";


const Button = styled.button`
  padding: 0.75em 2em;
  outline: none;
  background-color: #36363c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1em;
  margin: 5px 0;

  height: 46px;
  display: flex;
  align-self: flex-end;



  &:hover {
    background: #787885;
    color:black;
    cursor: pointer;
  }
`;

export default ({ playing, onClick }) => (
  <Button onClick={onClick}>{playing ? "Stop" : "Play"}</Button>
);