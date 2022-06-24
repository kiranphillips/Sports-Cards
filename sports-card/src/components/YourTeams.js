import React from "react";
import MyTeamCard from "./MyTeamCard";

function YourTeams({ myTeams, removeMyTeam }) {
  const renderTeams = myTeams.map((team) => (
    <MyTeamCard  
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
