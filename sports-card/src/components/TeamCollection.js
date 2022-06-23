import React, {useEffect, useState} from "react";
import TeamCard from "./TeamCard"; 

  function TeamCollection({teams, setTeam, showStats}){
    const [image, setImage] = useState([])
    
    useEffect(() => { 
      fetch('https://www.balldontlie.io/api/v1/teams')
          .then(response => response.json())
          .then(response => setTeam(response.data)) 
      }, [setTeam])

      useEffect(() => { 
        fetch("http://localhost:3000/data")
        .then(response => response.json())
        .then(response => setImage(response))
    },[])
      
  
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