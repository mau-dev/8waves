// import React from 'react';
// import ReactDOM from 'react-dom';
// // // import classnames from 'classnames';

// import Tone from "tone";

// // // import KeyBehaviour from 'keyBehaviour';
// import Grid from './grid';


// // // import styles from './style.scss';

// // // const cx = classnames.bind(styles)


// // const waves = [{
// //         wave: 'kick',
// //         url: 'sounds/kick.wav'
// //     },
// //     {
// //         wave: 'tom-hi',
// //         url: 'sounds/tom-hi.wav'
// //     },
// //     {
// //         wave: 'tom-low',
// //         url: 'sounds/tom-low.wav'
// //     },
// //     {
// //         wave: 'snare',
// //         url: 'sounds/snare.wav'
// //     },
// //     {
// //          wave: 'rim',
// //         url: 'sounds/rim.wav'
// //     },
// //     {
// //          wave: 'cymbal',
// //         url: 'sounds/cymbal.wav'
// //     },
// //     {
// //          wave: 'shaker',
// //         url: 'sounds/shaker.wav'
// //     },
// //     {
// //          wave: 'snare',
// //         url: 'sounds/snare.wav'
// //     }

// // ];

// // const steps = 16;
// // const initialCellState = { triggered: false, activated: false };
// // const lineMap = ["BD", "CP", "CH", "OH"];
// // const initialState = [
// //   new Array(16).fill(initialCellState),
// //   new Array(16).fill(initialCellState),
// //   new Array(16).fill(initialCellState),
// //   new Array(16).fill(initialCellState)
// // ];


// // class Sequencer extends React.Component {
// //     //create state to track all these:
// //     //keep track of the steps pattern
// // //track of current step in the pattern
// // //to check if is currently playing, if play button clicked
// // //(something like: this.state = steps: [' ', ' ' ' ' ' ....'], currentStep: 0, playing: false )
// // //play button should start the clock, stop button should stop the clock
// // //replace setInterval with audioCOntext
// // //schedule the events in loop
// // //handler for play, handlePlay State
// // //to chnge back the state of playing, stop button will setState playing:false
// // //once on play update state of counting steps
// //         constructor() {
// //             super();
// //             this.state= {
// //             steps: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// //             currentStep: 0,
// //             playing: false

// //             };

// //             // this.steps = this.createSteps();

// //   }

// const steps = 16;
// const initialCellState = { triggered: false, activated: false };
// const waves = ["kick", "tomHi", "tomLow", "snare", "rim", "cymbal", "shaker", "snare"];
// const initialState = [
//   new Array(16).fill(initialCellState),
//   new Array(16).fill(initialCellState),
//   new Array(16).fill(initialCellState),
//   new Array(16).fill(initialCellState),
//   new Array(16).fill(initialCellState),
//   new Array(16).fill(initialCellState),
//   new Array(16).fill(initialCellState),
//   new Array(16).fill(initialCellState)
// ];

// console.log("initial state" + initialState);
// const Sequencer = ({ player }) => {
//   const [sequence, setSequence] = useState(initialState);
//   const [playing, setPlaying] = useState(true);
//   const [currentStep, setCurrentStep] = useState(0);



//     return (
//     <div>
//       <Grid  />
//       <h3>hello from sequencer</h3>
//     </div>
//   );

//  }





import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Tone from "tone";
import Grid from "./grid";
import PlayerProvider from "./player-provider";
import Bar from "./nav";
import PlayButton from "./play-button";
import RecordingButton from "./recording-button";
import ToolPanel from "./tool-panel";
import axios from "axios";
import { FaSave } from 'react-icons/fa';


const steps = 16;
const initialCellState = { triggered: false, activated: false };
const waves = ["kick", "tomHi", "tomLow", "snare", "rim", "cymbal", "shaker", "snare"];
const initialState = [
    new Array(16).fill(initialCellState),
    new Array(16).fill(initialCellState),
    new Array(16).fill(initialCellState),
    new Array(16).fill(initialCellState),
    new Array(16).fill(initialCellState),
    new Array(16).fill(initialCellState),
    new Array(16).fill(initialCellState),
    new Array(16).fill(initialCellState)
];
console.log("initial state" + initialState);
const Sequencer = ({ player }) => {

    const [sequence, setSequence] = useState(initialState);
    // console.log(setSequence);
    const [playing, setPlaying] = useState(false);
    // console.log(playing + " from sequencer playing")
    const [recording, setRecording] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    // const [currentInstrument, setCurrentInstrument] = useState(drumMachine);
    axios.get("/jams/21.json").then(res=>console.log(res.data.content));

    const toggleStep = (line, step) => {
        const sequenceCopy = [...sequence];
        const { triggered, activated } = sequenceCopy[line][step];
        sequenceCopy[line][step] = { triggered, activated: !activated };
        // console.log("toggled");
        setSequence(sequenceCopy);
        console.log(initialState)
    };

    const saveJam = () => {
        console.log("@@@@@@@")
        const jamTitle = prompt("give this session a title:")
        const data = {

            test: [...initialState]
        }
        // const url ="/jams.json";
        console.log(data + "data srom saveMusic" );
        console.log(jamTitle);
        const csrfToken = document.querySelector("meta[name=csrf-token]").content
        axios.defaults.headers.common["X-CSRF-Token"] = csrfToken
        axios.post('/jams.json', {
                firstName: 'Fred',
                lastName: 'Flintstone',
                data: (data),
                title: (jamTitle)
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        // fetch(url,{
        //     method:"POST",
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     },
        //     body : JSON.stringify(data)

        // }).then(res => res.json())
        // .then(res => console.log(res))
    }



    const nextStep = time => {
        for (let i = 0; i < sequence.length; i++) {
            for (let j = 0; j < sequence[i].length; j++) {
                const { triggered, activated } = sequence[i][j];
                // console.log(sequence);
                sequence[i][j] = { activated, triggered: j === time };
                if (triggered && activated) {
                    player.get(waves[i]).start();
                }
            }

        }
        setSequence(sequence);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (playing) {
                setCurrentStep((currentStep + 1) % steps);
                nextStep(currentStep);
            }
        }, 125);
        return () => {
            clearTimeout(timer);

        };

    }, [currentStep, playing]);

    return (
        <div className="wrapper">
      <Bar>

       <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
       <RecordingButton recording={recording} onCLick ={() => setRecording(!recording)} />
       <button style={{backgroundColor: "#36363c", color: "white", padding: "0.75em 1.2em", border: "none", borderRadius: "5px", height: "46px", margin: "5px 10px"}} onClick ={()=> saveJam()}><FaSave/></button>


      < /Bar>


      <Grid sequence={sequence} toggleStep={toggleStep} />
    </div>
    );
};

export default Sequencer;