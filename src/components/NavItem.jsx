import React from "react";
import navStyles from "./navBar.module.css";
import scribbleBackground from "../assets/scribbleBackground.png";
import { NavLink } from "react-router";

function NavItem({ text, href = "/", isScribble = false }) {
  const isExternal = href.startsWith("http");

  const commonStyles = {
    "--scribble-url": isScribble ? `url(${scribbleBackground})` : "none",
  };

  const commonClassName = `${navStyles.navbarItem} ${isScribble ? navStyles.isScribble : ""}`;

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
      viewTransition
      className={({ isActive }) =>
        `${commonClassName} ${isActive ? navStyles.active : ""}`
      }
      style={commonStyles}
    >
      <span>{text}</span>
    </NavLink>
  );
}

export default NavItem;
