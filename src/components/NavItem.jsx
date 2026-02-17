import React from "react";
import "./componentStyles.css";
import scribbleBackground from "../assets/scribbleBackground.png";
import { NavLink } from "react-router";

function NavItem({ text, href = "/", isScribble = false }) {
  return (
    /* Change <a> to <NavLink> and 'href' to 'to' */
    <NavLink 
      to={href} 
      className={({ isActive }) => 
        `navbarItem ${isScribble ? "is-scribble" : ""} ${isActive ? "active" : ""}`
      }
      style={{ "--scribble-url": isScribble ? `url(${scribbleBackground})` : "none" }}
    >
      <span>{text}</span>
    </NavLink>
  );
}

export default NavItem;