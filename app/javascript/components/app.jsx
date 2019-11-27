import React from 'react';
import ReactDOM from 'react-dom';
import Sequencer from '../components/sequencer'

// import axios from 'axios';
// import Grid from '@material-ui/core/Grid';
// import { hot } from 'react-hot-loader';
import styles from './app.scss';



class App extends React.Component {

    render() {

            return (
                <div class="wrapper sequencer">
                <Sequencer />


               </div>

        );
    }

}

export default App;