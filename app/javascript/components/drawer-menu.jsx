import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { FaSave } from 'react-icons/fa';
import SaveIcon from '@material-ui/icons/Save';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Jams from './jams';
import Link from '@material-ui/core/Link';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  //<a class="nav-item nav-link"> <%= link_to 'Sign out', destroy_user_session_path, method: :delete, class: "sign-out"  %></a>
  // <a class="nav-item nav-link" href="/jams">sessions</a>
    // <a class="nav-item nav-link" href="/playground">sessions</a>

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Browse sessions', 'Saved sessions' ].map((text, index) => (
          <ListItem button key={text}>

            <ListItemIcon>{index % 2 === 0 ? <AppsIcon /> : <SaveIcon/> }</ListItemIcon>
            {index % 2 === 0 ? <Link href="/jams" > <ListItemText primary={text} /></Link> : <Link href="/jams/1"><ListItemText primary={text} /></Link> }

          </ListItem>
        ))}
      </List>
        <Divider />
      <List>
        {['New Session', 'Sign Out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AddIcon /> : <PersonIcon />}</ListItemIcon>
             {index % 2 === 0 ? <Link href="/playground" > <ListItemText primary={text} /></Link> : <a rel="nofollow" data-method="delete" href="/users/sign_out"><ListItemText primary={text} /></a> }
          </ListItem>
        ))}
      </List>


    </div>
  );

  return (
    <div>
      <Button style={{  position: "absolute", left: "-3px", height: "60px", color: "white", borderTopRightRadius: "35px", borderBottomRightRadius: "35px", top: "3vh", backgroundColor: "#28272C"}}onClick={toggleDrawer('left', true)}><MenuIcon /></Button>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}