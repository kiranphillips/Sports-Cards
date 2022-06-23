import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import TeamPage from './TeamPage';
import HeaderMain from './Header';
import About from './About';
import Contact from './Contact';
import Login from './Login';


function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <HeaderMain />
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

