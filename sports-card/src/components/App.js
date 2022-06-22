import TeamPage from './TeamPage';
import PlayerPage from './PlayerPage';
import React, { useEffect, useState } from 'react';


function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
  

      fetch('https://www.balldontlie.io/api/v1/players')
          .then(response => response.json())
          .then(response => setPlayers(response.data))
          // .catch(err => console.error(err));
      }, [])

      console.log(players.team)

  return (
    <div className="App">
      <div className='ui grid'>
      <TeamPage 
      players={players}
      />
      </div>
    </div>
  );
}

export default App;

