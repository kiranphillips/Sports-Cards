import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerCollection( {players} ) {

if (players === undefined) 
return null

  
    const renderPlayers = players.map((player) => {
      return ( <PlayerCard
      key={player.id}
      player={player}
      />)
    });
  
    return (
      <div className="ui four column grid">
        <div className="row">
        {renderPlayers}
        </div>
      </div>
    );
  }
  
  export default PlayerCollection;