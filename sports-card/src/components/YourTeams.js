import React from "react";
import TeamCard from "./TeamCard";

function YourTeams({ myTeams, removeMyTeam }) {
  const renderTeams = myTeams.map((team) => (
    <TeamCard  
      key={team.id}
      team={team}
      onTeamClicked={removeMyTeam}
    />
  ))

  
  return (
    <div className="ui segment inverted white bot-army">
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
