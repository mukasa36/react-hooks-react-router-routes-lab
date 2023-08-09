import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "80px", 
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  const classStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  return (
    <div className="navbar" style={classStyle}>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }} 
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Movies
      </NavLink>

      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Actors
      </NavLink>

      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Directors
      </NavLink>
    </div>
  );
}

export default NavBar;
