import React from "react";
import styles from "./navItem.module.css";
import scribbleBackground from "../../../assets/scribbleBackground.png";
import { NavLink } from "react-router";

function NavItem({ text, href = "/", isScribble = false, onClick }) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${styles.navbarItem} ${isScribble ? styles.active : ""}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <span className={styles.baseText}>{text}</span>
        <span
          className={styles.scribbleBackground}
          style={{ backgroundImage: `url(${scribbleBackground})` }}
        >
          <span className={styles.activeText}>{text}</span>
        </span>
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${styles.navbarItem} ${isActive || isScribble ? styles.active : ""}`
      }
      onClick={onClick}
    >
      <span className={styles.baseText}>{text}</span>
      <span
        className={styles.scribbleBackground}
        style={{ backgroundImage: `url(${scribbleBackground})` }}
      >
        <span className={styles.activeText}>{text}</span>
      </span>
    </NavLink>
  );
}

export default NavItem;
