import React from "react";
import styled from "styled-components";
import ToolPanel from "./tool-panel";
import PlayButton from "./play-button";
import RecordingButton from "./recording-button";


export const NAVBAR_HEIGHT = "0px";

const Bar = styled.div`
  width: 50px;
   text-align: center;
 position: absolute;
 margin-left: 18vw;
 display: flex;
 margin-top: 48px;
`;

const NavBar = ({ children }) => {

    return (

<div>
   <Bar>{children}</Bar>
   <ToolPanel />

</div>


        );
};



export default NavBar;