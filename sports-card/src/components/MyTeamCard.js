import React from "react";

function MyTeamCard({ team }) {
    const {id, city, abbreviation, full_name, img, conference} = team
  
    return (
      <div id="teamCard" class="flip-card">
        <div class="flip-card-inner" key={id}>
            <div class="flip-card-front">
                <img className="logo" alt="nba!" src={img} />
            </div>
            <div class="flip-card-back">
                <div>{`City: ${city}`}</div>
                <div>{`Team Name: ${full_name} (${abbreviation})`}</div>
                <div>{`Conference: ${conference}`}</div>
            </div>
        </div>
      </div>
    );
  }
  
export default MyTeamCard;
