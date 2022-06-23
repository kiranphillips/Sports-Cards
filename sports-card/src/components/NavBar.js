import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({setIsLoggedIn}) => {
  const history = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    history("/.Login");
  }

  return (
    <div className="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/.About"> About </NavLink>
      <NavLink to="/.Contact"> Contact </NavLink>
      <NavLink to="/.Login"> Login </NavLink>
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
};

export default NavBar;