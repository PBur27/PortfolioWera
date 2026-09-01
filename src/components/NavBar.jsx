import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { useLocation } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../context/LanguageContext";
import styles from "./navBar.module.css";

function NavBar() {
  const language = useLanguage();

  const strings = {
    about: language === "pl" ? "o mnie" : "about me",
    projects: language === "pl" ? "projekty" : "projects",
    photography: language === "pl" ? "fotografia" : "photos",
    contact: language === "pl" ? "kontakt" : "contact",
  };

  const location = useLocation();
  console.log("Current path:", location.pathname);

  const handleNavItemClick = () => {
    document.documentElement.classList.remove("is-project-transition");
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoContainer}>
        <Logo size="60px" />
      </div>
      <div className={styles.navbarRow}>
        <NavItem
          text={strings.about}
          href="/about-me"
          isScribble={location.pathname === "/about-me"}
          onClick={handleNavItemClick}
        />
        <NavItem
          text={strings.projects}
          href="/projects"
          isScribble={location.pathname === "/projects"}
          onClick={handleNavItemClick}
        />
        <NavItem
          text={strings.photography}
          href="/photography"
          isScribble={location.pathname === "/photography"}
          onClick={handleNavItemClick}
        />
        <NavItem
          text={strings.contact}
          href="/contacts"
          isScribble={location.pathname === "/contacts"}
          onClick={handleNavItemClick}
        />
        <NavItem
          text={"instagram"}
          href="https://www.instagram.com/vee_graficzka/"
          isScribble={false}
        />
        <LanguageSwitch />
      </div>
    </div>
  );
}

export default NavBar;
