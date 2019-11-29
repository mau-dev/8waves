import React from "react";
import ReactDOM from "react-dom";
import Sequencer from "./sequencer";
import styles from './app.scss';


// import "./styles.css";

class App extends React.Component {
    render() {
  return (
    <div className = "flex sequencer">
  <h3 className="text-white">hello from app component</h3>
 <Sequencer/>
  </div>
  );
}
}


export default App;