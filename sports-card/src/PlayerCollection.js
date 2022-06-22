import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerCollection( {players} ) {

  console.log(players)

  
    const renderPlayers = players.map((player) => {
      return  console.log(player)
      // <PlayerCard
      // key={player.id}
      // player={player}
      // />)
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