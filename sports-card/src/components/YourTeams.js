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
      My Team
      <div className="ui two column grid">
        <div className="row bot-army-row">
          {renderTeams}
        </div>
      </div>
    </div>
  );
}

export default YourTeams;
