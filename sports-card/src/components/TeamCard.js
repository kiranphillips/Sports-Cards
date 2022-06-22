import React from "react";

function TeamCard({ team }) {
    const {id, abbreviation, city, conference, division, full_name: fullName, name} = team
    
  
return (
    <div className="ui column">  
      <div
        className="ui card"
        key={id}
        >
        <div className="content">
          <div className="header">
            {fullName}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
