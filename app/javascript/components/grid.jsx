import React from "react";
import styled from "styled-components";
import Frame from "./frame";
import Cell from "./cell";
import PlayerProvider from "./player-provider";
import Bar from "./nav";
import PlayButton from "./play-button";
// import PlayButton from "./play-button";
import ToolPanel from "./tool-panel";

const Grid = ({ sequence, toggleStep }) => (

  <Frame rows={8} columns={16}>


    {sequence.map((line, i) =>
      line.map((time, j) => (
        <Cell
          key={i + j}
          column={j + 1}
          row={i + 1}
          activated={sequence[i][j]["activated"]}
          triggered={sequence[i][j]["triggered"]}
          onClick={() => toggleStep(i, j)}
        />
      ))
    )}
  </Frame>
);

export default Grid;