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
// import { Drawer } from '@material-ui/core';
import TemporaryDrawer from "./drawer-menu";


// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

import styles from "./app.scss";

class App extends React.Component {
    render() {
  return (
    <>
    <TemporaryDrawer/>

       <PlayerProvider>
      {({ player }) => {

        return <Sequencer player={player} />;
      }}
    </PlayerProvider>
    </>
  );
}
}

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);