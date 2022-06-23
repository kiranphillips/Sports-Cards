import React from "react";

function PlayerCard({ player }) {
    const {id, first_name, last_name, position, team} = player
    
    // console.log(player)
  
return (
    <div className="ui column">  
      <div
        className="ui card"
        key={id}
        >
        <div className="content">
          <div className="header">
            {first_name} {last_name}
          </div>
          <div className="extra content">
          <span>
            <i className="icon basketball ball" />
            {position}
          </span>
          <span>
            {team}
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
