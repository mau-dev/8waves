// import React from "react";
// import ReactDOM from "react-dom";
// import Sequencer from "./sequencer";
// import styles from './app.scss';


// // import "./styles.css";

// class App extends React.Component {
//     render() {
//   return (
//     <div className = "flex sequencer">
//   <h3 className="text-white">hello from app component</h3>
//  <Sequencer/>
//   </div>
//   );
// }
// }


// export default App;



import React from "react";
import ReactDOM from "react-dom";
import Sequencer from "./sequencer";
import PlayerProvider from "./player-provider";

import styles from "./app.scss";

class App extends React.Component {
    render() {
  return (
       <PlayerProvider>
      {({ player }) => {

        return <Sequencer player={player} />;
      }}
    </PlayerProvider>
  );
}
}

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);