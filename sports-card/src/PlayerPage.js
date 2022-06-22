import React, {useEffect, useState} from "react";
import PlayerCollection from "./PlayerCollection";


function PlayerPage() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const options = {
             method: 'GET',
            headers: {
             'X-RapidAPI-Key': 'bdd71d1ec7mshffe58d5535f2b4fp1b130cjsn21f099027ea1',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
         }
        };
  
        fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
            .then(response => response.json())
            .then(response => setPlayers(response))
            .catch(err => console.error(err));
        }, [])

        console.log(players)

        return (
            <div>
               <PlayerCollection
               key={players.data}
               players={players} 
             />
            </div>
          )
        

}

export default PlayerPage;

