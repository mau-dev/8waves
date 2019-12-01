import React, { Component } from 'react'
// import cx from 'classnames'
// import PlayButton from "./play-button";


// import React from "react";
import styled from "styled-components";
// var FontAwesome = require('react-fontawesome');
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// const element = <FontAwesomeIcon icon={faCoffee} />
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';


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
  <Button onClick={onClick}>{playing ? <span><FaPause /></span> : <span><FaPlay /></span>}</Button>
);



class ToolPanel extends React.Component {
  state = {
    type: 'drumMachine',
    bpm: 120

  }



  changeBPM(bpm) {
    if (bpm > 300 || bpm < 60) return

    this.setState(
      () => ({
        bpm
      }),
      () => {
        this.pause()

        if (this.state.playing) this.play()
      }
    )
  }

  changeInstrument(type) {
    this.setState(
      () => ({
        type
      }),
      () => {
        this.pause()

        if (this.state.playing) this.play()
      }
    )
  }


  render() {
    const { bpm, type } = this.state

    return (

        <div className="container nav nav-bar">
          <div className="tools">
          <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />

              <div className="select-wrapper">
                <span>BPM</span>
                <input
                  type="number"
                  min="60"
                  max="300"
                  step="1"
                  defaultValue={this.state.bpm}
                  onChange={e => this.changeBPM(e.target.value)}
                />
              </div>

              <div className="select-wrapper">
                <span>Instrument</span>
                <select
                  value={this.state.type}
                  data-label="wave"
                  className="wave"
                  onChange={e => this.changeInstrument(e.target.value)}
                >
                  <option>DrumMachine</option>
                  <option>Piano</option>
                  <option>Ambient</option>

                </select>
              </div>
                <div className="select-wrapper slide-container">


          {/* <div className="input-container">
          //   <span id="bpm-display"></span>
          //   <input type="range" min="60" max="300" value="120" className="slider" id="bpm-slider"/>
          // </div> */}
        </div>
            </div>
         </div>

    )
  }
}

export {ToolPanel}