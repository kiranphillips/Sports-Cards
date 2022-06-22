import React, {useEffect} from "react";
import TeamCard from "./TeamCard"; 


  function TeamCollection({teams, setTeams, showStats}){

    console.log(teams)
  
  const teamInfo= teams.map((team)=>
  <TeamCard 
  key={team.id}
  team={team}
  onTeamsClicked={showStats}
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