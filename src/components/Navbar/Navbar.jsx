import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.items}>
        <NavLink to="/Profile" activeClassName={c.activeLink}>Profile</NavLink>
      </div>
      <div className={`${c.items} ${c.active}`}>
        <NavLink to="/Dialogs" activeClassName={c.activeLink}>Messages</NavLink>
      </div>
      <div className={c.items}>
        <NavLink to="/News" activeClassName={c.activeLink}>News</NavLink>
      </div>
      <div className={c.items}>
        <NavLink to="/Music" activeClassName={c.activeLink}>Music</NavLink>
      </div>
      <div className={c.items}>
        <NavLink to="/Settings" activeClassName={c.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}
export default Navbar;