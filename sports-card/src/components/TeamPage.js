import React, { useState } from "react";
import YourTeams from "./YourTeams"
import TeamCollection from "./TeamCollection";


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
                <YourTeams 
                    myTeams={myTeams}
                    removeFromMyTeams={removeFromMyTeams}

                />
                <TeamCollection
                    teams={teams} 
                    setTeam={setTeam}
                    showStats={showStats}
             />
            </div>
          )
        

}

export default TeamPage;

