import React from "react";
import styled from "styled-components";
import ToolPanel from "./tool-panel";
import PlayButton from "./play-button";


export const NAVBAR_HEIGHT = "60px";

const Bar = styled.div`
  width: 50px;
   text-align: center;
 position: absolute;
`;

const NavBar = ({ children }) => {

    return (

<div>
   <Bar>{children}</Bar>
   <ToolPanel/>
</div>


        );
};



export default NavBar;