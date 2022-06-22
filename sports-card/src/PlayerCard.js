import React from "react";

function PlayerCard({ player }) {
    const {id, first_name} = player
    
    console.log(player)
  
return (
    <div className="ui column">  
      <div
        className="ui card"
        key={id}
        >
        <div className="content">
          <div className="header">
            {first_name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
