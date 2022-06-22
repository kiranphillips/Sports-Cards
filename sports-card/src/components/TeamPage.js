import React, {useEffect, useState} from "react";
import TeamCollection from "./TeamCollection";


function TeamPage() {
    const [team, setTeam] = useState([])

    useEffect(() => { 
        fetch('https://balldontlie.io/api/v1/teams')
            .then(response => response.json())
            .then(response => setTeam(response))
            .catch(err => console.error(err));
        }, [])


        return (
            <div>
               <TeamCollection
               key={team.data}
               team={team} 
             />
            </div>
          )
        

}

export default TeamPage;

