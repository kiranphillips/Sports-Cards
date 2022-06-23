import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import TeamPage from './TeamPage';
import Header from './Header';
import About from './About';
import Contact from './Contact';


function App() {
  // const [players, setPlayers] = useState([])

  // useEffect(() => {
  

  //     fetch('https://www.balldontlie.io/api/v1/players')
  //         .then(response => response.json())
  //         .then(response => setPlayers(response.data))
  //         // .catch(err => console.error(err));
  //     }, [])


  //     console.log(players.team)


  return (
    <div>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/.About" element={<About />} />
        <Route path="/.Contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;

