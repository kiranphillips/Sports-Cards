import React, {useEffect} from "react";
import TeamCard from "./components/TeamCard";


  function TeamCollection({teams, setTeams, showStats}){
    useEffect(() => {
        fetch("https://balldontlie.io/api/v1/teams")
          .then((res)=> res.json())
          .then((data)=> setTeams(data))
    },[setTeams])


  const teamInfo= teams.map((team)=>
  <TeamCard 
  key={team.id}
  team={team}
  onTeamsClicked={showStats}
  />
)
  
    return (
      <div className="ui four column grid">
        <div className="row">
        {teamInfo}
        Collection of all teams
        </div>
      </div>
    );
  }
  
  export default TeamCollection;