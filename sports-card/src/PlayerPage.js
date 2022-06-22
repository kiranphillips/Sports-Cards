import React, {useEffect, useState} from "react";
import PlayerCollection from "./PlayerCollection";


function PlayerPage() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
    
  
        fetch('https://www.balldontlie.io/api/v1/players')
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
