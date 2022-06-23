import React, {useEffect, useState} from "react";
import TeamCard from "./TeamCard"; 

  function TeamCollection({teams, setTeam, showStats}){
    const [image, setImage] = useState([])
    
    useEffect(() => { 
      fetch('http://localhost:3000/data')
          .then(response => response.json())
          .then(response => setTeam(response)) 
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