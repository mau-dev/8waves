import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';


const Jams = (props) => {

    const [jams, setJams] = useState([]);


    useEffect(() => {
    axios.get('/jams.json')
  .then(function (response) {
    // handle success
    console.log("axios all jams!")
    console.log(response);
    setJams(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    }, []);

    const getJam = (jamId) => {
        console.log("getting jam thru axios!");

        console.log("jam id is", jamId);

    axios.get(`jams/${jamId}.json`)
  .then(function (response) {
    // handle success
    console.log("axios a single jam")
    console.log(response);

    let updatedSequence = response.data.content.test;

    // console.log("updatedSequence", updatedSequence);
    props.updateJam(updatedSequence);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


    }

    console.log("rendering!");
    console.log("jams!!", props.jams);
    return (
        <>
      {/* <button style={{ position: "absolute", top: "3vh", right: "-3px", height: "60px", backgroundColor: "#28272C", color: "white", padding: "0.75em 1.2em",  borderTopLeftRadius: "35px", borderBottomLeftRadius: "35px", border: "none" }}> <AddIcon  /><a href="/playground"></a></button> } */}
        <ul style = {{width: "150px", position: "absolute", top: "10vh", right: "0"}}>
        {
            jams.map(jam => {
                return(
                <>

                <button style={{position: "relative", right: "-10px", height: "60px", backgroundColor: "#28272C", color: "white", padding: "0.75em 1.2em", border: "none", borderTopLeftRadius: "35px", borderBottomLeftRadius: "35px", width: "100px", marginBottom: "10px"}} onClick={() => getJam(jam.id)}>{jam.title}</button>

                </>
                );
            })
        }
        </ul>
        </>
    );
}

export default Jams;