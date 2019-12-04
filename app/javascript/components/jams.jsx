import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        <div>All Jams</div>
        <ul>
        {
            jams.map(jam => {
                return(
                <>
                <li>{jam.id}</li>
                <li>{jam.title}</li>
                <button onClick={() => getJam(jam.id)}>Get Jam</button>
                <hr/>
                </>
                );
            })
        }
        </ul>
        </>
    );
}

export default Jams;