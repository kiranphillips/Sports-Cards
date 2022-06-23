import React, { useState } from "react";
import YourTeams from "./YourTeams"
import TeamCollection from "./TeamCollection";
import PlayerForm from "./PlayerForm";
import { Navigate } from "react-router-dom";



function TeamPage( {isLoggedIn}) {
    const [teams, setTeam] = useState([]);
    const [myTeams, setMyTeams] = useState([]);

    if(!isLoggedIn) return <Navigate to="/.Login" />

        function showStats(teamClicked) {
            const isInList = myTeams.some((team) => team.id === teamClicked.id);
            if (!isInList) {
                setMyTeams((currentTeams) => [teamClicked]);
            }

        }
        // function removeFromMyTeams(teamToRemove) {
        //     setMyTeams((currentTeams) => currentTeams.filter((team) => team.id !== teamToRemove));
        // }
        return (
            <div>
                <YourTeams 
                    myTeams={myTeams}
                    // removeFromMyTeams={removeFromMyTeams}

                />
                <TeamCollection
                    teams={teams} 
                    setTeam={setTeam}
                    showStats={showStats}
             />
             <PlayerForm />

            </div>
          )
        

}

export default TeamPage;

