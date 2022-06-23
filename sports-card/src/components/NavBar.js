import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    history("/.Login");
  }

  const renderLogout = isLoggedIn ? <button onClick={handleLogout}> Logout </button> : null

  return (
    <div className="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/.About"> About </NavLink>
      <NavLink to="/.Contact"> Contact </NavLink>
      {/* <NavLink to="/.Login"> Login </NavLink> */}
      {renderLogout}
    </div>
  );
};

export default NavBar;