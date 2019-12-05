import React from "react";
import styled from "styled-components";


const getBackground = (activated, triggered) => {
  switch (true) {
    case activated && triggered:
      return  "#56f584";
    case activated && !triggered:
      return "#cbff8b";
    case !activated && triggered:
      return "#787885";
    default:
      return "#36363c";
  }
};
const boxShadow = (activated, triggered) => {
  switch (true) {

    case activated && !triggered:
      return "0 0 12px 0 rgba(203, 255, 139, 0.7)";
        case activated && triggered:
      return "0 0 12px 0 rgba(203, 255, 139, 0.7)";

    default:
      return "0 1px 3px 0 rgba(0, 0, 0, 0.3)";
  }
};


const Cell = styled.div.attrs(({ activated, triggered }) => ({
  style: {
    background: getBackground(activated, triggered),
    boxShadow: boxShadow(activated, triggered)

  }
}))`
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin: 2px;
`;

export default Cell;