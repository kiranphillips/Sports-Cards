import React, {useEffect, useState} from "react";
import PlayerCollection from "./PlayerCollection";


function PlayerPage() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
    
  
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(response => setPlayers(response.data))
            // .catch(err => console.error(err));
        }, [])


        return (
            <div>
               <PlayerCollection
               players={players} 
             />
            </div>
          )
        

}

export default PlayerPage;

