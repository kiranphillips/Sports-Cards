import React, {useEffect, useState} from "react";
import TeamCard from "./TeamCard"; 

  function TeamCollection({teams, setTeam, showStats}){
    
    useEffect(() => { 
      fetch('http://localhost:3000/data')
          .then(response => response.json())
          .then(response => setTeam(response)) 
      }, [setTeam])

  
  const teamInfo= teams.map((team)=>
  <TeamCard 
    key={team.id}
    team={team}
    onTeamClicked={showStats}
  />
)
  
    return (
      <div className="ui four column grid">
        <div className="row" id="header">
        {teamInfo}
        </div>
      </div>
    );
  }
  
  export default TeamCollection;