import React from "react";

function TeamCard({ team, onTeamClicked }) {
    const {id, city, name, img} = team
    
  
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={id}
          onClick={() => onTeamClicked(team)}
        >
          <div className="image">
            <img alt="nba!" src={img} />
          </div>
          <div className="content">
          </div>
          <div>
            <span>
              {city} {name}
            </span>
            <span>
              <div className="ui center aligned segment basic">
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
  

export default TeamCard;
