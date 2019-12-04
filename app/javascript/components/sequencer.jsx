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
import Jams from './jams';

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
    // const [jams, setJams] = useState([]);

    // const [currentInstrument, setCurrentInstrument] = useState(drumMachine);

    // useEffect(() => {

    // axios.get("/jams/4.json").then(res=>{
    //     console.log("axios running")

    //     console.log(res.data.content)
    //     setSequence(res.data.content.test)


    // });

    // }, []);


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
        axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
        console.log("data", data);
        console.log("sequence", sequence);
        axios.post('/jams.json', {
                firstName: 'Fred',
                lastName: 'Flintstone',
                data: {test: sequence},
                title: (jamTitle)
            })
            .then(function(response) {
                console.log(response);
                console.log("saved jam in databased!!!");
                // get hold of all the latest saved jams
                // pass it to jams
                // setJams(response.....something something)
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

    const updateJam = (updatedSequence) => {
        console.log("updating jam!");
        console.log("at sequencer now!")
        console.log("updatedSequence", updatedSequence);
        setSequence(updatedSequence);
    }

    return (
        <div className="wrapper">
      <Bar>

       <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
       <RecordingButton recording={recording} onCLick ={() => setRecording(!recording)} />
       <button style={{backgroundColor: "#36363c", color: "white", padding: "0.75em 1.2em", border: "none", borderRadius: "5px", height: "46px", margin: "5px 10px"}} onClick ={()=> saveJam()}><FaSave/></button>


      < /Bar>


      <Grid sequence={sequence} toggleStep={toggleStep} />
      <Jams updateJam={updateJam}/>
    </div>
    );
};

export default Sequencer;