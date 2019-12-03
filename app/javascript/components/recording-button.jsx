import React from "react";
import styled from "styled-components";
// var FontAwesome = require('react-fontawesome');
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// const element = <FontAwesomeIcon icon={faCoffee} />
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { TiMediaRecord } from 'react-icons/ti';


const Button = styled.button`
  padding: 0.75em 1.2em;
  outline: none;
  background-color: #36363c;
  border: none;
  border-radius: 5px ;
  color: white;
  font-size: 1em;
  margin: 5px 0 5px 5px;

  height: 46px;
  display: flex;
  align-self: flex-end;



  &:hover {
    background: #787885;
    color:black;
    cursor: pointer;
  }
`;

export default ({ recording, onClick }) => (
  <Button onClick={onClick}>{recording ? <span style={{color:"red", fontSize:"27px", display: "flex"}}><TiMediaRecord /></span> : <span style={{fontSize:"27px", display: "flex"}}><TiMediaRecord /></span>}</Button>
);