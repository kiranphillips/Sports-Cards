import React from "react";

function TeamCard({ team, onTeamClicked }) {
    const {id, city, full_name: fullName, name} = team
    
  
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={id}
          onClick={() => onTeamClicked(team)}
        >
          <div className="image">
            {/* <img alt="nba!" src={"https://cdn.iconscout.com/icon/free/png-256/nba-282876.png"} /> */}
          </div>
          <div className="content">
    
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {city}
            </span>

            <span>
              <i className="icon shield" />
              {name}
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
