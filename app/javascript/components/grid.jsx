import React from 'react';
import ReactDOM from 'react-dom';

// import axios from 'axios';
// import Grid from '@material-ui/core/Grid';
// import { hot } from 'react-hot-loader';
// import styles from './style.scss';
import styles from './app.scss';
// import Sequencer from 'sequencer';
// import KeyBehaviour from 'keyBehaviour';


class Grid extends React.Component {

    render() {

            return (
               <div>
                <button id="stop" class="navigation-buttons fa fa-stop" disabled></button>
                 <button id="play" class="navigation-buttons fa fa-play"></button>

                {/* sequencer div */}
               <div className=" wrapper-sequencer flex">
               <Sequencer>
               <KeyBehaviour/>


                  <div className="keys-column step-1">
                   {/* keys column, column 1 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-2">  {/* keys column, column 2 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-3">  {/* keys column, column 3 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-4">  {/* keys column, column 4 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-5">  {/* keys column, column 5 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-6">  {/* keys column, column 6 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-7">  {/* keys column, column 7 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-8">  {/* keys column, column 8 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                   <div className="keys-column step-9">  {/* keys column, column 9 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-10">  {/* keys column, column 10 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-11">  {/* keys column, column 11 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-12">  {/* keys column, column 12 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-13">  {/* keys column, column 13 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-14">  {/* keys column, column 14 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-15">  {/* keys column, column 15 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

                    <div className="keys-column step-16">  {/* keys column, column 16 */}
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                  </div>

              </Sequencer>

             </div> {/* closing sequencer div */}
             <audio src="sounds/shaker.wav"></audio>
            <audio  src="sounds/clap.wav"></audio>
            <audio src="sounds/cymbal.wav"></audio>
            <audio src="sounds/tom-hi.wav"></audio>
            <audio src="sounds/rim.wav"></audio>
            <audio src="sounds/tamb.wav"></audio>
            <audio src="sounds/kick.wav"></audio>
            <audio src="sounds/tom-low.wav"></audio>
            <audio src="sounds/snare.wav"></audio>
  </div>


        );
    }

}

export default Grid;