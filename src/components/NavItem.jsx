import React from "react";
import "./componentStyles.css";
import scribbleBackground from "../assets/scribbleBackground.png";
import { NavLink } from "react-router";

function NavItem({ text, href = "/", isScribble = false }) {
  const isExternal = href.startsWith("http");

  const commonStyles = {
    "--scribble-url": isScribble ? `url(${scribbleBackground})` : "none",
  };

  const commonClassName = `navbarItem ${isScribble ? "is-scribble" : ""}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={commonClassName}
        style={commonStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{text}</span>
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${commonClassName} ${isActive ? "active" : ""}`
      }
      style={commonStyles}
    >
      <span>{text}</span>
    </NavLink>
  );
}

export default NavItem;
