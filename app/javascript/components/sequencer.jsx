import React from 'react';
import ReactDOM from 'react-dom';
// import classnames from 'classnames';

// import KeyBehaviour from 'keyBehaviour';
// import Grid from 'grid';


// import styles from './style.scss';

// const cx = classnames.bind(styles)


const waves = [{
        wave: 'kick',
        url: 'sounds/kick.wav'
    },
    {
        wave: 'tom-hi',
        url: 'sounds/tom-hi.wav'
    },
    {
        wave: 'tom-low',
        url: 'sounds/tom-low.wav'
    },
    {
        wave: 'snare',
        url: 'sounds/snare.wav'
    },
    {
         wave: 'rim',
        url: 'sounds/rim.wav'
    },
    {
         wave: 'cymbal',
        url: 'sounds/cymbal.wav'
    },
    {
         wave: 'shaker',
        url: 'sounds/shaker.wav'
    },
    {
         wave: 'snare',
        url: 'sounds/snare.wav'
    }

];



class Sequencer extends React.Component {

        constructor() {
            super();

            this.steps = this.createSteps();

  }


  createSteps() {
    let steps = new Array(16);
    for (let i = 0; i < 16; i++) {
        console.log(steps);
      steps[i] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    }

    return steps;
  }

  getScale() {
    const tones = [195.995, 220, 233.082, 261.626, 293.665, 311.127, 349.228, 391.995];
    return tones
  }

   getWaves() {
    //get audio files
    const waves = [];
    return waves
  }


}

const sequencer = new Sequencer();