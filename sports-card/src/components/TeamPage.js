import React, {useEffect, useState} from "react";
import TeamCollection from "./TeamCollection";


function TeamPage( {players} ) {
    const [teams, setTeam] = useState([])

    useEffect(() => { 
        fetch('https://www.balldontlie.io/api/v1/teams')
            .then(response => response.json())
            .then(response => setTeam(response.data))
            // .catch(err => console.error(err));
        }, [])



        return (
            <div>
               <TeamCollection
               teams={teams} 
             />
            </div>
          )
        

}

export default TeamPage;

