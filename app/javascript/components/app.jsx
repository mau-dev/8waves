import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '../components/grid'
import Sequencer from "./sequencer";
import PlayerProvider from "./player-provider";
import Tone from "tone";

// import axios from 'axios';
// import Grid from '@material-ui/core/Grid';
// import { hot } from 'react-hot-loader';
import styles from './app.scss';



class App extends React.Component {

    render() {

            return (
                <div class="wrapper sequencer">
                <Grid />


               </div>

        );
    }

}

export default App;