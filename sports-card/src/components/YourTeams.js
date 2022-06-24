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
    <div className="ui segment inverted white my-team">
      <div class="myTeamHeading">My Team</div>
      <div className="ui two column grid">
        <div className="row my-team-row">
          {renderTeams}
        </div>
      </div>
    </div>
  );
}

export default YourTeams;
