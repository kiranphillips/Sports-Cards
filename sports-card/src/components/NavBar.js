import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    history("/.Login");
  }

  const renderLogout = isLoggedIn ? <button className="ui button" onClick={handleLogout}> Logout </button> : null

  return (
    <div className="navbar">
      <NavLink className="navlink" to="/"> Home </NavLink>
      <NavLink className="navlink" to="/.About"> About </NavLink>
      <NavLink className="navlink" to="/.Contact"> Contact </NavLink>
      {renderLogout}
    </div>
  );
};

export default NavBar;