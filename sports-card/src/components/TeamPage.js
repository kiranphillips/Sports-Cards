import React, { useState } from "react";
import YourTeams from "./YourTeams"
import TeamCollection from "./TeamCollection";
import PlayerForm from "./PlayerForm";



function TeamPage() {
    const [teams, setTeam] = useState([]);
    const [myTeams, setMyTeams] = useState([]);

        function showStats(teamClicked) {
            const isInList = myTeams.some((team) => team.id === teamClicked.id);
            if (!isInList) {
                setMyTeams((currentTeams) => [...currentTeams, teamClicked]);
            }

        }
        function removeFromMyTeams(teamToRemove) {
            setMyTeams((currentTeams) => currentTeams.filter((team) => team.id !== teamToRemove));
        }
        return (
            <div>
                <h1>Home</h1>
                <YourTeams 
                    myTeams={myTeams}
                    removeFromMyTeams={removeFromMyTeams}

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

