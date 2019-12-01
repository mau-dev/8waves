import React, { Component } from 'react'
// import cx from 'classnames'
import PlayButton from "./play-button";


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
                  onChange={e => this.changeWaveType(e.target.value)}
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

export default ToolPanel