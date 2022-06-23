import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import TeamPage from './TeamPage';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Login from './Login';


function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavBar setIsLoggedIn={setIsLoggedIn}/>
      <Header />
      <Routes>
        <Route path="/" element={<TeamPage isLoggedIn={isLoggedIn}/>} />
        <Route path="/.About" element={<About />} />
        <Route path="/.Contact" element={<Contact />} />
        <Route path="/.Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

    </div>
  );
}

export default App;

