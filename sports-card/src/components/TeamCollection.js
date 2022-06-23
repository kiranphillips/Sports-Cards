import React from "react";
import TeamCard from "./TeamCard"; 

  function TeamCollection({teams, setTeam, addMyTeam}){
    
  const teamInfo= teams.map((team)=>
  <TeamCard 
    key={team.id}
    team={team}
    onTeamClicked={addMyTeam}
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