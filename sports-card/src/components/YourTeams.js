import React from "react";
import TeamCard from "./TeamCard";

function YourTeams({ myTeams, removeFromMyTeams}) {
  const renderTeams = myTeams.map((team) => (
    console.log(removeFromMyTeams),
    <TeamCard  
      key={team.id}
      team={team}
      onTeamClicked={removeFromMyTeams}
    />
  ))
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {renderTeams}
          My Team
        </div>
      </div>
    </div>
  );
}

export default YourTeams;
