import React from "react";

function TeamCard({ team, onTeamClicked }) {
    const {id, city, full_name, name, img} = team
  
    return (
      <div id="teamCard">
        <div className="ui card" key={id} onClick={() => onTeamClicked(team)}>
          <div className="logo">
            <img className="logo" alt="nba!" src={img} />
          </div>
          <div>
            <span class="name">
              {full_name}
            </span>
          </div>
        </div>
      </div>
    );
  }
  

export default TeamCard;
