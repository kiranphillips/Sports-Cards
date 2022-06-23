import React, { useEffect, useState } from "react";
import YourTeams from "./YourTeams"
import TeamCollection from "./TeamCollection";
import TeamForm from "./TeamForm";
import { Navigate } from "react-router-dom";



function TeamPage( {isLoggedIn}) {
    const [teams, setTeam] = useState([]);
    const [myTeams, setMyTeams] = useState([]);

    useEffect(() => { 
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(response => setTeam(response)) 
        }, [])

    if(!isLoggedIn) return <Navigate to="/.Login" />
  
        function addMyTeam(teamClicked) {
            const isInList = myTeams.some((team) => team.id === teamClicked.id);
            if (!isInList) {
                setMyTeams([teamClicked]);
            }

        }
        function removeMyTeam(teamToRemove) {
            setMyTeams((currentTeams) => currentTeams.filter((team) => team.id !== teamToRemove.id));
        }

        function handleAddTeam(newTeam) {
            setTeam([...teams, newTeam]);
          }

        return (
            <div>
                <YourTeams 
                    myTeams={myTeams}
                    removeMyTeam={removeMyTeam}

                />
                <TeamCollection
                    teams={teams} 
                    addMyTeam={addMyTeam}
             />
             <TeamForm onAddTeam={handleAddTeam}/>

            </div>
          )
        

}

export default TeamPage;

